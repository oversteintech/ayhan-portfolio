import SectionReveal from "./SectionReveal";

export default function FutureScaffold() {
  const blocks = [
    {
      id: "awards",
      title: "Awards",
      description: "Recognition will be listed here as formal awards and enterprise acknowledgments are published.",
    },
    {
      id: "speaking",
      title: "Speaking",
      description: "Talks on enterprise ICT, AI adoption, engineering leadership, and bridging business with technology.",
    },
    {
      id: "insights",
      title: "Insights",
      description: "Essays and briefings for CIOs, CTOs, and operators — coming soon.",
    },
    {
      id: "testimonials",
      title: "Testimonials",
      description: "Selected perspectives from colleagues, customers, and partners will appear here.",
    },
  ];

  return (
    <section className="section-pad relative pt-0" aria-label="Future sections">
      <div className="container-max grid gap-5 sm:grid-cols-2">
        {blocks.map((b, i) => (
          <SectionReveal key={b.id} delay={i * 0.05}>
            <div id={b.id} className="panel rounded-3xl p-6 sm:p-8">
              <div className="mb-3 flex items-center justify-between gap-3">
                <h2 className="text-lg font-semibold">{b.title}</h2>
                <span className="rounded-full border border-border px-2.5 py-1 text-[10px] tracking-wider text-muted uppercase">
                  Coming soon
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted">{b.description}</p>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
