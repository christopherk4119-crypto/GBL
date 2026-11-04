import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetail from "../components/ServiceDetail";
import { SERVICES, getService } from "@/lib/services";
import { pageMetadata } from "@/lib/seo";

type Params = { slug: string[] };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return SERVICES.map((s) => ({ slug: s.slug.split("/") }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getService(slug.join("/"));
  if (!page) return {};
  return pageMetadata({ title: page.title, description: page.description, path: `/${page.slug}` });
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const page = getService(slug.join("/"));
  if (!page) notFound();
  return <ServiceDetail page={page} />;
}
