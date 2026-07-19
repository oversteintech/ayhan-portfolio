export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  highlight: string;
}

export const projects: Project[] = [
  {
    id: "super-garage",
    title: "SuperGarage",
    description:
      "Flagship AfterArtificial Super App — an AI-powered vehicle assistant with smart reminders, maintenance tracking, expense management, marketplace integration, and live vehicle data. Built on After Framework with Flutter and Firebase.",
    tags: ["AfterArtificial", "After Framework", "Flutter", "AI", "Mobile"],
    highlight: "Flagship Super App",
  },
  {
    id: "super-news",
    title: "SuperNews",
    description:
      "AfterArtificial Super App for AI-assisted news — signals, briefings, and calm reading on After Framework standard APIs.",
    tags: ["AfterArtificial", "After Framework", "Flutter", "News"],
    highlight: "Super App",
  },
  {
    id: "super-sports",
    title: "SuperSports",
    description:
      "AfterArtificial Super App for sports — scores, teams, and Mate AI on the shared After Framework platform.",
    tags: ["AfterArtificial", "After Framework", "Flutter", "Sports"],
    highlight: "Super App",
  },
  {
    id: "afterartificial",
    title: "AfterArtificial",
    description:
      "Public AI product company for the Super ecosystem — SuperGarage, SuperHealth, SuperNews, SuperSports, and more — powered by After Framework.",
    tags: ["Product Company", "Super Apps", "AI", "Platform"],
    highlight: "Founded Company",
  },
  {
    id: "overstein",
    title: "Overstein Labs",
    description:
      "Engineering brand behind After Framework — shared auth, membership, AI SDK, design system, and infrastructure so each Super App ships faster than the last.",
    tags: ["Engineering", "After Framework", "Flutter", "Platform"],
    highlight: "Engineering Lab",
  },
  {
    id: "harmonyos-ai",
    title: "HarmonyOS AI Validation Framework",
    description:
      "AI-assisted multilingual validation framework scaled across 11 languages for HarmonyOS v6.0-v7.0, reducing manual validation from ~39 hours to a few hours per cycle within an $8M delivery program.",
    tags: ["HarmonyOS", "AI", "11 Languages", "Automation", "Huawei"],
    highlight: "$8M Program",
  },
  {
    id: "siemens-5g",
    title: "5G Smart Factory Platform",
    description:
      "EUR 5M enterprise network management platform with CI/CD-integrated delivery pipelines, automation frameworks for UI/API/integration/regression, and zero critical defects at release.",
    tags: ["5G", "Siemens", "CI/CD", "Automation", "Enterprise"],
    highlight: "EUR 5M Delivery",
  },
];
