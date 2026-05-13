import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, profile } from "../data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = navLinks.map((l) => document.getElementById(l.id));
      const y = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        if (s && s.offsetTop <= y) {
          setActive(navLinks[i].id);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-black/60 border-b border-white/10"
          : "bg-transparent"
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <button
          onClick={() => handleClick("home")}
          className="font-mono text-sm tracking-tight text-zinc-100 hover:text-emerald-400 transition-colors"
          data-testid="navbar-logo"
        >
          <span className="text-emerald-400">~/</span>
          {profile.name.toLowerCase().replace(" ", "_")}
          <span className="cursor-blink text-emerald-400">_</span>
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              data-testid={`nav-link-${link.id}`}
              className={`font-mono text-xs uppercase tracking-[0.2em] px-3 py-2 rounded transition-all ${
                active === link.id
                  ? "text-emerald-400"
                  : "text-zinc-400 hover:text-zinc-100"
              }`}
            >
              <span className="text-emerald-400/60">$</span> {link.label}
            </button>
          ))}
        </nav>

        <button
          className="md:hidden p-2 text-zinc-100"
          onClick={() => setOpen(!open)}
          data-testid="navbar-toggle"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-black/95 border-b border-white/10 overflow-hidden"
            data-testid="navbar-mobile"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleClick(link.id)}
                  data-testid={`nav-link-mobile-${link.id}`}
                  className="font-mono text-sm uppercase tracking-[0.2em] text-zinc-300 hover:text-emerald-400 text-left py-2"
                >
                  <span className="text-emerald-400/60">$</span> {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
