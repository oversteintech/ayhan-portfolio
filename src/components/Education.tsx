import { degrees, languages, certificates } from "@/data/education";
import SectionReveal from "./SectionReveal";

export default function Education() {
  return (
    <section
      id="education"
      className="section-padding relative"
      aria-labelledby="education-heading"
    >
      <div className="container-max">
        <SectionReveal>
          <div className="mb-16 max-w-3xl">
            <p className="mb-4 text-sm font-medium tracking-[0.2em] text-electric-blue uppercase">
              Education
            </p>
            <h2
              id="education-heading"
              className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            >
              Academic &amp;{" "}
              <span className="text-gradient">professional background</span>
            </h2>
          </div>
        </SectionReveal>

        <SectionReveal>
          <div className="gradient-border rounded-2xl p-px">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 lg:p-10">
              <div className="grid gap-10 lg:grid-cols-3">
                <div>
                  <h3 className="mb-4 text-xs font-medium tracking-wider text-electric-blue uppercase">
                    Degrees
                  </h3>
                  <ul className="space-y-3">
                    {degrees.map((degree) => (
                      <li
                        key={degree}
                        className="text-base font-medium text-foreground sm:text-lg"
                      >
                        {degree}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="mb-4 text-xs font-medium tracking-wider text-electric-blue uppercase">
                    Languages
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {languages.map((lang) => (
                      <span
                        key={lang.name}
                        className="rounded-full border border-white/8 bg-white/3 px-4 py-2 text-sm text-silver-light"
                      >
                        {lang.name} — {lang.level}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <h3 className="mb-4 text-xs font-medium tracking-wider text-electric-blue uppercase">
                    Certifications
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {certificates.map((cert) => (
                      <span
                        key={cert}
                        className="rounded-lg border border-white/8 bg-white/3 px-3 py-1.5 text-xs text-silver"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
