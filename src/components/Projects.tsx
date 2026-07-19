import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import SectionReveal from "./SectionReveal";

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-padding relative"
      aria-labelledby="projects-heading"
    >
      <div className="container-max">
        <SectionReveal>
          <div className="mb-16 max-w-3xl">
            <p className="mb-4 text-sm font-medium tracking-[0.2em] text-electric-blue uppercase">
              Signature Projects
            </p>
            <h2
              id="projects-heading"
              className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            >
              Products and systems{" "}
              <span className="text-gradient">built to scale</span>
            </h2>
          </div>
        </SectionReveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
