import { skills } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="border-y border-border bg-ink-900/30">
      <div className="container-px mx-auto max-w-6xl py-24 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="// 02 — Stack"
            title="Skills &amp; technologies"
            description="Organized by where each technology shows up in day-to-day work."
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.05}>
              <div className="card h-full p-6 transition-colors hover:border-amber/30">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
                  {group.category}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-border bg-ink-950/60 px-2.5 py-1 font-mono text-xs text-ink-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
