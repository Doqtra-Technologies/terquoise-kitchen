import Link from "next/link";
import Reveal from "./Reveal";
import { ArrowIcon } from "./ui";
import { site } from "@/lib/site";

export default function OrderOptions({ className = "" }: { className?: string }) {
  return (
    <div className={`grid gap-6 md:grid-cols-2 lg:gap-8 ${className}`}>
      {/* Deliveroo */}
      <Reveal delay={0}>
        <a
          href={site.ordering.deliveroo}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-full flex-col justify-between rounded-3xl bg-white p-8 shadow-[0_1px_0_rgba(15,42,51,0.06)] transition hover:-translate-y-1 hover:shadow-xl"
        >
          <div>
            <span className="h-2 w-14 rounded-full bg-[#00ccbc] block" />
            <h3 className="mt-8 font-display text-4xl uppercase">Deliveroo</h3>
            <p className="mt-3 text-ink/65">
              Fast delivery across Stratford-upon-Avon, straight to your door.
            </p>
          </div>
          <span className="mt-8 inline-flex items-center justify-between border-t border-ink/10 pt-5 font-display tracking-[0.16em] uppercase">
            Order on Deliveroo
            <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white transition group-hover:bg-teal">
              <ArrowIcon />
            </span>
          </span>
        </a>
      </Reveal>

      {/* Collection */}
      <Reveal delay={120}>
        <div className="flex h-full flex-col justify-between rounded-3xl bg-white p-8 shadow-[0_1px_0_rgba(15,42,51,0.06)] transition hover:-translate-y-1 hover:shadow-xl">
          <div>
            <span className="h-2 w-14 rounded-full bg-bronze block" />
            <h3 className="mt-8 font-display text-4xl uppercase">Collection</h3>
            <p className="mt-3 text-ink/65">
              Call us on {site.phone.display} to place your order, then pick it up from Wood Street.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-2">
            <a
              href={site.phone.href}
              className="group/cta flex items-center justify-between border-t border-ink/10 pt-4 font-display tracking-[0.16em] uppercase transition hover:text-teal"
            >
              <span>Call to order</span>
              <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white transition group-hover/cta:bg-teal">
                <ArrowIcon />
              </span>
            </a>

            <Link
              href="/menu#collection"
              className="group/cta flex items-center justify-between border-t border-ink/10 pt-4 font-display tracking-[0.16em] uppercase transition hover:text-teal"
            >
              <span>View collection menu</span>
              <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white transition group-hover/cta:bg-teal">
                <ArrowIcon />
              </span>
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
