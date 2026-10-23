# GBL HVAC LTD: SEO Record

How search visibility is set up on this site, what's still waiting on the client, and how to grow it.
Follows the Local SEO Field Manual (built on yayageneralservice.com).

## Before you start: lessons that apply here

- **Code pushed ≠ live.** After every push, open the live URL in Vercel and check the newest deployment's commit hash matches and is marked Production.
- **One canonical host.** The origin lives in exactly one place: `siteUrl` in `lib/site.ts`. Set `NEXT_PUBLIC_SITE_URL` in Vercel to the real domain, matching Vercel's own www-or-not setting. Never add a host redirect in code; Vercel's domain settings handle www ↔ non-www.
- **Test the click.** Homepage service cards are real links (whole card is clickable). Verified in a browser, not just by reading the code.

## What's built

| URL | Target term | Notes |
| --- | --- | --- |
| `/` | HVAC Calgary, 24/7 HVAC | Home, links to every hub |
| `/heating` | furnace repair Calgary | Hub |
| `/heating/24-hour-furnace-repair` | 24 hour furnace repair Calgary | Spoke under Heating |
| `/air-conditioning` | AC installation Calgary | Hub |
| `/refrigeration` | commercial refrigeration Calgary | Hub |
| `/ventilation` | HRV / ventilation Calgary | Hub |
| `/water-heaters` | water heater Calgary | Hub |
| `/maintenance-plans` | furnace/AC maintenance Calgary | Hub |

All page content lives in `lib/services.ts`. Adding an entry there creates the page, adds it to the sitemap, the footer and the Service schema automatically. Spokes set `parent` to nest under a hub.

### Technical foundation
- `siteUrl` constant → `metadataBase`, canonicals, Open Graph URLs, sitemap, robots, JSON-LD
- One `<h1>` per page, matching the target term
- Unique titles (under 60 chars, keyword first) and descriptions (under 155 chars, with the phone number)
- `app/sitemap.ts` and `app/robots.ts` (robots blocks `/api/`)
- Square icons: `app/icon.png` 512×512, `app/apple-icon.png` 180×180, `app/manifest.ts`, plus `app/opengraph-image.png` 1200×630. Regenerate with `node scripts/build-icons.mjs`

### Structured data
- Root layout: `["LocalBusiness", "HVACBusiness"]` with `@id`, phone, email, Calgary address (no street), `areaServed`, 24/7 hours, offer catalog
- Every service page: `Service` (provider references the business `@id`), `BreadcrumbList`, `FAQPage`
- **Not included yet, on purpose:** `geo`, `sameAs`, `aggregateRating`, `review`, `priceRange`. Each needs real data from the client (see below)

### Content rules followed
- No pricing claims, no "best/cheapest", no invented years, warranties or response times
- No licence or certification claims until confirmed
- No doorway pages: surrounding towns are mentioned in body copy, not given their own pages
- Real photos only (the service van). Alt text: location + service + what's shown

### Conversion
- Quote popup after 4 seconds (`app/components/QuotePopup.tsx`): Call or Request a Free Quote. Once per browser session, never while someone is typing in the form. On phones it's a bottom sheet, not a full-screen overlay, because Google can rank pages lower for intrusive interstitials on mobile.

## Waiting on the client (do not invent)

- [ ] **Exact business name on the Google Business Profile.** The site uses `GBL HVAC LTD` everywhere. If GBP differs by even one character, change `SITE.name` in `lib/site.ts`
- [ ] **Domain**, and whether it's www or not. Then set `NEXT_PUBLIC_SITE_URL` in Vercel
- [ ] **Licences / tickets** (Gas Fitter, Refrigeration Mechanic, etc.). Once confirmed, add a credentials banner below the hero and on each hub. Until then, gas-related copy avoids any credential claims
- [ ] Insurance / WCB coverage
- [ ] After-hours fee policy (the 24-hour page FAQ currently says "ask when you call")
- [ ] Real reviews → on-page cards plus `aggregateRating`/`review` schema, kept verbatim
- [ ] Profile URLs for `sameAs`: Google Business Profile, Yelp business page, Facebook, etc.
- [ ] More real job photos: furnaces, rooftop units, walk-in coolers. Replace `public/images/commercial.svg`

## Off-site

1. **Google Business Profile:** name identical to the site, primary category "HVAC contractor", service areas (Calgary, Airdrie, Cochrane, Chestermere, Okotoks), hours 24/7, phone, website, real photos, regular posts, reply to every review.
2. **Citations:** same name and phone (403-970-6988) on Yelp, Facebook and any directory. Add each URL to `sameAs`.
3. **Reviews:** ask every happy customer. The site's review button links to Yelp; add a Google review link once the GBP is live.

## Google Search Console

1. Add a **Domain property** (covers http/https/www/non-www) once the domain is connected.
2. Submit `/sitemap.xml`, then request indexing on the home page and every hub.
3. Run each page type through the Rich Results Test (home, a hub, the spoke).
4. Use Performance → Pages → click a page → Queries to see what each page ranks for.

| What you see | What to do |
| --- | --- |
| Same page twice at different positions | Canonical split: check `NEXT_PUBLIC_SITE_URL` and Vercel's domain settings agree |
| High impressions, position 60–90, no clicks | Build a dedicated spoke for that term |
| Position 5–15, low CTR | Rewrite that page's title and description |
| Position 8–20 | Top priority: small improvements move these to page one |
| Home page ranking for a specific service | Link the home page to that service's page with matching anchor text |

**Ship in waves.** One batch of changes, resubmit the sitemap, wait 1–2 weeks for recrawl, check, then the next batch.

### Next spokes (only once Search Console shows demand)
`/heating/furnace-installation`, `/heating/boiler-repair`, `/air-conditioning/ac-repair`, `/refrigeration/walk-in-cooler-repair`, `/water-heaters/tankless-water-heaters`. Each needs 800–1200 real words, its own FAQ and, ideally, real photos.

## Commands

```bash
npm run build && npm run lint && npm run typecheck

# Exactly one h1 per page (after build)
for f in .next/server/app/*.html .next/server/app/heating/*.html; do echo "$f $(grep -o '<h1' "$f" | wc -l)"; done

# Referenced images that don't exist
grep -rohE '"/images/[^"]+\.(jpg|png|webp|svg)"' app lib | tr -d '"' | sort -u \
  | while read i; do [ -f "public$i" ] || echo "MISSING: $i"; done
```
