// Project screenshot paths — images are stored in public/images/shots/ and
// served as static assets by Vite. Previously these were Lovable CDN assets
// (/__l5e/assets-v1/…) that only resolved inside the Lovable sandbox; the
// actual files have been downloaded and committed to public/images/shots/.
const chandeluxe1 = { url: "/images/shots/chandeluxe-1.jpg" };
const chandeluxe2 = { url: "/images/shots/chandeluxe-2.jpg" };
const goutdeparfum1 = { url: "/images/shots/goutdeparfum-1.jpg" };
const goutdeparfum2 = { url: "/images/shots/goutdeparfum-2.jpg" };
const gpm1 = { url: "/images/shots/globalportfoliomanagement-1.jpg" };
const gpm2 = { url: "/images/shots/globalportfoliomanagement-2.jpg" };
const atr1 = { url: "/images/shots/affordabletransmissionrepair-1.jpg" };
const atr2 = { url: "/images/shots/affordabletransmissionrepair-2.jpg" };
const fcc1 = { url: "/images/shots/floorcoatingcontractors-1.jpg" };
const fcc2 = { url: "/images/shots/floorcoatingcontractors-2.jpg" };
const hfr1 = { url: "/images/shots/homefurnacereplacement-1.jpg" };
const hfr2 = { url: "/images/shots/homefurnacereplacement-2.jpg" };
const chandeluxeM = { url: "/images/shots/chandeluxe-m.jpg" };
const goutdeparfumM = { url: "/images/shots/goutdeparfum-m.jpg" };
const gpmM = { url: "/images/shots/globalportfoliomanagement-m.jpg" };
const atrM = { url: "/images/shots/affordabletransmissionrepair-m.jpg" };
const fccM = { url: "/images/shots/floorcoatingcontractors-m.jpg" };
const hfrM = { url: "/images/shots/homefurnacereplacement-m.jpg" };
const osc1 = { url: "/images/shots/outdoorstaging-1.jpg" };
const osc2 = { url: "/images/shots/outdoorstaging-2.jpg" };
const oscM = { url: "/images/shots/outdoorstaging-m.jpg" };

export type ProjectCategory =
  | "Website"
  | "Landing Page"
  | "Web App"
  | "Mobile App MVP";

export type ProjectKind = "web" | "app";

export type ProjectSection = { title: string; body: string };

/**
 * Data for a CSS-drawn website preview mockup. Purely a portfolio
 * presentation device — never a claim that the site is live.
 */
export type ProjectPreview = {
  /** Short headline shown inside the mockup hero. */
  headline: string;
  /** One-line supporting copy inside the mockup. */
  tagline: string;
  nav: string[];
  cta: string;
  /** Three short blocks shown under the mockup hero. */
  blocks: string[];
  /** Visual tone token set used by the mockup. */
  tone: "warm" | "editorial" | "navy" | "outdoor" | "automotive" | "industrial" | "heat";
};

export type Project = {
  title: string;
  /** Real domain, shown prominently when it is a domain-based project. */
  domain?: string;
  slug: string;
  kind: ProjectKind;
  category: string;
  /** Short one-liner used on cards and previews. */
  summary: string;
  /** Longer overview used on the case-study hero. */
  overview: string;
  role: string;
  objective: string;
  designApproach: string;
  developmentApproach: string;
  /** Important website sections / screens. */
  keySections: string[];
  responsive: string;
  seoWork?: string;
  technologies: string[];
  /** Additional narrative blocks (used heavily by the Téléporteur MVP page). */
  sections?: ProjectSection[];
  /** Industry-specific preview mockup shown when no screenshot exists yet. */
  preview?: ProjectPreview;
  /** TODO: replace with real screenshots. Empty array renders labelled placeholders. */
  gallery: { src: string; alt: string; caption?: string }[];
  /** Real mobile screenshot shown inside the phone frame, when available. */
  mobileShot?: { src: string; alt: string };
  /** Only set when the real URL is confirmed — the live CTA depends on it. */
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  status: "live" | "in-progress" | "concept" | "placeholder";
  year?: string;
};

