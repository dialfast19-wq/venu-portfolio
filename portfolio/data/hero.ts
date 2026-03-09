import { HeroProps } from "@/components/sections";

/**
 * Hero section data
 * 
 * Contains the professional information displayed in the hero section
 * including name, title, tagline, photo, and call-to-action buttons.
 */
export const heroData: HeroProps = {
  name: "Venu Gudipati",
  title: "Managing Director, Cloud, Data & AI",
  tagline:
    "Transforming Fortune 500 enterprises through strategic technology leadership. 22+ years orchestrating digital transformation, cloud modernization, and AI innovation across Financial Services, Utilities, and Public Sectors.",
  photoUrl: "/venu-photo.jpg",
  ctaButtons: [
    {
      label: "View Work",
      href: "#experience",
      variant: "primary",
    },
    {
      label: "Contact",
      href: "/contact",
      variant: "secondary",
    },
  ],
};
