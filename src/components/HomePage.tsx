import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/NavBar";
import { ProjectsSection } from "@/components/ProjectsSection";
import { StarBackground } from "@/components/StarBackground";

export const HomePage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <StarBackground />

      <div className="pointer-events-none fixed inset-0 z-0 animate-slow-drift bg-[radial-gradient(circle_at_12%_15%,rgba(56,189,248,0.15),transparent_36%),radial-gradient(circle_at_88%_8%,rgba(45,212,191,0.12),transparent_35%),radial-gradient(circle_at_65%_82%,rgba(56,189,248,0.08),transparent_40%)]" />

      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};
