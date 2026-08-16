import { createFileRoute, notFound } from "@tanstack/react-router";

import { CaseStudy } from "@/components/work/CaseStudy";
import { getAdjacentWebProjects, getWebProject } from "@/data/projects";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getWebProject(params.slug);
    if (!project) throw notFound();
    const { previous, next } = getAdjacentWebProjects(params.slug);
    return { project, previous, next };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project not found" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    const title = `${project.domain ?? project.title} — Case Study | Yassine Nachmaoui`;
    return {
      meta: [
        { title },
        { name: "description", content: project.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: project.summary },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/work/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/work/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: project.title,
            description: project.summary,
            creator: { "@type": "Person", name: "Yassine Nachmaoui" },
          }),
        },
      ],
    };
  },
  component: ProjectCaseStudy,
});

function ProjectCaseStudy() {
  const { project, previous, next } = Route.useLoaderData();
  return <CaseStudy project={project} previous={previous} next={next} />;
}
