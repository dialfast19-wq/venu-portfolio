/**
 * About section data
 * 
 * Contains executive summary and core competencies information
 * for the About section of the portfolio.
 */

export interface Competency {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface AboutData {
  executiveSummary: string;
  competencies: Competency[];
}

/**
 * Executive summary highlighting 22+ years experience,
 * cloud/data/AI expertise, and leadership capabilities.
 * Length: 150-300 words
 */
export const aboutData: AboutData = {
  executiveSummary:
    "I am a dynamic technology executive with over 22 years of progressive leadership experience spanning financial services, utilities, and public sectors across North America and Europe. Throughout my career, I have been recognized for driving enterprise-wide digital transformation, cloud modernization, and AI-driven innovation that align technology strategy with business outcomes.\n\nCurrently serving as Managing Director, Cloud, Data & AI at PwC, I lead large-scale transformation programs that strengthen clients' digital core, optimize infrastructure, and accelerate data-driven decision-making. My expertise encompasses building robust data platforms, AI governance and platform engineering, modernizing legacy systems, and architecting secure, scalable cloud solutions across AWS, Azure, and GCP.\n\nI have a proven track record of building consulting practices and leading cross-functional teams to deliver transformative results. My approach combines strategic vision with disciplined execution, always focused on realizing tangible business value.",

  competencies: [
    {
      id: "cloud-architecture",
      title: "Cloud Architecture & Migration",
      description:
        "Expert in designing and executing cloud strategies across AWS, Azure, and GCP. Led migrations of mission-critical applications with zero downtime, optimizing costs while enhancing performance and security.",
      icon: "☁️",
    },
    {
      id: "ai-ml",
      title: "AI/ML Platform Engineering",
      description:
        "Pioneered AI governance frameworks and built enterprise AI platforms. Established responsible AI practices, MLOps pipelines, and scalable infrastructure for machine learning workloads.",
      icon: "🤖",
    },
    {
      id: "data-platforms",
      title: "Data Platform Design",
      description:
        "Architected modern data platforms enabling real-time analytics and insights. Implemented data mesh architectures, data governance, and self-service analytics capabilities at scale.",
      icon: "📊",
    },
    {
      id: "technology-leadership",
      title: "Technology Leadership",
      description:
        "Led cross-functional teams of 50+ engineers and architects. Built high-performing organizations, mentored emerging leaders, and fostered cultures of innovation and continuous improvement.",
      icon: "👥",
    },
    {
      id: "digital-transformation",
      title: "Digital Transformation",
      description:
        "Orchestrated enterprise-wide transformations impacting thousands of users. Aligned technology initiatives with business strategy, delivering measurable ROI and competitive advantage.",
      icon: "🚀",
    },
    {
      id: "devsecops",
      title: "DevSecOps & Automation",
      description:
        "Championed DevSecOps practices and CI/CD automation. Reduced deployment cycles from months to days while enhancing security posture and operational resilience.",
      icon: "🔧",
    },
  ],
};
