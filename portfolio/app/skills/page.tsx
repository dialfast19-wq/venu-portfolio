import { Metadata } from "next";
import { SkillsGrid } from "@/components/sections/SkillsGrid";
import { skillsData } from "@/data/skills";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

export const metadata: Metadata = {
  title: "Skills & Expertise | Venu Gudipati",
  description:
    "Comprehensive technical and leadership capabilities across cloud platforms, AI/ML, data platforms, DevOps, and enterprise technology.",
  openGraph: {
    title: "Skills & Expertise | Venu Gudipati",
    description:
      "Technical and leadership expertise in cloud, AI, data platforms, and enterprise technology.",
  },
};

export default function Skills() {
  return (
    <main className="min-h-screen py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade" className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Skills & Expertise
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technical and leadership capabilities across cloud, data, AI, and enterprise technology
          </p>
        </AnimatedSection>

        <SkillsGrid categories={skillsData.categories} />
      </div>
    </main>
  );
}
