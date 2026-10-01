import Reveal from "./Reveal";
import { ArrowIcon } from "./ui";
import { site } from "@/lib/site";

const options = [
  {
    name: "Deliveroo",
    blurb: "Fast delivery across Stratford-upon-Avon, straight to your door.",
    href: site.ordering.deliveroo,
    cta: "Order on Deliveroo",
    accent: "bg-[#00ccbc]",
  },
  {
    name: "Uber Eats",
    blurb: "Your favourite dishes, tracked from our grill to your table.",
    href: site.ordering.uberEats,
    cta: "Order on Uber Eats",
    accent: "bg-[#06c167]",
  },
  {
    name: "Collection",
    blurb: `Call us on ${site.phone.display} to place your order, then pick it up from Wood Street.`,
    href: site.phone.href,
    cta: "Call to order",
    accent: "bg-bronze",
  },
];

export default function OrderOptions({ className = "" }: { className?: string }) {
  return (
    <div className={`grid gap-6 md:grid-cols-3 ${className}`}>
      {options.map((o, i) => {
        const external = o.href.startsWith("http");
        return (
          <Reveal key={o.name} delay={i * 120}>
            <a
              href={o.href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group flex h-full flex-col rounded-3xl bg-white p-8 shadow-[0_1px_0_rgba(15,42,51,0.06)] transition hover:-translate-y-1 hover:shadow-xl"
            >
              <span className={`h-2 w-14 rounded-full ${o.accent}`} />
              <h3 className="mt-8 font-display text-4xl uppercase">{o.name}</h3>
              <p className="mt-3 flex-1 text-ink/65">{o.blurb}</p>
              <span className="mt-8 inline-flex items-center justify-between border-t border-ink/10 pt-5 font-display tracking-[0.16em] uppercase">
                {o.cta}
                <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white transition group-hover:bg-teal">
                  <ArrowIcon />
                </span>
              </span>
            </a>
          </Reveal>
        );
      })}
    </div>
  );
}
