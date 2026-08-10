import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

const TYPE_SPEED = 55;
const HOLD_MS = 1600;
const DELETE_SPEED = 30;

type Phase = "typing" | "pausing" | "deleting";

function useRoleTyper(roles: readonly string[], enabled: boolean) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charCount, setCharCount] = useState(enabled ? 0 : roles[0].length);
  const [phase, setPhase] = useState<Phase>(enabled ? "typing" : "pausing");

  useEffect(() => {
    if (!enabled) return;
    const current = roles[roleIndex];
    let delay = TYPE_SPEED;
    let next: () => void;

    if (phase === "typing") {
      if (charCount < current.length) {
        next = () => setCharCount((c) => c + 1);
      } else {
        delay = HOLD_MS;
        next = () => setPhase("deleting");
      }
    } else if (phase === "deleting") {
      delay = DELETE_SPEED;
      if (charCount > 0) {
        next = () => setCharCount((c) => c - 1);
      } else {
        next = () => {
          setRoleIndex((i) => (i + 1) % roles.length);
          setPhase("typing");
        };
      }
    } else {
      next = () => setPhase("typing");
    }

    const timeout = setTimeout(next, delay);
    return () => clearTimeout(timeout);
  }, [charCount, phase, roleIndex, roles, enabled]);

  return roles[roleIndex].slice(0, charCount);
}

export default function Hero() {
  const reducedMotion = useReducedMotion();
  const typed = useRoleTyper(profile.roles, !reducedMotion);

  const services = [
    { label: "ATM Channel Services", status: "OPERATIONAL" },
    { label: "Core Banking (OBDX)", status: "OPERATIONAL" },
    { label: "Transaction Processing", status: "OPERATIONAL" },
  ];

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-grid bg-[length:40px_40px] opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-amber/10 blur-[120px]"
        aria-hidden
      />

      <div className="container-px relative mx-auto grid max-w-6xl items-center gap-12 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:py-0">
        <motion.div
          initial={reducedMotion ? undefined : { opacity: 0, y: 24 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="section-eyebrow mb-5">$ whoami</p>

          <div className="mb-6 flex items-center gap-4">
            <img
              src={profile.avatar}
              alt={profile.name}
              width={72}
              height={72}
              className="h-[72px] w-[72px] rounded-xl border border-border object-cover"
            />
            <div>
              <h1 className="font-mono text-3xl font-bold leading-[1.1] tracking-tight text-ink-50 sm:text-4xl lg:text-5xl">
                {profile.name}
              </h1>
            </div>
          </div>

          <div className="mt-4 h-8 font-mono text-lg text-amber sm:text-xl">
            {typed}
            <span className="ml-0.5 inline-block h-5 w-[2px] translate-y-0.5 bg-amber animate-blink" aria-hidden />
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-300 sm:text-lg">
            {profile.summary}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#experience"
              className="group inline-flex items-center gap-2 rounded-md bg-amber px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wide text-ink-950 transition-transform hover:-translate-y-0.5"
            >
              View Experience
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wide text-ink-100 transition-colors hover:border-amber/50 hover:text-amber"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-ink-400 transition-colors hover:text-amber"
            >
              <Linkedin size={19} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Send email"
              className="text-ink-400 transition-colors hover:text-amber"
            >
              <Mail size={19} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={reducedMotion ? undefined : { opacity: 0, y: 24 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="card overflow-hidden shadow-2xl shadow-black/40"
        >
          <div className="flex items-center gap-1.5 border-b border-border bg-ink-900/60 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
            <span className="ml-3 font-mono text-[11px] text-ink-400">system-status.log</span>
          </div>
          <div className="p-5 sm:p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-400">
              Systems worked on
            </p>
            <ul className="mt-4 space-y-3">
              {services.map((s) => (
                <li
                  key={s.label}
                  className="flex items-center justify-between rounded-lg border border-border bg-ink-900/40 px-4 py-3"
                >
                  <span className="font-mono text-sm text-ink-100">{s.label}</span>
                  <span className="flex items-center gap-2 font-mono text-[10px] tracking-wide text-signal">
                    <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                    {s.status}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-lg border border-amber/20 bg-amber/5 px-4 py-3 font-mono text-xs text-amber/90">
              stack: Java · Spring Boot · Quarkus · DB2 · OBDX
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
