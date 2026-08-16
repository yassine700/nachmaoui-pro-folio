import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/home/Hero";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { MobileMvp } from "@/components/home/MobileMvp";
import { SeoFundamentals } from "@/components/home/SeoFundamentals";
import { Services } from "@/components/home/Services";
import { About } from "@/components/home/About";
import { Process } from "@/components/home/Process";
import { Contact } from "@/components/home/Contact";

const TITLE = "Yassine Nachmaoui — Freelance Web Designer & Developer";
const DESCRIPTION =
  "Freelance web designer and developer based in Morocco. Website design, responsive development, mobile app MVPs and SEO fundamentals for businesses.";

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
      <FeaturedWork />
      <MobileMvp />
      <SeoFundamentals />
      <Services />
      <About />
      <Process />
      <Contact />
    </>
  );
}
