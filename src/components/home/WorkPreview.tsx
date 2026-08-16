import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "../layout/Section";
import { ProjectCard } from "../work/ProjectCard";
import { featuredWebProjects } from "@/data/projects";

export function WorkPreview() {
  return (
    <Section id="work" label="Selected work">
      <SectionHeading
        eyebrow="Selected Work"
        title="A selection of websites and digital products I've designed and built"
        description="Each project has its own case study covering the objective, the design and development approach, and the SEO fundamentals applied."
      />
      <div className="mt-14 grid gap-14 md:grid-cols-2 md:gap-10">
        {featuredWebProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      <Link
        to="/work"
        className="group mt-14 inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
      >
        View all projects
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </Section>
  );
}
