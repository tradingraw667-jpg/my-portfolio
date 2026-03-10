"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/LangContext";
import type { Lang } from "@/lib/translations";

const languages: Lang[] = ["EN", "FR", "AR"];

function LangSwitcher() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const others = languages.filter((l) => l !== lang);

  return (
    <div ref={ref} className="relative hidden md:block">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold tracking-widest text-text-muted border border-border hover:border-accent-blue/50 hover:text-accent-blue transition-all duration-200"
        style={{
          background: "rgba(13,13,26,0.6)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full transition-colors duration-200"
          style={{ background: open ? "#00d4ff" : "#4a5568" }}
        />
        {lang}
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute end-0 mt-2 rounded-lg border border-border overflow-hidden"
            style={{
              background: "rgba(13,13,26,0.85)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              boxShadow:
                "0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,212,255,0.06)",
              minWidth: "4rem",
            }}
          >
            {others.map((l) => (
              <button
                key={l}
                onClick={() => {
                  setLang(l);
                  setOpen(false);
                }}
                className="w-full px-4 py-2 text-xs font-semibold tracking-widest text-text-muted hover:text-accent-blue hover:bg-accent-blue/5 transition-all duration-150 text-center"
              >
                {l}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const { t, lang } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.about,    href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.contact,  href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/80 backdrop-blur-md border-b border-border shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="text-xl font-bold">
          <span className="gradient-text font-mono">&lt;/&gt;</span>
          <span className="ms-2 text-text-primary">DevPortfolio</span>
        </a>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-text-muted hover:text-accent-blue transition-colors duration-200 text-sm font-medium tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: lang switcher + CTA */}
        <div className="flex items-center gap-3">
          <LangSwitcher />
          <a
            href="mailto:amirmezazigh667@gmail.com"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-accent-blue text-accent-blue hover:bg-accent-blue/10 transition-all duration-200"
          >
            {t.nav.hire}
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
