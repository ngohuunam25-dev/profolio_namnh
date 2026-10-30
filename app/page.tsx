import { RevealObserver } from "@/components/reveal-observer";
import { ArsenalSection } from "@/components/sections/arsenal-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { JourneySection } from "@/components/sections/journey-section";
import { LabSection } from "@/components/sections/lab-section";
import { PlaygroundSection } from "@/components/sections/playground-section";
import { PrinciplesSection } from "@/components/sections/principles-section";
import { WorkSection } from "@/components/sections/work-section";
import { PROJECTS } from "@/lib/content";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-ink">
      <RevealObserver />

      {/* Section 1: Hero Discipline (Layout Family: Asymmetric Editorial Split) */}
      <HeroSection />

      {/* Section 2: Core Philosophy & Metrics (Layout Family: Monospace Key-Value Grid) */}
      <PrinciplesSection />

      {/* Section 3: Selected Work (Layout Family: Sticky Split-Screen Focus with Sanity-ready schemas) */}
      <WorkSection projects={PROJECTS} />

      {/* Section 4: Micro-Interactions & Lab Experiments (Layout Family: Interactive Bento Cells) */}
      <LabSection />

      {/* Section 5: Technical Arsenal (Layout Family: Hierarchical Taxonomy Matrix) */}
      <ArsenalSection />

      {/* Section 6: Engineering Journey (Layout Family: Linear Audit Trail / Commit-style Log) */}
      <JourneySection />

      {/* Section 7: Open Source & Code Playground (Layout Family: Dual-Column Code Spec) */}
      <PlaygroundSection />

      {/* Section 8: Colophon & Contact Terminal (Layout Family: Command Minimalist Footer) */}
      <ContactSection />
    </main>
  );
}
