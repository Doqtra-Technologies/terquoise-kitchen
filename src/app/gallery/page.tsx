import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";
import { Button, PageHero } from "@/components/ui";
import { gallery, photos, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A look inside Turquoise Kitchen: our dining room, charcoal grills, mezes and cocktails.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="A taste of Turquoise" title="Gallery" image={photos.interiorBlue.src} />
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <GalleryGrid photos={gallery} />
        <div className="mt-16 text-center">
          <Button href={site.socials.instagram} variant="dark">
            More on Instagram
          </Button>
        </div>
      </section>
    </>
  );
}
