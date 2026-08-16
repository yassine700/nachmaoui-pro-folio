// TODO: replace with your real email address before sending this portfolio to clients.
export const CONTACT_EMAIL = "hello@nachmaoui.com";

export const SERVICES = [
  {
    title: "Website Design",
    description:
      "Multi-page business websites designed around what your visitors need to decide: clear structure, readable typography, and pages that work as well on a phone as on a laptop.",
  },
  {
    title: "Landing Pages",
    description:
      "Single-purpose pages built for one action — a booking, a quote request, a signup — with focused copy structure, fast loading, and a form that is easy to complete.",
  },
  {
    title: "Mobile App MVP Development",
    description:
      "Turning an app idea into a concrete first version: user flows, screen design, and a working interface you can show, test, and refine before investing further.",
  },
  {
    title: "SEO Foundations",
    description:
      "The technical and structural basics done properly from the start — semantic markup, headings, titles and descriptions, clean URLs, image optimisation, and mobile performance.",
  },
] as const;

export const SEO_FUNDAMENTALS = [
  { title: "Semantic HTML", detail: "Real header, nav, main, article and footer elements." },
  { title: "Heading structure", detail: "One clear H1 per page with logical H2/H3 nesting." },
  { title: "Page titles", detail: "Unique, descriptive titles for every page." },
  { title: "Meta descriptions", detail: "Written per page, not duplicated across the site." },
  { title: "Clean URLs", detail: "Short, readable, human-guessable paths." },
  { title: "Internal linking", detail: "Sections and case studies linked in a sensible hierarchy." },
  { title: "Image optimisation", detail: "Right formats and sizes, lazy loading below the fold." },
  { title: "Alt text", detail: "Descriptive alternatives that also help accessibility." },
  { title: "Mobile responsiveness", detail: "Designed mobile-first, tested at real breakpoints." },
  { title: "Performance", detail: "Minimal scripts, no layout shift, fast first render." },
  { title: "Structured content", detail: "Content organised so both people and crawlers follow it." },
  { title: "Technical basics", detail: "Canonical URLs, sitemap, robots.txt, Open Graph metadata." },
  { title: "Local SEO basics", detail: "Consistent business details and location-relevant content." },
] as const;

export const PROCESS = [
  {
    step: "01",
    title: "Discover",
    description:
      "We talk through your business, your audience, and what the site actually needs to achieve. I map the pages and content before any design starts.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Layout, typography and structure come first, on mobile and desktop, so you can react to something concrete instead of a description.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Responsive front-end development with clean, semantic markup, SEO fundamentals and performance handled as part of the build, not afterwards.",
  },
  {
    step: "04",
    title: "Launch & Improve",
    description:
      "Deployment, final checks across devices, and then iteration — content updates, new pages and refinements as your business changes.",
  },
] as const;
export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/apps", label: "Apps" },
  { to: "/seo", label: "SEO" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

// TODO: replace each placeholder with your real profile URL.
export const SOCIAL_LINKS = [
  { label: "LinkedIn" },
  { label: "GitHub" },
  { label: "Dribbble" },
] as const;

export const SKILLS = [
  {
    group: "Web",
    items: ["HTML", "CSS", "JavaScript", "React", "Responsive Design"],
  },
  {
    group: "Tools",
    items: ["Git", "GitHub", "VS Code", "Lovable", "Modern web tooling"],
  },
  {
    group: "SEO",
    items: ["On-page SEO", "Technical SEO basics", "Local SEO fundamentals", "Content structure"],
  },
] as const;

export const PROJECT_TYPES = [
  "Website design & development",
  "Landing page",
  "Web app / MVP concept",
  "SEO foundations",
  "Something else",
] as const;
