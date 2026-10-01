import type { Metadata } from "next";
import VisitUs from "@/components/VisitUs";
import { PageHero } from "@/components/ui";
import { photos } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Find Turquoise Kitchen at 22 Wood Street, Stratford-upon-Avon. Call 01789 290933 to book a table.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Get in touch" title="Contact Us" image={photos.storefront.src} />
      <VisitUs />
    </>
  );
}
