import type { Faq } from "./services";
import { SERVICE_AREAS, SITE } from "./site";

// Questions about the business itself. Shown on the homepage (with FAQPage schema)
// and on /faq (without schema, so the markup isn't duplicated).
export const GENERAL_FAQS: Faq[] = [
  {
    q: "Are you really open 24 hours?",
    a: `Yes. ${SITE.name} is open 24 hours a day, 7 days a week, including weekends and holidays. Call ${SITE.phone} any time.`,
  },
  {
    q: "Who will I talk to when I call?",
    a: "You talk directly to Quinn, the owner. No call centre and no answering service.",
  },
  {
    q: "Do you work on homes and businesses?",
    a: "Both. Furnaces, boilers, air conditioning, hot water tanks and ventilation for homes, and rooftop units, walk-in coolers and freezers, ice machines, hood fans, make-up air and commercial refrigeration for businesses.",
  },
  {
    q: "What areas do you serve?",
    a: `All of Calgary (${SERVICE_AREAS.filter((a) => a.includes("Calgary")).join(", ")}) plus ${SERVICE_AREAS.filter((a) => !a.includes("Calgary")).join(", ")}. Not sure if you're covered? Call ${SITE.phone}.`,
  },
  {
    q: "How do I get a quote?",
    a: `Call ${SITE.phone}, or fill in the free quote form at the bottom of any page and we'll get back to you shortly. For emergencies, calling is fastest.`,
  },
  {
    q: "Do you charge extra for after-hours calls?",
    a: "Ask when you call. We'll explain how the visit is charged before we come out, so there are no surprises.",
  },
];
