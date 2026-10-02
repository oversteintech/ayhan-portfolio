import type { ReactNode } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Rich from "@/components/ui/Rich";
import { facts } from "@/content/career";
import { sectionIds } from "@/content/site";
import { interpolate, type Formatter } from "@/i18n/format";
import type { Messages } from "@/i18n/messages/en";
import { sharedFigures } from "@/lib/facts";

type Key = keyof Messages["capabilities"]["items"];

const where: Record<Key, string[]> = {
  automation: ["Huawei", "Siemens", "Hepsiburada", "Netaş"],
  leadership: ["Huawei", "Siemens"],
  product: ["Huawei", "Overstein"],
  platform: ["Overstein", "After Framework"],
  ai: ["Huawei", "After Artificial"],
  cicd: ["Siemens", "Hepsiburada"],
  teams: ["Siemens", "Huawei"],
  enterprise: ["Siemens", "Turkcell / Netaş", "Hepsiburada"],
};

const layout: Array<{ key: Key; span: string }> = [
  { key: "automation", span: "lg:col-span-4" },
  { key: "leadership", span: "lg:col-span-2" },
  { key: "product", span: "lg:col-span-2" },
  { key: "platform", span: "lg:col-span-2" },
  { key: "ai", span: "lg:col-span-2" },
  { key: "cicd", span: "lg:col-span-4" },
  { key: "teams", span: "lg:col-span-2" },
  { key: "enterprise", span: "lg:col-span-6" },
];

export default function Capabilities({ t, fmt, index }: { t: Messages; fmt: Formatter; index: string }) {
  const c = t.capabilities;
  const figures = sharedFigures(fmt);
  const values: Record<Key, Record<string, string>> = {
    automation: { hours: figures.hours },
    leadership: { engineers: figures.engineers },
    product: { amount: figures.usdProgram },
    platform: {},
    ai: { languages: figures.languages },
    cicd: { percent: figures.percent },
    teams: { team: figures.team, interviews: figures.interviews },
    enterprise: { amount: figures.eurPlatform },
  };

  const visuals: Partial<Record<Key, ReactNode>> = {
    automation: (
      <figure className="grid gap-3 rounded-[var(--radius-m)] border border-line-1 bg-surface-2 p-5">
        <figcaption className="eyebrow">{c.items.automation.chartLabel}</figcaption>
        <div className="grid gap-3">
          <div className="grid gap-1.5">
            <div className="flex justify-between gap-4 text-[0.9rem]">
              <span className="font-medium text-ink-1">{c.items.automation.before}</span>
              <span className="text-ink-2">{interpolate(c.items.automation.beforeValue, { hours: figures.hours })}</span>
            </div>
            <div className="bar w-full" />
          </div>
          <div className="grid gap-1.5">
            <div className="flex justify-between gap-4 text-[0.9rem]">
              <span className="font-medium text-ink-1">{c.items.automation.after}</span>
              <span className="text-ink-2">{c.items.automation.afterValue}</span>
            </div>
            <div className="bar bar-approx w-[14%]" />
          </div>
        </div>
      </figure>
    ),
    cicd: (
      <figure className="grid gap-3">
        <figcaption className="sr-only">{c.items.cicd.pipelineLabel}</figcaption>
        <ol className="flex items-stretch gap-1.5">
          {c.items.cicd.stages.map((stage, i) => (
            <li key={stage} className={`pipeline-stage ${i === 3 ? "is-gate" : ""}`}>
              {stage}
            </li>
          ))}
        </ol>
      </figure>
    ),
    leadership: (
      <div className="grid w-fit grid-cols-10 gap-1.5" aria-hidden="true">
        {Array.from({ length: facts.engineersLed }, (_, i) => (
          <span key={i} className="h-2.5 w-2.5 rounded-full bg-accent-green" style={{ opacity: 0.45 + (i % 5) * 0.12 }} />
        ))}
      </div>
    ),
    enterprise: (
      <p className="font-display text-[clamp(3rem,2rem+4vw,5.5rem)] leading-none tracking-tight text-accent-blue" aria-hidden="true">
        {figures.eurPlatform}
      </p>
    ),
  };

  return (
    <section id={sectionIds.capabilities} className="section section-band" aria-labelledby="capabilities-title">
      <div className="container-x">
        <SectionHeading id="capabilities-title" index={index} eyebrow={c.eyebrow} title={c.title} lead={c.lead} />

        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {layout.map(({ key, span }) => {
            const item = c.items[key];
            const wide = key === "enterprise";
            return (
              <li key={key} className={`reveal card capability ${span} ${key === "automation" || key === "cicd" ? "sm:col-span-2" : ""} ${wide ? "sm:col-span-2 lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-12" : ""}`}>
                {wide ? visuals.enterprise : null}
                <div className="grid gap-4">
                  <p className="text-[0.8rem] font-medium text-ink-3">
                    <span className="sr-only">{c.where}: </span>
                    <span dir="ltr" className="inline-block">
                      {where[key].join(" · ")}
                    </span>
                  </p>
                  <h3 className="t-h3">{item.title}</h3>
                  <p className="text-ink-2">{item.story}</p>
                  {!wide && visuals[key] ? <div className="mt-2">{visuals[key]}</div> : null}
                  <p className="capability-outcome text-[0.98rem] text-ink-1">
                    <span className="sr-only">{c.outcome}: </span>
                    <Rich template={item.outcome} values={values[key]} />
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
