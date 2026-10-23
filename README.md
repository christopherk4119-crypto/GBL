# GBL HVAC LTD: Website

Website for GBL HVAC LTD (Calgary, AB). Built with Next.js 15 (App Router) and Tailwind CSS. Ready for Vercel.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint && npm run typecheck
```

## Deploy to Vercel

Import the repo in Vercel. No build settings needed. Then add the form environment variable below.

## Quote form setup (required before launch)

Search the code for `REPLACE WITH YOUR FORM ENDPOINT`. Pick one option:

- **Formspree (easiest):** create a form at formspree.io and set `NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/xxxxxxx` in Vercel. The browser posts straight to Formspree.
- **Built-in API route:** leave `NEXT_PUBLIC_FORM_ENDPOINT` unset. The form posts to `/api/quote`, which forwards each lead as JSON to `FORM_FORWARD_URL`. You can also swap that block for an email provider (Resend, Postmark).

Until one is configured, the form logs leads in development and **refuses in production** with a "please call 403-970-6988" message, so no lead is silently lost.

## Logo

- The fire-and-ice logo mark is an SVG in `lib/logo-svg.mjs`. Edit it there, then run `node scripts/build-icons.mjs` to regenerate the favicon (`app/icon.svg`) and `public/logo-icon.svg`.
- To use the client's real logo: drop a transparent PNG at `public/logo.png` and set `LOGO_PNG = "/logo.png"` in `app/components/Logo.tsx` (look for `REPLACE WITH LOGO PNG — transparent background`). It fills a reserved 200x80px slot.

## Content to confirm with the client (not invented)

- [ ] Years in business / founding year
- [ ] Licensing and certifications (Gas Fitter, Refrigeration Mechanic tickets, etc.)
- [ ] Insurance / WCB coverage
- [ ] Whether emergency calls carry an after-hours fee
- [ ] Pricing or financing
- [ ] Real customer reviews: `app/components/Testimonials.tsx` has 3 empty slots
- [ ] Google Business Profile link
- [ ] More real project photos: `public/images/commercial.svg` is still a placeholder illustration (`app/components/HomeBusiness.tsx`)
- [ ] Production domain: set `NEXT_PUBLIC_SITE_URL` in Vercel (used for canonicals, sitemap and schema; see `lib/site.ts`)

## SEO

See `SEO-PLAYBOOK.md` for the full setup, client to-dos, Search Console steps and pre-ship checks.

## Where things live

- `lib/site.ts`: phone, email, nav, service areas, service list
- `app/layout.tsx`: SEO metadata and HVACBusiness JSON-LD schema
- `lib/services.ts`: content for every service page (adding an entry creates the page)
- `app/[...slug]/page.tsx`: service page route
- `app/components/`: one file per page section
- `app/components/QuotePopup.tsx`: 4-second call / quote popup
