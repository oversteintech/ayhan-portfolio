import type { MetadataRoute } from "next";
import { notes } from "@/content/notes";
import { site } from "@/content/site";
import { bcp47, locales } from "@/i18n/config";
import { languageAlternates } from "@/i18n/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const home = locales.map((locale) => ({
    url: `${site.url}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: locale === "en" ? 1 : 0.9,
    alternates: { languages: languageAlternates() },
    images: [`${site.url}/profile.jpg`],
  }));

  const noteEntries = notes.flatMap((note) => {
    const available = locales.filter((l) => note.translations[l]);
    const languages = Object.fromEntries(available.map((l) => [bcp47[l], `${site.url}/${l}/notes/${note.slug}`]));
    return available.map((locale) => ({
      url: `${site.url}/${locale}/notes/${note.slug}`,
      lastModified: new Date(note.publishedAt),
      changeFrequency: "yearly" as const,
      priority: 0.6,
      alternates: { languages },
    }));
  });

  return [...home, ...noteEntries];
}
