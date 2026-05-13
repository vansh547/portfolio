import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 overflow-hidden"
      data-testid="hero-section"
    >
      {/* Ambient grid */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#09090b] pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center min-h-[80vh]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-7 space-y-6"
        >
          {/* Status pill */}
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-emerald-400 border border-emerald-500/30 rounded-full px-4 py-1.5 bg-emerald-500/5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 pulse-ring"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            available_for_internships
          </div>

          {/* Code preamble */}
          <div className="font-mono text-xs sm:text-sm text-zinc-500 space-y-1">
            <div>
              <span className="text-zinc-600">01</span>{" "}
              <span className="text-pink-400">const</span>{" "}
              <span className="text-sky-400">developer</span>{" "}
              <span className="text-zinc-400">=</span>{" "}
              <span className="text-zinc-200">{`{`}</span>
            </div>
            <div className="pl-6">
              <span className="text-zinc-600">02</span>{" "}
              <span className="text-emerald-400">name</span>
              <span className="text-zinc-400">:</span>{" "}
              <span className="text-amber-300">"Vansh Gupta"</span>,
            </div>
          </div>

          <h1 className="font-mono font-bold tracking-tighter text-4xl sm:text-5xl lg:text-6xl text-zinc-100 leading-[1.05]">
            Hello, I&apos;m{" "}
            <span className="text-emerald-400 text-glow-green">Vansh.</span>
            <br />
            <span className="text-zinc-400">I build </span>
            <TypeAnimation
              sequence={[
                "AI assistants.",
                1800,
                "ML models.",
                1800,
                "data pipelines.",
                1800,
                "smart products.",
                1800,
              ]}
              wrapper="span"
              speed={45}
              className="text-sky-400"
              repeat={Infinity}
              data-testid="hero-typing"
            />
            <span className="cursor-blink text-emerald-400">|</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
            6th semester B.E. student specializing in{" "}
            <span className="text-zinc-200">
              Artificial Intelligence &amp; Machine Learning
            </span>
            . I architect non-blocking AI systems, train models from scratch,
            and ship full-stack apps around them.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              data-testid="hero-cta-projects"
              className="group inline-flex items-center gap-2 font-mono text-sm bg-emerald-500 text-zinc-900 hover:bg-emerald-400 px-5 py-3 rounded-md transition-all hover:glow-green-strong"
            >
              <span className="text-zinc-900/70">&gt;</span>{" "}
              view_projects.sh
              <ArrowDown
                size={14}
                className="group-hover:translate-y-0.5 transition-transform"
              />
            </a>
            <a
              href="#contact"
              data-testid="hero-cta-contact"
              className="inline-flex items-center gap-2 font-mono text-sm border border-zinc-700 hover:border-emerald-500/60 hover:text-emerald-400 text-zinc-200 px-5 py-3 rounded-md transition-all"
            >
              <span className="text-emerald-400">$</span> say_hello
            </a>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              data-testid="hero-github"
              className="text-zinc-500 hover:text-emerald-400 transition-colors"
              aria-label="Github"
            >
              <Github size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              data-testid="hero-linkedin"
              className="text-zinc-500 hover:text-sky-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              data-testid="hero-email"
              className="text-zinc-500 hover:text-amber-300 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <span className="inline-flex items-center gap-2 font-mono text-xs text-zinc-500 ml-2">
              <MapPin size={14} /> {profile.location}
            </span>
          </div>
        </motion.div>

        {/* Right: Terminal card */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="md:col-span-5"
        >
          <div className="terminal-window scanline relative rounded-lg overflow-hidden glow-green">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 bg-zinc-950/60">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-400/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-3 font-mono text-xs text-zinc-500">
                ~/vansh_gupta — zsh
              </span>
            </div>
            <div className="p-5 font-mono text-sm space-y-2 text-zinc-300">
              <div>
                <span className="text-emerald-400">vansh@dev</span>
                <span className="text-zinc-500">:</span>
                <span className="text-sky-400">~</span>$ whoami
              </div>
              <div className="text-zinc-200">→ ai_ml_developer</div>

              <div className="pt-2">
                <span className="text-emerald-400">vansh@dev</span>
                <span className="text-zinc-500">:</span>
                <span className="text-sky-400">~</span>$ cat focus.json
              </div>
              <pre className="text-zinc-200 text-xs sm:text-sm leading-6 whitespace-pre-wrap">
{`{
  "field":      "AI / ML",
  "interests":  ["LLMs", "Classical ML",
                 "Data Analysis"],
  "shipping":   ["Nova", "DocGPT"],
  "year":       6,
  "location":   "Bangalore, IN"
}`}
              </pre>

              <div className="pt-2">
                <span className="text-emerald-400">vansh@dev</span>
                <span className="text-zinc-500">:</span>
                <span className="text-sky-400">~</span>${" "}
                <span className="text-zinc-200">_</span>
                <span className="cursor-blink text-emerald-400">█</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
