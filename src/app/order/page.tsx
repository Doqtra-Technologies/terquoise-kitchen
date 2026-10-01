import type { Metadata } from "next";
import OrderOptions from "@/components/OrderOptions";
import Reveal from "@/components/Reveal";
import { Eyebrow, Heading, PageHero } from "@/components/ui";
import { photos, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Order Online",
  description: "Order Turquoise Kitchen for delivery on Deliveroo or Uber Eats, or call to order for collection.",
};

export default function OrderPage() {
  return (
    <>
      <PageHero eyebrow="Delivery & collection" title="Order Online" image={photos.mezeSpread.src} />
      <section className="bg-sand py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <Eyebrow>Turquoise Kitchen at home</Eyebrow>
            <Heading className="mt-3">Choose how you order</Heading>
            <p className="mt-6 text-lg text-ink/70">
              Our charcoal grills and mezes travel well. Order delivery through Deliveroo or Uber Eats, or call{" "}
              <a href={site.phone.href} className="font-medium text-teal-deep underline underline-offset-4">
                {site.phone.display}
              </a>{" "}
              and collect from {site.address.street}.
            </p>
          </Reveal>
          <OrderOptions className="mt-14" />
          <p className="mt-10 text-sm text-ink/55">
            Delivery menus and prices are set by each platform and may differ from our restaurant menu.
          </p>
        </div>
      </section>
    </>
  );
}
