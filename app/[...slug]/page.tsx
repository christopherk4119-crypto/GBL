import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetail from "../components/ServiceDetail";
import { SERVICES, getService } from "@/lib/services";
import { SITE } from "@/lib/site";

type Params = { slug: string[] };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return SERVICES.map((s) => ({ slug: s.slug.split("/") }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getService(slug.join("/"));
  if (!page) return {};
  const path = `/${page.slug}`;
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: path },
    openGraph: { title: page.title, description: page.description, url: path, siteName: SITE.name, locale: "en_CA", type: "website" },
    twitter: { card: "summary_large_image", title: page.title, description: page.description },
  };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const page = getService(slug.join("/"));
  if (!page) notFound();
  return <ServiceDetail page={page} />;
}
