import { capabilities } from "@/data/capabilities";
import SectionReveal from "./SectionReveal";

export default function Capabilities() {
  return (
    <section
      className="section-padding relative pt-0"
      aria-labelledby="capabilities-heading"
    >
      <div className="container-max">
        <SectionReveal>
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm font-medium tracking-[0.2em] text-electric-blue uppercase">
              Engineering Capabilities
            </p>
            <h2
              id="capabilities-heading"
              className="text-2xl font-bold tracking-tight sm:text-3xl"
            >
              Core capabilities across leadership, delivery, and transformation
            </h2>
          </div>
        </SectionReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item, i) => (
            <SectionReveal key={item.title} delay={i * 0.08}>
              <div className="gradient-border group h-full rounded-2xl p-px">
                <div className="glass-panel h-full rounded-2xl p-6 transition-colors duration-500 group-hover:bg-white/[0.04]">
                  <h3 className="mb-3 text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-silver">
                    {item.description}
                  </p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
