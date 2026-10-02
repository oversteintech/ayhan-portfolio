import type { CSSProperties } from "react";
import Image from "next/image";
import Icon from "@/components/ui/Icon";
import HeroVideo from "./HeroVideo";
import { career } from "@/content/career";
import { sectionIds } from "@/content/site";
import type { Messages } from "@/i18n/messages/en";

const step = (i: number) => ({ "--i": i }) as CSSProperties;

const organizations = Array.from(new Set(career.map((role) => role.organization.replace(" Enterprise", "")))).reverse();

export default function Hero({ t }: { t: Messages }) {
  const h = t.hero;
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-field" aria-hidden="true">
        <HeroVideo />
      </div>
      <div className="hero-scrim" aria-hidden="true" />

      <div className="container-x grid items-center gap-14 py-14 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.6fr)] lg:gap-16 lg:py-20">
        <div>
          <p className="intro flex max-w-xl items-start gap-3 text-[1.02rem] leading-relaxed text-ink-2" style={step(0)}>
            <span aria-hidden="true" className="mt-[0.7em] h-px w-8 shrink-0 bg-accent-amber" />
            {h.thesis}
          </p>

          <h1 id="hero-title" className="t-display mt-7">
            <span className="intro block" style={step(1)}>
              {h.line1}
            </span>
            <span className="intro block" style={step(2)}>
              {h.line2}
            </span>
            <span className="intro t-italic block text-accent-blue" style={step(3)}>
              {h.line3}
            </span>
          </h1>

          <p className="intro t-lead mt-8" style={step(4)}>
            {h.lead}
          </p>

          <div className="intro mt-10 flex flex-wrap gap-3" style={step(5)}>
            <a className="btn btn-primary" href={`#${sectionIds.work}`}>
              {h.ctaPrimary}
              <Icon name="arrow" size={17} className="arrow" />
            </a>
            <a className="btn btn-ghost" href={`#${sectionIds.contact}`}>
              {h.ctaSecondary}
            </a>
          </div>

          <div className="intro mt-14 flex flex-wrap items-baseline gap-x-5 gap-y-2" style={step(6)}>
            <span className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-ink-3">{h.careerLabel}</span>
            <ul className="flex flex-wrap gap-x-4 gap-y-1 font-display text-[1.15rem] text-ink-2" dir="ltr">
              {organizations.map((name, i) => (
                <li key={name} className="flex items-center gap-4">
                  {i > 0 ? <span aria-hidden="true" className="text-line-3">·</span> : null}
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <figure className="intro mx-auto w-[min(72vw,320px)] lg:me-0 lg:w-full lg:max-w-[340px]" style={step(3)}>
          <div className="parallax" style={{ "--parallax": "1.75rem" } as CSSProperties}>
            <div className="portrait-print">
              <Image
                src="/profile.jpg"
                alt={h.portraitAlt}
                width={477}
                height={700}
                sizes="(min-width: 1024px) 340px, 72vw"
                preload
              />
              <figcaption className="portrait-caption">
                <strong dir="ltr">Ayhan Uzundal</strong>
                {h.captionRoles}
                <br />
                {h.captionPlace}
              </figcaption>
            </div>
          </div>
        </figure>
      </div>

      <a
        href="#statement"
        className="absolute bottom-5 start-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.75rem] font-medium uppercase tracking-[0.18em] text-ink-3 no-underline md:flex rtl:translate-x-1/2"
        aria-label={t.a11y.scrollCue}
      >
        <span aria-hidden="true">{h.scroll}</span>
        <span aria-hidden="true" className="scroll-cue-line" />
      </a>
    </section>
  );
}
