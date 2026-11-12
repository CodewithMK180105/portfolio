"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import ThemeToggle from "./theme-toggle";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Skills", href: "#skills" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-3 sm:top-5 inset-x-0 z-50 px-3 sm:px-6 pointer-events-none">
      <div className="mx-auto max-w-5xl pointer-events-auto">
        <nav
          className={`
            flex items-center justify-between rounded-full border px-4 py-2 sm:px-6 sm:py-2.5
            backdrop-blur-xl transition-all duration-300
            ${
              scrolled
                ? "bg-white/85 dark:bg-slate-900/90 border-zinc-300/80 dark:border-slate-800 shadow-md"
                : "bg-white/70 dark:bg-slate-900/75 border-zinc-200/70 dark:border-slate-800/80 shadow-xs"
            }
          `}
          aria-label="Main Navigation"
        >
          {/* Brand Logo */}
          <Link
            href="#home"
            className="flex items-center gap-2 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500 rounded-full"
            aria-label="Manishkumar Gupta Portfolio - Home"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 text-xs font-bold text-white shadow-xs transition-transform duration-200 group-hover:scale-105">
              MK
            </span>
            <span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-white">
              Manishkumar
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 text-xs lg:text-sm font-medium text-zinc-600 dark:text-slate-300">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="rounded-full px-3 py-1.5 transition-colors duration-200 hover:text-blue-600 dark:hover:text-sky-400 hover:bg-zinc-100/80 dark:hover:bg-slate-800/70 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Action Items */}
          <div className="flex items-center gap-2">
            {/* Desktop Social Links */}
            <div className="hidden lg:flex items-center gap-1.5 border-r border-zinc-200 dark:border-slate-800 pr-2.5 mr-0.5 text-zinc-600 dark:text-slate-400">
              <a
                href="https://github.com/CodewithMK180105"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="rounded-full p-2 transition hover:text-zinc-950 dark:hover:text-white hover:scale-110"
              >
                <FaGithub size={17} />
              </a>
              <a
                href="https://www.linkedin.com/in/manishk-gupta/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="rounded-full p-2 transition hover:text-blue-600 dark:hover:text-sky-400 hover:scale-110"
              >
                <FaLinkedin size={17} />
              </a>
              <a
                href="https://www.leetcode.com/u/CodewithMK180105/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode profile"
                className="rounded-full p-2 transition hover:text-amber-500 hover:scale-110"
              >
                <SiLeetcode size={17} />
              </a>
            </div>

            <ThemeToggle />

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-full text-zinc-700 transition hover:bg-zinc-100 dark:text-slate-200 dark:hover:bg-slate-800 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="mt-2 w-full rounded-3xl border border-zinc-200/80 bg-white/95 p-5 shadow-2xl backdrop-blur-2xl dark:border-slate-800 dark:bg-slate-900/95 md:hidden animate-in fade-in slide-in-from-top-3 duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-800 transition hover:bg-zinc-100 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800/80 dark:hover:text-sky-400"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-zinc-400 dark:text-slate-500">→</span>
                </Link>
              ))}
            </div>

            {/* Mobile Socials Divider */}
            <div className="mt-4 pt-4 border-t border-zinc-200/70 dark:border-slate-800/80 flex items-center justify-around text-zinc-600 dark:text-slate-400">
              <a
                href="https://github.com/CodewithMK180105"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 py-1 px-3 rounded-lg hover:text-zinc-950 dark:hover:text-white text-xs font-medium"
              >
                <FaGithub size={16} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/manishk-gupta/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 py-1 px-3 rounded-lg hover:text-blue-600 dark:hover:text-sky-400 text-xs font-medium"
              >
                <FaLinkedin size={16} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://www.leetcode.com/u/CodewithMK180105/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 py-1 px-3 rounded-lg hover:text-amber-500 text-xs font-medium"
              >
                <SiLeetcode size={16} />
                <span>LeetCode</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}