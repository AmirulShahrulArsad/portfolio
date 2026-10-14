import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { ContactCTA, TextLink } from "@/components/Shared";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = { title: "About Me" };
export default function About() {
  return (
    <>
      <section className="container page-section">
        <Reveal>
          <p className="eyebrow">THE PERSON BEHIND THE WORK</p>
          <h1 className="page-title">
            Beyond
            <br />
            <span className="serif">the resume.</span>
          </h1>
          <div className="about-story">
            <div className="profile-panel">
              <div
                className="portrait-blank"
                role="img"
                aria-label="Portrait placeholder. Photo to be added."
              >
                <span>PHOTO TO BE ADDED</span>
              </div>
              <div className="profile-caption">
                <p>AMIRUL SHAHRUL BIN M. ARSAD</p>
                <span>Technology-minded. Marketing-curious.</span>
              </div>
            </div>
            <div>
              <h2>
                Where technology
                <br />
                meets marketing.
              </h2>
              <p className="lead">
                I’m a Software Engineering undergraduate who developed an
                interest in Digital Marketing through my internship at LOCUS-T.
              </p>
              <p>{profile.summary}</p>
              <p>
                I’m drawn to the connections between campaigns and user
                experience, analytics and decision-making, and automation and
                everyday marketing operations.
              </p>
              <TextLink href="/work">Explore my contributions</TextLink>
            </div>
          </div>
        </Reveal>
        <section className="section education">
          <p className="eyebrow">EDUCATION</p>
          <div>
            <h2>A technical foundation.</h2>
            <h3>Universiti Pendidikan Sultan Idris (UPSI)</h3>
            <p>
              Bachelor of Software Engineering (Software Education) with Honours
            </p>
            <div className="education-meta">
              <span>Expected Graduation: 2026</span>
              <span>CGPA: 3.63</span>
            </div>
          </div>
        </section>
        <section className="section">
          <p className="eyebrow">BEYOND THE CLASSROOM</p>
          <h2>Learning through participation.</h2>
          <p className="page-intro">
            These roles offered opportunities to practise teamwork,
            communication, coordination, content preparation, and discipline.
          </p>
          <div className="activities">
            {[
              ["PALAPES UPSI", "Young Officer / Cadet", "2022–2025"],
              ["Kelab Tarian Destar Limar", "Exco PDI/Multimedia", "2024–2025"],
              ["Parlimen Mahasiswa UPSI", "Protocol Committee Member", "2023"],
            ].map(([org, role, date]) => (
              <div key={org}>
                <span>{date}</span>
                <h3>{org}</h3>
                <p>{role}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
      <ContactCTA />
    </>
  );
}
