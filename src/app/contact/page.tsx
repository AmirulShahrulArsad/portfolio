import { Linkedin, Github } from "@/components/BrandIcons";
import type { Metadata } from "next";
import { Mail, ArrowUpRight, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { Reveal } from "@/components/Reveal";
export const metadata: Metadata = { title: "Contact" };
export default function Contact() {
  return (
    <section className="container page-section contact-page">
      <Reveal>
        <p className="eyebrow">A CONVERSATION IS A GOOD START</p>
        <h1 className="page-title">
          Let’s <span className="serif">connect.</span>
        </h1>
        <div className="contact-layout">
          <div>
            <p className="lead">
              I’m open to opportunities in Digital Marketing, where I can
              contribute my marketing technology experience while continuing to
              learn and grow.
            </p>
            <p className="location">
              <MapPin size={18} />
              {profile.location}
            </p>
            <span className="availability">
              <i />
              Open to junior opportunities
            </span>
          </div>
          <div className="contact-links">
            {[
              [Mail, "Email", profile.email, "mailto:" + profile.email],
              [Linkedin, "LinkedIn", "Connect with me", profile.linkedin],
              [Github, "GitHub", "Explore my technical work", profile.github],
            ].map(([Icon, label, text, href]) => {
              const I = Icon as typeof Mail;
              const url = href as string;
              return (
                <a
                  key={label as string}
                  href={url}
                  {...(url.startsWith("https")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <I size={23} />
                  <span>
                    <small>{label as string}</small>
                    <strong>{text as string}</strong>
                  </span>
                  <ArrowUpRight size={22} />
                </a>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
