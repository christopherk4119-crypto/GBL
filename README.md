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

Import the repo in Vercel. No build settings needed. The official address is `https://www.gblhvac.ca` (set in `lib/site.ts`); in Vercel → Domains, `www.gblhvac.ca` must be the primary domain and `gblhvac.ca` must redirect to it.

## Quote form

Quote requests go to Formspree (`https://formspree.io/f/xjyygnjj`), which emails each one. Emergency requests get "EMERGENCY" at the start of the subject line.
- **First submission:** Formspree may ask the form owner to confirm by email before it starts forwarding. Send one test after deploying.
- **Change where emails go:** in the Formspree dashboard, not in the code.
- **Use a different service:** set `NEXT_PUBLIC_FORM_ENDPOINT` in Vercel. Setting it to `/api/quote` uses the built-in route, which forwards to `FORM_FORWARD_URL`.

## Logo

The client's real logo, cut from their artwork with a transparent background:
- `public/logo.png`: full stacked logo (footer, schema)
- `public/logo-mark.png`: fire-and-ice ring only (header, popup, icons)
- `public/logo-wordmark.png`: "GBL HVAC LTD" lettering (header)
- `public/images/gbl-hvac-logo-square.png`: 720×720 on white, for the Google Business Profile

After replacing any of these, run `node scripts/build-icons.mjs` to regenerate the app icons and social share image, and rebuild `app/favicon.ico` (16/32/48 px) from `public/logo-mark.png`, e.g. with Pillow: `Image.save('app/favicon.ico', sizes=[(16,16),(32,32),(48,48)])`.

## Content to confirm with the client (not invented)

- [ ] Years in business / founding year
- [ ] Licensing and certifications (Gas Fitter, Refrigeration Mechanic tickets, etc.)
- [ ] Insurance / WCB coverage
- [ ] Whether emergency calls carry an after-hours fee
- [ ] Pricing or financing
- [ ] Real customer reviews: add them to `REVIEWS` in `app/components/Testimonials.tsx` (cards stay hidden while it is empty)
- [ ] Google Business Profile link
- [ ] More real project photos: `public/images/commercial.svg` is still a placeholder illustration (`app/components/HomeBusiness.tsx`)

## SEO

See `SEO-PLAYBOOK.md` for the full setup, client to-dos, Search Console steps and pre-ship checks.

## Where things live

- `lib/site.ts`: phone, email, nav, service areas, service list
- `app/layout.tsx`: SEO metadata and HVACBusiness JSON-LD schema
- `lib/services.ts`: content for every service page (adding an entry creates the page)
- `app/[...slug]/page.tsx`: service page route
- `app/components/`: one file per page section
- `app/components/QuotePopup.tsx`: 4-second call / quote popup
