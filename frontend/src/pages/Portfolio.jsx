import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Portfolio() {
  return (
    <div
      className="relative min-h-screen bg-[#09090b] text-zinc-100"
      data-testid="portfolio-root"
    >
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
