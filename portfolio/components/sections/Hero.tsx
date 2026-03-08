"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { motion } from "framer-motion";

export interface HeroProps {
  name: string;
  title: string;
  tagline: string;
  photoUrl: string;
  ctaButtons: Array<{
    label: string;
    href: string;
    variant: "primary" | "secondary";
  }>;
}

/**
 * Hero Section Component
 * 
 * Features:
 * - Professional photo (200-400px) with next/image optimization
 * - Animated text reveal on page load
 * - Gradient background with subtle animation
 * - CTA buttons with hover effects
 * - Responsive layout (stacked on mobile, side-by-side on desktop)
 * 
 * Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 2.2, 2.3, 14.1
 */
export function Hero({ name, title, tagline, photoUrl, ctaButtons }: HeroProps) {
  return (
    <AnimatedSection animation="fade" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />
      </div>

      {/* Floating orbs for subtle animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Professional Photo */}
          <motion.div
            className="lg:w-2/5 flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full opacity-75 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />
              
              {/* Photo container with dimensions between 200-400px */}
              <div className="relative w-80 h-80 mx-auto">
                {/* Rotating border effect */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <div className="absolute inset-1 rounded-full bg-black" />
                
                {/* Photo with next/image optimization */}
                <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-white/10">
                  <Image
                    src={photoUrl}
                    alt={name}
                    width={320}
                    height={320}
                    className="object-cover object-center w-full h-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="lg:w-3/5 text-center lg:text-left space-y-6">
            {/* Name as h1 heading with text reveal animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-white mb-2">{name}</span>
              </h1>
            </motion.div>

            {/* Title as subheading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-2xl lg:text-3xl text-gray-300 font-light leading-relaxed">
                {title}
              </p>
            </motion.div>

            {/* Decorative line */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="h-1 w-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {tagline}
              </p>
            </motion.div>

            {/* CTA Buttons with slide-up animation and hover effects */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              {ctaButtons.map((button, index) => (
                <motion.div
                  key={button.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                >
                  <Button
                    asChild
                    size="lg"
                    variant={button.variant === "primary" ? "default" : "outline"}
                    className={
                      button.variant === "primary"
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 text-white border-0 px-8 py-6 text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
                        : "bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 text-white px-8 py-6 text-base transition-all duration-300 hover:scale-105"
                    }
                  >
                    <Link href={button.href}>
                      {button.label}
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </motion.div>
    </AnimatedSection>
  );
}
