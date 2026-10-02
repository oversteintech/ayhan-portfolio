export const site = {
  url: "https://www.ayhanuzundal.com.tr",
  name: "Ayhan Uzundal",
  email: "ayhanuzundal@gmail.com",
  linkedin: "https://www.linkedin.com/in/ayhan-uzundal",
  github: "https://github.com/auzundal",
  cv: "/cv.pdf",
  location: { city: "Istanbul", country: "TR" },
} as const;

export const sectionIds = {
  work: "work",
  leadership: "leadership",
  ecosystem: "ecosystem",
  systems: "systems",
  capabilities: "capabilities",
  notes: "notes",
  contact: "contact",
} as const;

export type SectionKey = keyof typeof sectionIds;
