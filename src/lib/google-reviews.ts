import { site } from "@/lib/site";

// Google Places API (New). Needs GOOGLE_PLACES_API_KEY at runtime; GOOGLE_PLACE_ID is
// optional (looked up by name + address when missing, using the free IDs-only search).
const API = "https://places.googleapis.com/v1";
// Re-fetch from Google at most once an hour; pages are regenerated in the background.
const REVALIDATE_SECONDS = 3600;

export type GoogleReview = {
  id: string;
  author: string;
  authorUrl?: string;
  authorPhoto?: string;
  rating: number;
  text: string;
  when: string;
  url?: string;
};

export type GoogleReviews = {
  rating: number;
  total: number;
  url: string;
  reviews: GoogleReview[];
};

type PlaceReview = {
  name: string;
  rating?: number;
  relativePublishTimeDescription?: string;
  text?: { text?: string };
  originalText?: { text?: string };
  authorAttribution?: { displayName?: string; uri?: string; photoUri?: string };
  googleMapsUri?: string;
};

type PlaceDetails = {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  googleMapsLinks?: { reviewsUri?: string };
  reviews?: PlaceReview[];
};

async function findPlaceId(key: string): Promise<string | null> {
  const res = await fetch(`${API}/places:searchText`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Goog-Api-Key": key, "X-Goog-FieldMask": "places.id" },
    body: JSON.stringify({ textQuery: `${site.name}, ${site.address.street}, ${site.address.town}` }),
    next: { revalidate: 60 * 60 * 24 * 30 },
  });
  if (!res.ok) return null;
  const data = (await res.json()) as { places?: { id: string }[] };
  return data.places?.[0]?.id ?? null;
}

export async function getGoogleReviews(): Promise<GoogleReviews | null> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  if (!key) return null;

  try {
    const placeId = process.env.GOOGLE_PLACE_ID || (await findPlaceId(key));
    if (!placeId) return null;

    const res = await fetch(`${API}/places/${placeId}`, {
      headers: {
        "X-Goog-Api-Key": key,
        "X-Goog-FieldMask": "rating,userRatingCount,googleMapsUri,googleMapsLinks.reviewsUri,reviews",
      },
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) {
      console.error(`Google reviews: ${res.status} ${await res.text()}`);
      return null;
    }
    const place = (await res.json()) as PlaceDetails;
    if (!place.rating || !place.reviews?.length) return null;

    return {
      rating: place.rating,
      total: place.userRatingCount ?? place.reviews.length,
      url: place.googleMapsLinks?.reviewsUri ?? place.googleMapsUri ?? "",
      reviews: place.reviews
        .map((r) => ({
          id: r.name,
          author: r.authorAttribution?.displayName ?? "Google user",
          authorUrl: r.authorAttribution?.uri,
          authorPhoto: r.authorAttribution?.photoUri,
          rating: r.rating ?? 0,
          text: (r.originalText?.text || r.text?.text || "").trim(),
          when: r.relativePublishTimeDescription ?? "",
          url: r.googleMapsUri,
        }))
        .filter((r) => r.text),
    };
  } catch (err) {
    console.error("Google reviews:", err);
    return null;
  }
}
