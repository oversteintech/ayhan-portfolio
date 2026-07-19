export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  project: string;
  impact: string[];
  technologies: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "Huawei",
    role: "Software Engineering Manager / Project Manager",
    period: "November 2024 — Present",
    project: "HarmonyOS Mobile Operating System New Version Project v6.0–v7.0",
    impact: [
      "Led 20+ engineers across software development, QA, and automation in a distributed Turkey–China organization",
      "Owned $8M-scale multi-regional delivery program from roadmap to production release",
      "Established KPI/OKR-driven engineering governance, improving transparency and delivery accountability",
      "Built and scaled an AI-assisted multilingual validation framework across 11 languages",
      "Reduced manual validation effort from ~39 hours to a few hours per cycle via automation",
      "Conducted 50+ technical interviews and supported engineering team scaling",
      "Delivered production releases with no major production incidents",
    ],
    technologies: [
      "HarmonyOS",
      "AI Automation",
      "KPI/OKR",
      "CI/CD",
      "Team Leadership",
    ],
  },
  {
    company: "Siemens",
    role: "Software Engineering Tech Lead",
    period: "April 2021 — November 2024",
    project: "5G Smart Factory Network Management Platform",
    impact: [
      "Led a 10+ member engineering team across Development, Quality Engineering, and DevOps",
      "Defined end-to-end delivery strategy, quality governance, release processes, and automation roadmap",
      "Built CI/CD-integrated delivery pipelines, improving release efficiency by 50%",
      "Designed automation frameworks for UI, API, integration, regression, and performance validation",
      "Delivered €5M enterprise platform with zero critical production defects at release",
    ],
    technologies: [
      "5G",
      "CI/CD",
      "Automation Frameworks",
      "DevOps",
      "Enterprise QA",
    ],
  },
  {
    company: "Hepsiburada",
    role: "Senior Software Engineer",
    period: "July 2019 — April 2021",
    project: "Merchant Platform Transformation",
    impact: [
      "Contributed to modernization of Merchant Platform from legacy to microservices architecture",
      "Designed validation strategies for high-volume merchant workflows including listing, catalog, and orders",
      "Supported CI/CD pipelines, deployment stability, API validation, and engineering process improvements",
    ],
    technologies: [
      "Microservices",
      "API Testing",
      "CI/CD",
      "E-commerce",
      "Java",
    ],
  },
  {
    company: "Turkcell via Netaş",
    role: "Senior Software Engineer",
    period: "September 2016 — July 2019",
    project: "BiP & Fizy Platforms",
    impact: [
      "Contributed to large-scale telecom digital platforms under high traffic",
      "Supported API and backend engineering initiatives improving release stability",
      "Designed functional, integration, and regression validation strategies",
    ],
    technologies: [
      "Telecom",
      "API Engineering",
      "High Traffic Systems",
      "BiP",
      "Fizy",
    ],
  },
];
