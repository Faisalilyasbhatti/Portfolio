import { projects } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="border-y border-border bg-ink-900/30">
      <div className="container-px mx-auto max-w-6xl py-24 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="// 04 — Selected work"
            title="Projects"
            description="Concrete initiatives from my roles at Teresol and Evantagesoft."
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.06}>
              <article className="card flex h-full flex-col p-6 transition-all hover:-translate-y-1 hover:border-amber/30">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-400">
                  {project.source}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-ink-50">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">{project.description}</p>

                <div className="mt-4 rounded-lg border border-amber/15 bg-amber/5 px-4 py-2.5">
                  <p className="text-xs leading-relaxed text-amber/90">
                    <span className="font-mono uppercase tracking-wide text-amber">Role: </span>
                    {project.contribution}
                  </p>
                </div>

                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border bg-ink-950/60 px-2 py-0.5 font-mono text-[11px] text-ink-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
