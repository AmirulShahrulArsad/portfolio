import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { SocialLinks } from "./Layout";
import { Reveal } from "./Reveal";
export function Button({
  href,
  children,
  secondary = false,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
  external?: boolean;
}) {
  return (
    <Link
      className={secondary ? "button secondary" : "button"}
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span>{children}</span>
      <ArrowRight size={18} />
    </Link>
  );
}
export function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link className="text-link" href={href}>
      {children}
      <ArrowRight size={17} />
    </Link>
  );
}
export function Heading({
  label,
  title,
  text,
}: {
  label: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{label}</p>
      <h2>{title}</h2>
      {text && <p className="muted">{text}</p>}
    </div>
  );
}
export function ContactCTA() {
  return (
    <section className="container contact-cta">
      <Reveal className="contact-panel glass">
        <div className="contact-title">
          <p className="eyebrow">THE NEXT CHAPTER</p>
          <h2>
            Let’s create
            <br />
            <span>
              something
              <br />
              meaningful.
            </span>
          </h2>
        </div>
        <div className="contact-message">
          <p>
            I’m interested in opportunities where I can contribute, learn, and
            grow in digital marketing.
          </p>
          <Button href="/contact">
            <Mail size={18} />
            Get in Touch
          </Button>
          <a className="contact-email" href={"mailto:" + profile.email}>
            {profile.email}
          </a>
        </div>
        <div className="contact-social">
          <p>Find me on</p>
          <SocialLinks />
          <span>{profile.location}</span>
        </div>
        <p className="hand-note contact-note" aria-hidden="true">
          Creative ideas.
          <br />
          Thoughtful
          <br />
          execution.
          <svg viewBox="0 0 100 25">
            <path d="M4 19Q47 3 93 8" />
          </svg>
        </p>
      </Reveal>
    </section>
  );
}
