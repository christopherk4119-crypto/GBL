import { Quote, Star } from "lucide-react";
import Reveal from "./Reveal";
import { SITE } from "@/lib/site";

// NOTE FOR DEVELOPER: The business has no public reviews yet.
// Replace these slots with REAL customer reviews only (with permission). Do NOT invent reviews.
const REVIEWS: { text: string; name: string }[] = [
  { text: "[Customer review coming soon]", name: "" },
  { text: "[Customer review coming soon]", name: "" },
  { text: "[Customer review coming soon]", name: "" },
];

export default function Testimonials() {
  return (
    <section className="section bg-navy-dark">
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow">Reviews</p>
        <h2 className="section-title">What Our Customers Say</h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal key={i} delay={i * 100} as="article" className="h-full">
              <figure className="card flex h-full flex-col p-7">
                <Quote className="h-8 w-8 text-ice/60" aria-hidden />
                <div className="mt-3 flex gap-1 text-white/20" aria-hidden>
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-5 w-5" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 italic text-white/60">{r.text}</blockquote>
                <figcaption className="mt-6 min-h-[1.5rem] border-t border-white/10 pt-4 font-bold text-ice">{r.name}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href={SITE.yelpReviewUrl} target="_blank" rel="noopener noreferrer" className="btn-ice">
            <Star className="h-5 w-5" aria-hidden /> Worked with us? Leave a review
          </a>
        </div>
      </div>
    </section>
  );
}
