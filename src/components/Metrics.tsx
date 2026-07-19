"use client";

import { useEffect, useRef, useState } from "react";
import { metrics } from "@/data/metrics";
import { useCountUp } from "@/hooks/useCountUp";
import SectionReveal from "./SectionReveal";

function MetricItem({
  value,
  suffix,
  prefix = "",
  label,
  start,
}: {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  start: boolean;
}) {
  const count = useCountUp(value, 2000, start);

  return (
    <div className="text-center">
      <p className="mb-2 text-3xl font-bold tracking-tight text-gradient sm:text-4xl lg:text-5xl">
        {prefix}
        {count}
        {suffix}
      </p>
      <p className="text-sm leading-relaxed text-silver">{label}</p>
    </div>
  );
}

export default function Metrics() {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="section-padding relative"
      aria-labelledby="metrics-heading"
    >
      <div className="container-max" ref={ref}>
        <SectionReveal>
          <div className="gradient-border rounded-3xl p-px">
            <div className="glass-panel rounded-3xl px-6 py-16 sm:px-12">
              <h2 id="metrics-heading" className="sr-only">
                Key Metrics
              </h2>
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                {metrics.map((metric) => (
                  <MetricItem
                    key={metric.label}
                    value={metric.value}
                    suffix={metric.suffix}
                    prefix={metric.prefix}
                    label={metric.label}
                    start={start}
                  />
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
