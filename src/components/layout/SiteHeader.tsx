"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/Icon";
import ThemeToggle from "./ThemeToggle";
import LanguageSelect from "./LanguageSelect";
import { sectionIds, type SectionKey } from "@/content/site";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages/en";

const navOrder: SectionKey[] = ["work", "leadership", "ecosystem", "systems", "capabilities", "notes", "contact"];

export default function SiteHeader({
  locale,
  nav,
  a11y,
}: {
  locale: Locale;
  nav: Messages["nav"];
  a11y: Messages["a11y"];
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<SectionKey | null>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targets = navOrder
      .map((key) => document.getElementById(sectionIds[key]))
      .filter((el): el is HTMLElement => el !== null);
    if (!targets.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive((navOrder.find((key) => sectionIds[key] === visible.target.id) ?? null) as SectionKey | null);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    panel.current?.querySelector<HTMLElement>("a, button, select")?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const links = navOrder.map((key) => (
    <li key={key}>
      <a
        href={`#${sectionIds[key]}`}
        className="nav-link"
        aria-current={active === key ? "true" : undefined}
        onClick={() => setOpen(false)}
      >
        {nav[key]}
      </a>
    </li>
  ));

  return (
    <header className="site-header">
      <div className="container-x flex h-[4.5rem] items-center justify-between gap-4">
        <a href={`/${locale}`} className="group flex items-center gap-3 no-underline" aria-label={a11y.home}>
          <span
            aria-hidden="true"
            className="grid h-9 w-9 place-items-center rounded-full border border-line-3 font-display text-[0.95rem] tracking-tight text-ink-1 transition-colors group-hover:bg-ink-1 group-hover:text-surface-0"
            dir="ltr"
          >
            AU
          </span>
          <span className="font-display text-lg leading-none text-ink-1" dir="ltr">
            Ayhan Uzundal
          </span>
        </a>

        <nav aria-label={a11y.mainNav} className="hidden xl:block">
          <ul className="flex items-center gap-6">{links}</ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <LanguageSelect locale={locale} label={a11y.language} />
          </div>
          <ThemeToggle toLight={a11y.themeToLight} toDark={a11y.themeToDark} />
          <button
            ref={menuButton}
            type="button"
            className="icon-button xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? a11y.closeMenu : a11y.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>

      <div id="mobile-menu" ref={panel} className="mobile-panel xl:hidden" hidden={!open}>
        <nav aria-label={a11y.mainNav} className="container-x py-6">
          <ul className="grid gap-1 text-lg [&_.nav-link]:block [&_.nav-link]:py-3 [&_.nav-link]:text-[1.15rem]">{links}</ul>
          <div className="mt-6 border-t border-line-1 pt-6 sm:hidden">
            <LanguageSelect locale={locale} label={a11y.language} />
          </div>
        </nav>
      </div>
    </header>
  );
}
