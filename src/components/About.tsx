import { profile } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="container-px mx-auto max-w-6xl py-24 sm:py-28">
      <Reveal>
        <SectionHeading eyebrow="// 01 — About" title="Background" />
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal delay={0.05}>
          <div className="card p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-400">
              Focus
            </p>
            <p className="mt-3 text-lg font-semibold text-ink-50">
              Backend systems for banking &amp; financial services
            </p>
            <div className="mt-6 space-y-4">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-400">
                  Based in
                </p>
                <p className="mt-1 text-sm text-ink-200">{profile.location}</p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-400">
                  Core stack
                </p>
                <p className="mt-1 text-sm text-ink-200">Java · Spring Boot · Quarkus</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-5">
            {profile.about.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-ink-300 sm:text-[17px]">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
