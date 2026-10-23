export const SITE = {
  name: "GBL HVAC LTD",
  shortName: "GBL HVAC",
  owner: "Quinn Lou",
  phone: "403-970-6988",
  tel: "tel:+14039706988",
  email: "gblhvac@hotmail.com",
  city: "Calgary",
  region: "AB",
  tagline: "Calgary's 24/7 Heating, Cooling & Refrigeration Experts",
  yelpReviewUrl: "https://www.yelp.ca/writeareview/biz/uK8jaFmgDz_fgQrOtT1WDg",
  // TODO: confirm with client and set the production domain
  url: "https://www.gblhvac.ca",
} as const;

export const NAV = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Residential", href: "#residential" },
  { label: "Commercial", href: "#commercial" },
  { label: "Contact", href: "#contact" },
] as const;

export const SERVICE_AREAS = [
  "NW Calgary",
  "NE Calgary",
  "SW Calgary",
  "SE Calgary",
  "Airdrie",
  "Cochrane",
  "Chestermere",
  "Okotoks",
] as const;

export const SERVICE_OPTIONS = [
  "Heating",
  "Air Conditioning",
  "Refrigeration",
  "Ventilation",
  "Water Heater",
  "Maintenance",
  "Other",
] as const;
