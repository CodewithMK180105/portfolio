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
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-8 rounded-full border border-zinc-200/30 bg-white/60 px-8 py-4 backdrop-blur-xl shadow-xl dark:bg-zinc-900/60 dark:border-zinc-700/30">
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

        {/* <NavItem href="https://x.com">
          <FaXTwitter size={18} />
        </NavItem> */}

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