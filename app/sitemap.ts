import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/services";
import { siteUrl } from "@/lib/site";

// Every indexable page, canonical URLs only. Add new pages here in the same commit that creates them
// (service pages are picked up automatically from lib/services.ts).
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: siteUrl, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/gallery`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    ...SERVICES.map((s) => ({
      url: `${siteUrl}/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: s.parent ? 0.7 : 0.8,
    })),
  ];
}
