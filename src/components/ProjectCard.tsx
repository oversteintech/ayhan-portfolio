"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const reducedMotion = useReducedMotion();
  const isLink = Boolean(project.href);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  const card = (
    <motion.article
      ref={cardRef}
      className={`gradient-border group relative rounded-2xl p-px ${
        isLink ? "cursor-pointer" : ""
      }`}
      style={
        reducedMotion
          ? {}
          : { rotateX, rotateY, transformPerspective: 1000 }
      }
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="glass-panel relative h-full overflow-hidden rounded-2xl p-6 sm:p-8">
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: hovered
              ? "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(59,130,246,0.06), transparent 40%)"
              : undefined,
          }}
        />

        <div className="relative">
          <div className="mb-4 flex items-center justify-between gap-3">
            <span className="text-xs font-medium tracking-wider text-electric-cyan uppercase">
              {project.highlight}
            </span>
            <span className="flex items-center gap-2 font-mono text-xs text-silver/50">
              {isLink ? (
                <span className="text-electric-blue-bright/80 transition-transform group-hover:translate-x-0.5">
                  Visit ↗
                </span>
              ) : null}
              <span>0{index + 1}</span>
            </span>
          </div>

          <h3 className="mb-3 text-xl font-bold text-foreground transition-colors group-hover:text-electric-blue-bright">
            {project.title}
          </h3>

          <p className="mb-6 text-sm leading-relaxed text-silver">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/8 bg-white/3 px-3 py-1 text-xs text-silver-light transition-colors group-hover:border-electric-blue/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-px w-full shimmer-line opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
    </motion.article>
  );

  if (!project.href) {
    return card;
  }

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-2xl"
      aria-label={`${project.title} — open site`}
    >
      {card}
    </a>
  );
}
