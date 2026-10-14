import { ArrowDown, ArrowUpRight, MoveUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { capabilities, toolkit } from "@/data/skills";
import { experience } from "@/data/experience";
import { Reveal } from "@/components/Reveal";
import { SocialLinks } from "@/components/Layout";
import { Button, TextLink, Heading, ContactCTA } from "@/components/Shared";
import { ProjectCard } from "@/components/Projects";
export default function Home() {
  return (
    <>
      <section className="hero container">
        <Reveal>
          <div className="hero-topline">
            <p className="eyebrow">DIGITAL MARKETING / MARKETING TECHNOLOGY</p>
            <span className="availability">
              <i />
              Open to junior opportunities
            </span>
          </div>
          <h1>
            Creative thinking.
            <br />
            <span className="serif">Data-driven</span> execution
            <span className="olive">.</span>
          </h1>
          <div className="hero-bottom">
            <div className="hero-copy">
              <p>{profile.introduction}</p>
              <div className="actions">
                <Button href="/work">Explore My Work</Button>
                <Button href="/about" secondary>
                  More About Me
                </Button>
              </div>
            </div>
            <div className="hero-aside">
              <span className="monogram" aria-hidden="true">
                <MoveUpRight strokeWidth={0.8} />
              </span>
              <p>CREATIVITY × TECHNOLOGY × DATA</p>
            </div>
          </div>
          <div className="hero-foot">
            <SocialLinks />
            <span>BASED IN PETALING JAYA, MALAYSIA</span>
            <a
              href="#introduction"
              className="scroll-link"
              aria-label="Scroll to introduction"
            >
              <ArrowDown size={16} /> SCROLL TO EXPLORE
            </a>
          </div>
        </Reveal>
      </section>
      <section id="introduction" className="section container intro">
        <p className="eyebrow">01 / INTRODUCTION</p>
        <Reveal>
          <h2>
            A little <span className="serif">about me.</span>
          </h2>
          <p className="intro-text">
            I’m a Software Engineering undergraduate exploring the world of{" "}
            <span>Digital Marketing.</span> My internship at LOCUS-T introduced
            me to advertising operations, campaign tracking, landing page
            development, and marketing automation.
          </p>
          <p className="muted">
            I enjoy understanding how creative campaigns and technical systems
            work together to support marketing objectives.
          </p>
          <TextLink href="/about">Get to know me</TextLink>
        </Reveal>
      </section>
      <section className="section container">
        <Reveal>
          <Heading
            label="02 / CAPABILITIES"
            title="What I bring to digital marketing."
          />
          <div className="capabilities">
            {capabilities.map(([title, desc], i) => (
              <div className="capability" key={title}>
                <span className="number">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
                <ArrowUpRight size={20} />
              </div>
            ))}
          </div>
        </Reveal>
      </section>
      <section className="section work-section">
        <div className="container">
          <Reveal>
            <div className="heading-row">
              <Heading
                label="03 / SELECTED WORK"
                title="Ideas into practice."
                text="A collection of marketing-related projects and contributions from my internship."
              />
              <TextLink href="/work">View All Work</TextLink>
            </div>
            <div className="project-grid">
              {projects
                .filter((p) => p.featured)
                .map((p) => (
                  <ProjectCard project={p} key={p.id} />
                ))}
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section container">
        <Reveal>
          <Heading label="04 / PROFESSIONAL JOURNEY" title="Experience." />
          <div className="experience-preview">
            <div>
              <p className="eyebrow">{experience.dates}</p>
              <h3>{experience.role}</h3>
              <p>{experience.company}</p>
              <p className="muted">{experience.location}</p>
            </div>
            <div>
              <ul className="contribution-list">
                {[
                  "Supported Google Ads, Meta Ads, and TikTok advertising operations.",
                  "Assisted campaign tracking through GTM, GA4, and UTM.",
                  "Developed and improved client campaign landing pages.",
                  "Contributed to advertising reporting dashboard workflows.",
                  "Assisted media planning and advertising copy preparation.",
                ].map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <TextLink href="/experience">Explore My Experience</TextLink>
            </div>
          </div>
        </Reveal>
      </section>
      <section className="section container">
        <Reveal>
          <Heading label="05 / TOOLS OF THE TRADE" title="My toolkit." />
          <div className="toolkit">
            {Object.entries(toolkit).map(([group, tools]) => (
              <div key={group}>
                <h3>{group}</h3>
                <ul>
                  {tools.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
      <ContactCTA />
    </>
  );
}
