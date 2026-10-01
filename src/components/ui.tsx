import Link from "next/link";
import type { ReactNode } from "react";

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`font-serif text-xl italic ${light ? "text-teal" : "text-bronze"}`}>{children}</p>
  );
}

export function Heading({
  children,
  as: Tag = "h2",
  light = false,
  className = "",
}: {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  light?: boolean;
  className?: string;
}) {
  return (
    <Tag
      className={`font-display text-4xl leading-[1.05] font-semibold uppercase sm:text-5xl lg:text-6xl ${
        light ? "text-white" : "text-ink"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}

const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-display text-sm tracking-[0.16em] uppercase transition";
const btnVariants = {
  primary: "bg-teal text-white hover:bg-teal-deep",
  dark: "bg-ink text-white hover:bg-navy",
  outline: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-white",
  light: "border border-white/40 text-white hover:bg-white hover:text-ink",
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof btnVariants;
  external?: boolean;
  className?: string;
}) {
  const cls = `${btnBase} ${btnVariants[variant]} ${className}`;
  if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:") || href.endsWith(".pdf")) {
    const newTab = href.startsWith("http") || href.endsWith(".pdf");
    return (
      <a href={href} className={cls} {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function PageHero({ eyebrow, title, image }: { eyebrow: string; title: string; image: string }) {
  return (
    <section className="relative isolate flex min-h-[52vh] items-end overflow-hidden bg-ink pt-28">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt="" className="absolute inset-0 -z-10 h-full w-full animate-kenburns object-cover opacity-55" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
      <div className="mx-auto w-full max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <Eyebrow light>{eyebrow}</Eyebrow>
        <Heading as="h1" light className="mt-2 lg:text-7xl">
          {title}
        </Heading>
      </div>
    </section>
  );
}

export function Marquee({
  items,
  className = "",
  monoMark = false,
}: {
  items: string[];
  className?: string;
  /** Render the flame separator in solid white (for coloured backgrounds). */
  monoMark?: boolean;
}) {
  const row = [...items, ...items];
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`} aria-hidden="true">
      <div className="inline-flex animate-marquee">
        {[0, 1].map((k) => (
          <span key={k} className="inline-flex">
            {row.map((t, i) => (
              <span key={i} className="mx-6 inline-flex items-center gap-12 font-display uppercase">
                {t}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/flame.png"
                  alt=""
                  className={`h-[0.9em] w-auto ${monoMark ? "brightness-0 invert" : ""}`}
                />
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}

export function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21h3.1z" />
    </svg>
  );
}

export function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
