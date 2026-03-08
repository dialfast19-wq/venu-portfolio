"use client";

import { AnimatedSection } from "@/components/animations";

/**
 * Test component to demonstrate AnimatedSection usage
 * This can be imported into any page to test the animation functionality
 */
export function AnimatedSectionTest() {
  return (
    <div className="space-y-8 p-8">
      <h1 className="text-3xl font-bold">AnimatedSection Test</h1>

      {/* Fade animation */}
      <AnimatedSection animation="fade">
        <div className="p-6 bg-blue-500 text-white rounded-lg">
          <h2 className="text-xl font-semibold">Fade Animation</h2>
          <p>This section fades in when it enters the viewport (400ms)</p>
        </div>
      </AnimatedSection>

      {/* Slide-up animation */}
      <AnimatedSection animation="slide-up">
        <div className="p-6 bg-green-500 text-white rounded-lg">
          <h2 className="text-xl font-semibold">Slide Up Animation</h2>
          <p>This section slides up when it enters the viewport (500ms)</p>
        </div>
      </AnimatedSection>

      {/* Slide-left animation */}
      <AnimatedSection animation="slide-left">
        <div className="p-6 bg-purple-500 text-white rounded-lg">
          <h2 className="text-xl font-semibold">Slide Left Animation</h2>
          <p>This section slides from right to left (500ms)</p>
        </div>
      </AnimatedSection>

      {/* Slide-right animation */}
      <AnimatedSection animation="slide-right">
        <div className="p-6 bg-orange-500 text-white rounded-lg">
          <h2 className="text-xl font-semibold">Slide Right Animation</h2>
          <p>This section slides from left to right (500ms)</p>
        </div>
      </AnimatedSection>

      {/* Custom duration */}
      <AnimatedSection animation="fade" duration={600}>
        <div className="p-6 bg-red-500 text-white rounded-lg">
          <h2 className="text-xl font-semibold">Custom Duration</h2>
          <p>This section fades in with a custom 600ms duration</p>
        </div>
      </AnimatedSection>

      {/* With delay */}
      <AnimatedSection animation="slide-up" delay={0.3}>
        <div className="p-6 bg-indigo-500 text-white rounded-lg">
          <h2 className="text-xl font-semibold">With Delay</h2>
          <p>This section has a 300ms delay before animating</p>
        </div>
      </AnimatedSection>

      <div className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg">
        <p className="text-lg">Scroll down to see animations trigger</p>
      </div>

      <AnimatedSection animation="fade">
        <div className="p-6 bg-teal-500 text-white rounded-lg">
          <h2 className="text-xl font-semibold">Below the Fold</h2>
          <p>This section only animates when you scroll to it</p>
        </div>
      </AnimatedSection>
    </div>
  );
}
