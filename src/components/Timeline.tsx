import { experience } from "@/data/experience";
import SectionReveal from "./SectionReveal";

export default function Timeline() {
  return (
    <section id="journey" className="section-pad relative" aria-labelledby="journey-heading">
      <div className="container-max">
        <SectionReveal>
          <p className="eyebrow mb-4">Professional journey</p>
          <h2 id="journey-heading" className="font-display mb-4 max-w-3xl text-3xl tracking-tight sm:text-4xl lg:text-5xl">
            Institutions, programs, and outcomes.
          </h2>
          <p className="mb-12 max-w-2xl text-muted">
            Huawei, Siemens, Hepsiburada, Turkcell, and Netaş — a path from
            delivery excellence to enterprise ownership and venture building.
          </p>
        </SectionReveal>

        <div className="space-y-6">
          {experience.map((item, i) => (
            <SectionReveal key={`${item.company}-${item.role}`} delay={i * 0.05}>
              <article className="panel rounded-3xl p-6 sm:p-8">
                <div className="flex flex-col gap-2 border-b border-border pb-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{item.company}</h3>
                    <p className="mt-1 text-sm font-medium text-accent-bright">{item.role}</p>
                  </div>
                  <p className="text-sm text-muted">{item.period}</p>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted">{item.summary}</p>
                <ul className="mt-5 space-y-2">
                  {item.impact.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.domains.map((d) => (
                    <span
                      key={d}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
