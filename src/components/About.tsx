import SectionReveal from "./SectionReveal";

const impactMetrics = [
  {
    value: "35%",
    label: "Product profitability improvement through roadmap optimization and resource allocation",
  },
  {
    value: "30%",
    label: "SDLC efficiency improvement through process optimization and delivery streamlining",
  },
  {
    value: "25%",
    label: "Customer satisfaction improvement through structured release cycles and feedback integration",
  },
];

const founderHighlights = [
  {
    title: "AfterArtificial",
    label: "Product company",
    description:
      "Public AI product company for the Super ecosystem — SuperGarage and the Super* family, powered by After Framework and engineered via Overstein Labs.",
  },
  {
    title: "SuperGarage",
    label: "Flagship Super App",
    description:
      "AI-powered vehicle assistant with smart reminders, maintenance tracking, expense management, marketplace integration, and live vehicle data — the reference Super App on After Framework.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-padding relative"
      aria-labelledby="about-heading"
    >
      <div className="container-max">
        <SectionReveal>
          <div className="mb-16 max-w-3xl">
            <p className="mb-4 text-sm font-medium tracking-[0.2em] text-electric-blue uppercase">
              About
            </p>
            <h2
              id="about-heading"
              className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            >
              Engineering leader with a{" "}
              <span className="text-gradient">founder&apos;s mindset</span>
            </h2>
            <p className="text-lg leading-relaxed text-silver">
              I own end-to-end product and software delivery, define engineering
              strategy, and drive cross-functional execution across distributed
              teams. Beyond corporate leadership at Huawei, Siemens, and
              Hepsiburada, I founded{" "}
              <span className="text-foreground">AfterArtificial</span> as the
              product company for Super Apps, and{" "}
              <span className="text-foreground">Overstein Labs</span> as the
              engineering brand behind{" "}
              <span className="text-foreground">After Framework</span> —
              starting with{" "}
              <span className="text-foreground">SuperGarage</span>.
            </p>
          </div>
        </SectionReveal>

        <div className="mb-12 grid gap-6 sm:grid-cols-2">
          {founderHighlights.map((item, i) => (
            <SectionReveal key={item.title} delay={i * 0.1}>
              <div className="gradient-border h-full rounded-2xl p-px">
                <div className="glass-panel h-full rounded-2xl p-6 sm:p-8">
                  <p className="mb-2 text-xs font-medium tracking-wider text-electric-cyan uppercase">
                    {item.label}
                  </p>
                  <h3 className="mb-3 text-lg font-semibold text-foreground">
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

        <div className="grid gap-6 sm:grid-cols-3">
          {impactMetrics.map((metric, i) => (
            <SectionReveal key={metric.value} delay={i * 0.1}>
              <div className="gradient-border h-full rounded-2xl p-px">
                <div className="glass-panel h-full rounded-2xl p-6 text-center sm:p-8">
                  <p className="mb-3 text-4xl font-bold text-gradient">
                    {metric.value}
                  </p>
                  <p className="text-sm leading-relaxed text-silver">
                    {metric.label}
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
