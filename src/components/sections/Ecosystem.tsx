import type { CSSProperties } from "react";
import Image from "next/image";
import Icon from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";
import { brandOrder, brands, type BrandId } from "@/content/ecosystem";
import { facts } from "@/content/career";
import { sectionIds } from "@/content/site";
import { interpolate, type Formatter } from "@/i18n/format";
import type { Messages } from "@/i18n/messages/en";

function BrandIcon({ id, size }: { id: BrandId; size: number }) {
  const brand = brands[id];
  return (
    <Image
      src={brand.icon}
      alt=""
      width={size}
      height={size}
      className="brand-icon shrink-0"
      unoptimized={brand.icon.endsWith(".svg")}
      sizes={`${size}px`}
    />
  );
}

function MapNode({ id, t, wide = false }: { id: BrandId; t: Messages; wide?: boolean }) {
  const brand = brands[id];
  return (
    <a
      href={brand.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`eco-node ${wide ? "eco-foundation" : ""}`}
      style={{ "--brand": brand.accent } as CSSProperties}
    >
      <BrandIcon id={id} size={44} />
      <span className="grid min-w-0 gap-0.5">
        <span className="font-display text-[1.2rem] leading-tight text-ink-1" dir="ltr">
          {brand.name}
        </span>
        <span className="text-[0.88rem] leading-snug text-ink-2">{t.ecosystem.brands[id].role}</span>
      </span>
      <Icon name="external" size={15} className="arrow ms-auto shrink-0 text-ink-3" />
      <span className="sr-only">{t.a11y.newTab}</span>
    </a>
  );
}

function Connector() {
  return (
    <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="mx-auto block h-10 w-2/3" aria-hidden="true" focusable="false">
      <path d="M25 0 C25 20, 50 20, 50 40" stroke="var(--line-3)" strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" className="draw-path" pathLength={1} />
      <path d="M75 0 C75 20, 50 20, 50 40" stroke="var(--line-3)" strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" className="draw-path" pathLength={1} />
    </svg>
  );
}

export default function Ecosystem({ t, fmt, index }: { t: Messages; fmt: Formatter; index: string }) {
  const e = t.ecosystem;
  const upcoming = fmt.plural(e.nextLead, facts.inDevelopmentApps.length, { list: fmt.list([...facts.inDevelopmentApps]) });

  return (
    <section id={sectionIds.ecosystem} className="section section-band" aria-labelledby="ecosystem-title">
      <div className="container-x">
        <SectionHeading id="ecosystem-title" index={index} eyebrow={e.eyebrow} title={e.title} lead={e.lead} />

        <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center">
          <figure className="reveal" aria-labelledby="eco-map-caption">
            <div className="eco-boundary">
              <p className="eco-boundary-label flex items-center gap-2">
                <BrandIcon id="overstein" size={22} />
                <span dir="ltr">Overstein</span>
                <span aria-hidden="true">·</span>
                {e.boundary}
              </p>
              <div className="grid gap-2 pt-4">
                <p className="eco-layer-label">{e.layerPeople}</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <MapNode id="afterArtificial" t={t} />
                  <MapNode id="superGarage" t={t} />
                </div>
                <Connector />
                <p className="eco-layer-label">{e.layerFoundation}</p>
                <MapNode id="afterFramework" t={t} wide />
                <svg viewBox="0 0 10 40" className="mx-auto block h-10 w-2" aria-hidden="true" focusable="false">
                  <path d="M5 0 L5 40" stroke="var(--line-3)" strokeWidth="1" className="draw-path" pathLength={1} />
                </svg>
                <p className="eco-layer-label">{e.layerEngine}</p>
                <div className="sm:w-1/2">
                  <MapNode id="labs" t={t} />
                </div>
              </div>
            </div>
            <figcaption id="eco-map-caption" className="sr-only">
              {e.mapLabel}
            </figcaption>
          </figure>

          <div className="reveal grid gap-6">
            <p className="font-display text-[clamp(1.4rem,1.1rem+1vw,1.9rem)] leading-snug text-ink-1">{e.myRole}</p>
            <div className="hairline" />
            <div>
              <h3 className="eyebrow mb-3">{e.nextTitle}</h3>
              <p className="text-ink-2">{upcoming}</p>
            </div>
          </div>
        </div>

        <ul className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {brandOrder.map((id) => {
            const brand = brands[id];
            const copy = e.brands[id];
            return (
              <li
                key={id}
                className={`reveal card brand-card flex flex-col gap-5 p-7 ${id === "overstein" ? "lg:col-span-2" : ""}`}
                style={{ "--brand": brand.accent } as CSSProperties}
              >
                <div className="flex items-center gap-4">
                  <BrandIcon id={id} size={52} />
                  <div className="grid gap-1">
                    <h3 className="font-display text-[1.45rem] leading-tight text-ink-1" dir="ltr">
                      {brand.name}
                    </h3>
                    <span className="chip w-fit">{e.status[brand.status]}</span>
                  </div>
                </div>
                <p className="font-medium text-ink-1">{copy.role}</p>
                <p className="text-ink-2">{copy.description}</p>
                <a href={brand.href} target="_blank" rel="noopener noreferrer" className="link-arrow mt-auto self-start">
                  {interpolate(e.visit, { name: brand.name })}
                  <Icon name="external" size={15} className="arrow" />
                  <span className="sr-only">{t.a11y.newTab}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
