"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const heroStats = [
  { value: "20+", label: "Engineers Led" },
  { value: "$8M+", label: "Program Scale" },
  { value: "10+", label: "Years Experience" },
  { value: "100+", label: "Product Issues Found" },
];

const profileHighlights = [
  "AfterArtificial",
  "After Framework",
  "Overstein Labs",
  "SuperGarage",
];

export default function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center section-padding pt-32"
      aria-labelledby="hero-heading"
    >
      <div className="container-max grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
        <div className="max-w-3xl">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-electric-blue/20 bg-electric-blue/5 px-4 py-1.5 text-xs font-medium tracking-wider text-electric-blue-bright uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-electric-blue animate-pulse" />
              Software Engineering Manager · Founder of AfterArtificial
            </span>
          </motion.div>

          <motion.h1
            id="hero-heading"
            className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
            initial={reducedMotion ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Building products.{" "}
            <span className="text-gradient">Leading people.</span> Delivering
            impact.
          </motion.h1>

          <motion.p
            className="mb-8 max-w-2xl text-lg leading-relaxed text-silver sm:text-xl"
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Software Engineering Manager with 10+ years leading enterprise-scale
            delivery — and founder of{" "}
            <span className="text-foreground">AfterArtificial</span>, building
            Super Apps on{" "}
            <span className="text-foreground">After Framework</span> with
            engineering through{" "}
            <span className="text-foreground">Overstein Labs</span>. Flagship:{" "}
            <span className="text-foreground">SuperGarage</span>.
          </motion.p>

          <motion.div
            className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4"
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {heroStats.map((stat) => (
              <div key={stat.label} className="glass-panel rounded-xl px-4 py-3">
                <p className="text-lg font-bold text-electric-blue-bright sm:text-xl">
                  {stat.value}
                </p>
                <p className="text-[11px] leading-tight text-silver sm:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-electric-blue px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-electric-blue-bright hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-white/30 hover:bg-white/5"
            >
              Contact Me
            </a>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center justify-center rounded-full border border-white/10 px-7 py-3.5 text-sm font-medium text-silver transition-all duration-300 hover:border-white/20 hover:text-foreground"
            >
              Download CV
            </a>
          </motion.div>
        </div>

        <motion.div
          className="mx-auto w-full max-w-[300px] lg:mx-0 lg:max-w-[320px]"
          initial={reducedMotion ? false : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="gradient-border rounded-3xl p-px">
            <div className="glass-panel relative overflow-hidden rounded-3xl px-6 py-8">
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-electric-blue/10 via-transparent to-electric-cyan/5" />

              <div className="relative mx-auto mb-6 w-fit">
                <div className="relative h-44 w-44 overflow-hidden rounded-2xl border border-white/10 sm:h-48 sm:w-48">
                  <Image
                    src="/profile.jpg"
                    alt="Ayhan Uzundal — Founder of AfterArtificial"
                    fill
                    className="object-cover object-top"
                    sizes="192px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
                </div>
              </div>

              <div className="relative text-center">
                <p className="text-xl font-semibold leading-tight text-foreground">
                  Ayhan Uzundal
                </p>
                <p className="mt-2 text-sm leading-snug text-electric-blue-bright">
                  Founder of AfterArtificial
                </p>
                <p className="text-sm leading-snug text-silver">
                  Software Engineering Manager
                </p>
                <p className="mt-2 text-xs text-silver">Istanbul, Türkiye</p>
              </div>

              <div className="relative mt-5 flex flex-wrap justify-center gap-2">
                {profileHighlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-silver-light"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
