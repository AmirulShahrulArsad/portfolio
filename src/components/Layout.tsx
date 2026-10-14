"use client";
import { Linkedin, Github } from "@/components/BrandIcons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X, ArrowRight, Mail } from "lucide-react";
import { profile } from "@/data/profile";
const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Projects", "/work"],
  ["Skills", "/#toolkit"],
  ["Experience", "/experience"],
  ["Contact", "/contact"],
];
function Brand() {
  return (
    <>
      <svg
        className="brand-mark"
        width="36"
        height="38"
        viewBox="0 0 36 38"
        fill="none"
        aria-hidden="true"
      >
        <path d="M3 33L15 4H22L34 33H25L19 17L12 33H3Z" fill="#163832" />
        <path d="M15 4H22L19 17L10 16L15 4Z" fill="#8EB69B" />
        <path d="M12 33L17 21H24L25 33H12Z" fill="#235347" />
        <path d="M3 33L10 16L17 21L12 33H3Z" fill="#8EB69B" />
      </svg>
      <span>
        Amirul<span className="brand-dot">.</span>
      </span>
    </>
  );
}
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
        <Link
          href="/"
          className="wordmark"
          aria-label="Amirul Shahrul home"
          onClick={() => setOpen(false)}
        >
          <Brand />
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
        <Link href="/contact" className="nav-cta">
          Let’s Talk
          <ArrowRight size={17} />
        </Link>
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
            transition={{ duration: reduced ? 0 : 0.22 }}
          >
            {links.map(([label, url]) => (
              <Link
                key={url}
                href={url}
                onClick={() => setOpen(false)}
                aria-current={
                  (url === "/" ? path === url : path.startsWith(url))
                    ? "page"
                    : undefined
                }
              >
                {label}
                <ArrowRight size={18} />
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
        <Linkedin size={21} />
      </a>
      <a
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub (opens in a new tab)"
      >
        <Github size={21} />
      </a>
      <a href={"mailto:" + profile.email} aria-label="Email Amirul">
        <Mail size={21} />
      </a>
    </div>
  );
}
export function Footer() {
  return (
    <footer className="container footer">
      <Link href="/" className="wordmark" aria-label="Amirul Shahrul home">
        <Brand />
      </Link>
      <p>© {new Date().getFullYear()} Amirul Shahrul. All rights reserved.</p>
      <nav aria-label="Footer navigation">
        {links.map(([label, url]) => (
          <Link href={url} key={url}>
            {label}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
