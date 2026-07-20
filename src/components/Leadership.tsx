import { leadershipPrinciples } from "@/data/brand";
import SectionReveal from "./SectionReveal";

export default function Leadership() {
  return (
    <section id="leadership" className="section-pad relative" aria-labelledby="leadership-heading">
      <div className="container-max">
        <SectionReveal>
          <p className="eyebrow mb-4">Leadership philosophy</p>
          <h2 id="leadership-heading" className="font-display mb-4 max-w-3xl text-3xl tracking-tight sm:text-4xl lg:text-5xl">
            How I lead people, programs, and customers.
          </h2>
          <p className="mb-12 max-w-2xl text-muted">
            Leadership is the conversion of complexity into clarity — for teams
            shipping systems and for enterprises making technology decisions.
          </p>
        </SectionReveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {leadershipPrinciples.map((p, i) => (
            <SectionReveal key={p.title} delay={i * 0.06}>
              <div className="panel h-full rounded-3xl p-6 sm:p-8">
                <h3 className="mb-3 text-lg font-semibold text-foreground">{p.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{p.description}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
