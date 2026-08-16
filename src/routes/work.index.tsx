import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { ProjectRow } from "@/components/work/ProjectRow";
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
      <PageHeader
        eyebrow="Work"
        title={<>Websites and digital products I&apos;ve designed and built</>}
        lead="Domain-based website projects covering concept creation, UI/UX design, landing pages and front-end development. Every project has its own case study."
        meta={[
          { term: "Projects", value: String(webProjects.length) },
          { term: "Disciplines", value: "Design · Development · SEO" },
          { term: "Based in", value: "Morocco, working remotely" },
        ]}
      />

      <Section label="All website projects" divider={false}>
        <div className="space-y-20 md:space-y-32">
          {webProjects.map((project, i) => (
            <ProjectRow key={project.slug} project={project} index={i} />
          ))}
        </div>
      </Section>

      <ContactCta title="Want something like this for your business?" />
    </>
  );
}
