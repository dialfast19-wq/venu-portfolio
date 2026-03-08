"use client";

import { ExperienceEntry } from "@/data/experience";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

export interface ExperienceTimelineProps {
  entries: ExperienceEntry[];
}

/**
 * Format date from ISO 8601 (YYYY-MM) to readable format
 */
function formatDate(isoDate: string | null): string {
  if (!isoDate) return "Present";

  const [year, month] = isoDate.split("-");
  const date = new Date(parseInt(year), parseInt(month) - 1);

  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

/**
 * ExperienceTimeline Component
 *
 * Displays a vertical timeline of career experience with visual connectors.
 * Features:
 * - Vertical timeline with connecting lines and dots
 * - Reverse chronological order (most recent first)
 * - Animated entry reveal on scroll
 * - Responsive layout (full width mobile, centered desktop)
 * - Company, role, dates, achievements, and technologies for each entry
 */
export function ExperienceTimeline({ entries }: ExperienceTimelineProps) {
  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Timeline vertical line - hidden on mobile, visible on md+ */}
      <div
        className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/30 to-transparent"
        aria-hidden="true"
      />

      <div className="space-y-12">
        {entries.map((entry, index) => (
          <AnimatedSection
            key={entry.id}
            animation="slide-up"
            delay={index * 0.1}
            threshold={0.2}
          >
            <div className="relative">
              {/* Timeline dot - hidden on mobile, visible on md+ */}
              <div
                className="hidden md:block absolute left-8 top-8 w-4 h-4 -ml-2 rounded-full bg-primary ring-4 ring-background z-10"
                aria-hidden="true"
              />

              {/* Content card with left margin for timeline on desktop */}
              <div className="md:ml-20">
                <Card>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl sm:text-2xl mb-1">
                          {entry.role}
                        </CardTitle>
                        <CardDescription className="text-base sm:text-lg font-semibold text-primary">
                          {entry.company}
                        </CardDescription>
                      </div>
                      <div className="text-sm sm:text-right text-muted-foreground">
                        <div className="font-medium">
                          {formatDate(entry.startDate)} -{" "}
                          {formatDate(entry.endDate)}
                        </div>
                        <div className="text-xs sm:text-sm">
                          {entry.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {entry.description}
                    </p>

                    {/* Key Achievements */}
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base mb-3">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {entry.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-sm sm:text-base"
                          >
                            <span
                              className="text-primary mr-2 mt-1 flex-shrink-0"
                              aria-hidden="true"
                            >
                              ▸
                            </span>
                            <span className="text-muted-foreground leading-relaxed">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    {entry.technologies && entry.technologies.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-sm sm:text-base mb-2">
                          Technologies:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {entry.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
