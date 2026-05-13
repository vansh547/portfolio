import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { aiProjects, mlProjects } from "../data/portfolio";
import { fullStackProjects } from '../data/portfolio';

function ProjectCard({ p, idx, accent = "emerald" }) {
  const accentMap = {
    emerald: {
      text: "text-emerald-400",
      border: "hover:border-emerald-500/60",
      glow: "hover:glow-green",
      pillBg: "bg-emerald-500/5",
      pillText: "text-emerald-300",
      pillBorder: "border-emerald-500/30",
      dot: "bg-emerald-400",
    },
    sky: {
      text: "text-sky-400",
      border: "hover:border-sky-500/60",
      glow: "hover:shadow-[0_0_24px_rgba(14,165,233,0.18)]",
      pillBg: "bg-sky-500/5",
      pillText: "text-sky-300",
      pillBorder: "border-sky-500/30",
      dot: "bg-sky-400",
    },
  };
  const a = accentMap[accent];
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: idx * 0.08 }}
      className={`group terminal-window rounded-lg overflow-hidden border border-zinc-800 ${a.border} ${a.glow} transition-all`}
      data-testid={`project-card-${idx}`}
    >
      {/* IDE header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 bg-zinc-950/70">
        <span className="w-3 h-3 rounded-full bg-red-500/80" />
        <span className="w-3 h-3 rounded-full bg-amber-400/80" />
        <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
        <span className="ml-3 font-mono text-xs text-zinc-500 truncate">
          {p.title.toLowerCase().replace(/\s+/g, "_").replace(/[^\w]/g, "")}.md
        </span>
        <span className={`ml-auto inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] ${a.text}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${a.dot}`} />
          shipped
        </span>
      </div>

      <div className="p-6 md:p-7 space-y-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-mono font-bold tracking-tight text-xl md:text-2xl text-zinc-100 group-hover:text-zinc-50">
            {p.title}
          </h3>
          <a
            href={p.repo}
            target="_blank"
            rel="noreferrer"
            data-testid={`project-${idx}-repo`}
            className={`shrink-0 ${a.text} hover:scale-110 transition-transform`}
            aria-label={`${p.title} repo`}
          >
            <Github size={20} />
          </a>
        </div>

        <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
          {p.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          {p.stack.map((s) => (
            <span
              key={s}
              className={`font-mono text-[11px] uppercase tracking-[0.15em] px-2.5 py-1 rounded ${a.pillBg} ${a.pillText} border ${a.pillBorder}`}
            >
              {s}
            </span>
          ))}
        </div>

        <div className="pt-2 flex items-center gap-3 border-t border-zinc-900">
          <a
            href={p.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs text-zinc-300 hover:text-zinc-50 mt-4"
            data-testid={`project-${idx}-link`}
          >
            <span className={a.text}>&gt;</span> view source{" "}
            <ExternalLink
              size={12}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 border-t border-zinc-900"
      data-testid="projects-section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-20">
        {/* Section header */}
        <div className="space-y-3 max-w-3xl">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400">
            <span className="text-zinc-600">// </span>section_02
          </div>
          <h2 className="font-mono font-bold tracking-tighter text-4xl md:text-5xl text-zinc-100">
            projects<span className="text-emerald-400">.map</span>
            <span className="text-zinc-600">(</span>
            <span className="text-amber-300">build</span>
            <span className="text-zinc-600">)</span>
          </h2>
          <p className="text-zinc-400 max-w-xl">
            A focused selection of AI applications and ML models — each shipped
            with source code, real datasets, and measurable outcomes.
          </p>
        </div>

        {/* AI/API Projects */}
        <div className="space-y-6">
          <div className="flex items-baseline justify-between flex-wrap gap-2">
            <h3 className="font-mono text-lg text-zinc-200 tracking-tight">
              <span className="text-emerald-400">{"//"}</span> ai &amp; api
              projects
            </h3>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              {String(aiProjects.length).padStart(2, "0")} entries
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiProjects.map((p, i) => (
              <ProjectCard key={p.title} p={p} idx={i} accent="emerald" />
            ))}
          </div>
        </div>

        {/* ML Models */}
        <div className="space-y-6">
          <div className="flex items-baseline justify-between flex-wrap gap-2">
            <h3 className="font-mono text-lg text-zinc-200 tracking-tight">
              <span className="text-sky-400">{"//"}</span> ml models
            </h3>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              {String(mlProjects.length).padStart(2, "0")} entries
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mlProjects.map((p, i) => (
              <ProjectCard
                key={p.title}
                p={p}
                idx={i + aiProjects.length}
                accent="sky"
              />
            ))}
          </div>
        </div>
        {/* Full-Stack Projects */}
        <div className="space-y-6">
          <div className="flex items-baseline justify-between flex-wrap gap-2">
            <h3 className="font-mono text-lg text-zinc-200 tracking-tight">
              <span className="text-emerald-400">{"//"}</span> full-stack engineering &amp; cloud systems
            </h3>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              {String(fullStackProjects.length).padStart(2, "0")} entries
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fullStackProjects.map((p, i) => (
              <ProjectCard 
                key={p.title} 
                p={p} 
                idx={i + aiProjects.length + mlProjects.length} 
                accent="emerald" 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
