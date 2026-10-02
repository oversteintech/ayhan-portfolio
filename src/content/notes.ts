import type { Locale } from "@/i18n/config";

export const noteTopics = ["leadership", "delivery", "platform", "ai", "teams", "quality"] as const;

export type NoteTopic = (typeof noteTopics)[number];

export interface NoteTranslation {
  title: string;
  summary: string;
  /** Paragraphs, rendered in order. */
  body: string[];
}

export interface Note {
  slug: string;
  topic: NoteTopic;
  /** ISO date, e.g. "2026-10-01". */
  publishedAt: string;
  readingMinutes: number;
  /** A note appears only in the locales it has been written or translated for. */
  translations: Partial<Record<Locale, NoteTranslation>>;
}

/**
 * Published notes. Intentionally empty until real essays exist: the site renders an
 * honest empty state instead of placeholder posts. Add entries here to publish.
 */
export const notes: Note[] = [];

export function getNotes(locale: Locale) {
  return notes
    .filter((note) => note.translations[locale])
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .map((note) => ({ ...note, content: note.translations[locale]! }));
}

export function getNote(locale: Locale, slug: string) {
  return getNotes(locale).find((note) => note.slug === slug);
}
