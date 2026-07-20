export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  impact: string[];
  domains: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "Huawei Enterprise",
    role: "Senior Key Account Manager",
    period: "Present",
    location: "Istanbul, Türkiye",
    summary:
      "Leading strategic enterprise ICT relationships across cloud, AI, networking, data center, and digital transformation initiatives.",
    impact: [
      "Own end-to-end key account strategy: stakeholder alignment, solution framing, and commercial progression",
      "Translate complex ICT portfolios into board-level outcomes for CIOs, CTOs, and IT directors",
      "Bridge customer business priorities with Huawei Enterprise capabilities across AI, cloud, and infrastructure",
      "Drive multi-stakeholder engagement across technical, commercial, and executive layers",
    ],
    domains: ["Enterprise ICT", "AI", "Cloud", "Networking", "Digital Transformation"],
  },
  {
    company: "Huawei",
    role: "Software Engineering Manager / Project Manager",
    period: "November 2024 — Transition",
    location: "Istanbul, Türkiye · Turkey–China distributed organization",
    summary:
      "Led engineering delivery for HarmonyOS new version programs with multi-regional ownership and KPI/OKR governance.",
    impact: [
      "Led 20+ engineers across software development, QA, and automation",
      "Owned $8M-scale multi-regional delivery from roadmap to production release",
      "Built AI-assisted multilingual validation across 11 languages, cutting cycle time from ~39 hours to hours",
      "Conducted 50+ technical interviews and scaled engineering capacity",
      "Delivered production releases with no major production incidents",
    ],
    domains: ["Engineering Leadership", "AI Automation", "Program Delivery", "HarmonyOS"],
  },
  {
    company: "Siemens",
    role: "Software Engineering Tech Lead / Senior Expert",
    period: "April 2021 — November 2024",
    summary:
      "Led delivery and quality architecture for a 5G Smart Factory Network Management Platform.",
    impact: [
      "Led a 10+ member team across Development, Quality Engineering, and DevOps",
      "Improved release efficiency by 50% through CI/CD-integrated delivery pipelines",
      "Designed automation frameworks for UI, API, integration, regression, and performance validation",
      "Delivered a €5M enterprise platform with zero critical production defects at release",
    ],
    domains: ["5G", "Industrial Automation", "CI/CD", "Enterprise Platforms"],
  },
  {
    company: "Hepsiburada",
    role: "Senior Software Quality Assurance Engineer",
    period: "July 2019 — April 2021",
    summary:
      "Supported merchant platform modernization from legacy systems to microservices under high-volume e-commerce load.",
    impact: [
      "Designed validation strategies for listing, catalog, and order workflows",
      "Strengthened CI/CD stability, API validation, and release predictability",
    ],
    domains: ["E-commerce", "Microservices", "API Validation"],
  },
  {
    company: "Turkcell via Netaş",
    role: "Senior Software Engineer",
    period: "September 2016 — July 2019",
    summary:
      "Contributed to large-scale telecom digital platforms including BiP and Fizy under high traffic.",
    impact: [
      "Supported API and backend reliability initiatives for consumer-facing platforms",
      "Designed functional, integration, and regression validation strategies",
    ],
    domains: ["Telecom", "High Traffic Systems", "Digital Platforms"],
  },
];
