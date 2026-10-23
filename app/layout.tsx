import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileCallBar from "./components/MobileCallBar";
import QuotePopup from "./components/QuotePopup";
import JsonLd from "./components/JsonLd";
import { SERVICE_CITIES, SITE, siteUrl } from "@/lib/site";
import { HUBS } from "@/lib/services";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const title = "24/7 HVAC Calgary | Furnace & AC | GBL HVAC LTD";
const description =
  "Calgary HVAC open 24/7. Furnace, AC, refrigeration, ventilation and water heater service for homes and businesses. Call 403-970-6988.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: SITE.name,
    locale: "en_CA",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: "#141C33",
  width: "device-width",
  initialScale: 1,
};

// Global LocalBusiness schema. Rendered once here so every page inherits it.
const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HVACBusiness"],
  "@id": `${siteUrl}/#business`,
  name: SITE.name,
  description,
  url: siteUrl,
  logo: `${siteUrl}/icon.png`,
  image: [`${siteUrl}/images/gbl-hvac-service-van-calgary.jpg`, `${siteUrl}/opengraph-image.png`],
  telephone: "+1-403-970-6988",
  email: SITE.email,
  founder: { "@type": "Person", name: SITE.owner },
  // Service-area business: city-level address only, no street address shown.
  address: { "@type": "PostalAddress", addressLocality: "Calgary", addressRegion: "AB", addressCountry: "CA" },
  areaServed: SERVICE_CITIES.map((name) => ({ "@type": "City", name })),
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "HVAC services",
    itemListElement: HUBS.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.h1, url: `${siteUrl}/${s.slug}` },
    })),
  },
  // TODO(client): add real profile URLs only (Google Business Profile, Yelp business page, Facebook...).
  // sameAs: [],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={`${inter.variable} ${montserrat.variable}`}>
      <body>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <JsonLd data={businessSchema} />
        <Header services={HUBS.map((s) => ({ name: s.name, href: `/${s.slug}` }))} />
        <main>{children}</main>
        <Footer />
        <MobileCallBar />
        <QuotePopup />
      </body>
    </html>
  );
}
