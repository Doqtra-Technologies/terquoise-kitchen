"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { Photo } from "@/lib/site";

export default function GalleryGrid({ photos }: { photos: Photo[] }) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: number) => setActive((i) => (i === null ? i : (i + dir + photos.length) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, step]);

  const current = active === null ? null : photos[active];

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {photos.map((p, i) => (
          <button
            key={p.src}
            type="button"
            onClick={() => setActive(i)}
            className="group relative mb-4 block w-full overflow-hidden rounded-2xl"
            aria-label={`Open image: ${p.alt}`}
          >
            <Image
              src={p.src}
              alt={p.alt}
              width={p.w}
              height={p.h}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="h-auto w-full transition duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-ink/0 transition group-hover:bg-ink/20" />
          </button>
        ))}
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4"
          onClick={close}
        >
          <Image
            src={current.src}
            alt={current.alt}
            width={current.w}
            height={current.h}
            sizes="90vw"
            className="max-h-[85vh] w-auto rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button type="button" onClick={close} className="absolute top-5 right-5 text-4xl text-white/80 hover:text-white" aria-label="Close">
            ×
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            className="absolute left-3 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-2xl text-white hover:bg-teal sm:left-6"
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            className="absolute right-3 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-2xl text-white hover:bg-teal sm:right-6"
            aria-label="Next image"
          >
            ›
          </button>
          <p className="absolute bottom-5 text-sm text-white/70">{current.alt}</p>
        </div>
      )}
    </>
  );
}
