"use client";

import { experience } from "@/data/experience";
import SectionReveal from "./SectionReveal";

export default function Timeline() {
  return (
    <section
      id="experience"
      className="section-padding relative"
      aria-labelledby="experience-heading"
    >
      <div className="container-max">
        <SectionReveal>
          <div className="mb-16 max-w-3xl">
            <p className="mb-4 text-sm font-medium tracking-[0.2em] text-electric-blue uppercase">
              Work Experience
            </p>
            <h2
              id="experience-heading"
              className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            >
              Enterprise delivery across{" "}
              <span className="text-gradient">global organizations</span>
            </h2>
            <p className="mt-4 text-silver">
              Huawei, Siemens, Hepsiburada, Turkcell, and Netaş.
            </p>
          </div>
        </SectionReveal>

        <div className="relative">
          <div
            className="absolute left-[19px] top-0 hidden h-full w-px bg-gradient-to-b from-electric-blue/40 via-electric-blue/10 to-transparent md:left-1/2 md:block md:-translate-x-px"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-12">
            {experience.map((item, i) => (
              <SectionReveal key={item.company} delay={i * 0.1}>
                <div
                  className={`relative flex flex-col gap-6 md:flex-row md:items-start ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-0 top-6 hidden md:left-1/2 md:block md:-translate-x-1/2">
                    <div className="relative">
                      <div className="h-3 w-3 rounded-full bg-electric-blue shadow-[0_0_12px_rgba(59,130,246,0.5)]" />
                      <div className="absolute inset-0 h-3 w-3 animate-ping rounded-full bg-electric-blue/30" />
                    </div>
                  </div>

                  <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <div className="gradient-border rounded-2xl p-px">
                      <div className="glass-panel rounded-2xl p-6 sm:p-8">
                        <div className="mb-4 flex flex-wrap items-center gap-3">
                          <span className="inline-flex h-2 w-2 rounded-full bg-electric-blue md:hidden" />
                          <span className="text-xs font-medium tracking-wider text-electric-blue uppercase">
                            {item.period}
                          </span>
                        </div>
                        <h3 className="mb-1 text-xl font-bold text-foreground">
                          {item.company}
                        </h3>
                        <p className="mb-1 text-sm font-medium text-electric-blue-bright">
                          {item.role}
                        </p>
                        <p className="mb-4 text-xs text-silver/80 italic">
                          {item.project}
                        </p>
                        <ul className="mb-5 space-y-2">
                          {item.impact.map((point) => (
                            <li
                              key={point}
                              className="flex gap-2 text-sm leading-relaxed text-silver"
                            >
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-electric-blue/60" />
                              {point}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-white/8 bg-white/3 px-3 py-1 text-xs text-silver-light"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block md:w-1/2" />
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
