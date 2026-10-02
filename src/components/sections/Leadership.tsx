import type { CSSProperties } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Rich from "@/components/ui/Rich";
import { career, certifications, facts, programmes, workingLanguages } from "@/content/career";
import { sectionIds } from "@/content/site";
import { interpolate, type Formatter } from "@/i18n/format";
import type { Messages } from "@/i18n/messages/en";
import { formatFacts, sharedFigures } from "@/lib/facts";

const practiceOrder = [
  "distributed",
  "ownership",
  "governance",
  "okr",
  "cicd",
  "quality",
  "automation",
  "release",
  "stakeholders",
  "hiring",
] as const;

export default function Leadership({ t, fmt, index }: { t: Messages; fmt: Formatter; index: string }) {
  const l = t.leadership;
  const figures = sharedFigures(fmt);

  const summary = [
    fmt.plural(l.summaryRoles, career.length),
    fmt.plural(l.summaryOrgs, facts.organizations),
    interpolate(l.summarySince, { year: figures.year }),
  ].join(" · ");

  return (
    <section id={sectionIds.leadership} className="section" aria-labelledby="leadership-title">
      <div className="container-x">
        <SectionHeading id="leadership-title" index={index} eyebrow={l.eyebrow} title={l.title} lead={l.lead} />
        <p className="reveal mt-6 text-[0.95rem] font-medium text-ink-3">{summary}</p>

        <div className="timeline mt-16">
          <div className="timeline-track" aria-hidden="true">
            <div className="timeline-progress" />
          </div>
          <ol className="grid gap-16 lg:gap-24" aria-label={interpolate(l.timelineLabel, { year: figures.year })}>
          {career.map((role, i) => {
            const copy = l.roles[role.id];
            const values = formatFacts(fmt, role.values);
            const start = role.start ? fmt.monthYear(role.start) : null;
            const end =
              role.end === "present" ? l.present : role.end === "transition" ? l.transition : fmt.monthYear(role.end);
            const duration = role.start && typeof role.end === "object" ? fmt.duration(role.start, role.end) : null;
            const bigYear = role.start ? fmt.year(role.start.year) : l.present;

            return (
              <li key={role.id} className="relative grid gap-6 ps-10 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-16 lg:ps-0">
                <span className="timeline-node" aria-hidden="true" />
                <div className="lg:pe-6 lg:text-end">
                  <p className="timeline-year parallax" aria-hidden="true" style={{ "--parallax": "1.5rem" } as CSSProperties}>
                    {bigYear}
                  </p>
                </div>
                <article className="reveal grid gap-5 lg:ps-10" aria-labelledby={`role-${role.id}`}>
                  <p className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-accent-amber">
                    {interpolate(l.chapter, { n: fmt.number(i + 1) })}
                  </p>
                  <div className="grid gap-1">
                    <h3 id={`role-${role.id}`} className="t-h3">
                      <span dir="ltr" className="inline-block">
                        {role.organization}
                      </span>
                      <span className="text-ink-3"> — </span>
                      {copy.role}
                    </h3>
                    <p className="text-[0.95rem] text-ink-2">
                      <time>{start ? `${start} – ${end}` : end}</time>
                      {duration ? <span className="text-ink-3"> · {duration}</span> : null}
                      {i === 0 && role.start ? (
                        <span className="text-ink-3"> · {interpolate(l.began, { relative: fmt.relativeYears(role.start) })}</span>
                      ) : null}
                    </p>
                    <p className="t-italic text-[0.95rem] text-ink-3">
                      {copy.context}
                    </p>
                  </div>
                  <p className="max-w-[var(--measure)] text-[1.08rem] text-ink-1">{copy.summary}</p>
                  <div>
                    <h4 className="sr-only">{l.outcomes}</h4>
                    <ul className="grid max-w-[var(--measure)] gap-3">
                      {copy.outcomes.map((outcome) => (
                        <li key={outcome} className="relative ps-6 text-ink-2">
                          <span aria-hidden="true" className="absolute start-0 top-[0.72em] h-px w-3 bg-accent-green" />
                          <Rich template={outcome} values={values} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </li>
            );
          })}
          </ol>
        </div>

        <div className="mt-28">
          <h3 className="reveal t-h3 mb-10 max-w-xl">{l.practicesTitle}</h3>
          <ul className="grid gap-px overflow-hidden rounded-[var(--radius-l)] border border-line-1 bg-line-1 sm:grid-cols-2 lg:grid-cols-5">
            {practiceOrder.map((key, i) => (
              <li key={key} className="reveal grid content-start gap-2 bg-surface-1 p-6">
                <span className="text-[0.78rem] font-semibold tabular-nums text-accent-green">{fmt.index(i + 1)}</span>
                <h4 className="font-display text-[1.2rem] leading-snug text-ink-1">{l.practices[key].title}</h4>
                <p className="text-[0.92rem] leading-relaxed text-ink-2">
                  <Rich template={l.practices[key].evidence} values={figures} />
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-24 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <h3 className="reveal t-h3">{l.credentialsTitle}</h3>
          <div className="reveal grid gap-10 sm:grid-cols-2">
            <div className="grid content-start gap-6">
              <div>
                <h4 className="eyebrow mb-4">{l.educationLabel}</h4>
                <ul className="grid gap-4">
                  <li>
                    <p className="font-medium text-ink-1">{l.mba}</p>
                    <p className="text-[0.95rem] text-ink-2" dir="ltr">
                      Istanbul University
                    </p>
                  </li>
                  <li>
                    <p className="font-medium text-ink-1">{l.bsc}</p>
                    <p className="text-[0.95rem] text-ink-2">
                      <span dir="ltr">Düzce University</span> ·{" "}
                      {interpolate(l.gpa, { gpa: fmt.number(3.6), max: fmt.number(4) })}
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="eyebrow mb-4">{l.languagesLabel}</h4>
                <ul className="grid gap-1 text-ink-2">
                  {workingLanguages.map((lang) => (
                    <li key={lang.code}>
                      <span className="text-ink-1">{fmt.languageName(lang.code)}</span> · {l.levels[lang.level]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="grid content-start gap-6">
              <div>
                <h4 className="eyebrow mb-4">{l.certificationsLabel}</h4>
                <ul className="grid gap-3">
                  {certifications.map((cert) => (
                    <li key={cert.id} className="grid gap-0.5">
                      <span className="font-medium text-ink-1">
                        <span dir="ltr">{cert.name}</span> · {l.certs[cert.id]}
                      </span>
                      <span className="text-[0.9rem] text-ink-3" dir="ltr">
                        {cert.issuer}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="eyebrow mb-4">{l.programmesLabel}</h4>
                <ul className="grid gap-2 text-[0.95rem] text-ink-2">
                  {programmes.map((p) => (
                    <li key={p}>{l.programmes[p]}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
