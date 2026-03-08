import { Metadata } from "next";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { projectsData } from "@/data/projects";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

export const metadata: Metadata = {
  title: "Case Studies | Venu Gudipati",
  description:
    "Major technology transformation projects across Financial Services, Utilities, and Public Sectors. AI platforms, cloud migrations, and enterprise modernization.",
  openGraph: {
    title: "Case Studies | Venu Gudipati",
    description:
      "Technology transformation projects: AI platforms, cloud migrations, and enterprise modernization.",
  },
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade" className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Case Studies
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Major technology transformation projects delivering measurable business impact
          </p>
        </AnimatedSection>

        <CaseStudies projects={projectsData.projects} />
      </div>
    </main>
  );
}
