import TerminalHero from "@/components/TerminalHero";
import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 selection:bg-cyan-500/30">
      <Navigation />
      <TerminalHero />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
