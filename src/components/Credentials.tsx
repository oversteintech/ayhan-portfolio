import { certifications } from "@/data/brand";
import SectionReveal from "./SectionReveal";

export default function Credentials() {
  return (
    <section id="credentials" className="section-pad relative" aria-labelledby="credentials-heading">
      <div className="container-max">
        <SectionReveal>
          <p className="eyebrow mb-4">Credentials</p>
          <h2 id="credentials-heading" className="font-display mb-12 max-w-3xl text-3xl tracking-tight sm:text-4xl lg:text-5xl">
            Education & certifications
          </h2>
        </SectionReveal>

        <div className="grid gap-8 lg:grid-cols-2">
          <SectionReveal>
            <div className="panel rounded-3xl p-6 sm:p-8">
              <h3 className="mb-5 text-lg font-semibold">Education</h3>
              <div className="space-y-5">
                <div>
                  <p className="font-medium text-foreground">Istanbul University</p>
                  <p className="text-sm text-muted">Master of Business Administration (MBA)</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Düzce University</p>
                  <p className="text-sm text-muted">B.Sc. Computer Engineering · GPA 3.6 / 4.0</p>
                </div>
              </div>
              <div className="mt-8 border-t border-border pt-6">
                <h4 className="mb-3 text-sm font-semibold text-foreground">Languages</h4>
                <p className="text-sm text-muted">English — Fluent · Turkish — Fluent · German — Basics</p>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.08}>
            <div className="panel rounded-3xl p-6 sm:p-8">
              <h3 className="mb-5 text-lg font-semibold">Certifications</h3>
              <ul className="space-y-3">
                {certifications.map((c) => (
                  <li key={c.name} className="flex items-baseline justify-between gap-4 border-b border-border/70 py-2 last:border-0">
                    <span className="text-sm text-foreground">{c.name}</span>
                    <span className="text-xs text-muted">{c.org}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
