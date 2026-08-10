import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, profile } from "@/data/portfolio";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useScrollSpy(nav.map((n) => n.href.slice(1)));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "bg-ink-950/85 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="container-px mx-auto flex h-16 max-w-6xl items-center justify-between">
        <a
          href="#top"
          className="font-mono text-sm font-semibold tracking-tight text-ink-100 hover:text-amber transition-colors"
        >
          {profile.name
            .split(" ")
            .map((w) => w[0])
            .join("")}
          <span className="text-amber">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {nav.map((item) => {
            const isActive = activeId === item.href.slice(1);
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={cn(
                    "relative px-3 py-2 font-mono text-xs tracking-wide uppercase transition-colors",
                    isActive ? "text-amber" : "text-ink-300 hover:text-ink-100"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-[1px] h-px bg-amber" aria-hidden />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-md border border-amber/40 px-4 py-1.5 font-mono text-xs uppercase tracking-wide text-amber hover:bg-amber/10 transition-colors"
        >
          Contact
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-ink-100 hover:bg-ink-800"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-ink-950/95 backdrop-blur-md">
          <ul className="container-px mx-auto max-w-6xl py-4 flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 font-mono text-sm uppercase tracking-wide text-ink-200 hover:bg-ink-800 hover:text-amber transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-md border border-amber/40 px-3 py-3 text-center font-mono text-sm uppercase tracking-wide text-amber"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
