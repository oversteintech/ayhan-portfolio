import type { YearMonth } from "@/i18n/format";

/**
 * Verified career facts. Sources: the original static site (index.html), the previous
 * Next.js site data, and the generated CV. Do not add figures that are not in those sources.
 */
export const facts = {
  careerStart: { year: 2016, month: 9 } satisfies YearMonth,
  yearsOfExperience: 10,
  engineersLed: 20,
  programScaleUsd: 8_000_000,
  siemensPlatformEur: 5_000_000,
  siemensTeam: 10,
  releaseEfficiency: 0.5,
  validationLanguages: 11,
  manualValidationHours: 39,
  technicalInterviews: 50,
  organizations: 4,
  inDevelopmentApps: ["SuperHealth", "SuperFinance", "SuperHome", "SuperTravel", "SuperPet", "SuperSports", "SuperNews"],
} as const;

export type RoleId = "turkcell" | "hepsiburada" | "siemens" | "huawei" | "huaweiEnterprise";

export type FactValue =
  | { kind: "number"; value: number }
  | { kind: "currency"; value: number; currency: "USD" | "EUR" }
  | { kind: "percent"; value: number };

export interface CareerRole {
  id: RoleId;
  organization: string;
  start?: YearMonth;
  end: YearMonth | "present" | "transition";
  values: Record<string, FactValue>;
}

/** Chronological: the story moves from delivery and quality into leadership. */
export const career: CareerRole[] = [
  {
    id: "turkcell",
    organization: "Turkcell / Netaş",
    start: { year: 2016, month: 9 },
    end: { year: 2019, month: 7 },
    values: {},
  },
  {
    id: "hepsiburada",
    organization: "Hepsiburada",
    start: { year: 2019, month: 7 },
    end: { year: 2021, month: 4 },
    values: {},
  },
  {
    id: "siemens",
    organization: "Siemens",
    start: { year: 2021, month: 4 },
    end: { year: 2024, month: 11 },
    values: {
      team: { kind: "number", value: facts.siemensTeam },
      percent: { kind: "percent", value: facts.releaseEfficiency },
      amount: { kind: "currency", value: facts.siemensPlatformEur, currency: "EUR" },
    },
  },
  {
    id: "huawei",
    organization: "Huawei",
    start: { year: 2024, month: 11 },
    end: "transition",
    values: {
      engineers: { kind: "number", value: facts.engineersLed },
      amount: { kind: "currency", value: facts.programScaleUsd, currency: "USD" },
      languages: { kind: "number", value: facts.validationLanguages },
      hours: { kind: "number", value: facts.manualValidationHours },
      interviews: { kind: "number", value: facts.technicalInterviews },
    },
  },
  {
    id: "huaweiEnterprise",
    organization: "Huawei Enterprise",
    end: "present",
    values: {},
  },
];

export type CredentialId = "pmp" | "cspo" | "psm" | "istqbAdvanced" | "istqbFoundation";

export const certifications: Array<{ id: CredentialId; name: string; issuer: string }> = [
  { id: "pmp", name: "PMP", issuer: "Project Management Institute" },
  { id: "cspo", name: "CSPO", issuer: "Scrum Alliance" },
  { id: "psm", name: "PSM I", issuer: "Scrum.org" },
  { id: "istqbAdvanced", name: "ISTQB", issuer: "ISTQB" },
  { id: "istqbFoundation", name: "ISTQB", issuer: "ISTQB" },
];

export const programmes = ["tubitak", "musiad", "leadership"] as const;

export const workingLanguages = [
  { code: "en", level: "fluent" },
  { code: "tr", level: "fluent" },
  { code: "de", level: "basic" },
] as const;
