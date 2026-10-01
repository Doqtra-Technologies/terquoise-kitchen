import Image from "next/image";
import Link from "next/link";
import HeroSlideshow from "@/components/HeroSlideshow";
import Reveal from "@/components/Reveal";
import OrderOptions from "@/components/OrderOptions";
import VisitUs from "@/components/VisitUs";
import { ArrowIcon, Button, Eyebrow, FacebookIcon, Heading, InstagramIcon, Marquee } from "@/components/ui";
import { setMenus } from "@/lib/menu";
import { mapsLinkUrl, photos, site } from "@/lib/site";

const signatures = [
  { photo: photos.mixedShish, name: "Mixed Shish", desc: "Chicken and Adana kebab grilled over charcoal." },
  { photo: photos.seaBass, name: "Sea Bass Fillet", desc: "Pan fried, with chunky chips and side salad." },
  { photo: photos.lamb, name: "Mixed Grill", desc: "Lamb, chicken and Adana straight off the coals." },
  { photo: photos.topkapi, name: "Chicken Topkapi", desc: "Stuffed with rice, pine nuts and currants." },
];

const instagramGrid = [
  photos.cocktailTray,
  photos.kavurma,
  photos.interiorBooth,
  photos.breadMeze,
  photos.casserole,
  photos.cocktail,
];

