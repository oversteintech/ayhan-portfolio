"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Icon from "@/components/ui/Icon";
import PathVisual from "./PathVisual";

export type PathKey = "leadership" | "ecosystem" | "systems";

export interface PathContent {
  key: PathKey;
  tab: string;
  kicker: string;
  title: string;
  body: string;
  points: string[];
  cta: string;
  href: string;
  index: string;
}

export default function Paths({ label, paths }: { label: string; paths: PathContent[] }) {
  const [selected, setSelected] = useState(0);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const rtl = document.documentElement.dir === "rtl";
    const forward = rtl ? "ArrowLeft" : "ArrowRight";
    const backward = rtl ? "ArrowRight" : "ArrowLeft";
    let next = selected;
    if (event.key === forward || event.key === "ArrowDown") next = (selected + 1) % paths.length;
    else if (event.key === backward || event.key === "ArrowUp") next = (selected - 1 + paths.length) % paths.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = paths.length - 1;
    else return;
    event.preventDefault();
    setSelected(next);
    tabs.current[next]?.focus();
  }

  const active = paths[selected];

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,1fr)] lg:gap-12">
      <div role="tablist" aria-label={label} aria-orientation="vertical" className="grid content-start gap-3" onKeyDown={onKeyDown}>
        {paths.map((path, i) => (
          <button
            key={path.key}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            id={`path-tab-${path.key}`}
            role="tab"
            type="button"
            aria-selected={i === selected}
            aria-controls={`path-panel-${path.key}`}
            tabIndex={i === selected ? 0 : -1}
            className="path-tab"
            onClick={() => setSelected(i)}
          >
            <span className="text-[0.78rem] font-semibold tabular-nums text-accent-amber">{path.index}</span>
            <span className="font-display text-[1.35rem] leading-snug">{path.tab}</span>
            <span className="text-[0.9rem] text-ink-3">{path.kicker}</span>
          </button>
        ))}
      </div>

      {paths.map((path, i) => (
        <div
          key={path.key}
          id={`path-panel-${path.key}`}
          role="tabpanel"
          aria-labelledby={`path-tab-${path.key}`}
          hidden={i !== selected}
          tabIndex={0}
          className="card overflow-hidden"
        >
          {i === selected ? (
            <div className="path-panel grid gap-0 md:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)]">
              <div className="grid content-start gap-6 p-7 sm:p-10">
                <h3 className="t-h2 text-[clamp(1.75rem,1.3rem+1.6vw,2.6rem)]">{active.title}</h3>
                <p className="text-ink-2">{active.body}</p>
                <ul className="grid gap-3">
                  {active.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-ink-1">
                      <Icon name="check" size={18} className="mt-1 shrink-0 text-accent-green" />
                      {point}
                    </li>
                  ))}
                </ul>
                <a href={active.href} className="link-arrow mt-2 justify-self-start">
                  {active.cta}
                  <Icon name="arrow" size={16} className="arrow" />
                </a>
              </div>
              <div className="relative min-h-[16rem] border-t border-line-1 bg-surface-2 md:border-t-0 md:border-s">
                <PathVisual kind={active.key} />
              </div>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
