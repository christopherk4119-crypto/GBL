import Link from "next/link";
import { ChevronRight, Phone } from "lucide-react";
import JsonLd from "./JsonLd";
import { SITE, siteUrl } from "@/lib/site";

// Simple hero for non-service pages, with breadcrumbs + BreadcrumbList schema.
export default function PageHero({ title, lede, crumb, path }: { title: string; lede: string; crumb: string; path: string }) {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: crumb, path },
  ];
  return (
    <section className="relative isolate overflow-hidden bg-navy-dark">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: `${siteUrl}${c.path === "/" ? "" : c.path}` })),
        }}
      />
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -left-40 top-0 h-[30rem] w-[30rem] rounded-full bg-flame/20 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-ice/20 blur-[120px]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-14 pt-8 sm:px-6 md:pb-16">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/60">
          <ol className="flex items-center gap-1">
            <li>
              <Link href="/" className="hover:text-ice">
                Home
              </Link>
            </li>
            <li className="flex items-center gap-1">
              <ChevronRight className="h-4 w-4" aria-hidden />
              <span aria-current="page" className="text-ice">
                {crumb}
              </span>
            </li>
          </ol>
        </nav>
        <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl">{lede}</p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a href={SITE.tel} className="btn-flame px-8 py-4 text-lg">
            <Phone className="h-5 w-5" aria-hidden /> Call {SITE.phone}
          </a>
          <a href="#contact" className="btn-ice px-8 py-4 text-lg">
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
