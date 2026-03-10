import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import Services from "@/components/Services";
import About from "@/components/About";
import ProjectShowcase from "@/components/ProjectShowcase";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg">
      <Navbar />
      <Hero />
      <TechMarquee />
      <Services />
      <About />
      <ProjectShowcase />
      <Contact />
    </main>
  );
}
