import { motion } from "framer-motion";
import { Download, FileText, ExternalLink } from "lucide-react";
import { profile } from "../data/portfolio";

const highlights = [
  {
    role: "B.E. — 6th Semester",
    where: "Engineering College",
    period: "Ongoing",
    detail:
      "Coursework spanning data structures, databases, ML foundations and software engineering. Self-driven specialization in Applied AI/ML.",
  },
  {
    role: "Independent ML Practitioner",
    where: "Self-directed",
    period: "Ongoing",
    detail:
      "Built regression and classification models end-to-end — from EDA and feature engineering to deployment-ready pipelines.",
  },
  {
    role: "AI Application Builder",
    where: "Personal Projects",
    period: "Ongoing",
    detail:
      "Shipped Nova (desktop assistant) and DocGPT (medical chatbot) using Gemini APIs, Flask, and async Python.",
  },
];

export default function Resume() {
  return (
    <section
      id="resume"
      className="relative py-24 md:py-32 border-t border-zinc-900"
      data-testid="resume-section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Left: Heading + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="md:col-span-5 space-y-6 md:sticky md:top-24 self-start"
        >
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400">
            <span className="text-zinc-600">// </span>section_04
          </div>
          <h2 className="font-mono font-bold tracking-tighter text-4xl md:text-5xl text-zinc-100">
            resume<span className="text-emerald-400">.pdf</span>
          </h2>
          <p className="text-zinc-400">
            Grab the full PDF — education, projects, skills and contact in one
            page. The download is wired straight to my latest CV.
          </p>

          {/* CLI-styled download */}
          <div className="terminal-window rounded-lg overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-zinc-800 bg-zinc-950/70">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-2 font-mono text-[11px] text-zinc-500">
                terminal
              </span>
            </div>
            <div className="p-5 font-mono text-sm space-y-3">
              <div className="text-zinc-300">
                <span className="text-emerald-400">vansh@dev</span>
                <span className="text-zinc-500">:</span>
                <span className="text-sky-400">~</span>${" "}
                <span className="text-zinc-100">./download_resume.pdf</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={profile.resumeUrl}
                  download="Vansh_Gupta_Resume.pdf"
                  data-testid="resume-download-btn"
                  className="group inline-flex items-center justify-center gap-2 bg-emerald-500 text-zinc-900 hover:bg-emerald-400 px-5 py-3 rounded-md font-mono text-sm transition-all hover:glow-green-strong"
                >
                  <Download size={16} />
                  download_cv
                </a>
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-testid="resume-view-btn"
                  className="inline-flex items-center justify-center gap-2 border border-zinc-700 hover:border-emerald-500/60 hover:text-emerald-400 text-zinc-200 px-5 py-3 rounded-md font-mono text-sm transition-all"
                >
                  <ExternalLink size={16} />
                  view_in_tab
                </a>
              </div>
              <div className="text-[11px] font-mono text-zinc-500 pt-1">
                <FileText size={11} className="inline mr-1.5 -mt-0.5" />
                Vansh Gupta resume.pdf · auto-updated
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Timeline */}
        <div className="md:col-span-7 relative">
          <div className="absolute left-3 md:left-4 top-2 bottom-2 w-px bg-zinc-800" />
          <div className="space-y-8">
            {highlights.map((h, i) => (
              <motion.div
                key={h.role}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="relative pl-10 md:pl-12"
                data-testid={`timeline-item-${i}`}
              >
                <span className="absolute left-1.5 md:left-2.5 top-2 w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-emerald-500/15" />
                <div className="terminal-window rounded-lg p-5 hover:border-emerald-500/40 transition-all">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h4 className="font-mono font-semibold text-zinc-100 text-base md:text-lg tracking-tight">
                      {h.role}
                    </h4>
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-400">
                      {h.period}
                    </span>
                  </div>
                  <div className="font-mono text-xs text-zinc-500 mb-3">
                    @ {h.where}
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {h.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
