"use client";

import Link from "next/link";
import { Play, FileText } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import ImageCarousel from "@/components/ImageCarousel";

export default function Projects() {
  const projects = [
    {
      title: "EduTrace AI",
      duration: "March 2026",
      image: [
        "/images/edutrace-transcript.jpeg",
        "/images/edutrace-transcript-log.jpeg",
        "/images/edutrace-mcq.jpeg",
        "/images/edutrace-mcq-result.jpeg",
      ],
      description:
        "An AI-powered learning platform that transforms YouTube lectures into interactive study experiences through transcript generation, AI-powered summaries, quizzes, contextual doubt resolution, classroom collaboration, multilingual PDF generation, and gamified learning.",
      techStack: [
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "n8n",
        "Tailwind CSS",
        "SERP API",
      ],
      links: {
        github: "https://github.com/CodewithMK180105/EduTrace-Ai",
        demo: "https://youtu.be/W2O-F-VXsIA?si=UsG8lUt15M3vpcGH",
        presentation: "",
      },
    },
    // {
    //   title: "PhishGuard AI",
    //   duration: "March 2026",
    //   image: [
    //     "/images/projects/phishguard/1.webp",
    //     "/images/projects/phishguard/2.webp",
    //     "/images/projects/phishguard/3.webp",
    //   ],
    //   description:
    //     "An AI-powered cybersecurity platform that proactively detects phishing websites, malicious URLs, scam content, and suspicious webpages using machine learning models, real-time browser protection, and explainable AI.",
    //   techStack: [
    //     "Python",
    //     "Flask",
    //     "PyTorch",
    //     "Next.js",
    //     "MongoDB",
    //     "Auth0",
    //     "Tailwind CSS",
    //     "Chrome Extension",
    //   ],
    //   links: {
    //     github: "",
    //     demo: "",
    //     presentation: "",
    //   },
    // },
    {
      title: "Attendease",
      duration: "February 2026",
      image: [
        "/images/hod-panel.png",
        "/images/teacher-panel.png",
        "/images/student-dashboard.png",
        "/images/reports.png",
      ],
      description:
        "A role-based attendance request management portal that digitizes attendance concession workflows through request submission, approval tracking, document uploads, and automated Excel report generation.",
      techStack: [
        "Next.js",
        "TypeScript",
        "MongoDB",
        "Cloudinary",
        "Shadcn UI",
        "Tailwind CSS",
        "Framer Motion",
        "Nodemailer",
      ],
      links: {
        github: "https://github.com/CodewithMK180105/Attendance_Request_System",
        demo: "attendease-eight.vercel.app/",
        presentation: "",
      },
    },
    {
      title: "Polymarket",
      duration: "July 2026",
      image: [
        "/images/polymarket-dashboard.png",
        "/images/polymarket-markets.png",
        "/images/polymarket-market.png",
      ],
      description:
        "A Web3-native prediction market platform featuring a centralized limit order book (CLOB), secure wallet authentication, real-time portfolio management, and transactional trade execution.",
      techStack: [
        "React",
        "Express.js",
        "PostgreSQL",
        "Prisma",
        "Supabase",
        "TypeScript",
        "Tailwind CSS",
        "Turborepo",
      ],
      links: {
        github: "https://github.com/CodewithMK180105/polymarket",
        demo: "polymarket-gamma-six.vercel.app",
        presentation: "",
      },
    },
    {
      title: "DevSprint",
      duration: "July 2026",
      image: [
        "/images/devsprint-dashboard.png",
        "/images/devsprint-graphs.png",
        "/images/devsprint-calendars.png",
        "/images/devsprint-settings.png",
      ],
      description:
        "A collaborative project management platform with workspaces, task tracking, role-based collaboration, event-driven automations, email notifications, and real-time workflow management.",
      techStack: [
        "React",
        "Redux Toolkit",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Prisma",
        "Clerk",
        "Inngest",
      ],
      links: {
        github: "https://github.com/CodewithMK180105/DevSprint",
        demo: "dev-sprints.netlify.app/",
        presentation: "",
      },
    },
  ];

  return (
    <section className="mt-28 pb-24">
      <span className="rounded-lg bg-orange-100 px-3 py-1 text-xl font-medium text-zinc-900 dark:bg-zinc-800 dark:text-white">
        My Projects
      </span>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="overflow-hidden rounded-3xl border border-zinc-200/60 bg-white/40 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
          >
            <div className="p-5">
              <ImageCarousel images={project.image} contain={true} />
            </div>

            <div className="px-6 pb-6">
              <h3 className="text-3xl font-bold text-zinc-900 dark:text-white">
                {project.title}
              </h3>

              <p className="mt-2 text-zinc-500 dark:text-zinc-400">
                {project.duration}
              </p>

              <p className="mt-5 text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-blue-500 px-4 py-2 text-sm font-medium text-white transition hover:scale-105"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                {project.links.github && (
                  <Link
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900"
                  >
                    <FaGithub size={16} />
                    GitHub
                  </Link>
                )}

                {project.links.demo && (
                  <Link
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900"
                  >
                    <Play size={16} />
                    Demo
                  </Link>
                )}

                {project.links.presentation && (
                  <Link
                    href={project.links.presentation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900"
                  >
                    <FileText size={16} />
                    Presentation
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
