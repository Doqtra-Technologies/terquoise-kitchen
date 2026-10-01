import Reveal from "./Reveal";
import { Button, Eyebrow, Heading } from "./ui";
import { fullAddress, mapsEmbedUrl, mapsLinkUrl, site } from "@/lib/site";

export default function VisitUs() {
  return (
    <section className="grid bg-cream lg:grid-cols-2">
      <div className="px-4 py-24 sm:px-6 lg:px-16 lg:py-28 xl:pl-[max(2rem,calc((100vw-80rem)/2+2rem))]">
        <Reveal>
          <Eyebrow>Visit us</Eyebrow>
          <Heading className="mt-3">Find your table</Heading>
          <dl className="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
              <dt className="font-display text-sm tracking-[0.2em] text-teal uppercase">Address</dt>
              <dd className="mt-2 text-lg">{fullAddress}</dd>
            </div>
            <div>
              <dt className="font-display text-sm tracking-[0.2em] text-teal uppercase">Opening hours</dt>
              {site.hours.map((h) => (
                <dd key={h.days} className="mt-2 text-lg">
                  {h.days}: <span className="whitespace-nowrap">{h.time}</span>
                </dd>
              ))}
            </div>
            <div>
              <dt className="font-display text-sm tracking-[0.2em] text-teal uppercase">Phone</dt>
              <dd className="mt-2 text-lg">
                <a href={site.phone.href} className="hover:text-teal">
                  {site.phone.display}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-display text-sm tracking-[0.2em] text-teal uppercase">Email</dt>
              <dd className="mt-2 text-lg break-all">
                <a href={`mailto:${site.email}`} className="hover:text-teal">
                  {site.email}
                </a>
              </dd>
            </div>
          </dl>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={mapsLinkUrl}>Get directions</Button>
            <Button href={site.phone.href} variant="outline">
              Call to book
            </Button>
          </div>
        </Reveal>
      </div>
      <div className="min-h-[420px]">
        <iframe
          title={`Map showing ${site.name}`}
          src={mapsEmbedUrl}
          className="h-full min-h-[420px] w-full border-0 grayscale-[30%]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
