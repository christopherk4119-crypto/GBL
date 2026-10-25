import { Quote, Star } from "lucide-react";
import Reveal from "./Reveal";
import { SITE } from "@/lib/site";

// Add REAL customer reviews only, word for word, with permission. Do NOT invent reviews.
// While this list is empty, the review cards are hidden and only the "Leave a review" prompt shows.
// Example: { text: "Quinn had our furnace running again at 2am...", name: "Mike R.", stars: 5 }
const REVIEWS: { text: string; name: string; stars: number }[] = [];

function LeaveReview({ label = "Worked with us? Leave a review" }: { label?: string }) {
  return (
    <a href={SITE.yelpReviewUrl} target="_blank" rel="noopener noreferrer" className="btn-ice">
      <Star className="h-5 w-5" aria-hidden /> {label}
    </a>
  );
}

export default function Testimonials() {
  if (REVIEWS.length === 0) {
    return (
      <section className="bg-navy-dark px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Reviews</p>
          <h2 className="text-2xl font-extrabold md:text-3xl">Worked With GBL HVAC LTD?</h2>
          <p className="mt-3 text-white/75">We&apos;d love to hear how it went. Your review helps other Calgary homes and businesses find us.</p>
          <div className="mt-8">
            <LeaveReview label="Leave a Review" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section bg-navy-dark">
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow">Reviews</p>
        <h2 className="section-title">What Our Customers Say</h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name + i} delay={i * 100} as="article" className="h-full">
              <figure className="card flex h-full flex-col p-7">
                <Quote className="h-8 w-8 text-ice/60" aria-hidden />
                <div className="mt-3 flex gap-1" role="img" aria-label={`${r.stars} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className={`h-5 w-5 ${k < r.stars ? "fill-flame text-flame" : "text-white/20"}`} aria-hidden />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-white/85">{r.text}</blockquote>
                <figcaption className="mt-6 border-t border-white/10 pt-4 font-bold text-ice">{r.name}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <LeaveReview />
        </div>
      </div>
    </section>
  );
}
