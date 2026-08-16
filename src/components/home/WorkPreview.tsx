import { Link } from "@tanstack/react-router";
import { Section } from "../layout/Section";
import { ProjectRow } from "../work/ProjectRow";
import { featuredWebProjects } from "@/data/projects";

export function WorkPreview() {
  return (
    <Section id="work" label="Selected work">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <p className="eyebrow">Selected work</p>
          <h2 className="mt-6 text-[2rem] leading-[1.06] md:text-5xl">
            A few of the websites I have designed and built
          </h2>
        </div>
        <Link to="/work" className="editorial-link text-sm">
          All projects <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>

      <div className="mt-16 space-y-20 md:space-y-28">
        {featuredWebProjects.map((project, i) => (
          <ProjectRow key={project.slug} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
