import { motion } from "framer-motion";
import { Code2, Cpu, Database, Sparkles } from "lucide-react";

const stats = [
  { icon: Code2, label: "AI Projects Shipped", value: "02" },
  { icon: Cpu, label: "ML Models Trained", value: "02" },
  { icon: Database, label: "Datasets Wrangled", value: "10+" },
  { icon: Sparkles, label: "Sem in B.E.", value: "06" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 border-t border-zinc-900"
      data-testid="about-section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start"
        >
          <div className="md:col-span-5 space-y-3">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400">
              <span className="text-zinc-600">// </span>section_01
            </div>
            <h2 className="font-mono font-bold tracking-tighter text-3xl md:text-4xl text-zinc-100">
              about<span className="text-emerald-400">()</span>
              <span className="text-zinc-600"> {"{"}</span>
            </h2>
          </div>

          <div className="md:col-span-7 space-y-6 text-zinc-300 leading-relaxed">
            <p className="text-base md:text-lg">
              I&apos;m a 6th semester{" "}
              <span className="text-emerald-400">B.E. student</span> in
              Bangalore, deeply curious about how machines can learn from data
              and reason in natural language. I split my time between training
              <span className="text-zinc-100">
                {" "}
                classical ML models from scratch
              </span>{" "}
              and integrating modern{" "}
              <span className="text-zinc-100">LLM APIs</span> into real
              products.
            </p>
            <p className="text-sm md:text-base text-zinc-400">
              Whether it&apos;s a non-blocking voice assistant on the desktop, a
              medical chatbot grounded in lab reports, or a regression model
              built only with NumPy — I care about systems that are useful,
              measurable, and shipped.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-4">
              {stats.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.label}
                    className="border border-zinc-800 hover:border-emerald-500/40 rounded-md p-4 transition-all bg-zinc-950/40"
                    data-testid={`about-stat-${s.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    <Icon size={18} className="text-emerald-400 mb-2" />
                    <div className="font-mono text-2xl text-zinc-100">
                      {s.value}
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                      {s.label}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="font-mono text-zinc-600 pt-2">{"}"}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
