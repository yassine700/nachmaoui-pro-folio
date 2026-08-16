import { Section, SectionHeading } from "../layout/Section";

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <SectionHeading eyebrow="About" title="Yassine Nachmaoui" />
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            I am a Morocco-based freelance web designer and developer. I work with businesses that
            need a website which is genuinely useful — easy to read, easy to navigate, and fast on a
            mobile connection.
          </p>
          <p>
            My interest is in modern web technologies and in the practical side of them: how layout,
            typography, structure and performance change whether a visitor actually does what the
            business needs them to do.
          </p>
          <p>
            Alongside client websites I work on my own projects, including Téléporteur, a mobile MVP
            concept for a local cargo marketplace. I keep improving my technical skills through
            building, not through collecting certificates.
          </p>
          <p className="text-foreground">
            If you are looking for someone to design and build your website, or to shape an app idea
            into a first working version, I would be glad to hear about it.
          </p>
        </div>
      </div>
    </Section>
  );
}