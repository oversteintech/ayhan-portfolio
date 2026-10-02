import SectionHeading from "@/components/ui/SectionHeading";
import SystemsMap, { type LayerContent } from "./SystemsMap";
import { sectionIds } from "@/content/site";
import { interpolate, type Formatter } from "@/i18n/format";
import type { Messages } from "@/i18n/messages/en";
import { sharedFigures } from "@/lib/facts";

const layerOrder = ["experience", "domain", "shared", "identity", "intelligence", "delivery"] as const;
const blockOrder = ["identity", "design", "ai", "pipeline"] as const;

export default function Systems({ t, fmt, index }: { t: Messages; fmt: Formatter; index: string }) {
  const s = t.systems;
  const figures = sharedFigures(fmt);
  const layers: LayerContent[] = layerOrder.map((key, i) => ({
    key,
    index: fmt.number(i + 1),
    name: s.layers[key].name,
    summary: s.layers[key].summary,
    detail: s.layers[key].detail,
    example: interpolate(s.layers[key].example, figures),
    position: interpolate(s.layerOf, { n: fmt.number(i + 1), total: fmt.number(layerOrder.length) }),
  }));
  const products = [1, 2, 3].map((n) => interpolate(s.product, { n: fmt.number(n) }));

  return (
    <section id={sectionIds.systems} className="section" aria-labelledby="systems-title">
      <div className="container-x">
        <SectionHeading id="systems-title" index={index} eyebrow={s.eyebrow} title={s.title} lead={s.lead} />

        <div className="reveal mt-16">
          <SystemsMap label={s.mapLabel} instructions={s.instructions} inPractice={s.inPractice} layers={layers} />
        </div>

        <div className="mt-24">
          <h3 className="reveal t-h3 mb-8">{s.compareTitle}</h3>
          <div className="grid gap-5 md:grid-cols-2">
            <figure className="reveal card grid gap-6 p-7">
              <div className="grid grid-cols-3 gap-3" aria-hidden="true">
                {products.map((product) => (
                  <div key={product} className="grid gap-1.5">
                    <div className="stack-block !border-line-3 !font-semibold !text-ink-1">{product}</div>
                    {blockOrder.map((block) => (
                      <div key={block} className="stack-block border-dashed">
                        {s.blocks[block]}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <figcaption className="grid gap-2">
                <span className="font-display text-[1.3rem] text-ink-1">{s.compareRebuild}</span>
                <span className="text-ink-2">{s.compareRebuildBody}</span>
              </figcaption>
            </figure>

            <figure className="reveal card grid gap-6 p-7">
              <div className="grid gap-1.5" aria-hidden="true">
                <div className="grid grid-cols-3 gap-3">
                  {products.map((product) => (
                    <div key={product} className="stack-block !border-line-3 !font-semibold !text-ink-1">
                      {product}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-4 gap-1.5 rounded-[10px] border border-accent-blue bg-wash-blue p-1.5">
                  {blockOrder.map((block) => (
                    <div key={block} className="stack-block !bg-surface-1">
                      {s.blocks[block]}
                    </div>
                  ))}
                </div>
                <p className="text-center text-[0.8rem] font-semibold text-accent-blue">{s.foundation}</p>
              </div>
              <figcaption className="grid gap-2">
                <span className="font-display text-[1.3rem] text-ink-1">{s.compareShare}</span>
                <span className="text-ink-2">{s.compareShareBody}</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
