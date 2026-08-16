export type ProjectCategory = "Website" | "Landing Page" | "Mobile MVP";

export type Project = {
  title: string;
  slug: string;
  category: ProjectCategory;
  summary: string;
  technologies: string[];
  /** TODO: add real screenshots; until then cards render a labelled placeholder. */
  image?: { src: string; alt: string };
  challenge: string;
  solution: string;
  /** Objective or intent — never invented metrics. */
  outcome: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  status: "live" | "concept" | "in-progress";
};

export const projects: Project[] = [
  {
    title: "Home Furnace Replacement",
    slug: "home-furnace-replacement",
    category: "Website",
    summary:
      "A service website for a home heating and furnace replacement business, structured around the questions homeowners ask before requesting a quote.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Responsive Design", "SEO Fundamentals"],
    challenge:
      "Homeowners comparing furnace replacement options need pricing context, service coverage and trust signals quickly, usually on a phone.",
    solution:
      "A clear service structure, scannable sections, mobile-first layout, and a quote request path that is reachable from every screen.",
    outcome:
      "Objective: make requesting a quote the obvious next step on any device. TODO: replace with your own notes once the site is live.",
    // TODO: add the live URL.
    featured: true,
    status: "in-progress",
  },
  {
    title: "Moroccan Community / News Website",
    slug: "moroccan-community-news",
    category: "Website",
    summary:
      "A content-driven community and news site with a readable article layout, category navigation and a structure built to grow with more content.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Content Architecture", "SEO Fundamentals"],
    challenge:
      "Content sites get unreadable fast: long articles, many categories, and no clear hierarchy for a reader arriving from search.",
    solution:
      "Editorial typography, a comfortable reading measure, clean category URLs and internal linking so related content stays discoverable.",
    outcome:
      "Objective: a publishing structure that stays organised as the archive grows. TODO: replace with your own notes.",
    featured: true,
    status: "in-progress",
  },
  {
    title: "Téléporteur",
    slug: "teleporteur",
    category: "Mobile MVP",
    summary:
      "A concept mobile MVP for a local cargo marketplace connecting customers who need something transported with drivers who have space available.",
    technologies: ["Mobile UI Design", "User Flows", "Marketplace Logic", "Wallet / Credit System"],
    challenge:
      "Sending cargo locally usually means phone calls, informal pricing and no visibility on who is actually available.",
    solution:
      "Two mobile interfaces — one for customers posting a delivery, one for drivers accepting it — with a wallet and credit system supporting the marketplace.",
    outcome:
      "Concept / MVP: designed and specified as a first version, not a launched product.",
    featured: true,
    status: "concept",
  },
];

export const featuredWebProjects = projects.filter(
  (p) => p.featured && p.category !== "Mobile MVP",
);

export const teleporteur = projects.find((p) => p.slug === "teleporteur")!;