import Reveal from "@/components/Reveal";
import { Button, Heading } from "@/components/ui";
import { googleRating, reviews } from "@/lib/reviews";
import { site } from "@/lib/site";

function Stars({ rating, className = "" }: { rating: number; className?: string }) {
  const full = Math.round(rating);
  return (
    <span className={`tracking-[0.15em] ${className}`} role="img" aria-label={`${rating} out of 5 stars`}>
      <span className="text-bronze">{"★".repeat(full)}</span>
      <span className="text-white/25">{"★".repeat(5 - full)}</span>
    </span>
  );
}

export default function GoogleReviews() {
  return (
    <section className="tile-pattern py-24 text-white lg:py-28">
      <Reveal className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          <span className="font-display text-5xl">{googleRating.rating.toFixed(1)}</span>
          <Stars rating={googleRating.rating} className="text-3xl" />
        </p>
        <Heading light className="mt-6">
          Loved by our guests
        </Heading>
        <p className="mt-6 text-lg text-white/75">
          Rated {googleRating.rating} from {googleRating.totalLabel} reviews on Google. Dined with us recently? We would
          love to hear about it.
        </p>
      </Reveal>

      <div className="mx-auto mt-14 max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0 lg:grid lg:grid-cols-3 lg:overflow-visible">
          {reviews.map((r) => (
            <li
              key={r.author}
              className="flex w-[85%] shrink-0 snap-center flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:w-[45%] lg:w-auto"
            >
              <Stars rating={5} className="text-lg" />
              <p className="mt-4 line-clamp-6 flex-1 leading-relaxed text-white/85">{r.text}</p>
              <div className="mt-6 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-teal font-display text-lg uppercase"
                >
                  {r.author.charAt(0)}
                </span>
                <div className="text-sm">
                  <p className="font-medium">{r.author}</p>
                  <p className="text-white/50">Google review</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-4 px-4">
        <Button href={googleRating.reviewsUrl}>Read all Google reviews</Button>
        <Button href={site.reviewUrl} variant="light">
          Leave a review
        </Button>
      </div>
    </section>
  );
}
