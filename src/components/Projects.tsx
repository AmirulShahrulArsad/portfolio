"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { projects, type Project } from "@/data/projects";
export function ProjectCard({ project: p }: { project: Project }) {
  return (
    <article className="project-card">
      <Link href={"/work/" + p.slug} aria-label={"View " + p.title}>
        <div className="project-image">
          <Image
            src={p.gallery[0].src}
            alt={p.gallery[0].alt}
            width={900}
            height={540}
            sizes="(max-width: 767px) 100vw, 50vw"
          />
          <span className="project-open">
            <ArrowUpRight size={22} />
          </span>
        </div>
        <div className="project-meta">
          <span>{p.category}</span>
          <span>
            {p.year} / {p.featured ? "Internship" : "Academic"}
          </span>
        </div>
        <h3>{p.title}</h3>
        <p>{p.summary}</p>
        <div className="tags">
          {p.tools.slice(0, 3).map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </Link>
    </article>
  );
}
export function ProjectGrid() {
  const [category, setCategory] = useState("All Work");
  const reduced = useReducedMotion();
  const categories = [
    "All Work",
    "Digital Advertising",
    "Analytics & Tracking",
    "Web & Landing Pages",
    "Reporting & Automation",
    "Technical Projects",
  ];
  const shown = projects.filter(
    (p) => category === "All Work" || p.category === category,
  );
  return (
    <>
      <div className="filters" role="group" aria-label="Filter projects">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            aria-pressed={category === c}
          >
            {c}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        {shown.length} projects displayed
      </p>
      {category === "All Work" ? (
        <>
          <div className="project-grid">
            {shown
              .filter((p) => p.featured)
              .map((p) => (
                <ProjectCard project={p} key={p.id} />
              ))}
          </div>
          <div className="technical-heading">
            <p className="eyebrow">THE TECHNICAL FOUNDATION</p>
            <h2>Beyond Marketing: Technical Projects</h2>
            <p className="muted">
              Academic work that informs how I approach systems, testing, and
              user experience.
            </p>
          </div>
          <div className="project-grid">
            {shown
              .filter((p) => !p.featured)
              .map((p) => (
                <ProjectCard project={p} key={p.id} />
              ))}
          </div>
        </>
      ) : (
        <motion.div layout={!reduced} className="project-grid">
          <AnimatePresence mode="popLayout">
            {shown.map((p) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reduced ? 0 : 0.18 }}
              >
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </>
  );
}
