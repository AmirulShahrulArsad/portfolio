import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  GraduationCap,
  Megaphone,
  ChartNoAxesCombined,
  Tags,
  MousePointer2,
  Code2,
  Database,
  Zap,
  Globe,
  Mail,
  Workflow,
} from "lucide-react";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { capabilities, toolkit } from "@/data/skills";
import { experience } from "@/data/experience";
import { Reveal } from "@/components/Reveal";
import { Button, TextLink, Heading, ContactCTA } from "@/components/Shared";
import { ProjectCard } from "@/components/Projects";
const toolTiles = [
  { title: "Google Ads", Icon: Megaphone },
  { title: "Meta Ads", Icon: Globe },
  { title: "TikTok Ads", Icon: MousePointer2 },
  { title: "GA4", Icon: ChartNoAxesCombined },
  { title: "Google Tag Manager", Icon: Tags },
  { title: "Next.js basics", Icon: Code2 },
  { title: "Python & SQL", Icon: Database },
  { title: "Automation", Icon: Workflow },
];
export default function Home() {
  return (
    <div className="home-page">
      <section className="hero container">
        <div className="hero-layout">
          <Reveal className="hero-portrait-wrap">
            <p className="hand-note hero-note-left" aria-hidden="true">
              Think.
              <br />
              Create.
              <br />
              Connect.
              <svg viewBox="0 0 90 55">
                <path d="M8 9Q43 2 72 39M55 39L72 39L69 24" />
              </svg>
            </p>
            <div className="portrait-frame">
              <div
                className="portrait-blank"
                role="img"
                aria-label="Portrait placeholder. Photo to be added."
              >
                <span>PHOTO TO BE ADDED</span>
              </div>
              <div className="portrait-badge">
                <span className="status-dot" />
                <div>
                  Aspiring Digital
                  <br />
                  <strong>Marketing Professional</strong>
                  <span className="badge-line" />
                </div>
              </div>
            </div>
          </Reveal>
          <div className="hero-content">
            <Reveal delay={0.06}>
              <p className="eyebrow">HELLO, I’M AMIRUL</p>
              <h1>
                CREATIVE
                <br />
                <span>THINKING.</span>
              </h1>
              <p className="hero-subtitle">Data-driven execution.</p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="hero-description">{profile.introduction}</p>
              <div className="actions">
                <Button href="/work">Explore My Work</Button>
                <Button href="/contact" secondary>
                  <Mail size={18} />
                  Contact Me
                </Button>
              </div>
              <div className="hero-meta">
                <span className="availability">
                  <i />
                  Open to junior opportunities
                </span>
                <span>Petaling Jaya, Malaysia</span>
              </div>
            </Reveal>
            <p className="hand-note hero-note-right" aria-hidden="true">
              Turning
              <br />
              ideas into
              <br />
              experiences.
              <svg viewBox="0 0 100 25">
                <path d="M4 19Q47 3 93 8" />
              </svg>
            </p>
          </div>
        </div>
      </section>
      <section className="container welcome-section">
        <Reveal className="welcome-banner glass">
          <span className="welcome-icon">
            <Zap size={30} fill="currentColor" strokeWidth={1.3} />
          </span>
          <h2>
            Hi! Welcome to my <span>personal portfolio.</span>
          </h2>
          <span className="welcome-rule" />
          <p>
            Connecting creativity,
            <br />
            technology, and data.
          </p>
          <a href="#introduction" aria-label="Explore my introduction">
            <ArrowDown size={20} />
          </a>
        </Reveal>
      </section>
      <section id="introduction" className="container overview-section">
        <div className="overview-grid">
          <Reveal className="journey">
            <p className="eyebrow">ABOUT ME</p>
            <h2>
              My Journey
              <br />& Experience
            </h2>
            <p>
              I’m a Software Engineering undergraduate exploring the world of
              Digital Marketing. My internship at LOCUS-T introduced me to
              advertising operations, campaign tracking, landing page
              development, and marketing automation.
            </p>
            <p className="journey-secondary">
              I enjoy understanding how creative campaigns and technical systems
              work together to support marketing objectives.
            </p>
            <Button href="/about">More About Me</Button>
          </Reveal>
          <div className="journey-cards">
            <Reveal className="journey-card glass" delay={0.05}>
              <span className="square-icon">
                <BriefcaseBusiness size={25} />
              </span>
              <div>
                <h3>Experience</h3>
                <p className="card-subtitle">{experience.role}</p>
                <p className="card-context">
                  {experience.company} · {experience.dates}
                </p>
                <ul>
                  <li>Advertising operations support</li>
                  <li>Campaign tracking & analytics</li>
                  <li>Landing page contributions</li>
                  <li>Reporting & automation workflows</li>
                </ul>
                <TextLink href="/experience">Explore my experience</TextLink>
              </div>
            </Reveal>
            <Reveal className="journey-card glass" delay={0.1}>
              <span className="square-icon">
                <GraduationCap size={27} />
              </span>
              <div>
                <h3>Education</h3>
                <p className="card-subtitle">Software Engineering</p>
                <p className="card-context">
                  Universiti Pendidikan Sultan Idris
                </p>
                <ul>
                  <li>Software Education with Honours</li>
                  <li>Expected Graduation: 2026</li>
                  <li>CGPA: 3.63</li>
                </ul>
                <TextLink href="/about">Beyond the resume</TextLink>
              </div>
            </Reveal>
          </div>
          <Reveal className="tools-preview" delay={0.15}>
            <p id="toolkit" className="eyebrow">SKILLS & TOOLS</p>
            <h2>Tools I Use</h2>
            <div className="tool-tiles">
              {toolTiles.map(({ title, Icon }) => (
                <div className="tool-tile" key={title}>
                  <Icon size={34} strokeWidth={1.8} />
                  <span>{title}</span>
                </div>
              ))}
            </div>
            <details className="toolkit-details">
              <summary>
                View my full toolkit<span>+</span>
              </summary>
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
            </details>
          </Reveal>
        </div>
      </section>
      <section className="container capabilities-section">
        <Reveal>
          <Heading
            label="WHAT I BRING"
            title="A creative mind. A technical perspective."
          />
          <div className="capabilities">
            {capabilities.map(([title, desc], i) => (
              <div className="capability glass" key={title}>
                <span className="number">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
                <ArrowRight size={18} />
              </div>
            ))}
          </div>
        </Reveal>
      </section>
      <section className="container home-work">
        <Reveal className="work-panel glass">
          <div className="heading-row">
            <Heading
              label="FEATURED PROJECTS"
              title="Some of My Works"
              text="Marketing-related projects and contributions from my internship."
            />
            <Button href="/work" secondary>
              View All Projects
            </Button>
          </div>
          <div className="project-grid featured-grid">
            {projects
              .filter((p) => p.featured)
              .map((p) => (
                <ProjectCard project={p} compact key={p.id} />
              ))}
          </div>
          <div className="home-academic-heading">
            <p className="eyebrow">BEYOND MARKETING</p>
            <h3>Technical & Academic Projects</h3>
            <span>My software engineering foundation.</span>
          </div>
          <div className="project-grid academic-grid">
            {projects
              .filter((p) => !p.featured)
              .map((p) => (
                <ProjectCard project={p} compact key={p.id} />
              ))}
          </div>
        </Reveal>
      </section>
      <ContactCTA />
    </div>
  );
}
