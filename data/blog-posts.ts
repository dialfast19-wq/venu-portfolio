/**
 * Blog posts metadata
 * 
 * Article previews and metadata for blog content
 */

export interface BlogPostMetadata {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string; // ISO 8601 format
  updatedAt?: string;
  readingTime: number; // minutes
  tags: string[];
  author: {
    name: string;
    title: string;
  };
}

export interface BlogPostsData {
  posts: BlogPostMetadata[];
}

export const blogPostsData: BlogPostsData = {
  posts: [
    {
      slug: "ai-governance-framework-financial-services",
      title: "Building an AI Governance Framework for Financial Services",
      excerpt: "A practical guide to establishing AI governance in regulated industries, covering risk assessment, compliance controls, and ethical AI principles.",
      publishedAt: "2024-01-15",
      readingTime: 8,
      tags: ["AI Governance", "Financial Services", "Compliance", "Risk Management"],
      author: {
        name: "Venu Gudipati",
        title: "Managing Director, Cloud, Data & AI"
      }
    },
    {
      slug: "cloud-migration-strategies-legacy-systems",
      title: "Cloud Migration Strategies for Legacy Banking Systems",
      excerpt: "Lessons learned from migrating mission-critical banking applications to the cloud, including architecture patterns, risk mitigation, and phased approaches.",
      publishedAt: "2023-11-22",
      readingTime: 10,
      tags: ["Cloud Migration", "Banking", "AWS", "Architecture"],
      author: {
        name: "Venu Gudipati",
        title: "Managing Director, Cloud, Data & AI"
      }
    },
    {
      slug: "devops-transformation-enterprise",
      title: "DevOps Transformation in Enterprise Organizations",
      excerpt: "How to drive DevOps adoption in large enterprises, overcoming cultural resistance, establishing metrics, and building high-performing teams.",
      publishedAt: "2023-09-10",
      readingTime: 7,
      tags: ["DevOps", "Digital Transformation", "Leadership", "Culture"],
      author: {
        name: "Venu Gudipati",
        title: "Managing Director, Cloud, Data & AI"
      }
    },
    {
      slug: "multi-cloud-strategy-considerations",
      title: "Multi-Cloud Strategy: When and How to Implement",
      excerpt: "Strategic considerations for multi-cloud adoption, including vendor lock-in mitigation, cost optimization, and operational complexity management.",
      publishedAt: "2023-07-05",
      readingTime: 9,
      tags: ["Multi-Cloud", "Strategy", "AWS", "Azure", "GCP"],
      author: {
        name: "Venu Gudipati",
        title: "Managing Director, Cloud, Data & AI"
      }
    },
    {
      slug: "data-platform-architecture-best-practices",
      title: "Modern Data Platform Architecture: Best Practices",
      excerpt: "Designing scalable, secure data platforms on cloud infrastructure, covering data governance, security, and analytics capabilities.",
      publishedAt: "2023-05-18",
      readingTime: 11,
      tags: ["Data Platforms", "Architecture", "GCP", "Analytics"],
      author: {
        name: "Venu Gudipati",
        title: "Managing Director, Cloud, Data & AI"
      }
    },
    {
      slug: "zero-trust-security-enterprise",
      title: "Implementing Zero Trust Security in Enterprise Environments",
      excerpt: "A comprehensive approach to zero trust architecture, including identity management, conditional access, and continuous verification.",
      publishedAt: "2023-03-12",
      readingTime: 6,
      tags: ["Security", "Zero Trust", "Azure AD", "Identity Management"],
      author: {
        name: "Venu Gudipati",
        title: "Managing Director, Cloud, Data & AI"
      }
    }
  ]
};
