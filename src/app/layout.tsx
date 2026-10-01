import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, Oswald } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { fullAddress, site } from "@/lib/site";
import "./globals.css";

const oswald = Oswald({ variable: "--font-oswald", subsets: ["latin"] });
const jost = Jost({ variable: "--font-jost", subsets: ["latin"] });
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
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
    images: ["/images/gallery-14.webp"],
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
      </body>
    </html>
  );
}
