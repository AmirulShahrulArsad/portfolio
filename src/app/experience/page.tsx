import type { Metadata } from "next";
import { experience as e } from "@/data/experience";
import { Reveal } from "@/components/Reveal";
import { ContactCTA, TextLink } from "@/components/Shared";
export const metadata: Metadata = { title: "Professional Experience" };
export default function Experience() {
  return (
    <>
      <section className="container page-section">
        <Reveal>
          <p className="eyebrow">LEARNING BY DOING</p>
          <h1 className="page-title">
            Practical exposure.
            <br />
            <span className="serif">Growing perspective.</span>
          </h1>
          <p className="page-intro">
            Hands-on contributions at the intersection of digital campaigns,
            analytics, and technology.
          </p>
        </Reveal>
        <section className="timeline">
          <div className="timeline-date">
            <span className="timeline-dot" />
            <p className="eyebrow">{e.dates}</p>
            <p>{e.location}</p>
          </div>
          <div className="timeline-content">
            <p className="eyebrow">PROFESSIONAL EXPERIENCE</p>
            <h2>{e.role}</h2>
            <p className="company">{e.company}</p>
            <p className="muted">
              Internship · Supporting digital marketing teams and technical
              workflows
            </p>
            {e.groups.map(([name, desc], i) => (
              <Reveal key={name}>
                <div className="experience-group">
                  <span className="number">0{i + 1}</span>
                  <div>
                    <h3>{name}</h3>
                    <p>{desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <TextLink href="/work">See the related work</TextLink>
          </div>
        </section>
      </section>
      <ContactCTA />
    </>
  );
}
