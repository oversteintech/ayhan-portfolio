import { ventures } from "@/data/brand";
import SectionReveal from "./SectionReveal";

export default function Ventures() {
  return (
    <section id="ventures" className="section-pad relative" aria-labelledby="ventures-heading">
      <div className="container-max">
        <SectionReveal>
          <p className="eyebrow mb-4">Products & ventures</p>
          <h2 id="ventures-heading" className="font-display mb-4 max-w-3xl text-3xl tracking-tight sm:text-4xl lg:text-5xl">
            Evidence of how I build.
          </h2>
          <p className="mb-12 max-w-2xl text-muted">
            Ventures support the brand — they do not replace the professional
            identity. These are proofs of product ownership, architecture
            thinking, and long-term ambition.
          </p>
        </SectionReveal>

        <div className="grid gap-5 md:grid-cols-3">
          {ventures.map((v, i) => (
            <SectionReveal key={v.name} delay={i * 0.06}>
              <article className="panel flex h-full flex-col rounded-3xl p-6 sm:p-7">
                <p className="text-xs font-medium tracking-wider text-accent uppercase">
                  {v.role}
                </p>
                <h3 className="mt-3 text-xl font-semibold">{v.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{v.description}</p>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
