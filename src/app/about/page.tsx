import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { Button, Eyebrow, Heading, PageHero } from "@/components/ui";
import { photos } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Turquoise Kitchen brings the vibrant flavours of the Mediterranean to the heart of Stratford-upon-Avon.",
};

const pillars = [
  {
    title: "Charcoal grilled",
    text: "Shish, Adana, kofte and mixed grills cooked over real charcoal for that unmistakable smoky edge.",
    photo: photos.mixedGrill,
  },
  {
    title: "Colourful mezes",
    text: "Houmous, babaganush, cacik, sigara borek and more - small plates designed for the middle of the table.",
    photo: photos.starters,
  },
  {
    title: "House specialities",
    text: "Chicken Topkapi, Imam Bayildi, Lamb Beyti and casseroles prepared with care, the traditional way.",
    photo: photos.casserole,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="Who we are" title="About Us" image={photos.interiorBooth.src} />

      <section className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-24 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-32">
        <Reveal className="lg:col-span-7">
          <Eyebrow>Turquoise Kitchen</Eyebrow>
          <Heading className="mt-3">
            Traditional recipes. <span className="text-teal">Fresh ingredients.</span>
          </Heading>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/75">
            <p>
              At Turquoise Kitchen, we bring the vibrant flavours of the Mediterranean to the heart of
              Stratford-upon-Avon.
            </p>
            <p>
              Our menu combines traditional recipes with fresh ingredients, from charcoal-grilled favourites and
              colourful mezes to carefully prepared house specialities. Every dish is made to be shared, enjoyed and
              remembered.
            </p>
            <p>Join us for warm hospitality, generous flavours and a dining experience that brings people together.</p>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/menu">Explore the menu</Button>
            <Button href="/contact" variant="outline">
              Visit us
            </Button>
          </div>
        </Reveal>
        <Reveal delay={150} className="lg:col-span-5">
          <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem]">
            <Image src={photos.storefront.src} alt={photos.storefront.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
          </div>
        </Reveal>
      </section>

      <section className="tile-pattern py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <Eyebrow light>What we do</Eyebrow>
            <Heading light className="mt-3">
              A table worth gathering around
            </Heading>
          </Reveal>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 120}>
                <article className="overflow-hidden rounded-3xl bg-cream">
                  <div className="relative aspect-[4/3]">
                    <Image src={p.photo.src} alt={p.photo.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                  </div>
                  <div className="p-8">
                    <h3 className="font-display text-2xl uppercase">{p.title}</h3>
                    <p className="mt-3 text-ink/70">{p.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:py-32">
        <Reveal>
          <p className="font-serif text-3xl leading-snug text-ink italic sm:text-4xl">
            &ldquo;Every dish is made to be shared, enjoyed and remembered.&rdquo;
          </p>
          <p className="mt-6 font-display tracking-[0.2em] text-teal uppercase">The Turquoise Kitchen team</p>
        </Reveal>
      </section>
    </>
  );
}
