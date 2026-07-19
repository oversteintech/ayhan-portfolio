export interface SkillCluster {
  id: string;
  name: string;
  skills: string[];
  color: string;
}

export const skillClusters: SkillCluster[] = [
  {
    id: "practices",
    name: "Engineering Practices",
    skills: ["KPI / OKR", "Agile", "Scrum", "Kanban", "Release Governance", "CI/CD", "DevOps Transformation"],
    color: "#3b82f6",
  },
  {
    id: "programming",
    name: "Programming & Engineering",
    skills: ["Java", "Python", "JavaScript", "SQL", "REST APIs", "Microservices"],
    color: "#22d3ee",
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    skills: ["Docker", "Kubernetes", "Azure", "Huawei Cloud", "Google Cloud", "Jenkins", "GitLab CI", "Azure Pipelines"],
    color: "#818cf8",
  },
  {
    id: "quality",
    name: "Quality & Automation",
    skills: ["Selenium", "Appium", "Playwright", "RestAssured", "API Testing", "Automation Frameworks"],
    color: "#a78bfa",
  },
  {
    id: "observability",
    name: "Observability",
    skills: ["Grafana", "Prometheus", "Kibana", "Logging", "Monitoring Systems"],
    color: "#60a5fa",
  },
  {
    id: "data",
    name: "Data & Storage",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
    color: "#34d399",
  },
  {
    id: "ai",
    name: "AI & Automation",
    skills: ["AI-assisted Validation", "Multilingual Automation", "Translation Frameworks", "Intelligent Testing"],
    color: "#fbbf24",
  },
  {
    id: "mobile",
    name: "Mobile Ecosystems",
    skills: ["HarmonyOS", "Android", "OpenHarmony", "Flutter", "Mobile QA"],
    color: "#f472b6",
  },
  {
    id: "leadership",
    name: "Leadership",
    skills: ["Team Building", "Hiring", "Mentorship", "Stakeholder Alignment", "Delivery Ownership"],
    color: "#fb923c",
  },
  {
    id: "product",
    name: "Product & Delivery",
    skills: ["Roadmapping", "SDLC Optimization", "Release Cycles", "Product Execution"],
    color: "#ef4444",
  },
];
