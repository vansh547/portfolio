import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { skills, skillsMarquee } from "../data/portfolio";

const groups = [
  { key: "languages", label: "languages", color: "emerald" },
  { key: "ml", label: "ml & analytics", color: "sky" },
  { key: "libraries", label: "libraries", color: "amber" },
  { key: "databases", label: "databases", color: "emerald" },
  { key: "frameworks", label: "frameworks", color: "sky" },
  { key: "tools", label: "tools", color: "amber" },
];

const colorClass = {
  emerald: "border-emerald-500/30 text-emerald-300 bg-emerald-500/5",
  sky: "border-sky-500/30 text-sky-300 bg-sky-500/5",
  amber: "border-amber-500/30 text-amber-300 bg-amber-500/5",
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 md:py-32 border-t border-zinc-900 overflow-hidden"
      data-testid="skills-section"
    >
      {/* Kinetic background marquee */}
      <div className="absolute inset-0 flex flex-col justify-center pointer-events-none opacity-[0.04] select-none">
        <Marquee speed={40} gradient={false}>
          <span className="font-mono font-bold text-[10rem] text-zinc-100 tracking-tighter whitespace-nowrap pr-12">
            {skillsMarquee.join("  •  ")}
          </span>
        </Marquee>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        <div className="space-y-3 max-w-3xl">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400">
            <span className="text-zinc-600">// </span>section_03
          </div>
          <h2 className="font-mono font-bold tracking-tighter text-4xl md:text-5xl text-zinc-100">
            skills<span className="text-emerald-400">[]</span>
          </h2>
          <p className="text-zinc-400">
            The toolkit I reach for when turning data into products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g, idx) => (
            <motion.div
              key={g.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="terminal-window rounded-lg p-5 hover:border-emerald-500/40 transition-all"
              data-testid={`skill-group-${g.key}`}
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-4">
                <span className="text-emerald-400">$</span> ls ./{g.label.replace(/\s/g, "_")}
              </div>
              <div className="flex flex-wrap gap-2">
                {skills[g.key].map((s) => (
                  <span
                    key={s}
                    className={`font-mono text-xs px-2.5 py-1 rounded border ${colorClass[g.color]} hover:scale-105 transition-transform`}
                    data-testid={`skill-${s.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
