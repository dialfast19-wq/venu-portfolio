import { Variants } from "framer-motion";

/**
 * Animation variants for fade-in effect
 * Duration: 400ms
 */
export const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4, // 400ms
      ease: "easeOut",
    },
  },
};

/**
 * Animation variants for slide-up effect
 * Duration: 500ms
 */
export const slideUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5, // 500ms
      ease: "easeOut",
    },
  },
};

/**
 * Animation variants for slide-left effect
 * Duration: 500ms
 */
export const slideLeftVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5, // 500ms
      ease: "easeOut",
    },
  },
};

/**
 * Animation variants for slide-right effect
 * Duration: 500ms
 */
export const slideRightVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5, // 500ms
      ease: "easeOut",
    },
  },
};