export default function Home() {
  return (
    <>
      {/* 1. Banner */}
      <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-ink">
        <HeroSlideshow
          slides={[photos.tableSpread, photos.mixedGrill, photos.interiorBlue, photos.mezeSpread]}
          video={site.heroVideo}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/70 via-ink/45 to-ink/80" />
        <div className="mx-auto w-full max-w-7xl px-4 pt-28 sm:px-6 lg:px-8">
          <p className="font-serif text-2xl text-teal italic sm:text-3xl">Welcome to Turquoise Kitchen</p>
          <h1 className="mt-4 max-w-4xl font-display text-6xl leading-[0.95] font-semibold text-white uppercase sm:text-7xl lg:text-[7.5rem]">
            Fire. Flavour. <span className="text-teal">Together.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            {site.tagline} - charcoal-grilled favourites, colourful mezes and house specialities on Wood Street,
            Stratford-upon-Avon.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/menu">View Menu</Button>
            <Button href="/order" variant="light">
              Order Online
            </Button>
          </div>
        </div>
      </section>

      <div className="bg-teal py-4 text-white">
        <Marquee
          items={["Authentic Turkish", "Mediterranean", "Charcoal grilled", "Fresh mezes", "Made to share"]}
          className="text-xl tracking-[0.12em]"
        />
      </div>

      {/* Our story */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-32">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[12rem] rounded-b-2xl">
            <Image src={photos.interiorWarm.src} alt={photos.interiorWarm.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
          </div>
          <div className="absolute -right-2 -bottom-8 hidden w-56 overflow-hidden rounded-2xl border-8 border-cream shadow-xl sm:block lg:-right-10">
            <Image src={photos.storefront.src} alt={photos.storefront.alt} width={photos.storefront.w} height={photos.storefront.h} sizes="224px" />
          </div>
        </Reveal>
        <Reveal delay={150}>
          <Eyebrow>Our story</Eyebrow>
          <Heading className="mt-3">
            The Mediterranean, <br />
            <span className="text-teal">in the heart of Stratford</span>
          </Heading>
          <p className="mt-8 text-lg leading-relaxed text-ink/75">
            At Turquoise Kitchen, we bring the vibrant flavours of the Mediterranean to the heart of
            Stratford-upon-Avon. Our menu combines traditional recipes with fresh ingredients, from charcoal-grilled
            favourites and colourful mezes to carefully prepared house specialities.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink/75">
            Every dish is made to be shared, enjoyed and remembered.
          </p>
          <Link href="/about" className="group mt-8 inline-flex items-center gap-3 font-display tracking-[0.16em] text-ink uppercase">
            Read our story
            <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white transition group-hover:translate-x-1 group-hover:bg-teal">
              <ArrowIcon />
            </span>
          </Link>
        </Reveal>
      </section>

      {/* Signature dishes */}
      <section className="bg-sand py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>From the charcoal grill</Eyebrow>
              <Heading className="mt-3">House favourites</Heading>
            </div>
            <Button href="/menu" variant="outline">
              Full menu
            </Button>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {signatures.map((s, i) => (
              <Reveal key={s.name} delay={i * 100}>
                <article className="group">
                  <div className="relative aspect-square overflow-hidden rounded-2xl bg-white">
                    <Image
                      src={s.photo.src}
                      alt={s.photo.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-5 font-display text-2xl uppercase">{s.name}</h3>
                  <p className="mt-1 text-ink/65">{s.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Set menus */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <Reveal className="text-center">
          <Eyebrow>Set menus</Eyebrow>
          <Heading className="mt-3">Lunch &amp; dinner</Heading>
        </Reveal>
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {setMenus.map((m, i) => (
            <Reveal key={m.slug} delay={i * 150}>
              <Link href={`/menu#${m.slug}`} className="group relative isolate flex aspect-[4/3] items-end overflow-hidden rounded-3xl bg-ink p-8 sm:p-10">
                <Image
                  src={i === 0 ? photos.cutletsWarm.src : photos.seaBassWarm.src}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="-z-10 object-cover opacity-70 transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                <div className="flex w-full flex-wrap items-end justify-between gap-6 text-white">
                  <div>
                    <p className="font-serif text-xl text-teal italic">{m.served}</p>
                    <h3 className="mt-1 font-display text-4xl uppercase sm:text-5xl">{m.name}</h3>
                    <p className="mt-1 font-display tracking-[0.16em] text-white/80 uppercase">{m.courses}</p>
                  </div>
                  <p className="rounded-full border border-white/40 px-6 py-3 font-display text-3xl">{m.price}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Statement */}
      <section className="relative isolate overflow-hidden bg-ink py-32 lg:py-44">
        <Image src={photos.interiorBlue.src} alt="" fill sizes="100vw" className="-z-10 object-cover opacity-35" />
        <div className="absolute inset-0 -z-10 bg-ink/55" />
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <Reveal>
            <p className="font-serif text-2xl text-teal italic">Warm hospitality, generous flavours</p>
            <p className="mt-6 font-display text-5xl leading-[1] font-semibold text-white uppercase sm:text-6xl lg:text-8xl">
              Made to share. <br /> Made to remember.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href={site.phone.href}>Book a table</Button>
              <Button href="/gallery" variant="light">
                See the gallery
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Order online */}
      <section className="bg-sand py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <Eyebrow>Hungry at home?</Eyebrow>
            <Heading className="mt-3">Order online</Heading>
            <p className="mt-6 text-lg text-ink/70">
              Enjoy Turquoise Kitchen wherever you are. Get delivery through our partners, or call ahead and collect
              from the restaurant.
            </p>
          </Reveal>
          <OrderOptions className="mt-14" />
        </div>
      </section>

      {/* Follow us */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow>Follow us</Eyebrow>
            <Heading className="mt-3">@turquoisekitchenn</Heading>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={site.socials.instagram} variant="dark">
              <InstagramIcon /> Instagram
            </Button>
            <Button href={site.socials.facebook} variant="outline">
              <FacebookIcon /> Facebook
            </Button>
          </div>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
          {instagramGrid.map((p, i) => (
            <Reveal key={p.src} delay={i * 70}>
              <a
                href={site.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-xl"
              >
                <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1024px) 16vw, (min-width: 768px) 33vw, 50vw" className="object-cover transition duration-700 group-hover:scale-110" />
                <span className="absolute inset-0 grid place-items-center bg-teal/0 text-white opacity-0 transition group-hover:bg-teal/60 group-hover:opacity-100">
                  <InstagramIcon className="h-8 w-8" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Google reviews */}
      <section className="tile-pattern py-24 text-white lg:py-28">
        <Reveal className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-3xl tracking-[0.3em] text-bronze" aria-hidden="true">
            ★★★★★
          </p>
          <Heading light className="mt-6">
            Loved by our guests
          </Heading>
          <p className="mt-6 text-lg text-white/75">
            Dined with us recently? We would love to hear about it. Read what others are saying or share your own
            experience on Google.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href={mapsLinkUrl}>Read Google reviews</Button>
            <Button href={mapsLinkUrl} variant="light">
              Leave a review
            </Button>
          </div>
        </Reveal>
      </section>

      {/* Map */}
      <VisitUs />
    </>
  );
}
