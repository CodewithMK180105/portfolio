"use client";

import Link from "next/link";
import { Play, FileText } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";
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
        "React.js",
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
        "React.js",
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
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="mt-16 sm:mt-20 scroll-mt-24"
    >
      <span className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm sm:text-base font-semibold text-orange-800 dark:bg-slate-800 dark:text-orange-400 shadow-2xs">
        My Projects
      </span>

      <div className="mt-6 sm:mt-8 grid gap-6 sm:gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-200/80 bg-white/70 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-orange-300/80 dark:border-slate-800/80 dark:bg-slate-900/60 dark:hover:border-sky-500/40 dark:hover:shadow-sky-500/10"
          >
            <div className="p-3 sm:p-5">
              <ImageCarousel images={project.image} contain={true} />
            </div>

            <div className="flex flex-1 flex-col p-4 sm:p-6 pt-0 sm:pt-0">
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 transition-colors group-hover:text-orange-600 dark:text-slate-100 dark:group-hover:text-sky-400">
                {project.title}
              </h3>

              <p className="mt-1 text-xs sm:text-sm text-zinc-500 dark:text-slate-400">
                {project.duration}
              </p>

              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-slate-300">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-blue-500/20 bg-blue-50/70 px-2.5 py-1 text-xs font-medium text-blue-700 transition-transform duration-200 hover:scale-105 select-none dark:border-blue-500/30 dark:bg-blue-950/40 dark:text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-6 flex flex-wrap gap-2.5 sm:gap-3">
                {project.links.github && (
                  <Link
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-zinc-200/80 bg-white px-3.5 py-2 text-xs sm:text-sm font-medium text-zinc-700 shadow-xs transition-all duration-200 hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900 hover:scale-[1.03] active:scale-95 dark:border-slate-700/80 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
                  >
                    <FaGithub size={15} />
                    GitHub
                  </Link>
                )}

                {project.links.demo && (
                  <Link
                    href={project.links.demo.startsWith("http") ? project.links.demo : `https://${project.links.demo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-zinc-200/80 bg-white px-3.5 py-2 text-xs sm:text-sm font-medium text-zinc-700 shadow-xs transition-all duration-200 hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900 hover:scale-[1.03] active:scale-95 dark:border-slate-700/80 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
                  >
                    <Play size={14} className="fill-current" />
                    Demo
                  </Link>
                )}

                {project.links.presentation && (
                  <Link
                    href={project.links.presentation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-zinc-200/80 bg-white px-3.5 py-2 text-xs sm:text-sm font-medium text-zinc-700 shadow-xs transition-all duration-200 hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900 hover:scale-[1.03] active:scale-95 dark:border-slate-700/80 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
                  >
                    <FileText size={15} />
                    Presentation
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
