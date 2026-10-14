import Reveal from "@/components/Reveal";
import { Button, Heading } from "@/components/ui";
import { getGoogleReviews } from "@/lib/google-reviews";
import { mapsLinkUrl, site } from "@/lib/site";

function Stars({ rating, className = "" }: { rating: number; className?: string }) {
  const full = Math.round(rating);
  return (
    <span className={`tracking-[0.15em] ${className}`} role="img" aria-label={`${rating} out of 5 stars`}>
      <span className="text-bronze">{"★".repeat(full)}</span>
      <span className="text-white/25">{"★".repeat(5 - full)}</span>
    </span>
  );
}

export default async function GoogleReviews() {
  const data = await getGoogleReviews();

  return (
    <section className="tile-pattern py-24 text-white lg:py-28">
      <Reveal className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        {data ? (
          <p className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <span className="font-display text-5xl">{data.rating.toFixed(1)}</span>
            <Stars rating={data.rating} className="text-3xl" />
          </p>
        ) : (
          <p className="text-3xl tracking-[0.3em] text-bronze" aria-hidden="true">
            ★★★★★
          </p>
        )}
        <Heading light className="mt-6">
          Loved by our guests
        </Heading>
        <p className="mt-6 text-lg text-white/75">
          {data
            ? `Based on ${data.total.toLocaleString("en-GB")} reviews on Google. Dined with us recently? We would love to hear about it.`
            : "Dined with us recently? We would love to hear about it. Read what others are saying or share your own experience on Google."}
        </p>
      </Reveal>

      {data && (
        <div className="mx-auto mt-14 max-w-7xl px-4 sm:px-6 lg:px-8">
          <ul className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0 lg:grid lg:grid-cols-3 lg:overflow-visible">
            {data.reviews.map((r) => (
              <li
                key={r.id}
                className="flex w-[85%] shrink-0 snap-center flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:w-[45%] lg:w-auto"
              >
                <Stars rating={r.rating} className="text-lg" />
                <p className="mt-4 line-clamp-6 flex-1 leading-relaxed text-white/85">{r.text}</p>
                <div className="mt-6 flex items-center gap-3">
                  {r.authorPhoto && (
                    // Google-hosted avatars; plain img avoids proxying them through the image optimizer.
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={r.authorPhoto} alt="" width={40} height={40} referrerPolicy="no-referrer" loading="lazy" className="h-10 w-10 rounded-full" />
                  )}
                  <div className="text-sm">
                    {r.authorUrl ? (
                      <a href={r.authorUrl} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-bronze">
                        {r.author}
                      </a>
                    ) : (
                      <span className="font-medium">{r.author}</span>
                    )}
                    <p className="text-white/50">{r.when}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-center text-xs text-white/50">Reviews from Google</p>
        </div>
      )}

      <div className="mt-10 flex flex-wrap justify-center gap-4 px-4">
        <Button href={data?.url || mapsLinkUrl}>Read all Google reviews</Button>
        <Button href={site.reviewUrl} variant="light">
          Leave a review
        </Button>
      </div>
    </section>
  );
}
