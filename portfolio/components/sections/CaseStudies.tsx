"use client";

import { ProjectData } from "@/data/projects";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import Image from "next/image";

export interface CaseStudiesProps {
  projects: ProjectData[];
}

/**
 * CaseStudies Component
 * 
 * Displays project highlights in a responsive grid layout.
 * Features:
 * - Grid layout (1-3 columns responsive)
 * - Project cards with title, description, technologies, and outcomes
 * - Optimized images using next/image
 * - Reverse chronological order
 * - Animated cards on scroll
 */
export function CaseStudies({ projects }: CaseStudiesProps) {
  // Sort projects in reverse chronological order (most recent first)
  const sortedProjects = [...projects].sort((a, b) => {
    const dateA = a.endDate || a.startDate;
    const dateB = b.endDate || b.startDate;
    return dateB.localeCompare(dateA);
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {sortedProjects.map((project, index) => (
        <AnimatedSection
          key={project.id}
          animation="slide-up"
          delay={index * 0.1}
          threshold={0.2}
        >
          <Card className="h-full flex flex-col">
            {project.imageUrl && (
              <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            )}
            
            <CardHeader>
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <CardDescription className="line-clamp-2">
                {project.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col gap-4">
              {/* Technologies */}
              <div>
                <h4 className="text-sm font-semibold mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Outcomes */}
              <div className="flex-1">
                <h4 className="text-sm font-semibold mb-2">Key Outcomes:</h4>
                <ul className="space-y-1">
                  {project.outcomes.slice(0, 3).map((outcome, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="text-primary mr-2 mt-0.5 flex-shrink-0" aria-hidden="true">
                        ✓
                      </span>
                      <span className="text-muted-foreground">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Featured badge */}
              {project.featured && (
                <div className="mt-auto pt-2">
                  <Badge variant="default" className="text-xs">
                    Featured Project
                  </Badge>
                </div>
              )}
            </CardContent>
          </Card>
        </AnimatedSection>
      ))}
    </div>
  );
}
