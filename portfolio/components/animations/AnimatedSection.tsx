"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  fadeInVariants,
  slideUpVariants,
  slideLeftVariants,
  slideRightVariants,
} from "@/lib/animations";

export interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: "fade" | "slide-up" | "slide-left" | "slide-right";
  duration?: number; // 300-600ms
  delay?: number;
  threshold?: number; // Intersection observer threshold (0-1)
  className?: string;
}

/**
 * AnimatedSection component
 * 
 * A wrapper component that animates its children when they enter the viewport.
 * Uses Framer Motion for animations and Intersection Observer for viewport detection.
 * 
 * Features:
 * - Viewport detection using Intersection Observer
 * - Multiple animation variants (fade, slide-up, slide-left, slide-right)
 * - GPU-accelerated transforms only (opacity, transform)
 * - Respects prefers-reduced-motion user preference
 * - Configurable animation timing and threshold
 * 
 * @param children - React nodes to be animated
 * @param animation - Animation variant to use (default: "fade")
 * @param duration - Animation duration in seconds (default: uses variant's duration)
 * @param delay - Animation delay in seconds (default: 0)
 * @param threshold - Intersection observer threshold 0-1 (default: 0.1)
 * @param className - Additional CSS classes
 */
export function AnimatedSection({
  children,
  animation = "fade",
  duration,
  delay = 0,
  threshold = 0.1,
  className,
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Check for prefers-reduced-motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Set up Intersection Observer for viewport detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, we can disconnect the observer
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold,
        rootMargin: "0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  // Select animation variant based on prop
  const getVariants = (): Variants => {
    let baseVariants: Variants;

    switch (animation) {
      case "slide-up":
        baseVariants = slideUpVariants;
        break;
      case "slide-left":
        baseVariants = slideLeftVariants;
        break;
      case "slide-right":
        baseVariants = slideRightVariants;
        break;
      case "fade":
      default:
        baseVariants = fadeInVariants;
        break;
    }

    // Override duration if provided (must be between 300-600ms)
    if (duration !== undefined) {
      const clampedDuration = Math.max(0.3, Math.min(0.6, duration / 1000));
      return {
        hidden: baseVariants.hidden,
        visible: {
          ...baseVariants.visible,
          transition: {
            ...(baseVariants.visible as any).transition,
            duration: clampedDuration,
            delay,
          },
        },
      };
    }

    // Add delay if provided
    if (delay > 0) {
      return {
        hidden: baseVariants.hidden,
        visible: {
          ...baseVariants.visible,
          transition: {
            ...(baseVariants.visible as any).transition,
            delay,
          },
        },
      };
    }

    return baseVariants;
  };

  // If user prefers reduced motion, render without animation
  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  const variants = getVariants();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
