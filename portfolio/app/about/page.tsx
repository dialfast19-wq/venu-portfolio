import { About } from "@/components/sections/About";
import { aboutData } from "@/data/about";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Venu Gudipati - Technology Executive",
  description:
    "Learn about Venu Gudipati's 22+ years of technology leadership experience in cloud architecture, AI/ML, data platforms, and digital transformation across Fortune 500 enterprises.",
  openGraph: {
    title: "About | Venu Gudipati - Technology Executive",
    description:
      "Learn about Venu Gudipati's 22+ years of technology leadership experience in cloud architecture, AI/ML, data platforms, and digital transformation.",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Venu Gudipati - Technology Executive",
    description:
      "Learn about Venu Gudipati's 22+ years of technology leadership experience in cloud architecture, AI/ML, data platforms, and digital transformation.",
  },
};

export default function AboutPage() {
  return <About data={aboutData} />;
}
