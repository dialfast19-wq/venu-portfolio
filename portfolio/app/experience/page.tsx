import { Metadata } from "next";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { experienceData } from "@/data/experience";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

export const metadata: Metadata = {
  title: "Professional Experience | Venu Gudipati",
  description:
    "22+ years of progressive leadership in technology transformation, cloud modernization, and AI-driven innovation across Financial Services, Utilities, and Public Sectors.",
  openGraph: {
    title: "Professional Experience | Venu Gudipati",
    description:
      "22+ years of progressive leadership in technology transformation, cloud modernization, and AI-driven innovation.",
  },
};

export default function Experience() {
  return (
    <main className="min-h-screen py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade" className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Professional Experience
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            22+ years of progressive leadership in technology transformation,
            cloud modernization, and AI-driven innovation
          </p>
        </AnimatedSection>

        <ExperienceTimeline entries={experienceData.entries} />
      </div>
    </main>
  );
}
