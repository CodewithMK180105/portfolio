"use client";

import Link from "next/link";
import { Home, FileText } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import ThemeToggle from "./theme-toggle";

export default function Navbar() {
  return (
    <nav className="fixed left-1/2 top-6 z-50 -translate-x-1/2">
      <div className="flex items-center gap-7 rounded-full border border-neutral-300 bg-white/80 px-7 py-3 shadow-xl backdrop-blur-xl dark:border-neutral-700 dark:bg-neutral-900/80">
        <NavItem href="/">
          <Home size={22} />
        </NavItem>

        <NavItem href="/resume">
          <FileText size={22} />
        </NavItem>

        <NavItem href="https://github.com/CodewithMK180105">
          <FaGithub size={20} />
        </NavItem>

        <NavItem href="https://www.linkedin.com/in/manishk-gupta/">
          <FaLinkedin size={20} />
        </NavItem>

        <NavItem href="https://x.com">
          <FaXTwitter size={18} />
        </NavItem>

        <ThemeToggle />
      </div>
    </nav>
  );
}

function NavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="transition-all duration-200 hover:scale-110 hover:text-blue-500"
    >
      {children}
    </Link>
  );
}