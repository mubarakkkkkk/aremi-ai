# Aremu Jobs — redesign (Next.js)

App Router + TypeScript implementation of the redesigned `/jobs` page.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000 (redirects to `/jobs`).

## Structure

```
app/
  layout.tsx        Root layout — loads Space Grotesk, Inter, IBM Plex Mono via next/font
  globals.css        All design tokens (CSS vars) + component styles
  page.tsx           Redirects "/" -> "/jobs"
  jobs/page.tsx       The page itself, assembles all sections
components/
  Header.tsx
  Hero.tsx            Chat mockup + floating match meters
  Ticker.tsx          CSS-only marquee
  FilterSidebar.tsx   "use client" — toggleable filter pills
  JobList.tsx
  JobCard.tsx
  MatchMeter.tsx       The signature ring-gauge element (used in Hero + JobCard)
  Footer.tsx
data/
  jobs.ts             Typed job data, currently the 7 listings pulled from the live site
```

## Notes / next steps

- `MatchMeter`'s `matchPct` values in `data/jobs.ts` are placeholders — wire them to your
  real scoring output.
- `FilterSidebar` currently just tracks local toggle state; hook its `onChange` callback
  up to your actual filtering/query logic (or lift the state into `jobs/page.tsx` and
  filter the `jobs` array passed to `JobList`).
- Pagination in `JobList` is static markup — wire up real paging once you have an API route.
- Swap the `data/jobs.ts` static array for a fetch from your API/database when ready
  (e.g. an async Server Component in `jobs/page.tsx`).
