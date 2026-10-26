import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PromoPopup from "@/components/PromoPopup";
import { fullAddress, site } from "@/lib/site";
import "./globals.css";

// Self-hosted Google Fonts (latin variable woff2) so builds need no network access.
const oswald = localFont({ src: "./fonts/oswald.woff2", variable: "--font-oswald", weight: "200 700" });
const jost = localFont({ src: "./fonts/jost.woff2", variable: "--font-jost", weight: "100 900" });
const cormorant = localFont({
  src: [
    { path: "./fonts/cormorant-garamond.woff2", weight: "400 600", style: "normal" },
    { path: "./fonts/cormorant-garamond-italic.woff2", weight: "400 600", style: "italic" },
  ],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Turkish & Mediterranean Restaurant in Stratford-upon-Avon`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    images: ["/images/gallery-19.webp"],
    locale: "en_GB",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: site.name,
  servesCuisine: ["Turkish", "Mediterranean"],
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.town,
    postalCode: site.address.postcode,
    addressCountry: "GB",
  },
  telephone: site.phone.display,
  email: site.email,
  openingHours: ["Mo-Fr 12:00-22:00", "Sa-Su 12:00-23:00"],
  sameAs: [site.socials.instagram, site.socials.facebook],
  hasMenu: `${site.url}/menu`,
  description: `${site.description} ${fullAddress}.`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${oswald.variable} ${jost.variable} ${cormorant.variable} antialiased`}>
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <PromoPopup />
      </body>
    </html>
  );
}
