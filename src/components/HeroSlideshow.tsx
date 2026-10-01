"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Photo } from "@/lib/site";

export default function HeroSlideshow({ slides, video }: { slides: Photo[]; video?: string | null }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (video) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, [slides.length, video]);

  if (video) {
    return (
      <video
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        src={video}
        poster={slides[0].src}
        autoPlay
        muted
        loop
        playsInline
      />
    );
  }

  return (
    <div className="absolute inset-0 -z-10">
      {slides.map((s, i) => (
        <div
          key={s.src}
          className={`absolute inset-0 overflow-hidden transition-opacity duration-[1500ms] ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <Image
            src={s.src}
            alt={s.alt}
            fill
            sizes="100vw"
            preload={i === 0}
            className={`object-cover ${i === index ? "animate-kenburns" : ""}`}
          />
        </div>
      ))}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            aria-label={`Show slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${i === index ? "w-10 bg-teal" : "w-4 bg-white/50 hover:bg-white"}`}
          />
        ))}
      </div>
    </div>
  );
}
