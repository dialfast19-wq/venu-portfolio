/**
 * Skills and expertise data
 * 
 * Categorized technical skills, leadership capabilities, and domain expertise
 */

export interface Skill {
  name: string;
  level?: 'expert' | 'advanced' | 'intermediate';
  certification?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  skills: Skill[];
}

export interface SkillsData {
  categories: SkillCategory[];
}

export const skillsData: SkillsData = {
  categories: [
    {
      id: "cloud-platforms",
      title: "Cloud Platforms & Infrastructure",
      description: "Multi-cloud expertise across AWS, Azure, and GCP",
      icon: "☁️",
      skills: [
        { name: "Amazon Web Services (AWS)", level: "expert", certification: "AWS Certified Cloud Practitioner" },
        { name: "Microsoft Azure", level: "expert", certification: "Azure AD/Entra ID Specialist" },
        { name: "Google Cloud Platform (GCP)", level: "expert", certification: "GCP Professional Architect" },
        { name: "Cloud Migration & Modernization", level: "expert" },
        { name: "Multi-Cloud Architecture", level: "expert" },
        { name: "Infrastructure as Code (IaC)", level: "advanced" },
        { name: "Cloud Security & Compliance", level: "expert" }
      ]
    },
    {
      id: "ai-ml",
      title: "AI & Machine Learning",
      description: "AI strategy, governance, and platform engineering",
      icon: "🤖",
      skills: [
        { name: "AI Governance Frameworks", level: "expert" },
        { name: "AI Platform Engineering", level: "expert" },
        { name: "AWS Bedrock", level: "advanced", certification: "AWS Bedrock Hands-On Training" },
        { name: "ML Model Deployment", level: "advanced" },
        { name: "AI Strategy & Roadmapping", level: "expert" },
        { name: "Responsible AI Implementation", level: "advanced" }
      ]
    },
    {
      id: "data-platforms",
      title: "Data Platforms & Analytics",
      description: "Enterprise data architecture and analytics solutions",
      icon: "📊",
      skills: [
        { name: "Data Platform Architecture", level: "expert" },
        { name: "Data Governance", level: "expert" },
        { name: "ETL/ELT Pipelines", level: "advanced" },
        { name: "Azure Data Factory", level: "advanced" },
        { name: "SQL & NoSQL Databases", level: "expert" },
        { name: "Data Warehousing", level: "advanced" },
        { name: "Business Intelligence", level: "advanced" }
      ]
    },
    {
      id: "devops",
      title: "DevOps & Automation",
      description: "DevSecOps practices and CI/CD automation",
      icon: "⚙️",
      skills: [
        { name: "DevSecOps Practices", level: "expert" },
        { name: "CI/CD Pipelines", level: "expert" },
        { name: "Ansible", level: "advanced" },
        { name: "Bitbucket", level: "advanced" },
        { name: "JIRA & Confluence", level: "expert" },
        { name: "Container Orchestration", level: "advanced" },
        { name: "Site Reliability Engineering (SRE)", level: "advanced" }
      ]
    },
    {
      id: "enterprise-apps",
      title: "Enterprise Applications",
      description: "ERP systems and application modernization",
      icon: "💼",
      skills: [
        { name: "PeopleSoft Financials", level: "expert" },
        { name: "SAP S/4 HANA", level: "advanced" },
        { name: "ERP Systems", level: "expert" },
        { name: "Application Modernization", level: "expert" },
        { name: "Legacy System Migration", level: "expert" },
        { name: "Integration Architecture", level: "expert" }
      ]
    },
    {
      id: "security",
      title: "Security & Identity Management",
      description: "Identity, access management, and security architecture",
      icon: "🔒",
      skills: [
        { name: "Azure Active Directory (Entra ID)", level: "expert" },
        { name: "Single Sign-On (SSO)", level: "expert" },
        { name: "Zero-Trust Architecture", level: "advanced" },
        { name: "Identity & Access Management (IAM)", level: "expert" },
        { name: "Security Posture Assessment", level: "expert" },
        { name: "Conditional Access Policies", level: "advanced" }
      ]
    },
    {
      id: "leadership",
      title: "Leadership & Strategy",
      description: "Technology leadership and strategic planning",
      icon: "🎯",
      skills: [
        { name: "Technology Strategy & Roadmapping", level: "expert" },
        { name: "Digital Transformation", level: "expert" },
        { name: "Portfolio Management ($50M+)", level: "expert" },
        { name: "Stakeholder Management", level: "expert" },
        { name: "Team Building & Mentorship", level: "expert" },
        { name: "Agile & Scrum Methodologies", level: "expert", certification: "Certified ScrumMaster" },
        { name: "Vendor Management", level: "expert" },
        { name: "Budget Planning & Optimization", level: "expert" }
      ]
    },
    {
      id: "industry",
      title: "Industry Expertise",
      description: "Deep domain knowledge across multiple sectors",
      icon: "🏢",
      skills: [
        { name: "Financial Services", level: "expert" },
        { name: "Banking & Wealth Management", level: "expert" },
        { name: "Utilities", level: "advanced" },
        { name: "Public Sector", level: "advanced" },
        { name: "Retail", level: "advanced" },
        { name: "Gaming & Casino", level: "advanced" }
      ]
    }
  ]
};
