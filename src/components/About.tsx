import SectionReveal from "./SectionReveal";

export default function About() {
  return (
    <section id="about" className="section-pad relative" aria-labelledby="about-heading">
      <div className="container-max">
        <SectionReveal>
          <p className="eyebrow mb-4">Executive introduction</p>
          <h2 id="about-heading" className="font-display mb-6 max-w-3xl text-3xl tracking-tight sm:text-4xl lg:text-5xl">
            An operator who can sell, lead, and build.
          </h2>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-5 text-lg leading-relaxed text-muted">
              <p>
                My career has moved through the full stack of technology value
                creation: building and validating systems, leading engineering
                organizations, owning enterprise relationships, and founding
                product ventures.
              </p>
              <p>
                Today I work at the intersection of enterprise ICT and business
                outcomes — helping decision-makers navigate AI, cloud,
                networking, and digital transformation with commercial clarity
                and technical fluency.
              </p>
              <p>
                I do not position myself as only a salesperson, only an engineer,
                or only a founder. I am useful where those worlds meet.
              </p>
            </div>
            <div className="panel rounded-3xl p-6 sm:p-8">
              <p className="text-sm font-medium tracking-wide text-accent uppercase">
                Career arc
              </p>
              <ol className="mt-5 space-y-4 text-sm text-muted">
                <li>
                  <span className="text-foreground">Engineer</span> — systems,
                  quality, and delivery under scale
                </li>
                <li>
                  <span className="text-foreground">Engineering leader</span> —
                  teams, programs, KPI/OKR governance
                </li>
                <li>
                  <span className="text-foreground">Enterprise account leader</span> —
                  ICT portfolios and executive stakeholders
                </li>
                <li>
                  <span className="text-foreground">Founder</span> — AfterArtificial,
                  SuperGarage, Overstein Labs
                </li>
              </ol>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
