import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "../layout/Section";
import { featuredWebProjects, type Project } from "@/data/projects";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-hairline bg-card transition-colors hover:border-primary/40">
      <div className="flex aspect-16/10 items-center justify-center border-b border-hairline bg-surface">
        {project.image ? (
          <img
            src={project.image.src}
            alt={project.image.alt}
            loading="lazy"
            className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <p className="px-6 text-center text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Screenshot placeholder — to be added
          </p>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">
          <span className="text-primary">{project.category}</span>
          <span aria-hidden="true">/</span>
          <span>{project.status === "live" ? "Live" : "In progress"}</span>
        </div>
        <h3 className="mt-4 text-2xl">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-hairline px-3 py-1 text-xs text-muted-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>

        <p className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
          Full case study coming soon
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </p>
      </div>
    </article>
  );
}

export function FeaturedWork() {
  return (
    <Section id="work">
      <SectionHeading
        eyebrow="Selected Work"
        title="Websites built around what the business actually needs"
        description="A small, honest selection. Each project below will get its own detailed case study with screenshots, problem, solution and objective."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {featuredWebProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}