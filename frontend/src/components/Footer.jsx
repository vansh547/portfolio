import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer
      className="border-t border-zinc-900 py-10 mt-8"
      data-testid="footer"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-zinc-500">
          <span className="text-emerald-400">{"//"}</span> built by{" "}
          <span className="text-zinc-300">{profile.name}</span> · {new Date().getFullYear()} ·{" "}
          <span className="text-emerald-400">end_of_file</span>
        </p>
        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-500 hover:text-emerald-400 transition-colors"
            aria-label="Github"
            data-testid="footer-github"
          >
            <Github size={16} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-500 hover:text-sky-400 transition-colors"
            aria-label="LinkedIn"
            data-testid="footer-linkedin"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-zinc-500 hover:text-amber-300 transition-colors"
            aria-label="Email"
            data-testid="footer-email"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
