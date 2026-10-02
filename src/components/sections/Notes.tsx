import Link from "next/link";
import Icon from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";
import { getNotes, noteTopics } from "@/content/notes";
import { sectionIds } from "@/content/site";
import type { Locale } from "@/i18n/config";
import { interpolate, type Formatter } from "@/i18n/format";
import type { Messages } from "@/i18n/messages/en";

export default function Notes({ t, fmt, locale, index }: { t: Messages; fmt: Formatter; locale: Locale; index: string }) {
  const n = t.notes;
  const notes = getNotes(locale);

  return (
    <section id={sectionIds.notes} className="section" aria-labelledby="notes-title">
      <div className="container-x">
        <SectionHeading id="notes-title" index={index} eyebrow={n.eyebrow} title={n.title} lead={n.lead} />

        <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <div className="reveal">
            <h3 className="eyebrow mb-6">{n.topicsLabel}</h3>
            <ol className="grid border-t border-line-2">
              {noteTopics.map((topic, i) => (
                <li key={topic} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-4 gap-y-1 border-b border-line-2 py-5">
                  <span className="row-span-2 pt-1 text-[0.8rem] font-semibold tabular-nums text-accent-amber">{fmt.index(i + 1)}</span>
                  <span className="font-display text-[1.35rem] leading-snug text-ink-1">{n.topics[topic].title}</span>
                  <span className="text-[0.95rem] text-ink-2">{n.topics[topic].blurb}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="reveal">
            {notes.length ? (
              <div className="grid gap-5">
                <p className="text-[0.95rem] text-ink-3">{fmt.plural(n.count, notes.length)}</p>
                <ul className="grid gap-5">
                  {notes.map((note) => (
                    <li key={note.slug} className="card grid gap-3 p-7">
                      <p className="text-[0.85rem] text-ink-3">
                        {n.topics[note.topic].title} ·{" "}
                        <time dateTime={note.publishedAt}>{interpolate(n.published, { date: fmt.date(note.publishedAt) })}</time> ·{" "}
                        {fmt.plural(n.readingTime, note.readingMinutes)}
                      </p>
                      <h3 className="t-h3">{note.content.title}</h3>
                      <p className="text-ink-2">{note.content.summary}</p>
                      <Link href={`/${locale}/notes/${note.slug}`} className="link-arrow mt-2 self-start">
                        {n.read}
                        <Icon name="arrow" size={16} className="arrow" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="card grid gap-5 p-8 sm:p-10">
                <svg viewBox="0 0 120 80" className="h-16 w-24 text-line-3 rtl:-scale-x-100" aria-hidden="true" focusable="false">
                  <rect x="8" y="6" width="70" height="68" rx="4" fill="var(--surface-2)" stroke="currentColor" />
                  <g stroke="currentColor" strokeLinecap="round">
                    <line x1="18" y1="22" x2="62" y2="22" />
                    <line x1="18" y1="34" x2="66" y2="34" />
                    <line x1="18" y1="46" x2="50" y2="46" />
                  </g>
                  <path d="M84 62 L108 18 L114 22 L90 66 L82 70 Z" fill="var(--surface-1)" stroke="var(--accent-amber)" />
                </svg>
                <h3 className="t-h3">{n.emptyTitle}</h3>
                <p className="text-ink-2">{n.emptyBody}</p>
                <a href={`#${sectionIds.contact}`} className="link-arrow self-start">
                  {n.emptyCta}
                  <Icon name="arrow" size={16} className="arrow" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
