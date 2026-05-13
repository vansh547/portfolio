import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { toast } from "sonner";
import { profile } from "../data/portfolio";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("All fields are required.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Message sent. I'll get back to you soon!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      const msg =
        err?.response?.data?.detail || "Could not send. Please try again.";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 border-t border-zinc-900"
      data-testid="contact-section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-5 space-y-6"
        >
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400">
            <span className="text-zinc-600">// </span>section_05
          </div>
          <h2 className="font-mono font-bold tracking-tighter text-4xl md:text-5xl text-zinc-100">
            contact<span className="text-emerald-400">.init()</span>
          </h2>
          <p className="text-zinc-400 max-w-md">
            Have an internship, freelance gig, or research collaboration in
            mind? Drop a message — I read every one.
          </p>

          <div className="space-y-3 pt-2">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-zinc-300 hover:text-emerald-400 transition-colors group"
              data-testid="contact-info-email"
            >
              <span className="w-9 h-9 rounded border border-zinc-800 flex items-center justify-center group-hover:border-emerald-500/50">
                <Mail size={15} />
              </span>
              <span className="font-mono text-sm">{profile.email}</span>
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="flex items-center gap-3 text-zinc-300 hover:text-sky-400 transition-colors group"
              data-testid="contact-info-phone"
            >
              <span className="w-9 h-9 rounded border border-zinc-800 flex items-center justify-center group-hover:border-sky-500/50">
                <Phone size={15} />
              </span>
              <span className="font-mono text-sm">+91 {profile.phone}</span>
            </a>
            <div
              className="flex items-center gap-3 text-zinc-300"
              data-testid="contact-info-location"
            >
              <span className="w-9 h-9 rounded border border-zinc-800 flex items-center justify-center">
                <MapPin size={15} />
              </span>
              <span className="font-mono text-sm">{profile.location}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-500 hover:text-emerald-400 transition-colors"
              aria-label="Github"
              data-testid="contact-social-github"
            >
              <Github size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-500 hover:text-sky-400 transition-colors"
              aria-label="LinkedIn"
              data-testid="contact-social-linkedin"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-7"
        >
          <div className="terminal-window rounded-lg overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 bg-zinc-950/70">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-400/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-3 font-mono text-xs text-zinc-500">
                ~/messages/new — vim
              </span>
            </div>
            <form
              onSubmit={handleSubmit}
              className="p-6 md:p-8 space-y-5"
              data-testid="contact-form"
            >
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500"
                >
                  <span className="text-emerald-400">$</span> your_name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  data-testid="contact-input-name"
                  placeholder="Ada Lovelace"
                  className="w-full bg-zinc-950/60 border border-zinc-800 focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/30 outline-none rounded-md px-3.5 py-3 text-zinc-100 font-mono text-sm placeholder-zinc-600 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500"
                >
                  <span className="text-emerald-400">$</span> your_email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  data-testid="contact-input-email"
                  placeholder="ada@compute.dev"
                  className="w-full bg-zinc-950/60 border border-zinc-800 focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/30 outline-none rounded-md px-3.5 py-3 text-zinc-100 font-mono text-sm placeholder-zinc-600 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500"
                >
                  <span className="text-emerald-400">$</span> message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  data-testid="contact-input-message"
                  placeholder="Tell me about the role, project, or idea..."
                  className="w-full bg-zinc-950/60 border border-zinc-800 focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/30 outline-none rounded-md px-3.5 py-3 text-zinc-100 font-mono text-sm placeholder-zinc-600 resize-none transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                data-testid="contact-submit-btn"
                className="group inline-flex items-center justify-center gap-2 bg-emerald-500 text-zinc-900 hover:bg-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3 rounded-md font-mono text-sm transition-all hover:glow-green-strong"
              >
                {loading ? (
                  <>processing<span className="cursor-blink">_</span></>
                ) : (
                  <>
                    <Send size={15} className="group-hover:translate-x-0.5 transition-transform" />
                    send_message
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
