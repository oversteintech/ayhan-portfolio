"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillClusters } from "@/data/skills";
import SectionReveal from "./SectionReveal";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function SkillsMatrix() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="section-padding relative"
      aria-labelledby="skills-heading"
    >
      <div className="container-max">
        <SectionReveal>
          <div className="mb-16 max-w-3xl">
            <p className="mb-4 text-sm font-medium tracking-[0.2em] text-electric-blue uppercase">
              Skills
            </p>
            <h2
              id="skills-heading"
              className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            >
              Deep expertise across{" "}
              <span className="text-gradient">the full stack</span>
            </h2>
          </div>
        </SectionReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {skillClusters.map((cluster, i) => (
            <SectionReveal key={cluster.id} delay={i * 0.05}>
              <motion.button
                type="button"
                className="gradient-border w-full rounded-2xl p-px text-left"
                onClick={() =>
                  setActiveId(activeId === cluster.id ? null : cluster.id)
                }
                whileHover={reducedMotion ? {} : { scale: 1.02 }}
                whileTap={reducedMotion ? {} : { scale: 0.98 }}
                aria-expanded={activeId === cluster.id}
              >
                <div
                  className={`glass-panel rounded-2xl p-5 transition-all duration-500 ${
                    activeId === cluster.id ? "bg-white/[0.05]" : ""
                  }`}
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div
                      className="h-2.5 w-2.5 rounded-full"
                      style={{
                        backgroundColor: cluster.color,
                        boxShadow: `0 0 12px ${cluster.color}40`,
                      }}
                    />
                    <h3 className="text-sm font-semibold text-foreground">
                      {cluster.name}
                    </h3>
                  </div>

                  <AnimatePresence>
                    {(activeId === cluster.id || activeId === null) && (
                      <motion.div
                        initial={reducedMotion ? false : { opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex flex-wrap gap-1.5">
                          {cluster.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-md bg-white/3 px-2 py-0.5 text-[11px] text-silver"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.button>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
