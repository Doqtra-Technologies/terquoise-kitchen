"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowIcon } from "@/components/ui";

type Review = { author: string; text: string };

function Stars() {
  return (
    <span className="text-lg tracking-[0.15em] text-bronze" role="img" aria-label="5 out of 5 stars">
      ★★★★★
    </span>
  );
}

function ArrowButton({ dir, disabled, onClick }: { dir: "prev" | "next"; disabled: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === "prev" ? "Previous reviews" : "Next reviews"}
      className="flex h-10 w-10 shrink-0 items-center sm:h-12 sm:w-12 justify-center rounded-full border border-white/30 text-white transition hover:border-teal hover:bg-teal disabled:pointer-events-none disabled:opacity-30"
    >
      <ArrowIcon className={`h-5 w-5 ${dir === "prev" ? "rotate-180" : ""}`} />
    </button>
  );
}

// Long reviews are clamped to 4 lines so cards stay compact; "Read more" expands one in place.
function ReviewCard({ review }: { review: Review }) {
  const text = useRef<HTMLParagraphElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [clamped, setClamped] = useState(false);

  useEffect(() => {
    const check = () => {
      const el = text.current;
      if (el && !expanded) setClamped(el.scrollHeight > el.clientHeight + 1);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [expanded]);

  return (
    <li className="flex w-full shrink-0 snap-start flex-col rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]">
      <Stars />
      <p ref={text} className={`mt-3 text-[0.95rem] leading-relaxed text-white/85 ${expanded ? "" : "line-clamp-4"}`}>
        {review.text}
      </p>
      {(clamped || expanded) && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="mt-1 self-start text-sm text-bronze hover:text-white"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
      <div className="mt-auto flex items-center gap-3 pt-4">
        <span
          aria-hidden="true"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-teal font-display uppercase"
        >
          {review.author.charAt(0)}
        </span>
        <div className="text-sm leading-tight">
          <p className="font-medium">{review.author}</p>
          <p className="text-white/50">Google review</p>
        </div>
      </div>
    </li>
  );
}

export default function ReviewCarousel({ reviews }: { reviews: Review[] }) {
  const track = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  // Move by one card (card width + gap).
  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;
    el.scrollBy({ left: dir * (card.offsetWidth + 20), behavior: "smooth" });
  };

  return (
    <div className="flex items-center gap-3 sm:gap-5">
      <ArrowButton dir="prev" disabled={atStart} onClick={() => scroll(-1)} />
      <ul
        ref={track}
        onScroll={update}
        aria-label="Guest reviews"
        className="flex min-w-0 flex-1 items-start snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {reviews.map((r) => (
          <ReviewCard key={r.author} review={r} />
        ))}
      </ul>
      <ArrowButton dir="next" disabled={atEnd} onClick={() => scroll(1)} />
    </div>
  );
}
