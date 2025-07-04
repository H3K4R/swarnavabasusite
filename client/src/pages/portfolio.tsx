import { useEffect } from "react";
import Navigation from "@/components/ui/navigation";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Experience from "@/components/sections/experience";
import Education from "@/components/sections/education";
import Achievements from "@/components/sections/achievements";
import Contact from "@/components/sections/contact";

export default function Portfolio() {
  useEffect(() => {
    // Set page title and meta description
    document.title = "Swarnava Basu - Cloud & DevOps Engineer Portfolio";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Swarnava Basu - Cloud & DevOps Engineer with 4+ years of experience in AWS, Azure, GCP. Specializing in HIPAA-compliant infrastructure, microservices, and scalable solutions.'
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}
