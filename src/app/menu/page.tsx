import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { Button, Eyebrow, PageHero } from "@/components/ui";
import { allergyNote, setMenus, tagLabels, type Dish, type Tag } from "@/lib/menu";
import { photos } from "@/lib/site";

export const metadata: Metadata = {
  title: "Menu",
  description: "Lunch and dinner set menus at Turquoise Kitchen: mezes, charcoal grills, house specialities and desserts.",
};

const tagStyle: Record<Tag, { short: string; cls: string }> = {
  v: { short: "V", cls: "bg-emerald-600/10 text-emerald-700" },
  vg: { short: "VG", cls: "bg-emerald-600/15 text-emerald-800" },
  spicy: { short: "Spicy", cls: "bg-red-600/10 text-red-700" },
  gluten: { short: "Gluten", cls: "bg-amber-600/15 text-amber-800" },
  nuts: { short: "Nuts", cls: "bg-bronze/15 text-bronze" },
};

function TagBadge({ tag }: { tag: Tag }) {
  const t = tagStyle[tag];
  return (
    <span title={tagLabels[tag]} className={`rounded-full px-2 py-0.5 font-sans text-[0.7rem] font-medium tracking-wide ${t.cls}`}>
      {t.short}
    </span>
  );
}

function DishRow({ dish }: { dish: Dish }) {
  return (
    <li className="break-inside-avoid border-b border-dashed border-ink/15 py-4">
      <div className="flex items-baseline justify-between gap-4">
        <h4 className="flex flex-wrap items-center gap-2 font-display text-lg tracking-wide uppercase">
          {dish.name}
          {dish.note && <span className="font-serif text-base text-ink/55 normal-case italic">({dish.note})</span>}
          {dish.tags?.map((t) => <TagBadge key={t} tag={t} />)}
        </h4>
        {dish.price && <span className="font-display text-lg text-teal-deep">{dish.price}</span>}
      </div>
      {dish.desc && <p className="mt-1 text-[0.95rem] leading-relaxed text-ink/65">{dish.desc}</p>}
    </li>
  );
}

export default function MenuPage() {
  return (
    <>
      <PageHero eyebrow="Eat with us" title="Our Menu" image={photos.tableSpread.src} />

      <nav className="sticky top-28 z-30 border-b border-ink/10 bg-cream/95 backdrop-blur" aria-label="Menus">
        <div className="mx-auto flex max-w-7xl gap-8 overflow-x-auto px-4 sm:px-6 lg:px-8">
          {setMenus.map((m) => (
            <a key={m.slug} href={`#${m.slug}`} className="shrink-0 py-4 font-display tracking-[0.16em] uppercase hover:text-teal">
              {m.name} <span className="text-teal">{m.price}</span>
            </a>
          ))}
        </div>
      </nav>

      {setMenus.map((menu, mi) => (
        <section key={menu.slug} id={menu.slug} className={`scroll-mt-44 py-20 lg:py-28 ${mi % 2 ? "bg-sand" : ""}`}>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Reveal className="flex flex-col items-start justify-between gap-8 border-b-2 border-ink pb-10 md:flex-row md:items-end">
              <div>
                <Eyebrow>{menu.served}</Eyebrow>
                <h2 className="mt-2 font-display text-5xl font-semibold uppercase sm:text-6xl">{menu.name}</h2>
                <p className="mt-2 text-ink/60">Except special calendar dates</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-display text-2xl tracking-wide uppercase">{menu.courses}</span>
                <span className="rounded-2xl border-2 border-bronze px-5 py-2 font-display text-4xl text-ink">{menu.price}</span>
              </div>
            </Reveal>

            {menu.sections.map((section) => (
              <Reveal key={section.title} className="mt-14">
                <div className="flex items-center gap-4">
                  <h3 className="font-display text-4xl font-semibold text-navy uppercase">{section.title}</h3>
                  {section.subtitle && <span className="font-serif text-lg text-bronze italic">{section.subtitle}</span>}
                  <span className="h-px flex-1 bg-bronze/40" />
                </div>
                <ul className="mt-4 gap-x-14 md:columns-2">
                  {section.items.map((dish) => (
                    <DishRow key={dish.name} dish={dish} />
                  ))}
                </ul>
              </Reveal>
            ))}

            {menu.extras && (
              <Reveal className="mt-10 rounded-2xl border border-ink/10 bg-white/60 p-6">
                <div className="flex items-baseline justify-between">
                  <h4 className="font-display text-lg tracking-wide uppercase">{menu.extras.title}</h4>
                  <span className="font-display text-lg text-teal-deep">{menu.extras.price} each</span>
                </div>
                <p className="mt-2 text-ink/65">{menu.extras.items.join(" · ")}</p>
              </Reveal>
            )}

            <Reveal className="mt-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <p className="max-w-2xl text-sm text-ink/55">{menu.serviceNote}</p>
              <Button href={menu.pdf} variant="outline" className="shrink-0">
                Download PDF
              </Button>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="bg-ink py-14 text-white/70">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {(Object.keys(tagLabels) as Tag[]).map((t) => (
              <span key={t} className="flex items-center gap-2 text-sm">
                <TagBadge tag={t} /> {tagLabels[t]}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed">{allergyNote}</p>
        </div>
      </section>
    </>
  );
}
