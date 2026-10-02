import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/ui/Icon";
import { getNote, notes } from "@/content/notes";
import { sectionIds, site } from "@/content/site";
import { bcp47, isLocale, locales } from "@/i18n/config";
import { createFormatter, interpolate } from "@/i18n/format";
import { getMessages } from "@/i18n/messages";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    notes.filter((note) => note.translations[locale]).map((note) => ({ locale, slug: note.slug })),
  );
}

export async function generateMetadata({ params }: PageProps<"/[locale]/notes/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const note = getNote(locale, slug);
  if (!note) return {};
  const languages = Object.fromEntries(
    locales.filter((l) => note.translations[l]).map((l) => [bcp47[l], `${site.url}/${l}/notes/${slug}`]),
  );
  return {
    title: note.content.title,
    description: note.content.summary,
    alternates: { canonical: `${site.url}/${locale}/notes/${slug}`, languages },
    openGraph: { type: "article", publishedTime: note.publishedAt, title: note.content.title, description: note.content.summary },
  };
}

export default async function NotePage({ params }: PageProps<"/[locale]/notes/[slug]">) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const note = getNote(locale, slug);
  if (!note) notFound();
  const t = await getMessages(locale);
  const fmt = createFormatter(locale);

  return (
    <main className="section">
      <article className="container-x grid max-w-3xl gap-8">
        <Link href={`/${locale}#${sectionIds.notes}`} className="link-arrow self-start">
          <Icon name="arrow" size={16} className="arrow rotate-180" />
          {t.notes.back}
        </Link>
        <header className="grid gap-4">
          <p className="text-[0.9rem] text-ink-3">
            {t.notes.topics[note.topic].title} ·{" "}
            <time dateTime={note.publishedAt}>{interpolate(t.notes.published, { date: fmt.date(note.publishedAt) })}</time> ·{" "}
            {fmt.relativeDate(note.publishedAt)}
          </p>
          <h1 className="t-h2">{note.content.title}</h1>
          <p className="t-lead">{note.content.summary}</p>
        </header>
        <div className="grid gap-5 text-[1.12rem] leading-[1.75] text-ink-1">
          {note.content.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}
