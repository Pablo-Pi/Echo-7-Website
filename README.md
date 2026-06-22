# Echo 7 Website

A static marketing site for Echo 7, built with Astro v6.4.7.

## Quick Start

```bash
npm install
npm run dev      # Start dev server at http://localhost:4321/
npm run build    # Create production build in ./dist/
```

## Adding an Insights Article

1. Create a new `.md` file in `src/content/insights/` with a kebab-case name:
   ```
   src/content/insights/my-article-title.md
   ```

2. Add frontmatter with metadata:
   ```markdown
   ---
   title: "My Article Title"
   description: "Short description for SEO and previews"
   publishDate: 2026-06-17
   updatedDate: 2026-06-18    # Optional
   ---

   Your article content here...
   ```

3. The article will automatically appear on `/insights/` and be readable at `/insights/my-article-title/`.

That's it — no configuration needed. Astro's content collections system handles the rest.

## Design Tokens

All colours, spacing, and typography live in one place: `src/styles/tokens.css`

This is the source of truth. Never hardcode values like `#2BFDD7` or `4rem` in components — use the tokens instead.

### Common Tokens

- **Colours**: `--colour-field`, `--colour-accent`, `--colour-text`, `--colour-text-muted`, `--colour-hairline`
- **Spacing**: `--space-xs`, `--space-sm`, `--space-md`, `--space-lg`, `--space-xl`, `--space-2xl`
- **Typography**: `--font-body` (Inter), `--font-display` (Michroma)
- **Gradients**: `--gradient-primary` (teal to green)
- **Sizing**: `--content-max` (1180px), `--text-max` (680px)

Example usage in CSS:
```css
.my-component {
  color: var(--colour-text);
  padding: var(--space-md);
  background: var(--gradient-primary);
}
```

## Contact Form — HubSpot Setup

The contact form at `/contact` submits to the HubSpot Forms API. Before going live you need to add your portal ID and form GUID.

### One-time setup

1. **Create the HubSpot form**
   - Log in → Marketing → Forms → Create form → Blank form
   - Add these fields (use the exact internal names):
     - `firstname` (label: First name) — optional
     - `lastname` (label: Last name) — optional
     - `email` (label: Business email) — required
     - `phone` (label: Phone) — optional
     - `company` (label: Company) — required
     - `jobtitle` (label: Your role) — optional
     - `message` (label: What's the main challenge on your board's agenda?) — required
   - Save and publish the form

2. **Get your Portal ID**
   - Settings (gear icon) → Account Setup → Account Details
   - Your HubSpot ID is shown — it's an 8-digit number

3. **Get your Form GUID**
   - Open the form → Actions → Share → Embed code
   - Copy the `formId` value — it looks like `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`

4. **Add the values to the site**
   - Open `src/pages/contact.astro`
   - Find these two lines near the bottom:
     ```js
     const PORTAL_ID = 'YOUR_PORTAL_ID';
     const FORM_GUID = 'YOUR_FORM_GUID';
     ```
   - Replace the placeholder strings with your actual values
   - Rebuild and redeploy

Once live, every form submission appears in HubSpot under Contacts with the full message attached.

---

## Quarterly Stats

### Breach Cost Stat

The "£3.8m average breach cost" stat updates quarterly. To refresh it:

1. Open `src/components/BreachCostStat.astro`
2. Edit these three variables at the top:
   ```js
   const costFigure = '£3.8m';
   const lastUpdated = 'Q2 2026';
   const attribution = 'Ponemon Institute / IBM Security Data Breach Report';
   ```
3. Save. The site rebuilds automatically in dev mode, or rebuild with `npm run build` for production.

Sources: Ponemon Institute, IBM Security, NCSC, or BleepingComputer annual breach cost reports.

## Deploying to Hostinger

The site is a static build — just HTML, CSS, and JS. No database or backend needed.

### Steps

1. Build the site locally:
   ```bash
   npm run build
   ```

2. The `dist/` folder contains everything needed.

3. Upload `dist/*` to your Hostinger web root (usually `public_html/`) via:
   - **Hostinger File Manager** (web UI)
   - **SFTP** (faster for large sites)
   - **GitHub Actions** (if you set up CI/CD)

4. Ensure `.htaccess` or equivalent server config allows clean URLs (no `.html` extensions needed):
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

5. Test the live site. Check `/insights/` links and all CTAs work.

## Project Structure

```
src/
  components/          # Reusable UI sections
    Hero.astro         # Homepage hero with synapse animation
    Problem.astro      # Stats section (2×2 grid)
    WhatWeDo.astro     # Product cards
    HowItWorks.astro   # 3-step process
    etc.
  content/
    insights/          # Markdown articles (auto-collected)
  pages/
    index.astro        # Homepage
    insights/
      index.astro      # Article listing
      [slug].astro     # Dynamic article pages
  styles/
    tokens.css         # Design tokens (colours, spacing, etc.)
    global.css         # Global styles
  layouts/
    BaseLayout.astro   # HTML structure, meta tags, fonts
    ArticleLayout.astro # Article page wrapper

public/
  images/              # SVG logos, favicons
  favicon.svg

dist/                  # Production build (created by `npm run build`)
```

## Styling Notes

- **No Tailwind** — all CSS is hand-written in component `<style>` blocks.
- **Scoped styles** — Astro automatically scopes CSS to each component, preventing conflicts.
- **Responsive** — use CSS media queries (e.g., `@media (min-width: 880px)`) for breakpoints.
- **Dark theme** — site uses a dark background (`--colour-field: #18093A`) with teal/green accents.

## Animation and Interactivity

- **Scroll fade** — elements with `data-fade` auto-reveal as they scroll into view (JS in `BaseLayout.astro`)
- **Synapse canvas** — 3D animated background in the hero, extends into the problem section. Uses `requestIdleCallback` to avoid blocking the main thread.
- **Glow effects** — CSS animations on buttons and accent elements

## Troubleshooting

**Dev server won't start:**
- Clear `.astro/` cache: `rm -rf .astro`
- Reinstall dependencies: `rm -rf node_modules && npm install`

**Styles not updating:**
- Astro caches component styles. Hard-refresh browser: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+F5` (Windows/Linux)

**Images broken in production:**
- Ensure image paths use `/images/filename` (absolute from root), not relative paths
- Check files exist in `public/images/`

**Insights articles not appearing:**
- Frontmatter must include `title`, `description`, and `publishDate` (YYYY-MM-DD format)
- File must be `.md` (not `.txt` or other extensions)

## Performance Notes

- **Dev server** is not optimised. Production builds (`npm run build`) are minified and much smaller.
- **Fonts** are loaded from Google Fonts. Consider self-hosting them later for faster loads.
- **Canvas animation** uses `requestIdleCallback` to run after critical content loads.
- **Lighthouse score** improves significantly in production due to Gzip compression, minification, and caching.

## Support & Questions

If something doesn't work or you need to make changes not covered here, the code is designed to be readable. Components have clear naming and CSS follows BEM-like conventions.

---

**Built with Astro** — a static site generator that ships zero JavaScript by default and only adds JS where you explicitly ask for it.
