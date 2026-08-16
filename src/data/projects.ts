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
  /** Only set when the real URL is confirmed — the live CTA depends on it. */
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  status: "live" | "in-progress" | "concept" | "placeholder";
  year?: string;
};

const PLACEHOLDER_TEXT = "TODO: add this detail — placeholder, not a real claim.";

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
    gallery: [],
    // TODO: add liveUrl once the site is published — the live button only renders when it exists.
    featured: true,
    status: "in-progress",
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
    gallery: [],
    // TODO: add liveUrl once the site is published.
    featured: true,
    status: "in-progress",
  },
  {
    title: "Global Portfolio Management",
    domain: "GlobalPortfolioManagement.com",
    slug: "globalportfoliomanagement",
    kind: "web",
    category: "Website Concept / Professional Services",
    summary:
      "A domain-based website concept for a professional financial services presence, built for clarity and credibility.",
    overview:
      "GlobalPortfolioManagement.com is a website concept developed on my own domain for a professional, finance-oriented services presence. The design brief was restraint: a serious, quiet interface where structure and readability carry the credibility.",
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
    gallery: [],
    status: "concept",
  },
  {
    title: "Outdour Staging Company",
    domain: "OutdourStagingCompany.com",
    slug: "outdourstagingcompany",
    kind: "web",
    category: "Website Concept / Local Business",
    summary:
      "A domain-based website concept for an outdoor staging and event setup business, structured around services and quote requests.",
    overview:
      "OutdourStagingCompany.com is a website concept developed on my own domain for an outdoor staging and event setup business. It is built the way a local service business site should be: what you do, where you do it, and how to request a quote — reachable from anywhere on the site.",
    role: "Concept, UI/UX design, front-end development, local SEO fundamentals.",
    objective:
      "Make a service business understandable in one screen and turn a quote request into a two-tap action on a phone.",
    designApproach:
      "Practical, high-legibility layout: clear service cards, strong section headings, visible contact affordances, and space reserved for real project photography once available.",
    developmentApproach:
      "Front-end build with a persistent quote call-to-action, reusable service blocks, and accessible form markup ready for a real submission endpoint.",
    keySections: [
      "Home with service summary",
      "Services detail",
      "Service area",
      "Project gallery",
      "Quote request / contact",
    ],
    responsive:
      "Mobile-first with a sticky call-to-action bar, stacked service cards, and a wider gallery grid on desktop.",
    seoWork:
      "Local SEO fundamentals: consistent business details, location-relevant page structure, descriptive headings, per-page metadata, and image alt text.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Local SEO Fundamentals"],
    preview: {
      headline: "Outdoor staging, built and packed down for you",
      tagline: "Stages, platforms and event setup",
      nav: ["Services", "Service area", "Gallery", "Quote"],
      cta: "Request a quote",
      blocks: ["Stage build", "Event setup", "Service area"],
      tone: "outdoor",
    },
    gallery: [],
    status: "concept",
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
      "affordabletransmissionrepair.com is a domain website project for an automotive transmission repair business. Detailed project documentation and screenshots are still to be added — what is shown here is the intended structure for a local automotive service site, not a claim about a live client website.",
    role: "Domain website project — concept and structure. Full details to be added.",
    objective:
      "Make a transmission repair service easy to understand and easy to contact: what is repaired, where, and how to ask for a price.",
    designApproach: PLACEHOLDER_TEXT,
    developmentApproach: PLACEHOLDER_TEXT,
    keySections: [
      "Home with service summary",
      "Transmission services",
      "Service area",
      "Request a quote / contact",
    ],
    responsive: PLACEHOLDER_TEXT,
    technologies: [],
    preview: {
      headline: "Transmission repair, diagnosed properly",
      tagline: "Rebuilds, diagnostics and fluid service",
      nav: ["Services", "Diagnostics", "Service area", "Quote"],
      cta: "Get a quote",
      blocks: ["Diagnostics", "Rebuilds", "Fluid service"],
      tone: "automotive",
    },
    gallery: [],
    status: "placeholder",
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
      "floorcoatingcontractors.com is a domain website project for a floor coating and resin flooring contractor. Full project details and screenshots are still to be added; the presentation here shows the intended structure of the site rather than a live client engagement.",
    role: "Domain website project — concept and structure. Full details to be added.",
    objective:
      "Explain coating options plainly, leave room for real finished-floor photography, and keep a quote request one tap away.",
    designApproach: PLACEHOLDER_TEXT,
    developmentApproach: PLACEHOLDER_TEXT,
    keySections: [
      "Home with coating overview",
      "Coating types (epoxy, polyaspartic, sealing)",
      "Residential and commercial work",
      "Project gallery",
      "Quote request / contact",
    ],
    responsive: PLACEHOLDER_TEXT,
    technologies: [],
    preview: {
      headline: "Durable floor coatings for home and shop",
      tagline: "Epoxy, polyaspartic and concrete sealing",
      nav: ["Coatings", "Residential", "Commercial", "Quote"],
      cta: "Free estimate",
      blocks: ["Epoxy", "Polyaspartic", "Sealing"],
      tone: "industrial",
    },
    gallery: [],
    status: "placeholder",
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
      "homefurnacereplacement.com is a domain website project for a residential heating and furnace replacement business. Detailed documentation, technologies and screenshots are still to be added — this page presents the intended structure, not a live client website.",
    role: "Domain website project — concept and structure. Full details to be added.",
    objective:
      "Help a homeowner decide whether to repair or replace, then make booking an in-home estimate the obvious next step.",
    designApproach: PLACEHOLDER_TEXT,
    developmentApproach: PLACEHOLDER_TEXT,
    keySections: [
      "Home with heating service summary",
      "Furnace replacement",
      "Repair or replace guidance",
      "Service area",
      "Book an estimate / contact",
    ],
    responsive: PLACEHOLDER_TEXT,
    technologies: [],
    preview: {
      headline: "Furnace replacement without the guesswork",
      tagline: "Heating systems, installed and serviced",
      nav: ["Replacement", "Repair", "Service area", "Estimate"],
      cta: "Book estimate",
      blocks: ["Replacement", "Repair or replace", "Maintenance"],
      tone: "heat",
    },
    gallery: [],
    status: "placeholder",
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
  placeholder: "Coming soon",
};
