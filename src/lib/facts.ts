import { facts, type FactValue } from "@/content/career";
import type { Formatter } from "@/i18n/format";

export function formatFact(fmt: Formatter, value: FactValue): string {
  switch (value.kind) {
    case "number":
      return fmt.number(value.value);
    case "currency":
      return fmt.currency(value.value, value.currency);
    case "percent":
      return fmt.percent(value.value);
  }
}

export function formatFacts(fmt: Formatter, values: Record<string, FactValue>): Record<string, string> {
  return Object.fromEntries(Object.entries(values).map(([key, value]) => [key, formatFact(fmt, value)]));
}

/** Locale-formatted versions of the verified figures, keyed by the placeholder names used in messages. */
export function sharedFigures(fmt: Formatter) {
  return {
    engineers: fmt.number(facts.engineersLed),
    team: fmt.number(facts.siemensTeam),
    interviews: fmt.number(facts.technicalInterviews),
    languages: fmt.number(facts.validationLanguages),
    hours: fmt.number(facts.manualValidationHours),
    percent: fmt.percent(facts.releaseEfficiency),
    usdProgram: fmt.currency(facts.programScaleUsd, "USD"),
    eurPlatform: fmt.currency(facts.siemensPlatformEur, "EUR"),
    year: fmt.year(facts.careerStart.year),
  };
}
