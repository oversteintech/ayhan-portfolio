import SectionHeading from "@/components/ui/SectionHeading";
import Paths, { type PathContent } from "./Paths";
import { sectionIds } from "@/content/site";
import { interpolate, type Formatter } from "@/i18n/format";
import type { Messages } from "@/i18n/messages/en";
import { sharedFigures } from "@/lib/facts";

export default function Work({ t, fmt, index }: { t: Messages; fmt: Formatter; index: string }) {
  const p = t.paths;
  const figures = sharedFigures(fmt);
  const targets = { leadership: sectionIds.leadership, ecosystem: sectionIds.ecosystem, systems: sectionIds.systems } as const;

  const paths: PathContent[] = (["leadership", "ecosystem", "systems"] as const).map((key, i) => ({
    key,
    index: fmt.index(i + 1),
    tab: p[key].tab,
    kicker: p[key].kicker,
    title: p[key].title,
    body: interpolate(p[key].body, figures),
    points: p[key].points,
    cta: p[key].cta,
    href: `#${targets[key]}`,
  }));

  return (
    <section id={sectionIds.work} className="section section-band" aria-labelledby="work-title">
      <div className="container-x">
        <SectionHeading id="work-title" index={index} eyebrow={p.eyebrow} title={p.title} lead={p.lead} />
        <div className="reveal mt-14">
          <Paths label={p.tablist} paths={paths} />
        </div>
      </div>
    </section>
  );
}
