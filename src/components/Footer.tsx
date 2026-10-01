import Link from "next/link";
import Logo from "./Logo";
import { FacebookIcon, InstagramIcon, Marquee } from "./ui";
import { fullAddress, mapsLinkUrl, nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <Marquee
        items={["Charcoal grilled", "Colourful mezes", "Made to share", "Stratford-upon-Avon"]}
        className="border-b border-white/10 py-6 text-3xl text-white/90 sm:text-4xl"
      />

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Logo light />
          <p className="mt-6 max-w-xs text-white/65">
            The vibrant flavours of the Mediterranean in the heart of Stratford-upon-Avon.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={site.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/20 transition hover:border-teal hover:bg-teal"
            >
              <InstagramIcon />
            </a>
            <a
              href={site.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/20 transition hover:border-teal hover:bg-teal"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm tracking-[0.2em] text-teal uppercase">Opening Hours</h3>
          <ul className="mt-5 space-y-3">
            {site.hours.map((h) => (
              <li key={h.days}>
                <p className="text-white/60">{h.days}</p>
                <p className="font-display text-lg tracking-wide">{h.time}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm tracking-[0.2em] text-teal uppercase">Quick Links</h3>
          <ul className="mt-5 space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/75 transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm tracking-[0.2em] text-teal uppercase">Find Us</h3>
          <address className="mt-5 space-y-3 text-white/75 not-italic">
            <a href={mapsLinkUrl} target="_blank" rel="noopener noreferrer" className="block hover:text-white">
              {fullAddress}
            </a>
            <a href={site.phone.href} className="block hover:text-white">
              {site.phone.display}
            </a>
            <a href={`mailto:${site.email}`} className="block break-all hover:text-white">
              {site.email}
            </a>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-sm text-white/45 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
