"use client";

import { SkillCategory } from "@/data/skills";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

export interface SkillsGridProps {
  categories: SkillCategory[];
}

/**
 * SkillsGrid Component
 * 
 * Displays categorized skills in a responsive grid layout.
 * Features:
 * - Grid layout (1 column mobile, 2-3 columns desktop)
 * - Category cards with visual hierarchy
 * - Skill badges with level indicators
 * - Animated grid items on scroll
 */
export function SkillsGrid({ categories }: SkillsGridProps) {
  const getLevelColor = (level?: string) => {
    switch (level) {
      case 'expert':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'advanced':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'intermediate':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {categories.map((category, index) => (
        <AnimatedSection
          key={category.id}
          animation="slide-up"
          delay={index * 0.1}
          threshold={0.2}
        >
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl" aria-hidden="true">
                  {category.icon}
                </span>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </div>
              <CardDescription>{category.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-sm font-medium flex-1">
                        {skill.name}
                      </span>
                      {skill.level && (
                        <Badge
                          variant="secondary"
                          className={`text-xs ${getLevelColor(skill.level)}`}
                        >
                          {skill.level.charAt(0).toUpperCase() + skill.level.slice(1)}
                        </Badge>
                      )}
                    </div>
                    {skill.certification && (
                      <p className="text-xs text-primary">
                        ✓ {skill.certification}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      ))}
    </div>
  );
}
