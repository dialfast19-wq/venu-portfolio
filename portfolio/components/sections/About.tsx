"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import type { AboutData } from "@/data/about";

export interface AboutProps {
  data: AboutData;
}

/**
 * About Section Component
 * 
 * Features:
 * - Executive summary with optimal line length (50-75 characters)
 * - Core competencies grid (2-4 columns responsive)
 * - Icons/visual indicators for each competency
 * - Proper typography with line-height 1.4-1.6
 * - Responsive grid (1 column mobile, 2-4 desktop)
 * 
 * Requirements: 7.1, 7.2, 7.3, 7.4, 4.5, 13.4
 */
export function About({ data }: AboutProps) {
  const { executiveSummary, competencies } = data;

  // Split executive summary into paragraphs
  const paragraphs = executiveSummary.split("\n\n");

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Page Title */}
        <AnimatedSection animation="fade" className="mb-16 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            About Me
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto" />
        </AnimatedSection>

        {/* Executive Summary */}
        <AnimatedSection animation="slide-up" delay={0.2} className="mb-20">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-6">
              Executive Summary
            </h2>
            <div className="space-y-6">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-gray-300 text-lg leading-relaxed max-w-[75ch]"
                  style={{ lineHeight: "1.6" }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Core Competencies */}
        <AnimatedSection animation="slide-up" delay={0.4}>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Core Competencies
          </h2>
          
          {/* Responsive grid: 1 column mobile, 2 columns tablet, 3 columns desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competencies.map((competency, index) => (
              <AnimatedSection
                key={competency.id}
                animation="fade"
                delay={0.5 + index * 0.1}
              >
                <Card className="h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    {/* Icon as visual indicator */}
                    <div className="text-5xl mb-4" role="img" aria-label={competency.title}>
                      {competency.icon}
                    </div>
                    <CardTitle className="text-white text-xl">
                      {competency.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p
                      className="text-gray-300 leading-relaxed"
                      style={{ lineHeight: "1.5" }}
                    >
                      {competency.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
