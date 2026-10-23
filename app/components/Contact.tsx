import { Clock, Mail, MapPin, Phone } from "lucide-react";
import QuoteForm from "./QuoteForm";
import { SITE } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contact" className="section bg-navy-dark">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-flame/10 blur-[100px]" />
        <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-ice/10 blur-[100px]" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <p className="eyebrow">Free Quote</p>
        <h2 className="section-title">Get Your Free Quote. We Answer 24/7.</h2>

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <QuoteForm />
          </div>

          <aside className="space-y-5 lg:col-span-2">
            <a href={SITE.tel} className="card card-hover block p-7">
              <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-ice">
                <Phone className="h-4 w-4" aria-hidden /> Call Anytime
              </span>
              <span className="mt-2 block text-4xl font-black tracking-tight text-white md:text-5xl">{SITE.phone}</span>
              <span className="mt-2 block text-white/70">Fastest way to reach us. You&apos;ll talk to Quinn.</span>
            </a>
            <a href={`mailto:${SITE.email}`} className="card card-hover flex items-center gap-4 p-6">
              <Mail className="h-6 w-6 shrink-0 text-ice" aria-hidden />
              <span className="break-all text-lg font-semibold">{SITE.email}</span>
            </a>
            <div className="card flex items-center gap-4 p-6">
              <Clock className="h-6 w-6 shrink-0 text-emerald-400" aria-hidden />
              <span className="text-lg font-semibold">Open 24 Hours, 7 Days a Week</span>
            </div>
            <div className="card flex items-start gap-4 p-6">
              <MapPin className="mt-0.5 h-6 w-6 shrink-0 text-flame" aria-hidden />
              <span>
                <span className="block text-lg font-semibold">Calgary, AB &amp; surrounding areas</span>
                <span className="text-white/70">NW, NE, SW, SE Calgary, Airdrie, Cochrane, Chestermere, Okotoks</span>
              </span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
