# Echo 7 Website — Project Status

Last updated: 25 June 2026

This is the standing handover document for the Echo 7 website project (echo7.io). Read this before doing any work — coding, content, or documentation — so you're working from current ground truth rather than assumptions.

## Project basics

- **Tech stack:** Astro v6.4.7, static site generation, zero client-side framework. Plain CSS (scoped per-component), vanilla JS/TypeScript where interactivity is needed.
- **Hosting:** Hostinger (shared hosting), deployed via manual build-zip-upload to `public_html` through Hostinger's File Manager. No CI/CD yet — every deploy is: `npm run build` → zip the `dist/` folder → upload → extract with overwrite.
- **Source control:** GitHub at `github.com/Pablo-Pi/Echo-7-Website`, `main` branch. Every change is committed and pushed — check git history for exactly what changed and when.
- **Domain:** echo7.io, DNS and email both managed via Hostinger (Hostinger's own mail service — separate from the website files, so deploys never risk email).
- **This site replaced** a previous Elementor/WordPress site on the same domain. That migration is complete; the old site is archived (not deleted) on the server as a rollback option.

## What exists today (pages)

- `/` — homepage: Hero, Problem (with an animated Technical Debt compound-cost chart), WhatWeDo (with an animated Sovereignty Radar pentagon chart), HowItWorks, WhyEcho7, Credibility, PricingPhilosophy, FinalCTA
- `/contact/` — lead capture form (HubSpot Forms API integration), redirects to `/contact/thank-you/` on success
- `/insights/` — articles index
- `/insights/the-five-pillars/`, `/insights/the-technical-debt-burden/`, `/insights/uk-data-residency-enforced/` — three published articles, each with an auto-generated table of contents, estimated read time, a pull-quote, and a closing CTA card driving back to `/contact/`
- `/privacy/` — full UK GDPR-compliant policy (lawful basis table, retention periods, international transfers, ICO complaints route, company number 7232433, registered office at 124 City Road, London, EC1V 2NX). **Legally reviewed and approved — no longer a draft.**
- `/terms/` — full terms of use (liability, third-party links, governing law, IP, no-advice disclaimer). **Legally reviewed and approved — no longer a draft.**
- `/404` — custom not-found page

## Brand and content rules — read this before writing anything

Two files in the project root are the source of truth for any new content or documentation:

- **[BRAND.md](BRAND.md)** — exact colour values, typography, spacing system, logo usage rules, voice/tone, and a section of **hard content rules that are non-negotiable**: never state a price/fee figure, never invent client names or testimonials, never claim independent certification, use "Continuity Codex" not "Continuity Bible," specific ™ rules for The Sovereignty Index™/Synapse-7™/Sovereign Vault™, UK English only, and a banned-word list (solutions, leverage, synergies, seamless, bespoke, holistic, "passionate about", journey, cutting-edge).
- **`brand-assets/`** (and `brand-assets.zip`) — the actual logo/icon SVG files.
- **[README.md](README.md)** — technical setup instructions, HubSpot config reference, troubleshooting.

If you're documenting or writing anything brand-facing, follow `BRAND.md` exactly rather than inferring tone from examples.

## Recent work (most recent session)

- Migrated the entire site from the old Elementor/WordPress install to Hostinger, with a full backup taken first and the old site preserved as rollback
- Set up git/GitHub for the project (it had no version control before — that gap caused a costly rebuild earlier in the session after some experimental components broke the dev server)
- Rebuilt and improved the Technical Debt chart and Sovereignty Radar visualisations (hand-rolled SVG, no charting library)
- Rewrote the contact page: added a phone field, fixed a UX bug where successful submissions left the user stranded on the same page with just an inline message — now redirects to a dedicated thank-you page and disables the submit button during the request to prevent double-submission
- Wrote full content for all three Insights articles, then layered on a table of contents, read-time estimate, pull-quotes, and a closing CTA to make them less of a dead end
- Fixed the site's hover/link colours and heading treatment for better visual consistency and scannability
- Added SEO fundamentals: per-page meta descriptions, Open Graph + Twitter Card tags including a social preview image, Google Analytics 4 (`G-1RPS18TFKV`), custom 404, confirmed XML sitemap configuration
- Fixed a placeholder LinkedIn link to point to the real company page (`linkedin.com/company/echo7io`)
- Drafted privacy and terms pages (flagged for legal review) so existing footer/contact links stop 404ing
- Cleaned up an accidentally-committed duplicate `node_modules` folder (5,500+ junk files) from git history
- Diagnosed and permanently fixed an iCloud Drive sync issue that was causing the project folder to behave unpredictably during builds
- Added a `noindex` meta tag to the contact thank-you page (transient confirmation page, shouldn't be indexed)
- Fixed the cookie banner's logo lockup order (was reversed — icon before wordmark, stacked vertically). Documented the correct order as a hard rule in `BRAND.md` so it can't be gotten wrong again
- Built a cookie consent banner (Accept/Reject, branded with wordmark + icon in the correct order) and gated GA4 behind it — GA4 previously fired unconditionally on every page load with no consent mechanism, which was a real PECR/UK GDPR compliance gap
- Replaced the placeholder privacy policy with a full UK GDPR-compliant draft supplied by the business owner
- Added a working "Cookie settings" link in the footer that reopens the consent banner, resolving the privacy policy's cookie-related placeholders with a real mechanism rather than dead text
- Privacy policy and terms of use have both passed legal review — removed the "Draft, pending legal review" banners from both pages and the now-unused CSS for that notice
- Audited the live site directly (not from memory) and found four technical SEO gaps, then fixed all of them same day:
  - Sitemap was listing `/contact/thank-you/` despite it being `noindex` — now excluded via a filter in `astro.config.mjs`
  - Added `public/robots.txt`, pointing crawlers at the sitemap
  - Added Organization JSON-LD structured data to `BaseLayout.astro` (name, legal name, registered address, logo, LinkedIn/X profiles)
  - Added `apple-touch-icon.png` (180×180) and a web manifest (`site.webmanifest`) with 192/512px icons — generated from the brand icon SVG via macOS `sips`, padded with the brand background colour to make them square since the source icon isn't

## Known open items — do not assume these are done

- Google Search Console is verified for https://echo7.io/ and the sitemap (sitemap-index.xml) has been submitted — 25 June 2026.
- GA4 has two separate, un-merged accounts (echo7.io and solvida.co.uk) — explicitly **not urgent** per business owner
- No analytics dashboard or reporting cadence has been set up yet — GA4 only collects data for visitors who accept the cookie banner

## Deploy checklist (every time)

1. `npm run build`
2. Zip the contents of `dist/` (not the folder itself — the files should sit at the zip's root)
3. Upload the zip to `public_html` via Hostinger File Manager
4. Extract with **overwrite enabled** (Hostinger's extract dialog requires a folder name field even for "extract here" — enter `.`)
5. Delete the uploaded zip from `public_html` once extracted
6. Spot-check the live site: homepage, `/contact/`, one Insights article, and confirm `.htaccess` is still present and correct
