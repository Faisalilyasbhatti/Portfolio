import { ArrowUpRight, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "@/data/portfolio";
import Reveal from "./Reveal";

const links = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, "")}`,
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "faisal-ilyas-bhatti",
    href: profile.linkedin,
    icon: Linkedin,
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-ink-900/30">
      <div className="container-px mx-auto max-w-6xl py-24 sm:py-28">
        <Reveal>
          <p className="section-eyebrow mb-3">// 06 — Get in touch</p>
          <h2 className="max-w-xl font-mono text-2xl font-bold tracking-tight text-ink-50 sm:text-3xl">
            Open to Senior Software Engineer roles in backend &amp; banking systems.
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-300">
            The fastest way to reach me is email — happy to talk through a role, a system
            you're building, or just swap notes on core banking platforms.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {links.map((link, i) => {
            const Icon = link.icon;
            return (
              <Reveal key={link.label} delay={i * 0.06}>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="card group flex h-full flex-col justify-between p-6 transition-colors hover:border-amber/40"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="text-amber" size={20} />
                    <ArrowUpRight
                      size={16}
                      className="text-ink-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber"
                    />
                  </div>
                  <div className="mt-6">
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-400">
                      {link.label}
                    </p>
                    <p className="mt-1 break-words text-sm text-ink-100">{link.value}</p>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
