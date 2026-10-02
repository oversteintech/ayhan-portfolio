"use client";

import { useRef, useState, type KeyboardEvent } from "react";

export interface LayerContent {
  key: string;
  index: string;
  name: string;
  summary: string;
  detail: string;
  example: string;
  position: string;
}

export default function SystemsMap({
  label,
  instructions,
  inPractice,
  layers,
}: {
  label: string;
  instructions: string;
  inPractice: string;
  layers: LayerContent[];
}) {
  const [selected, setSelected] = useState(2);
  const buttons = useRef<Array<HTMLButtonElement | null>>([]);

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    let next = selected;
    if (event.key === "ArrowDown") next = Math.min(layers.length - 1, selected + 1);
    else if (event.key === "ArrowUp") next = Math.max(0, selected - 1);
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = layers.length - 1;
    else return;
    event.preventDefault();
    setSelected(next);
    buttons.current[next]?.focus();
  }

  const active = layers[selected];

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
      <div>
        <p id="systems-instructions" className="mb-5 text-[0.95rem] text-ink-2">
          {instructions}
        </p>
        <div className="relative">
          <div className="signal-track" aria-hidden="true">
            <span className="signal-dot" />
          </div>
          <div
            role="tablist"
            aria-label={label}
            aria-orientation="vertical"
            aria-describedby="systems-instructions"
            className="relative z-[1] grid gap-2.5"
            onKeyDown={onKeyDown}
          >
            {layers.map((layer, i) => (
              <button
                key={layer.key}
                ref={(el) => {
                  buttons.current[i] = el;
                }}
                id={`layer-tab-${layer.key}`}
                role="tab"
                type="button"
                aria-selected={i === selected}
                aria-controls="layer-panel"
                tabIndex={i === selected ? 0 : -1}
                className="layer-button"
                onClick={() => setSelected(i)}
              >
                <span className="layer-index" aria-hidden="true">
                  {layer.index}
                </span>
                <span className="font-display text-[1.2rem] leading-tight">{layer.name}</span>
                <span className="text-[0.88rem] leading-snug text-ink-2">{layer.summary}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div
        id="layer-panel"
        role="tabpanel"
        aria-labelledby={`layer-tab-${active.key}`}
        tabIndex={0}
        className="card relative self-start overflow-hidden p-8 sm:p-10 lg:sticky lg:top-28"
      >
        <div key={active.key} className="path-panel grid gap-6">
          <p className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-accent-blue">{active.position}</p>
          <h3 className="t-h2 text-[clamp(1.9rem,1.4rem+1.8vw,3rem)]">{active.name}</h3>
          <p className="text-[1.12rem] leading-relaxed text-ink-1">{active.detail}</p>
          <div className="rounded-[var(--radius-m)] border border-line-1 bg-surface-2 p-5">
            <p className="eyebrow mb-2">{inPractice}</p>
            <p className="text-ink-2">{active.example}</p>
          </div>
          <ol className="flex flex-wrap items-center gap-1.5" aria-hidden="true">
            {layers.map((layer, i) => (
              <li
                key={layer.key}
                className={`h-1.5 rounded-full transition-all duration-500 ${i === selected ? "w-10 bg-accent-blue" : "w-4 bg-line-2"}`}
              />
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
