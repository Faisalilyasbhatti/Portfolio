import { experience } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="container-px mx-auto max-w-6xl py-24 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="// 03 — Timeline"
          title="Experience"
          description="In chronological order, most recent first."
        />
      </Reveal>

      <div className="relative">
        <div
          className="absolute left-[7px] top-2 bottom-2 hidden w-px bg-border sm:block"
          aria-hidden
        />
        <ol className="space-y-8">
          {experience.map((job, i) => (
            <Reveal key={job.id} delay={i * 0.08}>
              <li className="relative sm:pl-10">
                <span
                  className="absolute left-0 top-1.5 hidden h-[15px] w-[15px] rounded-full border-2 border-amber bg-ink-950 sm:block"
                  aria-hidden
                />
                <div className="card p-6 transition-colors hover:border-amber/30 sm:p-7">
                  <div className="flex items-start gap-4">
                    {job.logo && (
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-border bg-ink-50 p-1.5">
                        <img
                          src={job.logo}
                          alt={`${job.company} logo`}
                          className="h-full w-full object-contain"
                        />
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                        <h3 className="text-lg font-semibold text-ink-50">{job.role}</h3>
                        <span className="font-mono text-xs text-ink-400">
                          {job.start} — {job.current ? "Present" : job.end}
                        </span>
                      </div>
                      <p className="mt-1 text-sm font-medium text-amber">
                        {job.company}
                        <span className="text-ink-400"> · {job.location}</span>
                      </p>
                    </div>
                  </div>

                  {job.stack && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-border bg-ink-950/60 px-2 py-0.5 font-mono text-[11px] text-ink-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <ul className="mt-5 space-y-2.5">
                    {job.highlights.map((point, idx) => (
                      <li key={idx} className="flex gap-3 text-sm leading-relaxed text-ink-300">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-500" aria-hidden />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
