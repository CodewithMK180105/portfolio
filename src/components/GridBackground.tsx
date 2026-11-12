"use client";

import { useEffect, useState } from "react";

interface FlareNode {
  id: number;
  xPercent: number;
  yPercent: number;
  scale?: number;
  delay: string;
  duration?: string;
}

const FLARE_NODES: FlareNode[] = [
  { id: 1, xPercent: 18, yPercent: 12, scale: 1.1, delay: "0s", duration: "4.2s" },
  { id: 2, xPercent: 78, yPercent: 16, scale: 0.95, delay: "1.4s", duration: "3.8s" },
  { id: 3, xPercent: 48, yPercent: 28, scale: 1.25, delay: "0.7s", duration: "4.6s" },
  { id: 4, xPercent: 12, yPercent: 42, scale: 0.9, delay: "2.1s", duration: "3.5s" },
  { id: 5, xPercent: 88, yPercent: 48, scale: 1.15, delay: "1.8s", duration: "4.0s" },
  { id: 6, xPercent: 32, yPercent: 62, scale: 1.05, delay: "2.8s", duration: "4.4s" },
  { id: 7, xPercent: 68, yPercent: 74, scale: 1.2, delay: "0.3s", duration: "3.9s" },
  { id: 8, xPercent: 22, yPercent: 88, scale: 0.95, delay: "1.9s", duration: "4.1s" },
  { id: 9, xPercent: 82, yPercent: 92, scale: 1.1, delay: "1.1s", duration: "4.5s" },
];

export default function GridBackground() {
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none"
    >
      {/* 1. Subtle SVG Grid Pattern */}
      <svg
        className="absolute inset-0 h-full w-full [mask-image:radial-gradient(ellipse_95%_85%_at_50%_50%,#000_60%,transparent_100%)] opacity-80"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Light Mode Grid Pattern: Warm Orange */}
          <pattern
            id="grid-pattern-light"
            width="64"
            height="64"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 64 0 L 0 0 0 64"
              fill="none"
              stroke="#fb923c"
              strokeWidth="0.8"
              strokeOpacity="0.16"
            />
          </pattern>

          {/* Dark Mode Grid Pattern: Electric Cyan / Sky Blue */}
          <pattern
            id="grid-pattern-dark"
            width="64"
            height="64"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 64 0 L 0 0 0 64"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="0.8"
              strokeOpacity="0.13"
            />
          </pattern>
        </defs>

        {/* Light theme grid */}
        <rect
          width="100%"
          height="100%"
          fill="url(#grid-pattern-light)"
          className="dark:hidden"
        />

        {/* Dark theme grid */}
        <rect
          width="100%"
          height="100%"
          fill="url(#grid-pattern-dark)"
          className="hidden dark:block"
        />
      </svg>

      {/* 2. Interactive Cursor Spotlight */}
      {mousePos && (
        <div
          className="transition-opacity duration-300 dark:hidden"
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(249, 115, 22, 0.07), transparent 80%)`,
          }}
        />
      )}
      {mousePos && (
        <div
          className="transition-opacity duration-300 hidden dark:block"
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56, 189, 248, 0.08), transparent 80%)`,
          }}
        />
      )}

      {/* 3. Glowing Starburst Flare Nodes at Intersections */}
      {FLARE_NODES.map((node) => (
        <div
          key={node.id}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${node.xPercent}%`,
            top: `${node.yPercent}%`,
          }}
        >
          <div
            className="relative flex items-center justify-center animate-flare-pulse"
            style={{
              animationDelay: node.delay,
              animationDuration: node.duration || "4s",
              transform: `scale(${node.scale || 1})`,
            }}
          >
            {/* Horizontal Light Ray */}
            <div className="absolute h-[1.5px] w-28 sm:w-36 bg-gradient-to-r from-transparent via-orange-500/80 to-transparent dark:via-sky-400/80 shadow-[0_0_8px_rgba(249,115,22,0.6)] dark:shadow-[0_0_8px_rgba(56,189,248,0.7)]" />

            {/* Vertical Light Ray */}
            <div className="absolute w-[1.5px] h-28 sm:h-36 bg-gradient-to-b from-transparent via-orange-500/80 to-transparent dark:via-sky-400/80 shadow-[0_0_8px_rgba(249,115,22,0.6)] dark:shadow-[0_0_8px_rgba(56,189,248,0.7)]" />

            {/* Outer Circular Halo */}
            <div className="absolute h-14 w-14 rounded-full bg-orange-400/20 blur-md dark:bg-sky-400/25" />

            {/* Mid Radial Glow Ring */}
            <div className="absolute h-6 w-6 rounded-full border border-orange-400/30 bg-orange-400/10 dark:border-sky-400/40 dark:bg-sky-400/15" />

            {/* Inner Core Luminous Dot */}
            <div className="relative h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_10px_#f97316,0_0_20px_#fb923c] dark:bg-sky-300 dark:shadow-[0_0_10px_#38bdf8,0_0_20px_#60a5fa]" />
          </div>
        </div>
      ))}
    </div>
  );
}
