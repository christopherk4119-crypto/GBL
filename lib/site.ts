export const SITE = {
  // Must match the Google Business Profile name character for character.
  name: "GBL HVAC LTD",
  owner: "Quinn Lou",
  phone: "403-970-6988",
  tel: "tel:+14039706988",
  email: "gblhvac@hotmail.com",
  city: "Calgary",
  region: "AB",
  tagline: "Calgary's 24/7 Heating, Cooling & Refrigeration Experts",
  yelpReviewUrl: "https://www.yelp.ca/writeareview/biz/uK8jaFmgDz_fgQrOtT1WDg",
} as const;

// The ONE canonical origin: https://www.gblhvac.ca (www is the primary domain in Vercel;
// gblhvac.ca redirects to it). Used by metadataBase, canonicals, sitemap, robots and JSON-LD.
// NEXT_PUBLIC_SITE_URL can override it, but must always match Vercel's primary domain exactly.
// Do not add a code-level host redirect: Vercel's domain settings handle www <-> non-www.
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.gblhvac.ca").replace(/\/$/, "");

export type MenuKey = "services" | "residential" | "commercial";
export type MenuLink = { name: string; href: string; sub?: boolean };

// `menu` adds a hover dropdown on desktop; the label itself stays a link.
export const NAV: readonly { label: string; href: string; menu?: MenuKey }[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services", menu: "services" },
  { label: "Residential", href: "/#residential", menu: "residential" },
  { label: "Commercial", href: "/#commercial", menu: "commercial" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/#contact" },
];

export const SERVICE_AREAS = [
  "NW Calgary",
  "NE Calgary",
  "SW Calgary",
  "SE Calgary",
  "Airdrie",
  "Cochrane",
  "Chestermere",
  "Okotoks",
  "High River",
  "Strathmore",
  "Canmore",
  "Banff",
  "Red Deer",
] as const;

// Cities for schema areaServed (Calgary quadrants collapse into "Calgary").
export const SERVICE_CITIES = ["Calgary", ...SERVICE_AREAS.filter((a) => !a.includes("Calgary"))];

export const SERVICE_OPTIONS = [
  "Heating / Furnace",
  "Air Conditioning",
  "Rooftop Unit",
  "Refrigeration",
  "Walk-in Cooler / Freezer",
  "Ice Machine",
  "Ventilation",
  "Hood Fan / Make-Up Air",
  "Water Heater",
  "Maintenance",
  "Other",
] as const;
