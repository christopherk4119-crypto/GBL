import type { Metadata } from "next";
import { SITE } from "./site";

// Per-page metadata. A page that sets its own openGraph replaces the parent's whole openGraph
// object in Next.js, which would drop the share image, so it is set explicitly here.
const OG_IMAGE = { url: "/opengraph-image.png", width: 1200, height: 630, alt: `${SITE.name}: Calgary's 24/7 HVAC experts` };

export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: SITE.name, locale: "en_CA", type: "website", images: [OG_IMAGE] },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE.url] },
  };
}
