"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { site } from "@/lib/site";

// Opens the event poster on every full page load (including reloads); the poster links to the booking page.
// Lives in the root layout, so it doesn't reappear on in-app navigation between pages.
export default function PromoPopup() {
  const dialog = useRef<HTMLDialogElement>(null);
  const promo = site.promo;

  useEffect(() => {
    if (!promo || Date.now() > Date.parse(promo.until)) return;
    const t = setTimeout(() => {
      const el = dialog.current;
      if (el && !el.open) el.showModal();
    }, 800);
    return () => clearTimeout(t);
  }, [promo]);

  if (!promo) return null;
  const close = () => dialog.current?.close();

  return (
    <dialog
      ref={dialog}
      aria-label="Upcoming event"
      onClick={(e) => e.target === e.currentTarget && close()}
      className="m-auto max-h-[90dvh] w-[min(90vw,calc(90dvh*0.8),32rem)] overflow-visible bg-transparent p-0 backdrop:bg-ink/80 backdrop:backdrop-blur-sm open:animate-[fade-in_0.3s_ease-out]"
    >
      <div className="relative">
        <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" onClick={close}>
          <Image
            src={promo.src}
            alt={promo.alt}
            width={promo.w}
            height={promo.h}
            sizes="(max-width: 640px) 90vw, 32rem"
            className="h-auto w-full rounded-lg shadow-2xl"
          />
        </a>
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute -top-3 -right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl leading-none text-ink shadow-lg transition hover:bg-teal hover:text-white"
        >
          ×
        </button>
      </div>
    </dialog>
  );
}