export const projects: Project[] = [
  {
    title: "Chandeluxe",
    domain: "Chandeluxe.ma",
    slug: "chandeluxe",
    kind: "web",
    category: "Website Design & Development",
    summary:
      "A domain-based website project for a decorative lighting and chandelier brand, built around product presentation and enquiry.",
    overview:
      "Chandeluxe.ma is a website project developed on my own domain, designed for a decorative lighting and chandelier business. The focus is presenting products in a way that feels considered, and making an enquiry the obvious next step on any device.",
    role: "Concept, UI/UX design, front-end development, SEO fundamentals.",
    objective:
      "Give a lighting brand a website where the products carry the page: large imagery, calm typography, and a clear route from browsing to contacting.",
    designApproach:
      "Product-first layout with generous whitespace, a restrained palette so lighting imagery stays the focal point, and a type hierarchy that keeps collection and product names legible at every size.",
    developmentApproach:
      "Component-driven front-end build with reusable product and collection blocks, semantic markup, and image handling that keeps large visuals from slowing the first render.",
    keySections: [
      "Home with brand introduction",
      "Collections overview",
      "Product detail presentation",
      "About the brand",
      "Contact / enquiry",
    ],
    responsive:
      "Mobile-first: single-column browsing with large tap targets, two- and three-column product grids from tablet upward, and imagery sized per breakpoint.",
    seoWork:
      "Semantic structure, one H1 per page, unique titles and meta descriptions, clean collection and product URLs, descriptive alt text on product imagery, and internal linking between collections and enquiry.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Responsive Design", "On-page SEO"],
    preview: {
      headline: "Lighting that sets the room",
      tagline: "Decorative chandeliers and statement fixtures",
      nav: ["Collections", "Chandeliers", "About", "Contact"],
      cta: "Enquire",
      blocks: ["Chandeliers", "Pendants", "Wall lights"],
      tone: "warm",
    },
    gallery: [
      {
        src: chandeluxe1.url,
        alt: "Chandeluxe.ma homepage with the chandelier collection hero",
        caption: "Homepage — collection hero and introduction.",
      },
      {
        src: chandeluxe2.url,
        alt: "Chandeluxe.ma sales and rental offer sections with a quote call to action",
        caption: "Sales and rental offers, ending in a quote request.",
      },
    ],
    liveUrl: "https://chandeluxe.ma",
    mobileShot: {
      src: chandeluxeM.url,
      alt: "Chandeluxe.ma homepage on a phone",
    },
    featured: true,
    status: "live",
  },
  {
    title: "Goût de Parfum",
    domain: "GoutDeParfum.com",
    slug: "goutdeparfum",
    kind: "web",
    category: "Website Design & Development",
    summary:
      "A domain-based website project for a fragrance brand concept, focused on editorial product storytelling.",
    overview:
      "GoutDeParfum.com is a fragrance website project developed on my own domain. Perfume cannot be demonstrated visually, so the site leans on editorial writing, structure and typography to communicate character before a visitor ever sees a bottle.",
    role: "Concept, UI/UX design, front-end development, content structure, SEO fundamentals.",
    objective:
      "Build a fragrance website where the reading experience does the selling: clear scent families, comfortable article-style pages, and consistent product framing.",
    designApproach:
      "Editorial direction — a display serif for headings, comfortable reading measure for descriptions, and a muted palette that lets each fragrance page set its own tone through imagery.",
    developmentApproach:
      "Reusable content blocks for fragrance families and product pages so the catalogue can grow without new layouts, plus accessible navigation and semantic article markup.",
    keySections: [
      "Home with brand positioning",
      "Fragrance families",
      "Individual fragrance pages",
      "Notes and composition explanation",
      "Contact",
    ],
    responsive:
      "Mobile-first typography using fluid scaling, stacked fragrance cards on phones, and asymmetric two-column editorial layouts from large screens.",
    seoWork:
      "Content-led structure with descriptive headings, unique metadata per fragrance page, clean readable URLs, alt text on all imagery, and internal linking between families and products.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Content Architecture", "On-page SEO"],
    preview: {
      headline: "A fragrance is a way of reading a room",
      tagline: "Scent families, notes and composition, explained",
      nav: ["Families", "Fragrances", "Notes", "Contact"],
      cta: "Discover",
      blocks: ["Floral", "Woody", "Oriental"],
      tone: "editorial",
    },
    gallery: [
      {
        src: goutdeparfum1.url,
        alt: "GoutDeParfum.com homepage with fragrance imagery and collections",
        caption: "Homepage — fragrance imagery and collections.",
      },
      {
        src: goutdeparfum2.url,
        alt: "GoutDeParfum.com product grid and brand story section",
        caption: "Product grid and brand story.",
      },
    ],
    liveUrl: "https://goutdeparfum.com",
    mobileShot: {
      src: goutdeparfumM.url,
      alt: "GoutDeParfum.com homepage on a phone",
    },
    status: "live",
  },
  {
    title: "Global Portfolio Management",
    domain: "GlobalPortfolioManagement.com",
    slug: "globalportfoliomanagement",
    kind: "web",
    category: "Website Design & Development — Professional Services",
    summary:
      "A domain-based website concept for a professional financial services presence, built for clarity and credibility.",
    overview:
      "GlobalPortfolioManagement.com is a live website developed on my own domain for a professional, finance-oriented services presence. The design brief was restraint: a serious, quiet interface where structure and readability carry the credibility.",
    role: "Concept, information architecture, UI/UX design, front-end development.",
    objective:
      "Show how a professional services website can feel trustworthy through hierarchy, spacing and plain language rather than decoration or unverifiable claims.",
    designApproach:
      "Conservative, high-contrast layout: strict grid, hairline dividers instead of heavy shadows, and typography sized for dense explanatory content.",
    developmentApproach:
      "Semantic multi-page structure with reusable service and explanation blocks, accessible navigation, and no client-side weight that a content site does not need.",
    keySections: [
      "Home / positioning",
      "Approach",
      "Services overview",
      "Insights or explanation pages",
      "Contact",
    ],
    responsive:
      "Single-column reading flow on mobile with sticky navigation, expanding to a two-column content and summary layout on desktop.",
    seoWork:
      "Clean URL structure, unique page titles and descriptions, semantic headings, and internal linking between service and explanation pages.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Information Architecture"],
    preview: {
      headline: "Structured, long-term portfolio thinking",
      tagline: "A quiet, professional services presence",
      nav: ["Approach", "Services", "Insights", "Contact"],
      cta: "Get in touch",
      blocks: ["Approach", "Services", "Insights"],
      tone: "navy",
    },
    gallery: [
      {
        src: gpm1.url,
        alt: "GlobalPortfolioManagement.com homepage with editorial serif hero",
        caption: "Homepage — positioning and headline metrics.",
      },
      {
        src: gpm2.url,
        alt: "GlobalPortfolioManagement.com strategy cards and allocation explorer",
        caption: "Strategy cards and the allocation explorer.",
      },
    ],
    liveUrl: "https://globalportfoliomanagement.com",
    mobileShot: {
      src: gpmM.url,
      alt: "GlobalPortfolioManagement.com homepage on a phone",
    },
    featured: true,
    status: "live",
  },
  {
    title: "Outdoor Staging Company",
    domain: "OutdoorStagingCompany.com",
    slug: "outdoorstagingcompany",
    kind: "web",
    category: "Website Project — Real Estate Staging",
    summary:
      "A domain-based website project for a boutique outdoor staging studio working with luxury real estate listings.",
    overview:
      "OutdoorStagingCompany.com is a live website I designed and built on my own domain for a boutique studio that stages patios, gardens, pool decks and estates for luxury real estate listings. The site leads with the visual result — the photograph that sells the home — then explains services, process and how to book a consultation.",
    role: "Concept, UI/UX design, front-end development, on-page SEO.",
    objective:
      "Position an outdoor staging studio as a premium service for agents and homeowners, and make booking a consultation the obvious next step.",
    designApproach:
      "Editorial luxury direction: a serif display face with italic emphasis, deep green and gold on warm off-white, generous whitespace, and large estate photography carrying the hero and portfolio.",
    developmentApproach:
      "Component-driven front-end with reusable service, portfolio and FAQ blocks, a persistent consultation call-to-action, semantic markup, and image handling tuned for large photography.",
    keySections: [
      "Hero with featured project",
      "Services",
      "Portfolio",
      "Process",
      "About and FAQ",
      "Consultation booking / contact",
    ],
    responsive:
      "Mobile-first stacked layout with tap-to-call, moving to a split hero and multi-column portfolio grid on desktop.",
    seoWork:
      "On-page SEO fundamentals: descriptive headings, per-page metadata, consistent business details, service-oriented copy, and alt text on every photograph.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "On-page SEO"],
    preview: {
      headline: "Outdoor spaces designed to sell homes beautifully",
      tagline: "Boutique outdoor staging for luxury listings",
      nav: ["Services", "Portfolio", "Process", "Contact"],
      cta: "Book consultation",
      blocks: ["Patios & pool decks", "Gardens", "Estates"],
      tone: "outdoor",
    },
    gallery: [
      {
        src: osc1.url,
        alt: "OutdoorStagingCompany.com homepage hero with a staged estate pool deck",
        caption: "Hero: editorial headline beside the staged result",
      },
      {
        src: osc2.url,
        alt: "OutdoorStagingCompany.com services and portfolio sections",
        caption: "Services and portfolio further down the page",
      },
    ],
    mobileShot: {
      src: oscM.url,
      alt: "OutdoorStagingCompany.com homepage on a phone",
    },
    liveUrl: "https://outdoorstagingcompany.com",
    featured: true,
    status: "live",
  },
  {
    title: "Affordable Transmission Repair",
    domain: "affordabletransmissionrepair.com",
    slug: "affordabletransmissionrepair",
    kind: "web",
    category: "Website Project — Automotive Service",
    summary:
      "A domain-based website project for a transmission repair shop, structured around services, service area and getting a quote quickly.",
    overview:
      "affordabletransmissionrepair.com is a live website I designed and built on my own domain for an automotive transmission repair business. It is structured the way a local service site should be: what gets repaired, proof of process, and a free-estimate request that is never more than one tap away.",
    role: "Concept, UI/UX design, front-end development, on-page SEO.",
    objective:
      "Make a transmission repair service easy to understand and easy to contact: what is repaired, where, and how to ask for a price.",
    designApproach:
      "High-contrast automotive direction: condensed display headings, a red accent used only for actions, workshop photography behind the hero, and service cards that stay readable in a garage on a phone.",
    developmentApproach:
      "Component-driven front-end with reusable service and FAQ blocks, semantic markup, sticky call and estimate actions, and image handling tuned for a fast first render.",
    keySections: [
      "Home with service summary",
      "Transmission services",
      "Service area",
      "Request a quote / contact",
    ],
    responsive:
      "Mobile-first: stacked service cards, tap-to-call in the header, and a four-column service grid from large screens upward.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Responsive Design", "Local SEO Fundamentals"],
    preview: {
      headline: "Transmission repair, diagnosed properly",
      tagline: "Rebuilds, diagnostics and fluid service",
      nav: ["Services", "Diagnostics", "Service area", "Quote"],
      cta: "Get a quote",
      blocks: ["Diagnostics", "Rebuilds", "Fluid service"],
      tone: "automotive",
    },
    gallery: [
      {
        src: atr1.url,
        alt: "affordabletransmissionrepair.com homepage hero with workshop photography",
        caption: "Homepage — hero, trust details and estimate call to action.",
      },
      {
        src: atr2.url,
        alt: "affordabletransmissionrepair.com transmission service cards",
        caption: "Service breakdown by repair type.",
      },
    ],
    liveUrl: "https://affordabletransmissionrepair.com",
    mobileShot: {
      src: atrM.url,
      alt: "affordabletransmissionrepair.com homepage on a phone",
    },
    featured: true,
    status: "live",
  },
  {
    title: "Floor Coating Contractors",
    domain: "floorcoatingcontractors.com",
    slug: "floorcoatingcontractors",
    kind: "web",
    category: "Website Project — Contracting",
    summary:
      "A domain-based website project for floor coating contractors, built around coating types, project photography space and quote requests.",
    overview:
      "floorcoatingcontractors.com is a live website I designed and built on my own domain for a floor coating and resin flooring contractor. Coating systems are explained plainly with pricing and timelines, and finished-floor photography carries the credibility.",
    role: "Concept, UI/UX design, front-end development, on-page SEO.",
    objective:
      "Explain coating options plainly, leave room for real finished-floor photography, and keep a quote request one tap away.",
    designApproach:
      "Dark, industrial direction with a single orange action colour, heavy sans headings, and coating cards that pair each system with its price per square foot and install time.",
    developmentApproach:
      "Front-end build with reusable coating, gallery and service-area blocks, semantic markup, and a persistent free-estimate call to action.",
    keySections: [
      "Home with coating overview",
      "Coating types (epoxy, polyaspartic, sealing)",
      "Residential and commercial work",
      "Project gallery",
      "Quote request / contact",
    ],
    responsive:
      "Mobile-first single-column reading with stacked coating cards, expanding to a four-column system grid and a mosaic project gallery on desktop.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Responsive Design", "Local SEO Fundamentals"],
    preview: {
      headline: "Durable floor coatings for home and shop",
      tagline: "Epoxy, polyaspartic and concrete sealing",
      nav: ["Coatings", "Residential", "Commercial", "Quote"],
      cta: "Free estimate",
      blocks: ["Epoxy", "Polyaspartic", "Sealing"],
      tone: "industrial",
    },
    gallery: [
      {
        src: fcc1.url,
        alt: "floorcoatingcontractors.com project gallery of finished coated floors",
        caption: "Project gallery of finished floors.",
      },
      {
        src: fcc2.url,
        alt: "floorcoatingcontractors.com coating service cards with pricing and timelines",
        caption: "Coating systems with pricing and timelines.",
      },
    ],
    liveUrl: "https://floorcoatingcontractors.com",
    mobileShot: {
      src: fccM.url,
      alt: "floorcoatingcontractors.com coating systems section on a phone",
    },
    status: "live",
  },
  {
    title: "Home Furnace Replacement",
    domain: "homefurnacereplacement.com",
    slug: "homefurnacereplacement",
    kind: "web",
    category: "Website Project — HVAC / Heating",
    summary:
      "A domain-based website project for furnace replacement and heating services, organised around system options and booking an estimate.",
    overview:
      "homefurnacereplacement.com is a live website I designed and built on my own domain for residential furnace replacement and heating services. It walks a homeowner from the repair-or-replace question to booking an in-home estimate.",
    role: "Concept, UI/UX design, front-end development, on-page SEO.",
    objective:
      "Help a homeowner decide whether to repair or replace, then make booking an in-home estimate the obvious next step.",
    designApproach:
      "Clean, trust-led HVAC direction: navy and red on white, benefit cards with plain-language copy, licensing details near the headline, and installation photography beside the hero.",
    developmentApproach:
      "Front-end build with reusable benefit, service and FAQ blocks, an emergency notice bar, semantic markup, and quote actions repeated at every scroll depth.",
    keySections: [
      "Home with heating service summary",
      "Furnace replacement",
      "Repair or replace guidance",
      "Service area",
      "Book an estimate / contact",
    ],
    responsive:
      "Mobile-first stacked layout with tap-to-call, moving to a split hero and four-column benefit grid on desktop.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Responsive Design", "Local SEO Fundamentals"],
    preview: {
      headline: "Furnace replacement without the guesswork",
      tagline: "Heating systems, installed and serviced",
      nav: ["Replacement", "Repair", "Service area", "Estimate"],
      cta: "Book estimate",
      blocks: ["Replacement", "Repair or replace", "Maintenance"],
      tone: "heat",
    },
    gallery: [
      {
        src: hfr1.url,
        alt: "homefurnacereplacement.com homepage hero with furnace installation photography",
        caption: "Homepage — hero and free-estimate call to action.",
      },
      {
        src: hfr2.url,
        alt: "homefurnacereplacement.com benefits and furnace service sections",
        caption: "Replacement benefits and service breakdown.",
      },
    ],
    liveUrl: "https://homefurnacereplacement.com",
    mobileShot: {
      src: hfrM.url,
      alt: "homefurnacereplacement.com homepage on a phone",
    },
    status: "live",
  },
];

export const webProjects = projects.filter((p) => p.kind === "web");

export const featuredWebProjects = webProjects.filter((p) => p.featured);

export function getWebProject(slug: string) {
  return webProjects.find((p) => p.slug === slug);
}

/** Ordered previous/next navigation across the /work index. */
export function getAdjacentWebProjects(slug: string) {
  const index = webProjects.findIndex((p) => p.slug === slug);
  if (index === -1) return { previous: undefined, next: undefined };
  return {
    previous: index > 0 ? webProjects[index - 1] : webProjects[webProjects.length - 1],
    next: index < webProjects.length - 1 ? webProjects[index + 1] : webProjects[0],
  };
}

export const STATUS_LABEL: Record<Project["status"], string> = {
  live: "Live",
  "in-progress": "In progress",
  concept: "Concept",
  placeholder: "Details to be added",
};
