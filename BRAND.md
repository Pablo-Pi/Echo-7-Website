# Echo 7 — Brand Handover

This is the single source of truth for Echo 7's visual identity, content rules, and voice. It exists so that anyone or anything producing Echo 7 material — a designer, a copywriter, another AI session — gets it right without guessing or re-deriving it from the live site.

Company: Echo 7, a trading name of Solvida Ltd. Registered in England and Wales. Based in London, UK.
Domain: echo7.io
Contact: hello@echo7.io
LinkedIn: https://www.linkedin.com/company/echo7io
X / Twitter: @echo7team

---

## 1. Colour

| Role | Hex / Value | Notes |
|---|---|---|
| Field (dominant background) | `#18093A` | Deep near-black violet. This is the only background colour used anywhere on the site — no light mode, no secondary background tone. |
| Gradient start | `#32FDEA` | Cyan |
| Gradient end | `#75FD98` | Green |
| Accent | `#2BFDD7` | Used for links, icon details, small UI accents — distinct from the gradient but sits in the same family |
| Primary text | `#E8E6F0` | Soft off-white, used on the dark field |
| Muted text | `rgba(232, 230, 240, 0.62)` | Body copy, captions, secondary information |
| Hairline / dividers | `rgba(232, 230, 240, 0.16)` | Borders, separators |

**Primary gradient:** `linear-gradient(90deg, #32FDEA, #75FD98)` — cyan to green, left to right. Used on headline emphasis text, buttons, stat figures, and the logo mark itself.

**Rule:** do not introduce any colour outside this list. No light backgrounds, no alternate accent hues, no gradient direction other than the one specified.

---

## 2. Typography

- **Display / headings:** Michroma (geometric, wide letter-spacing, technical/futuristic character). Falls back to Arial Narrow, sans-serif.
- **Body:** Inter, weights 400/500/600/700. Falls back to system sans-serif (-apple-system, BlinkMacSystemFont, Segoe UI).
- Body line-height: 1.7 (relaxed, readable)
- Tight line-height (headlines): 1.15

---

## 3. Spacing, shape, motion

- Spacing scale: 0.5rem / 1rem / 2rem / 4rem / 7rem / 10rem (xs → 2xl) — generous whitespace throughout, never cramped
- Border radius: 4px (small elements), 10px (cards)
- Motion easing: `cubic-bezier(0.2, 0.65, 0.3, 1)` — a "quiet" ease, no bounce or overshoot
- Standard fade-in duration: 700ms
- Animations are always respectful of `prefers-reduced-motion` — anything built for this brand should degrade to a static, fully-visible state when that's set

---

## 4. Visual theme

Dark mode only. Near-black violet field with electric cyan-to-green gradient used sparingly as accent, not wallpaper. The overall feel is **technical, precise, slightly futuristic, restrained** — confident rather than flashy. Network/node motifs (dots connected by thin lines) appear as background texture in the hero area, echoing the brain/neural-network logo mark. No stock photography, no human faces, no generic corporate imagery — the visual language is entirely abstract/geometric/data-driven.

---

## 5. Logo and icon assets

All files live in `public/images/` in the project repo, and are bundled together in `brand-assets.zip` (see bottom of this doc) for easy handover.

| File | Description | When to use |
|---|---|---|
| `Logo-icon_Brain.svg` | The icon mark alone — a stylised neural-network/brain glyph in the cyan-green gradient on the `#18093A` field. Full-colour, dark-background version. | Standalone icon use, favicons, app icons, anywhere the icon needs to work without the wordmark |
| `logoFull.svg` | Full lockup: icon + "ECHO 7" wordmark side by side, in Michroma, on the dark field | Primary logo for letterheads, presentation covers, anywhere both name and mark are wanted together |
| `logo.svg` | Wordmark only ("ECHO 7" in Michroma, off-white `#E8E6F0`), no icon | Used in the site nav/footer where the icon appears separately alongside it |
| `BrainWBlogo.svg` | Icon mark, white-on-black variant | For use on light backgrounds where the standard gradient version doesn't have enough contrast |
| `BrainBWlogo.svg` | Icon mark, black-on-white variant | Print, light-background, or single-colour reproduction contexts |
| `favicon.svg` | Browser tab icon — simplified version of the brain mark | Browser/tab icon only |

**Logo rule:** never recolour the gradient, never place the full-colour icon mark on anything other than the `#18093A` field (use the BW variants for light backgrounds instead), never stretch or distort the lockup's proportions.

**Lockup order — this is fixed and must never be reversed:** the wordmark "ECHO 7" always comes first, with the brain icon following immediately after it (to the right, same horizontal row). Never put the icon before the wordmark, and never stack them vertically (icon above text) — this is treated as a misrepresentation of the company's identity, not just a style preference. The canonical reference is the site's own navigation bar (`src/components/Nav.astro`): wordmark span, then icon image, in that order, side by side. Any new component that includes the logo lockup must match this exact order and orientation.

---

## 6. Voice and tone

- Direct, confident, declarative. Short sentences land harder than long ones.
- Plain English over jargon. Explain technical concepts (Azure Policy, zero-trust, etc.) in terms of what they actually prevent, not just what they're called.
- Evidence-based: cite real, named sources for any statistic (DSIT Cyber Security Breaches Survey, Ponemon Institute / IBM Security, etc.) — never invent or imply a stat without one.
- No testimonials, no case studies, no client logos — by design, none exist, and the copy never pretends otherwise. Specificity (real numbers, real mechanisms) substitutes for social proof.
- UK English spelling throughout (organisation, optimise, colour, etc.) — never American spelling.
- The brand argues from a position of "we'll show you the number" rather than "trust us" — quantification (the Technical Debt Burden, the Sovereignty Index™) is the central rhetorical device.

---

## 7. Hard content rules (non-negotiable)

These apply to absolutely everything written for Echo 7 — web copy, social posts, sales material, anything:

1. **Never state a price or fee figure anywhere.** "Fixed fee" is used as a concept only. Pricing is discussed in discovery conversations, never published.
2. **Never invent client names, logos, testimonials, or case studies.** None exist. If an example is needed, use a clearly generic/illustrative scenario (e.g. "a 200-person professional services firm") rather than implying a real client.
3. **Never claim the platform has been independently reviewed, audited, validated, or certified.** It hasn't, and the copy never implies otherwise.
4. **Never claim post-launch status for any disaster-recovery or identity module** for any specific client — frame these as part of the methodology, not as already deployed somewhere real.
5. **Use the term "Continuity Codex" — never "Continuity Bible."**
6. **Trademark symbol (™) rules:**
   - Apply ™ on the **first use only** of: **The Sovereignty Index™**, **Synapse-7™**, **Sovereign Vault™**
   - Do **not** apply ™ to: Technical Sovereignty, Managed Sovereignty, Continuity Codex, Sovereign Watch, Sovereign Continuity
7. **"Technical Debt Burden" must always be rendered in the context of a £ figure** — don't use the term in the abstract without tying it to a pound amount (even an illustrative one).
8. **UK English only.** No American spellings, ever.
9. **Never use these words, anywhere:** solutions, leverage, synergies, seamless, bespoke, holistic, "passionate about", journey, cutting-edge.

---

## 8. How to use this with another AI session (e.g. Claude Chat)

1. Upload this `BRAND.md` file directly, or paste its contents in full.
2. Upload `brand-assets.zip` (bundled in the project root) for the actual logo/icon files.
3. Tell the other session: *"Follow BRAND.md exactly — colours, typography, voice, and especially the hard content rules in Section 7 are non-negotiable."*

That's everything needed to produce on-brand material without access to the live codebase.
