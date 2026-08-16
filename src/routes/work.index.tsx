import { createFileRoute } from "@tanstack/react-router";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ProjectCard } from "@/components/work/ProjectCard";
import { ContactCta } from "@/components/shared/ContactCta";
import { webProjects } from "@/data/projects";

const TITLE = "Work — Website Projects | Yassine Nachmaoui";
const DESCRIPTION =
  "Website design and development projects by Yassine Nachmaoui, including Chandeluxe.ma and GoutDeParfum.com, each with its own case study.";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/work" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkIndex,
});

function WorkIndex() {
  return (
    <>
      <section className="bg-ink py-20 text-ink-foreground md:py-28">
        <Container>
          <div className="reveal max-w-3xl">
            <p className="text-xs uppercase tracking-[0.22em] text-ink-foreground/60">Work</p>
            <h1 className="mt-6 text-[2.4rem] leading-[1.05] md:text-6xl">
              Websites and digital products I've designed and built
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-ink-foreground/75">
              Domain-based website projects covering concept creation, UI/UX design, landing pages
              and front-end development. Every project has its own case study.
            </p>
          </div>
        </Container>
      </section>

      <Section label="All website projects">
        <div className="grid gap-16 md:grid-cols-2 md:gap-x-10 md:gap-y-16">
          {webProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <ContactCta title="Want something like this for your business?" />
    </>
  );
}
