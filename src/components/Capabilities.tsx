import SectionReveal from "./SectionReveal";

const pillars = [
  {
    title: "AI & Digital Transformation",
    description:
      "I connect AI and platform capabilities to operating models — from enterprise automation to productized intelligence — without losing sight of governance, risk, and adoption.",
  },
  {
    title: "Engineering Leadership",
    description:
      "I have owned multi-million programs, led 20+ engineers, and built delivery systems with KPI/OKR clarity. That depth informs how I advise and sell enterprise technology today.",
  },
  {
    title: "Business Development",
    description:
      "Strategic account ownership means aligning technical truth with commercial progress: stakeholder maps, solution narratives, and decisions that advance the customer.",
  },
];

export default function Capabilities() {
  return (
    <section className="section-pad relative pt-0" aria-labelledby="capabilities-heading">
      <div className="container-max">
        <SectionReveal>
          <h2 id="capabilities-heading" className="sr-only">
            Core capabilities
          </h2>
          <div className="grid gap-5 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <div key={p.title} className="panel rounded-3xl p-6 sm:p-8">
                <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-accent uppercase">
                  0{i + 1}
                </p>
                <h3 className="mb-3 text-lg font-semibold">{p.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{p.description}</p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
