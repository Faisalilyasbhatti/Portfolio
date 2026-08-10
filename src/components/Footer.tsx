import { Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-px mx-auto flex max-w-6xl flex-col items-center gap-4 py-8 sm:flex-row sm:justify-between">
        <p className="font-mono text-xs text-ink-400">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-ink-400 transition-colors hover:text-amber"
          >
            <Linkedin size={17} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Send email"
            className="text-ink-400 transition-colors hover:text-amber"
          >
            <Mail size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
