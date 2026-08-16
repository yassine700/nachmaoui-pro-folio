import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { BrowserFrame } from "../shared/BrowserFrame";
import { STATUS_LABEL, type Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const isPlaceholder = project.status === "placeholder";

  return (
    <article className="group flex flex-col">
      <Link
        to="/work/$slug"
        params={{ slug: project.slug }}
        className="block rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        aria-label={`View the ${project.title} case study`}
      >
        <BrowserFrame
          label={project.domain ?? "Details to be added"}
          image={project.gallery[0]}
          className="transition-colors group-hover:border-primary/50"
        />
      </Link>

      <div className="mt-6 flex flex-1 flex-col">
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">
          <span className="text-primary">{project.category}</span>
          <span aria-hidden="true">/</span>
          <span>{STATUS_LABEL[project.status]}</span>
        </div>

        <h3 className="mt-3 text-2xl">
          {project.domain ? (
            <>
              {project.title}{" "}
              <span className="text-muted-foreground">· {project.domain}</span>
            </>
          ) : (
            project.title
          )}
        </h3>

        <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted-foreground">
          {project.summary}
        </p>

        {project.technologies.length > 0 ? (
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-hairline px-3 py-1 text-xs text-muted-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-6 flex flex-wrap items-center gap-5 text-sm font-medium">
          <Link
            to="/work/$slug"
            params={{ slug: project.slug }}
            className="inline-flex items-center gap-1.5 text-primary underline-offset-4 hover:underline"
          >
            {isPlaceholder ? "View placeholder page" : "View case study"}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 underline-offset-4 hover:underline"
            >
              Live site
              <ExternalLink className="size-4" aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
