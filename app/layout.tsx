import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import { SITE } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const title = "GBL HVAC | 24/7 Furnace, AC & Refrigeration Repair Calgary";
const description =
  "Calgary HVAC company open 24 hours. Heating, air conditioning, refrigeration, ventilation and water heater installation, repair and maintenance for homes and businesses. Call 403-970-6988.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title,
  description,
  keywords: [
    "furnace repair Calgary",
    "HVAC Calgary",
    "24 hour furnace repair Calgary",
    "AC installation Calgary",
    "commercial refrigeration Calgary",
    "water heater Calgary",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: SITE.name,
    locale: "en_CA",
    type: "website",
  },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: "#141C33",
  width: "device-width",
  initialScale: 1,
};

// LocalBusiness / HVACBusiness structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: SITE.name,
  description,
  url: SITE.url,
  logo: `${SITE.url}/logo-icon.svg`,
  image: `${SITE.url}/logo-icon.svg`,
  telephone: "+1-403-970-6988",
  email: SITE.email,
  founder: { "@type": "Person", name: SITE.owner },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Calgary",
    addressRegion: "AB",
    addressCountry: "CA",
  },
  areaServed: [
    "Calgary",
    "Airdrie",
    "Cochrane",
    "Chestermere",
    "Okotoks",
  ].map((name) => ({ "@type": "City", name })),
  openingHours: "Mo-Su 00:00-23:59",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  makesOffer: [
    "Heating",
    "Air Conditioning",
    "Refrigeration",
    "Ventilation",
    "Water Heater",
    "Maintenance Plans",
  ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={`${inter.variable} ${montserrat.variable}`}>
      <body>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
