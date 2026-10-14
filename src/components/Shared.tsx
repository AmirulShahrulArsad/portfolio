import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";
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
      {children}
      <ArrowUpRight size={17} />
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
    <section className="contact-cta">
      <div className="container">
        <Reveal>
          <p className="eyebrow">NEXT CHAPTER</p>
          <h2>
            Let’s create something
            <br />
            <span className="serif">meaningful.</span>
          </h2>
          <div className="cta-bottom">
            <p>
              I’m interested in opportunities where I can
              <br className="desktop-break" /> contribute, learn, and grow in
              digital marketing.
            </p>
            <div className="actions">
              <Button href="/contact">Get in Touch</Button>
              <Button href={profile.linkedin} secondary external>
                Connect on LinkedIn
              </Button>
            </div>
          </div>
          <div className="contact-meta">
            <a href={"mailto:" + profile.email}>{profile.email}</a>
            <span>{profile.location}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
