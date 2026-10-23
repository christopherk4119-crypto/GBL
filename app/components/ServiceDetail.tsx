import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight, Phone } from "lucide-react";
import Contact from "./Contact";
import FaqSection from "./FaqSection";
import JsonLd from "./JsonLd";
import { SERVICE_AREAS, SERVICE_CITIES, SITE, siteUrl } from "@/lib/site";
import { childrenOf, getService, type ServicePage } from "@/lib/services";

// Long-form service page: hero, sections, what's included, FAQ, related, quote form.
export default function ServiceDetail({ page }: { page: ServicePage }) {
  const parent = page.parent ? getService(page.parent) : undefined;
  const spokes = childrenOf(page.slug);
  const related = page.related.map(getService).filter((s): s is ServicePage => Boolean(s));
  const url = `${siteUrl}/${page.slug}`;

  const crumbs = [{ name: "Home", path: "/" }, ...(parent ? [{ name: parent.name, path: `/${parent.slug}` }] : []), { name: page.name, path: `/${page.slug}` }];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.h1,
    serviceType: page.serviceType,
    description: page.description,
    url,
    provider: { "@type": "HVACBusiness", "@id": `${siteUrl}/#business`, name: SITE.name, telephone: "+1-403-970-6988" },
    areaServed: SERVICE_CITIES.map((name) => ({ "@type": "City", name })),
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: `${siteUrl}${c.path === "/" ? "" : c.path}` })),
  };

  const warm = page.tone === "warm";

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy-dark">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className={`absolute -left-40 top-0 h-[30rem] w-[30rem] rounded-full blur-[120px] ${warm ? "bg-flame/25" : "bg-ice/15"}`} />
          <div className={`absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full blur-[120px] ${warm ? "bg-ice/10" : "bg-ice/25"}`} />
        </div>
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 md:pb-20">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/60">
            <ol className="flex flex-wrap items-center gap-1">
              {crumbs.map((c, i) => (
                <li key={c.path} className="flex items-center gap-1">
                  {i > 0 && <ChevronRight className="h-4 w-4" aria-hidden />}
                  {i < crumbs.length - 1 ? (
                    <Link href={c.path} className="hover:text-ice">
                      {c.name}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-ice">
                      {c.name}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <div className="grid items-center gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">{page.h1}</h1>
              <p className="mt-5 text-lg leading-relaxed text-white/80 md:text-xl">{page.lede}</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href={SITE.tel} className="btn-flame px-8 py-4 text-lg">
                  <Phone className="h-5 w-5" aria-hidden /> Call {SITE.phone}
                </a>
                <a href="#contact" className="btn-ice px-8 py-4 text-lg">
                  Get a Free Quote
                </a>
              </div>
              <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-emerald-300">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" /> Open 24 hours, 7 days a week
              </p>
            </div>
            <div className="lg:col-span-2">
              <Image
                src={page.image.src}
                alt={page.image.alt}
                width={1000}
                height={750}
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="aspect-[4/3] w-full rounded-3xl border border-white/10 object-cover shadow-2xl shadow-black/40"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-3">
          <article className="lg:col-span-2">
            <div className="space-y-5 text-lg leading-relaxed text-white/85">
              {page.intro.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>

            {spokes.length > 0 && (
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {spokes.map((s) => (
                  <Link key={s.slug} href={`/${s.slug}`} className="card card-hover flex items-center justify-between gap-3 border-flame/40 p-5">
                    <span>
                      <span className="block text-lg font-extrabold">{s.name}</span>
                      <span className="text-sm text-white/70">{s.lede}</span>
                    </span>
                    <ArrowRight className="h-5 w-5 shrink-0 text-flame" aria-hidden />
                  </Link>
                ))}
              </div>
            )}

            {page.sections.map((s) => (
              <section key={s.heading} className="mt-12">
                <h2 className="text-2xl font-extrabold md:text-3xl">{s.heading}</h2>
                <div className="mt-4 space-y-4 text-lg leading-relaxed text-white/80">
                  {s.body.map((p) => (
                    <p key={p.slice(0, 32)}>{p}</p>
                  ))}
                </div>
                {s.bullets && (
                  <ul className="mt-4 space-y-2.5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-white/85">
                        <CheckCircle2 className={`mt-1 h-5 w-5 shrink-0 ${warm ? "text-flame" : "text-ice"}`} aria-hidden />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <section className="mt-12">
              <h2 className="text-2xl font-extrabold md:text-3xl">Areas we serve</h2>
              <p className="mt-4 text-lg leading-relaxed text-white/80">
                We cover all of Calgary ({SERVICE_AREAS.slice(0, 4).join(", ")}) plus {SERVICE_AREAS.slice(4).join(", ")}. Not sure if
                you&apos;re in range?{" "}
                <a href={SITE.tel} className="font-bold text-flame underline-offset-4 hover:underline">
                  Call {SITE.phone}
                </a>
                .
              </p>
            </section>

            <FaqSection faqs={page.faqs} />

            {parent && (
              <p className="mt-12">
                <Link href={`/${parent.slug}`} className="inline-flex items-center gap-2 font-bold text-ice hover:text-white">
                  <ArrowRight className="h-4 w-4 rotate-180" aria-hidden /> All {parent.name.toLowerCase()} services: {parent.h1}
                </Link>
              </p>
            )}
          </article>

          <aside className="space-y-6 lg:sticky lg:top-32 lg:self-start">
            <div className="card p-6">
              <h2 className="text-xl font-extrabold">What&apos;s included</h2>
              <ul className="mt-4 space-y-2.5">
                {page.included.map((it) => (
                  <li key={it} className="flex items-start gap-2.5 text-white/85">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" aria-hidden />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
            <a href={SITE.tel} className="card card-hover block border-flame/50 bg-flame/10 p-6 text-center">
              <span className="block text-sm font-bold uppercase tracking-widest text-flame-light">Talk directly to Quinn</span>
              <span className="mt-2 block text-3xl font-black">{SITE.phone}</span>
              <span className="mt-1 block text-white/70">Open 24 hours, 7 days a week</span>
            </a>
            {related.length > 0 && (
              <div className="card p-6">
                <h2 className="text-xl font-extrabold">Related services</h2>
                <ul className="mt-4 space-y-2">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link href={`/${r.slug}`} className="flex items-center justify-between gap-2 rounded-lg px-2 py-2 font-semibold text-white/85 hover:bg-white/5 hover:text-ice">
                        {r.h1}
                        <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </div>

      <Contact />
    </>
  );
}
