import type { Metadata } from "next";
import { ProjectGrid } from "@/components/Projects";
import { Reveal } from "@/components/Reveal";
import { ContactCTA } from "@/components/Shared";
export const metadata: Metadata = { title: "Selected Work & Projects" };
export default function Work() {
  return (
    <>
      <section className="container page-section">
        <Reveal>
          <p className="eyebrow">THE PORTFOLIO / 2025–2026</p>
          <h1 className="page-title">
            Selected Work
            <br />
            <span className="serif">& Projects.</span>
          </h1>
          <p className="page-intro">
            Explore my practical experiences across digital advertising,
            marketing analytics, landing page development, and workflow
            automation.
          </p>
        </Reveal>
        <ProjectGrid />
      </section>
      <ContactCTA />
    </>
  );
}
