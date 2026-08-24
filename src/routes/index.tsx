import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/home/Hero";
import { WorkPreview } from "@/components/home/WorkPreview";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { HomeContact } from "@/components/home/HomeContact";

const TITLE = "Yassine Nachmaoui — Websites for Local Businesses | Nachmaoui.com";
const DESCRIPTION =
  "Professional websites for local businesses — built in a week, without the agency-sized price tag. Web design, responsive development, and SEO foundations.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <WorkPreview />
      <ServicesPreview />
      <HomeContact />
    </>
  );
}

