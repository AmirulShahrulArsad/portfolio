"use client";
import { Linkedin, Github } from "@/components/BrandIcons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X, ArrowUpRight, Mail } from "lucide-react";
import { profile } from "@/data/profile";
const links = [
  ["Home", "/"],
  ["Work", "/work"],
  ["About", "/about"],
  ["Experience", "/experience"],
  ["Contact", "/contact"],
];
export function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (!open) return;
    const f = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", f);
    return () => document.removeEventListener("keydown", f);
  }, [open]);
  return (
    <header className="header">
      <div className="nav-wrap">
        <Link href="/" className="wordmark" onClick={() => setOpen(false)}>
          AMIRUL SHAHRUL<span>.</span>
        </Link>
        <nav aria-label="Main navigation" className="desktop-nav">
          {links.map(([label, url]) => (
            <Link
              key={url}
              href={url}
              aria-current={
                (url === "/" ? path === url : path.startsWith(url))
                  ? "page"
                  : undefined
              }
            >
              {label}
            </Link>
          ))}
        </nav>
        <button
          className="menu-button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: reduced ? 0 : 0.2 }}
          >
            {links.map(([label, url]) => (
              <Link
                key={url}
                href={url}
                onClick={() => setOpen(false)}
                aria-current={path === url ? "page" : undefined}
              >
                {label}
                <ArrowUpRight size={18} />
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
export function SocialLinks() {
  return (
    <div className="socials">
      <a
        href={profile.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn (opens in a new tab)"
      >
        <Linkedin size={19} />
      </a>
      <a
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub (opens in a new tab)"
      >
        <Github size={19} />
      </a>
      <a href={"mailto:" + profile.email} aria-label="Email Amirul">
        <Mail size={19} />
      </a>
    </div>
  );
}
export function Footer() {
  return (
    <footer className="container footer">
      <div>
        <Link href="/" className="wordmark">
          AMIRUL SHAHRUL.
        </Link>
        <p>Creative thinking. Thoughtful execution.</p>
      </div>
      <SocialLinks />
      <p className="small">
        © {new Date().getFullYear()} Amirul Shahrul
        <br />
        Petaling Jaya, Malaysia
      </p>
    </footer>
  );
}
