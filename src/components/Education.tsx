import { Award, GraduationCap, Languages as LanguagesIcon } from "lucide-react";
import { certifications, education, languages } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="container-px mx-auto max-w-6xl py-24 sm:py-28">
      <Reveal>
        <SectionHeading eyebrow="// 05 — Foundation" title="Education &amp; certifications" />
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-3">
        <Reveal>
          <div className="card h-full p-6">
            <GraduationCap className="text-amber" size={22} />
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-400">
              {education.start} — {education.end}
            </p>
            <h3 className="mt-2 text-base font-semibold text-ink-50">{education.degree}</h3>
            <p className="mt-1 text-sm text-ink-300">{education.institution}</p>
            <p className="mt-3 font-mono text-xs text-amber">{education.detail}</p>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="card h-full p-6">
            <Award className="text-amber" size={22} />
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-400">
              Certifications
            </p>
            <ul className="mt-3 space-y-3">
              {certifications.map((cert) => (
                <li key={cert.name} className="flex items-baseline justify-between gap-3">
                  <span className="text-sm text-ink-200">{cert.name}</span>
                  {cert.date && (
                    <span className="shrink-0 font-mono text-[11px] text-ink-400">{cert.date}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="card h-full p-6">
            <LanguagesIcon className="text-amber" size={22} />
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-400">
              Languages
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {languages.map((lang) => (
                <li
                  key={lang}
                  className="rounded-md border border-border bg-ink-950/60 px-3 py-1 text-sm text-ink-200"
                >
                  {lang}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
