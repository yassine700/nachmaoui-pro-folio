import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/home/Hero";
import { WorkPreview } from "@/components/home/WorkPreview";
import { AppsPreview } from "@/components/home/AppsPreview";
import { SeoPreview } from "@/components/home/SeoPreview";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ContactCta } from "@/components/shared/ContactCta";

const TITLE = "Yassine Nachmaoui — Web Designer & Developer | Nachmaoui.com";
const DESCRIPTION =
  "Yassine Nachmaoui designs and builds modern websites, web applications and SEO-ready digital experiences for businesses.";

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
      <AppsPreview />
      <SeoPreview />
      <ServicesPreview />
      <AboutPreview />
      <ContactCta />
    </>
  );
}
