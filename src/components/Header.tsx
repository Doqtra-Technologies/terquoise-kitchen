"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { nav, site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const overHero = pathname === "/" && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="bg-ink text-center font-display text-[0.7rem] tracking-[0.2em] text-white/90 uppercase">
        <p className="px-4 py-2">
          Lunch · 2 courses £17.50 <span className="mx-2 text-teal">✦</span> Dinner · 3 courses £29.50
        </p>
      </div>
      <div
        className={`transition-colors duration-300 ${
          overHero ? "bg-transparent" : "bg-cream/95 shadow-[0_1px_0_rgba(15,42,51,0.08)] backdrop-blur"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" aria-label={`${site.name} home`} onClick={() => setOpen(false)}>
            <Logo light={overHero} />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-display text-sm tracking-[0.16em] uppercase transition-colors hover:text-teal ${
                  pathname === item.href ? "text-teal" : overHero ? "text-white" : "text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/order"
              className="rounded-full bg-teal px-6 py-3 font-display text-sm tracking-[0.16em] text-white uppercase transition hover:bg-teal-deep"
            >
              Order Now
            </Link>
          </nav>

          <button
            type="button"
            className={`relative h-10 w-10 lg:hidden ${overHero ? "text-white" : "text-ink"}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span className={`absolute left-2 h-0.5 w-6 bg-current transition ${open ? "top-5 rotate-45" : "top-3"}`} />
            <span className={`absolute top-5 left-2 h-0.5 w-6 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-2 h-0.5 w-6 bg-current transition ${open ? "top-5 -rotate-45" : "top-7"}`} />
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="h-[calc(100dvh-7rem)] overflow-y-auto bg-cream px-6 pt-6 pb-10 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="space-y-1">
            {[{ href: "/", label: "Home" }, ...nav].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block border-b border-ink/10 py-4 font-display text-3xl uppercase ${
                    pathname === item.href ? "text-teal" : "text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/order"
            onClick={() => setOpen(false)}
            className="mt-8 block rounded-full bg-teal py-4 text-center font-display tracking-[0.16em] text-white uppercase"
          >
            Order Now
          </Link>
          <a href={site.phone.href} className="mt-4 block text-center text-ink/70">
            Call {site.phone.display}
          </a>
        </nav>
      )}
    </header>
  );
}
