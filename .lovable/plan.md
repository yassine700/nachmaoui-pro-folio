# Nachmaoui.com — Freelance Portfolio Implementation Plan

Fresh TanStack Start template (React 19, Tailwind v4, shadcn/ui, TanStack Router/Query). Nothing built yet beyond the placeholder home route, so we start clean.

## 1. Sitemap

```text
/                     Home (hero, featured work, app MVP teaser, SEO, services, about, process, contact)
/work                 All web projects (grid, filter by category)
/work/$slug           Project case study (Home Furnace, Moroccan Community/News, future)
/app/teleporteur      Téléporteur mobile MVP case study
/seo                  SEO fundamentals (what I implement on every site)
/services             Services detail
/about                About + process
/contact              Contact form + email + profile links
/sitemap.xml          Generated server route
robots.txt            Already present; add Sitemap: line once domain is live
```

Home carries condensed versions of each section, each linking to its own route (better SEO and shareability than one long anchor page).

## 2. Homepage section order

1. Hero — "Modern Websites. Practical Digital Experiences." + subline covering website design, responsive development, mobile MVPs, SEO fundamentals. CTAs: View My Work / Start a Project.
2. Selected Web Projects — 2–3 featured cards, link to /work.
3. Mobile App MVP — Téléporteur highlight block, labelled clearly as concept/MVP.
4. SEO Fundamentals — short checklist grid, link to /seo.
5. Services — 4 cards (Website Design, Landing Pages, Mobile App MVP, SEO Foundations).
6. About — short intro, Morocco-based freelance designer/developer.
7. Process — Discover → Design → Build → Launch & Improve.
8. Contact — form + email, final CTA.

No statistics, testimonials, logos, awards, or years-of-experience claims anywhere.

## 3. Component architecture

```text
src/components/
  layout/         SiteHeader, SiteFooter, Container, Section, SectionHeading
  home/           Hero, FeaturedWork, AppMvpTeaser, SeoTeaser, ServicesGrid, AboutBlurb, ProcessSteps, ContactSection
  work/           ProjectCard, ProjectGrid, CategoryFilter, ProjectHero, ProjectMeta,
                  ProjectGallery, TechList, CaseStudyBlock (problem/solution/outcome)
  contact/        ContactForm (react-hook-form + zod)
  ui/             existing shadcn primitives
```

Header/footer render in `__root.tsx` around `<Outlet />`. Case-study pages are data-driven: adding a project = adding one data object (+ images), no layout work.

## 4. Project data architecture

`src/data/projects.ts` — typed array, single source of truth for /work, /work/$slug, home featured list, and sitemap.

```ts
type Project = {
  title: string; slug: string; category: "Website" | "Landing Page" | "Mobile MVP";
  summary: string; description: string; technologies: string[];
  image: { src: string; alt: string };
  screenshots: { src: string; alt: string; caption?: string }[];
  challenge: string; solution: string; outcome: string;   // outcome = objective, not invented metrics
  liveUrl?: string; githubUrl?: string;
  featured?: boolean; year?: string; status?: "live" | "concept" | "in-progress";
};
```

Seeded with Home Furnace Replacement and Moroccan Community/News. Any fact I don't have (live URL, client name, results) ships as an obvious `TODO:` placeholder string. Téléporteur uses the same type with `status: "concept"` plus extra sections (customer app, driver app, wallet/credits, marketplace, business model) held in `src/data/teleporteur.ts`.

## 5. Design system

Tokens in `src/styles.css` (oklch), no hardcoded colors in components.

- Palette: light default theme — warm off-white page surface, near-black ink blocks for hero/footer accents, and a deep cobalt accent (`oklch(0.45 0.19 262)`) for links, CTAs and focus rings.
- Typography: an editorial display face for headings + clean geometric sans for body (loaded via `<link>` in `__root.tsx`). Large type scale, tight headline tracking, generous line-height on body.
- Layout: 12-col container, wide gutters, big vertical rhythm, hairline borders instead of heavy shadows, asymmetric project rows.
- Motion: subtle only — fade/slide-up on scroll reveal, image hover scale, link underline transitions. Respect `prefers-reduced-motion`.
- Explicitly avoided: heavy gradients, glassmorphism, coding illustrations, fake credibility elements.

## 6. Responsive strategy

Mobile-first. Breakpoints sm/md/lg/xl. Single-column stacks → 2-col project grid at md → asymmetric layouts at lg. Hamburger sheet nav under md, fluid type via `clamp()`, device-frame mockups for Téléporteur that stack vertically on phones. Tap targets ≥44px.

## 7. SEO implementation

- Per-route `head()`: unique title (<60), description (<160), og:title/description/type, self-referencing og:url + canonical on leaves only.
- One `<h1>` per page, correct h2/h3 nesting, semantic `header/nav/main/section/article/footer`.
- Clean URLs as in the sitemap; internal linking home → section pages → case studies → contact.
- JSON-LD: Person + WebSite on root, CreativeWork/Article on case studies, BreadcrumbList on nested routes.
- `src/routes/sitemap[.]xml.ts` server route generating entries from the routes list + `projects.ts`. `BASE_URL` stays empty with a TODO until Nachmaoui.com is attached, then set to the domain and add the `Sitemap:` line to robots.txt.
- Descriptive alt text on every image; lazy loading below the fold; og:image added per project only when real screenshots exist.

## 8. Accessibility

Keyboard-navigable nav and form, visible focus rings, labelled inputs with error text tied via `aria-describedby`, AA contrast in both themes, skip-to-content link, no meaning conveyed by color alone, reduced-motion support.

## 9. Performance

SSR by default, minimal client JS, no chart/carousel libs on marketing pages, images exported as sized WebP/JPG with width/height to prevent layout shift, two font families max with `display: swap`, route-level code splitting handled by the router.

## 10. Contact form

Email-only fallback for now: a prominent email address (plus future profile links) as the contact path. The full validated form (name, email, company, project type, message) and stored submissions via Lovable Cloud are deferred to a later phase.

## 11. Development phases

- Phase 1 — Foundation: design tokens, fonts, header/footer, layout primitives, home hero + all home sections with real copy, route metadata. Replaces the placeholder at `/`.
- Phase 2 — Work: `projects.ts`, /work grid + filter, /work/$slug case-study template, two seeded projects with placeholder-marked gaps.
- Phase 3 — Téléporteur: dedicated MVP case study with customer/driver/wallet/marketplace/business-model sections and phone mockups.
- Phase 4 — Supporting pages: /seo, /services, /about (+process), /contact with form.
- Phase 5 — SEO & polish: sitemap route, JSON-LD, alt-text pass, a11y and mobile QA, scroll animations.
- Later: blog/notes, case-study PDFs, multilingual (FR/AR), CMS-backed projects, analytics.

## 12. Confirmed decisions

1. Accent: deep cobalt. Default theme: light.
2. Contact: email-only fallback in Phase 1.
3. Language: English only at launch.
4. Téléporteur stays explicitly categorized as a Mobile MVP concept everywhere it appears.
5. Scope now: **Phase 1 only** — design system + homepage. Stop for your review before Phase 2.
6. Still needed from you: live URLs, screenshots, your email and profile links. Until provided they ship as clearly marked placeholders.

Phase 1 note: because /work, /services, /contact etc. don't exist yet, the homepage CTAs and section links use in-page anchors in this phase and get repointed to real routes in Phase 2+.

Risks: no real screenshots yet means generated mockups that must be swapped before sending to clients; the domain isn't attached, so canonical/sitemap URLs stay relative until it is.