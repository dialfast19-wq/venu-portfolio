/**
 * Case studies and project highlights data
 * 
 * Major projects and transformational initiatives
 */

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  outcomes: string[];
  imageUrl?: string;
  startDate: string; // ISO 8601 format (YYYY-MM)
  endDate: string | null; // null for ongoing
  featured: boolean;
}

export interface ProjectsData {
  projects: ProjectData[];
}

export const projectsData: ProjectsData = {
  projects: [
    {
      id: "ai-foundation-platform",
      title: "AI Foundation Platform for Financial Services",
      description: "Built comprehensive AI platform on AWS for a major Financial Services client, establishing foundation for AI-driven innovation.",
      longDescription: "Led the design and implementation of an enterprise AI foundation platform on AWS, including comprehensive capability review, architecture design, and implementation roadmap. Established governance frameworks and best practices for responsible AI deployment.",
      technologies: ["AWS", "Amazon Bedrock", "SageMaker", "Lambda", "S3", "IAM", "CloudFormation"],
      outcomes: [
        "Established enterprise-wide AI platform serving multiple business units",
        "Implemented AI governance framework ensuring responsible AI practices",
        "Reduced time-to-market for AI initiatives by 60%",
        "Enabled secure, compliant AI model deployment at scale"
      ],
      startDate: "2023-06",
      endDate: null,
      featured: true
    },
    {
      id: "gcp-data-platform",
      title: "Central Data Platform on GCP for Gaming/Casino",
      description: "Delivered enterprise data platform on Google Cloud Platform, providing unified visibility into financial and operational metrics.",
      longDescription: "Architected and delivered a centralized data platform on GCP for a gaming and casino company, integrating multiple data sources and providing real-time analytics capabilities. Implemented data governance and security controls meeting regulatory requirements.",
      technologies: ["Google Cloud Platform", "BigQuery", "Cloud Storage", "Dataflow", "Looker", "Cloud IAM"],
      outcomes: [
        "Unified 15+ disparate data sources into single platform",
        "Improved financial reporting accuracy by 40%",
        "Reduced operational reporting time from days to hours",
        "Enabled real-time business intelligence and decision-making"
      ],
      startDate: "2023-01",
      endDate: "2023-12",
      featured: true
    },
    {
      id: "ai-governance-fintech",
      title: "AI Governance Framework for Mid-Sized Fintech",
      description: "Developed comprehensive AI governance framework establishing foundation for opportunity and risk evaluation.",
      longDescription: "Led the development of an enterprise AI governance framework for a mid-sized Fintech company, including policies, procedures, risk assessment methodologies, and compliance controls. Established AI ethics committee and review processes.",
      technologies: ["AI Governance", "Risk Management", "Compliance Frameworks", "Policy Development"],
      outcomes: [
        "Established board-approved AI governance framework",
        "Implemented AI risk assessment and approval processes",
        "Enabled compliant AI experimentation and deployment",
        "Reduced AI-related compliance risk by 70%"
      ],
      startDate: "2023-03",
      endDate: "2023-09",
      featured: true
    },
    {
      id: "azure-entra-id-migration",
      title: "Azure AD/Entra ID Migration for Wealth Management",
      description: "Enhanced security posture by migrating to Azure AD/Entra ID and implementing enterprise-wide SSO.",
      longDescription: "Led the migration from legacy identity provider to Azure Active Directory (Entra ID) for a large Wealth Management firm. Implemented Single Sign-On across 50+ applications, established conditional access policies, and enhanced security posture.",
      technologies: ["Azure Active Directory", "Entra ID", "SSO", "SAML", "OAuth", "Conditional Access"],
      outcomes: [
        "Migrated 5,000+ users to Azure AD with zero downtime",
        "Implemented SSO for 50+ enterprise applications",
        "Reduced password-related support tickets by 65%",
        "Enhanced security with MFA and conditional access policies"
      ],
      startDate: "2022-09",
      endDate: "2023-03",
      featured: true
    },
    {
      id: "cloud-migration-banking",
      title: "Cloud Migration Architecture for Commercial Banking",
      description: "Assessed 2 business-critical commercial banking applications and developed future state cloud architecture.",
      longDescription: "Led comprehensive assessment of two mission-critical commercial banking applications, conducted architecture workshops with stakeholders, and developed detailed future state architecture for cloud migration following AWS best practices.",
      technologies: ["AWS", "Application Assessment", "Cloud Architecture", "Migration Strategy", "Well-Architected Framework"],
      outcomes: [
        "Completed detailed assessment of 2 critical banking applications",
        "Developed cloud-native architecture aligned with AWS best practices",
        "Created phased migration roadmap minimizing business disruption",
        "Identified 40% cost optimization opportunities"
      ],
      startDate: "2022-06",
      endDate: "2022-12",
      featured: false
    },
    {
      id: "devops-modernization",
      title: "DevOps Modernization for Legacy .NET Monolith",
      description: "Modernized build and deployment tooling, automating critical path activities and simplifying 60-step manual process.",
      longDescription: "Led DevOps transformation for a legacy .NET monolithic application, implementing CI/CD pipelines, automated testing, and infrastructure as code. Reduced deployment time from 2 days to 2 hours while improving reliability.",
      technologies: ["Azure DevOps", "PowerShell", "ARM Templates", ".NET", "Git", "Automated Testing"],
      outcomes: [
        "Reduced deployment time from 48 hours to 2 hours",
        "Automated 60-step manual deployment process",
        "Improved deployment success rate from 70% to 98%",
        "Enabled weekly releases instead of quarterly"
      ],
      startDate: "2022-03",
      endDate: "2022-08",
      featured: false
    }
  ]
};
