import { interpolate, type Formatter } from "@/i18n/format";
import { facts } from "@/content/career";
import type { Messages } from "@/i18n/messages/en";

export default function Statement({ t, fmt }: { t: Messages; fmt: Formatter }) {
  const s = t.statement;
  const words = s.quote.split(/(\s+)/);
  const notes = [interpolate(s.noteSince, { year: fmt.year(facts.careerStart.year) }), s.noteNow, s.noteBelief];

  return (
    <section id="statement" className="section" aria-labelledby="statement-title">
      <div className="container-x grid gap-14 lg:grid-cols-[minmax(0,0.32fr)_minmax(0,1fr)] lg:gap-20">
        <div className="reveal-soft order-2 lg:order-1">
          <h2 id="statement-title" className="eyebrow mb-8">
            {s.eyebrow}
          </h2>
          <ul className="grid gap-6" aria-label={s.notesLabel}>
            {notes.map((note, i) => (
              <li key={i} className="margin-note">
                <span className="mb-1 block text-[0.78rem] font-semibold tabular-nums text-accent-amber">{fmt.index(i + 1)}</span>
                {note}
              </li>
            ))}
          </ul>
        </div>

        <figure className="order-1 lg:order-2">
          <blockquote className="statement-quote">
            <span className="open-mark" aria-hidden="true">
              “
            </span>
            {words.map((word, i) =>
              /^\s+$/.test(word) ? (
                word
              ) : (
                <span key={i} className="statement-word">
                  {word}
                </span>
              ),
            )}
          </blockquote>
          <figcaption className="mt-10 flex items-center gap-4 text-ink-2">
            <span aria-hidden="true" className="h-px w-12 bg-line-3" />
            <span className="font-display text-xl" dir="ltr">
              Ayhan Uzundal
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
