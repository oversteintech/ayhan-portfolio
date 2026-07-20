"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { proofMetrics } from "@/data/brand";

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section id="top" className="section-pad relative pt-28 md:pt-36" aria-labelledby="hero-heading">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04),transparent_55%)]" />
      </div>

      <div className="container-max grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <motion.p
            className="eyebrow mb-5"
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Huawei Enterprise · Technology Business Leader · MBA · PMP
          </motion.p>

          <motion.h1
            id="hero-heading"
            className="font-display mb-6 max-w-3xl text-4xl leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-6xl"
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            I bridge business and technology.
          </motion.h1>

          <motion.p
            className="mb-8 max-w-2xl text-lg leading-relaxed text-muted"
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
          >
            Senior Key Account Manager at Huawei Enterprise. Former Software
            Engineering Manager. Founder of AfterArtificial. I help organizations
            turn ICT, AI, and digital platforms into outcomes — and I build
            ventures that prove it.
          </motion.p>

          <motion.div
            className="mb-10 flex flex-wrap gap-3"
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
          >
            <a
              href="#contact"
              className="inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition hover:bg-accent-bright"
            >
              Discuss a partnership
            </a>
            <a
              href="#journey"
              className="inline-flex rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition hover:border-white/20"
            >
              View journey
            </a>
            <a
              href="/cv.pdf"
              download
              className="inline-flex rounded-full border border-border px-6 py-3 text-sm font-medium text-muted transition hover:text-foreground"
            >
              Download CV
            </a>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-3 sm:grid-cols-4"
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
          >
            {proofMetrics.map((m) => (
              <div key={m.label} className="panel rounded-2xl px-4 py-3">
                <p className="text-xl font-semibold text-accent-bright">{m.value}</p>
                <p className="mt-1 text-xs leading-snug text-muted">{m.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.aside
          className="mx-auto w-full max-w-sm"
          initial={reduced ? false : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="panel overflow-hidden rounded-3xl">
            <div className="relative aspect-[4/5] bg-gradient-to-b from-white/5 to-transparent">
              <Image
                src="/profile.jpg"
                alt="Ayhan Uzundal"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 768px) 320px, 384px"
              />
            </div>
            <div className="border-t border-border px-6 py-5">
              <p className="font-display text-xl">Ayhan Uzundal</p>
              <p className="mt-1 text-sm text-accent-bright">
                Senior Key Account Manager · Huawei Enterprise
              </p>
              <p className="mt-1 text-sm text-muted">Istanbul, Türkiye</p>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
