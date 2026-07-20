import { enterpriseDomains } from "@/data/brand";
import SectionReveal from "./SectionReveal";

export default function Expertise() {
  return (
    <section id="expertise" className="section-pad relative" aria-labelledby="expertise-heading">
      <div className="container-max">
        <SectionReveal>
          <p className="eyebrow mb-4">Enterprise expertise</p>
          <h2 id="expertise-heading" className="font-display mb-4 max-w-3xl text-3xl tracking-tight sm:text-4xl lg:text-5xl">
            ICT domains with commercial judgment.
          </h2>
          <p className="mb-12 max-w-2xl text-muted">
            Cloud, AI, networking, data center, storage, and digital
            transformation — framed for executives who need outcomes, not
            feature lists.
          </p>
        </SectionReveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {enterpriseDomains.map((d, i) => (
            <SectionReveal key={d.title} delay={i * 0.05}>
              <div className="panel h-full rounded-3xl p-6">
                <h3 className="mb-3 text-base font-semibold text-foreground">{d.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{d.description}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
