import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

import { CinematicHero } from "@/components/home/CinematicHero";
import { WorkPreview } from "@/components/home/WorkPreview";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { HomeContact } from "@/components/home/HomeContact";

const TITLE = "Yassine Nachmaoui — Engineering Digital Ecosystems | Nachmaoui.com";
const DESCRIPTION =
  "Websites, interfaces and search foundations for local businesses — designed, built and shipped in a week. Freelance web designer and developer.";

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
  // The homepage is a dark, cinematic surface regardless of the stored theme
  // so the 3D scene always reads correctly. Restored on navigation away.
  useEffect(() => {
    const root = document.documentElement;
    const hadDark = root.classList.contains("dark");
    root.classList.add("dark");
    return () => {
      if (!hadDark) root.classList.remove("dark");
    };
  }, []);

  return (
    <div className="bg-scene text-scene-foreground">
      <CinematicHero />
      <WorkPreview />
      <ServicesPreview />
      <HomeContact />
    </div>
  );
}
