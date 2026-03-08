/**
 * Experience timeline data
 * 
 * Contains career milestones spanning 22+ years of technology leadership
 * across Financial Services, Utilities, and Public Sectors.
 */

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string; // ISO 8601 format (YYYY-MM)
  endDate: string | null; // null for current position
  description: string;
  achievements: string[];
  technologies?: string[];
}

export interface ExperienceData {
  entries: ExperienceEntry[];
}

/**
 * Experience timeline entries in reverse chronological order
 * (most recent first)
 */
export const experienceData: ExperienceData = {
  entries: [
    {
      id: "pwc-canada",
      company: "PwC Canada",
      role: "Managing Director, Cloud, Data & AI",
      location: "Toronto, ON",
      startDate: "2022-03",
      endDate: null, // Current position
      description:
        "Leading technology transformation programs for clients across Financial Services, Utilities, and Public Sectors. Driving enterprise-wide digital transformation, cloud modernization, and AI-driven innovation.",
      achievements: [
        "Delivered central data platform on GCP for gaming/casino company, raising visibility into financial and operational metrics",
        "Led AI Governance framework development for mid-sized Fintech, establishing foundation for opportunity/risk evaluation",
        "Built AI foundation platform on AWS for Financial Services client with comprehensive capability review and architecture",
        "Led infrastructure assessment for challenger bank, identified gaps, developed high-level designs per best practices",
        "Enhanced security posture of Wealth Management firm by enabling Azure AD/Entra ID and centralizing authentication with SSO",
        "Assessed 2 business-critical commercial banking applications, led workshops and developed future state architecture for cloud migration",
        "Benchmarked key technology capabilities (DevSecOps, Containers, SRE, multi-cloud) for large North American bank",
        "Modernized build/deployment tooling for legacy .NET monolith, automated critical path activities, simplified 60-step manual process",
      ],
      technologies: [
        "AWS",
        "Azure",
        "GCP",
        "AI/ML",
        "Data Platforms",
        "DevSecOps",
        "Cloud Architecture",
      ],
    },
    {
      id: "capco",
      company: "Capco (Capital Markets Company)",
      role: "Principal Consultant, Cloud Computing",
      location: "Toronto, ON",
      startDate: "2019-12",
      endDate: "2022-02",
      description:
        "Technology advisory, architecture and execution of Cloud & DevOps engagements at Financial Services clients. Led cloud migration strategies and Azure implementations.",
      achievements: [
        "Migrated legacy on-prem SQL databases to Azure SQL, enabled integration with Azure virtual desktops",
        "Led architecture roadmap development for migrating 2M LOC monolithic branch application to Microsoft Azure",
        "Conducted deep business capability modelling for key banking channels (branch, mobile, IVR)",
        "Led IdP migration from legacy to Azure Active Directory for large Canadian Wealth Management company",
        "Led Azure MDM capability (Microsoft Endpoint) review, optimized product use and pushed business-critical apps to iOS/Android devices",
      ],
      technologies: [
        "Azure",
        "Azure SQL",
        "Azure AD",
        "Cloud Migration",
        "DevOps",
        "Enterprise Architecture",
      ],
    },
    {
      id: "bmo-director",
      company: "Bank of Montreal (BMO)",
      role: "Director, Lead Technology Officer & Finance Technology",
      location: "Toronto, ON",
      startDate: "2018-03",
      endDate: "2019-11",
      description:
        "Multi-year technology planning and strategy for Finance, Tax and Treasury teams. Led DevOps adoption and agile transformation across the organization.",
      achievements: [
        "Drove DevOps tools adoption from 10% to 60%, accelerated build/deployment cycles using Ansible, Bitbucket, ELK",
        "Spearheaded collaboration tools (JIRA, Confluence) adoption across the group",
        "Assessed and selected WorkSoft for QA automation to speed up SAP S/4 HANA testing",
        "Led 4-year technology strategy development for Finance, Tax and Treasury ($55M annual budget)",
        "Led content development for Finance investment committee reviews, enabled executive investment decisions",
      ],
      technologies: [
        "DevOps",
        "Ansible",
        "Bitbucket",
        "ELK Stack",
        "JIRA",
        "Confluence",
        "SAP S/4 HANA",
      ],
    },
    {
      id: "canadian-tire-devops",
      company: "Canadian Tire",
      role: "Manager, PeopleSoft Financials Enterprise DevOps",
      location: "Toronto, ON",
      startDate: "2016-08",
      endDate: "2018-02",
      description:
        "Built DevOps team for Enterprise PeopleSoft Financials 9.2, established lean processes and enhanced delivery through automation.",
      achievements: [
        "Seamlessly integrated Mark's & FGL subsidiaries onto Enterprise PeopleSoft Financials platform",
        "Automated 200+ PeopleSoft functional test cases, reduced execution efforts significantly",
        "Devised DevOps team structure, established contract with vendor while retaining core competencies",
        "Established core DevOps processes: Issue/Incident management, Change/ServiceNow adoption, code migration",
      ],
      technologies: [
        "PeopleSoft Financials 9.2",
        "DevOps",
        "Test Automation",
        "ServiceNow",
      ],
    },
    {
      id: "canadian-tire-finance",
      company: "Canadian Tire",
      role: "Manager, Finance Systems",
      location: "Toronto, ON",
      startDate: "2014-08",
      endDate: "2016-07",
      description:
        "Led PeopleSoft application development for Project One, part of Finance Transformation program. Managed 20+ resources with $3M budget.",
      achievements: [
        "Led design, development and unit testing of all application components on PeopleSoft Financials 9.2",
        "Implemented 60+ interfaces using staging tables and integration broker connected to MQ Series (ESB)",
        "Developed integration dashboard for better transaction audit and control, eliminated manual reconciliations",
        "Designed and executed elaborate transition program (30+ KT sessions) from Project One to FiSCoE team",
      ],
      technologies: [
        "PeopleSoft Financials 9.2",
        "MQ Series",
        "ESB",
        "Integration Development",
      ],
    },
    {
      id: "cibc-sr-manager",
      company: "CIBC",
      role: "Sr. Manager, Application Delivery",
      location: "Toronto, ON",
      startDate: "2009-12",
      endDate: "2014-07",
      description:
        "Led team of 13 members covering all aspects of PeopleSoft Financials application delivery. Managed recruitment, training and budget.",
      achievements: [
        "Implemented ERP package upgrade (PeopleSoft Financials), rolled out Expense & Procurement modules ($4M)",
        "Expanded user base from 300 to 16,000 (enterprise-wide reach)",
        "Integrated settlement and finance functions of CIBC acquisition into PeopleSoft ($30M program)",
        "Led technology in RFP process for $2M managed service solution",
        "Implemented Journal Upload Project ($1M), streamlined Finance processes by replacing multiple systems",
      ],
      technologies: [
        "PeopleSoft Financials",
        "ERP",
        "Enterprise Integration",
      ],
    },
    {
      id: "cibc-tla",
      company: "CIBC",
      role: "Technology Leadership Associate",
      location: "Toronto, ON",
      startDate: "2007-09",
      endDate: "2009-11",
      description:
        "Delivered 3 internal consulting assignments with mandate to develop leadership skills under executive mentorship.",
      achievements: [
        "Developed CIBC branch desktop technology strategy roadmap for 5-10 years",
        "Improved customer relations by building performance metrics and tracking against SLA commitments",
        "Assessed options and developed strategy to replace Private Investment Council (CPIC) platform",
      ],
      technologies: ["Strategy Development", "Technology Roadmapping"],
    },
    {
      id: "wipro",
      company: "Wipro Technologies",
      role: "Technology Consultant",
      location: "Bangalore, India / UK",
      startDate: "2002-03",
      endDate: "2006-04",
      description:
        "Development and support of 6 business applications for UK-based Utilities client in offshore outsourcing model.",
      achievements: [
        "Assessed impact of integrating new service area to IT systems, presented solution outline to business",
        "Delivered complex integration project (£900K) managing 17-member team on time and on budget",
        "Developed water leakage analysis system for regulatory reporting",
      ],
      technologies: [
        "Enterprise Applications",
        "Integration Development",
        "Utilities Domain",
      ],
    },
  ],
};
