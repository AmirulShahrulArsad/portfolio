import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { ProjectGallery } from "./Gallery";
import { Reveal } from "./Reveal";
export function CaseStudyPage({ project: p }: { project: Project }) {
  const i = projects.findIndex((x) => x.slug === p.slug);
  const previous = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];
  return (
    <article className="container page-section case-study">
      <Link href="/work" className="text-link">
        <ArrowLeft size={17} />
        Back to Work
      </Link>
      <Reveal>
        <p className="eyebrow case-label">
          {p.category} / {p.year}
        </p>
        <h1>{p.title}</h1>
        <div className="case-cover">
          <Image
            src={p.gallery[0].src}
            alt={p.gallery[0].alt}
            width={1440}
            height={864}
            priority
          />
        </div>
        <p className="caption">
          Illustrative cover · actual project materials pending
        </p>
      </Reveal>
      <div className="case-overview">
        <div>
          <p className="eyebrow">01 / OVERVIEW</p>
          <h2>The context.</h2>
          <p className="lead">{p.overview}</p>
        </div>
        <dl>
          {[
            ["Organization", p.organization],
            ["My role", p.role],
            ["Year", p.year],
            ["Category", p.category],
          ].map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="case-row">
        <h2>Objective</h2>
        <p>{p.objective}</p>
      </div>
      <div className="case-row">
        <h2>My contributions</h2>
        <div>
          <p className="muted">
            {p.role} · {p.organization}
          </p>
          <ul className="contribution-list">
            {p.responsibilities.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="case-row">
        <h2>Process & workflow</h2>
        <div>
          {p.process.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </div>
      </div>
      <section className="case-gallery">
        <p className="eyebrow">PROJECT MATERIALS</p>
        <h2>A closer look.</h2>
        <p className="muted">
          Approved screenshots have not been provided. These are labeled
          placeholders, not evidence of campaign results.
        </p>
        <ProjectGallery images={p.gallery} />
      </section>
      <div className="case-row">
        <h2>Tools & platforms</h2>
        <div>
          <div className="tags">
            {p.tools.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          {p.slug === "ads-dashboard-automation" && (
            <p className="muted">
              Related internship tools include ShadCN Studio, Vercel, Cloudflare
              Cron, Codex, and OpenAI Tools. Use on this specific dashboard is
              pending confirmation.
            </p>
          )}
        </div>
      </div>
      <div className="case-row">
        <h2>Outcomes & learnings</h2>
        <div>
          {[...p.outcomes, ...p.learnings].map((t) => (
            <p key={t}>{t}</p>
          ))}
        </div>
      </div>
      {(p.externalLink || p.githubLink) && (
        <div className="actions">
          {p.externalLink && (
            <a className="text-link" href={p.externalLink}>
              View project
              <ArrowRight size={17} />
            </a>
          )}
          {p.githubLink && (
            <a className="text-link" href={p.githubLink}>
              View source
              <ArrowRight size={17} />
            </a>
          )}
        </div>
      )}
      <nav className="project-pagination" aria-label="Other projects">
        <Link href={"/work/" + previous.slug}>
          <span>
            <ArrowLeft size={17} />
            Previous project
          </span>
          <h3>{previous.title}</h3>
        </Link>
        <Link href={"/work/" + next.slug}>
          <span>
            Next project
            <ArrowRight size={17} />
          </span>
          <h3>{next.title}</h3>
        </Link>
      </nav>
    </article>
  );
}
