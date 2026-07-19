import SectionReveal from "./SectionReveal";

const pillars = [
  {
    title: "AfterArtificial",
    description:
      "The public AI product company for the Super ecosystem — SuperGarage and the Super* family, powered by After Framework.",
  },
  {
    title: "After Framework",
    description:
      "Shared Super App platform (~70–80%) — auth, membership, AI, notifications, localization, analytics, and design system.",
  },
  {
    title: "Overstein Labs",
    description:
      "Engineering brand that builds After Framework and reference implementations — so each Super App ships faster than the last.",
  },
];

export default function FounderVision() {
  return (
    <section
      id="vision"
      className="section-padding relative"
      aria-labelledby="vision-heading"
    >
      <div className="container-max">
        <SectionReveal>
          <div className="gradient-border overflow-hidden rounded-3xl p-px">
            <div className="relative overflow-hidden rounded-3xl bg-graphite/50 px-6 py-16 sm:px-12 sm:py-20">
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 via-transparent to-electric-cyan/5" />
              <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-electric-blue/5 blur-[100px]" />

              <div className="relative max-w-4xl">
                <p className="mb-4 text-sm font-medium tracking-[0.2em] text-electric-blue uppercase">
                  Founder Vision
                </p>
                <h2
                  id="vision-heading"
                  className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
                >
                  From engineering execution to{" "}
                  <span className="text-gradient">building companies</span>
                </h2>
                <p className="mb-12 max-w-2xl text-lg leading-relaxed text-silver">
                  Years of leading $8M programs and 20+ engineer teams taught me
                  how to deliver at scale.{" "}
                  <span className="text-foreground">AfterArtificial</span> is
                  where that experience meets product ownership — shipping{" "}
                  <span className="text-foreground">SuperGarage</span> as the
                  flagship Super App, on{" "}
                  <span className="text-foreground">After Framework</span>,
                  engineered through{" "}
                  <span className="text-foreground">Overstein Labs</span>.
                </p>

                <div className="grid gap-6 sm:grid-cols-3">
                  {pillars.map((pillar) => (
                    <div
                      key={pillar.title}
                      className="rounded-2xl border border-white/5 bg-white/2 p-6"
                    >
                      <h3 className="mb-3 text-base font-semibold text-foreground">
                        {pillar.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-silver">
                        {pillar.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
