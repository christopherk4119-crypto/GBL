import type { Metadata } from "next";
import Image from "next/image";
import { Camera, Phone } from "lucide-react";
import Contact from "../components/Contact";
import { GALLERY } from "@/lib/gallery";
import { SITE } from "@/lib/site";

const title = "HVAC Work Photos Calgary | Gallery | GBL HVAC LTD";
const description = "Photos from GBL HVAC LTD jobs around Calgary: furnaces, AC, rooftop units, refrigeration and more. Open 24/7. Call 403-970-6988.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/gallery" },
  openGraph: { title, description, url: "/gallery", siteName: SITE.name, locale: "en_CA", type: "website" },
};

export default function GalleryPage() {
  return (
    <>
      <section className="section">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow">Gallery</p>
          <h1 className="section-title">Our Work Around Calgary</h1>
          <p className="mx-auto mt-5 max-w-2xl text-center text-lg text-white/75">
            Real photos from real jobs. Heating, cooling, refrigeration and ventilation for homes and businesses.
          </p>

          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY.map((p) => (
              <li key={p.src}>
                <figure className="card overflow-hidden">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    width={p.width}
                    height={p.height}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <figcaption className="p-4 text-white/80">{p.caption}</figcaption>
                </figure>
              </li>
            ))}
            <li>
              <div className="card flex h-full min-h-[16rem] flex-col items-center justify-center p-8 text-center">
                <Camera className="h-10 w-10 text-ice" aria-hidden />
                <p className="mt-4 text-lg font-bold">More job photos on the way</p>
                <p className="mt-2 text-white/70">We&apos;re adding photos from recent installs and repairs.</p>
              </div>
            </li>
          </ul>

          <div className="mt-12 text-center">
            <a href={SITE.tel} className="btn-flame px-8 py-4 text-lg">
              <Phone className="h-5 w-5" aria-hidden /> Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
}
