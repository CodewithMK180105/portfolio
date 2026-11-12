"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  MapPin,
  Trophy,
  Presentation,
  Award,
  Globe,
  Play,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";
import ImageCarousel from "@/components/ImageCarousel";

const hackathons = [
  {
    title: "Hackverse 2.0",
    date: "13 - 14 March 2026",
    achievement: "🥉 2nd Runner Up among 629 teams",
    location: "Watumull Institute Of Engineering Technology, Mumbai",
    logo: "/images/hackverse.png",
    description:
      "Developed EduTrace AI, an AI-powered learning platform that transforms YouTube lectures into interactive study experiences by generating transcripts, concise summaries, AI-based quizzes, contextual doubt resolution, classroom collaboration, personalized learning modes, gamified rewards, multilingual transcript support with Hindi PDF generation, and progress tracking. The project focused on converting passive video consumption into an engaging and personalized learning experience through intelligent automation.",
    links: {
      github: "https://github.com/CodewithMK180105/EduTrace-Ai",
      demo: "https://youtu.be/W2O-F-VXsIA?si=UsG8lUt15M3vpcGH",
      certificate: "",
      event:
        "https://unstop.com/hackathons/hackverse-20-watumull-institute-of-engineering-and-technology-wiet-mumbai-1639306",
    },
    images: [
      "/images/WIET_Hackverse_2.0_Grp_win.jpeg",
      "/images/WIET_Hackverse_2.0_Certificate-cheque_win.jpeg",
      "/images/WIET_Hackverse_2.0_Me_win.jpeg",
    ],
  },

  {
    title: "IndiaNext Hackathon",
    date: "16 - 17 March 2026",
    achievement: "🏅 Top 7 among 223 teams",
    location: "KES Shroff College, Mumbai",
    logo: "/images/indianext.png",
    description:
      "Developed PhishGuard AI, an AI-powered cybersecurity platform that proactively detects phishing attacks through intelligent URL analysis, real-time browser protection, explainable AI, scam detection, and enterprise-grade authentication. The solution provides actionable recommendations while protecting users against modern phishing and social engineering attacks.",
    links: {
      github: "https://github.com/CodewithMK180105/PhishGuardAI",
      demo: "",
      certificate: "",
      event:
        "https://unstop.com/hackathons/indianext-2025-26-kes-shroff-college-kandivaliwest-1652203",
    },
  },

  {
    title: "Inspiriobiz 5.0",
    date: "7 March 2025",
    achievement: "🥇 Won 1st Place among 275 participating teams",
    location:
      "Vivekanand Education Society Institute Of Engineering & Technology",
    logo: "/images/inspiriobiz.png",
    description:
      "Presented a data-driven solution for a real-world business case by analyzing key challenges, identifying growth opportunities, and proposing scalable recommendations. Secured first place through analytical thinking, strategic decision making, teamwork, and business problem solving.",
    links: {
      presentation: "",
      certificate: "",
      event:
        "https://unstop.com/competitions/inspiriobiz-50-junior-pan-india-case-study-competition-vivekanand-education-societys-institute-of-managemen-1391977",
    },
    images: [
      "/images/inspiriobiz_group_pic.jpeg",
      "/images/inspiriobiz_rank_list.jpeg",
      "/images/inspiriobiz_certificate.jpeg",
    ],
  },
];

export default function Hackathons() {
  return (
    <motion.section
      id="achievements"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="mt-16 sm:mt-20 scroll-mt-24"
    >
      <span className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm sm:text-base font-semibold text-orange-800 dark:bg-slate-800 dark:text-orange-400 shadow-2xs">
        Achievements
      </span>

      <div className="relative mt-6 sm:mt-8">
        {/* Timeline line */}
        <div className="absolute left-5 sm:left-7 top-0 h-full w-px bg-zinc-200 dark:bg-slate-800" />

        <div className="space-y-6 sm:space-y-8">
          {hackathons.map((hackathon) => (
            <div
              key={hackathon.title}
              className="relative flex items-start gap-3 sm:gap-6"
            >
              {/* Logo */}
              <div className="relative z-10 shrink-0">
                <div className="flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-zinc-200/90 bg-white shadow-md transition-transform duration-300 hover:scale-110 dark:border-slate-700/80 dark:bg-slate-800 ring-4 ring-orange-500/10 dark:ring-sky-500/10">
                  <Image
                    src={hackathon.logo}
                    alt={hackathon.title}
                    width={40}
                    height={40}
                    className="h-7 w-7 sm:h-10 sm:w-10 rounded-full object-contain"
                  />
                </div>
              </div>

              {/* Card */}
              <div
                className="
                  flex-1
                  overflow-hidden
                  rounded-2xl
                  sm:rounded-3xl
                  border
                  border-zinc-200/80
                  bg-white/70
                  backdrop-blur-xl
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1.5
                  hover:shadow-xl
                  hover:border-orange-300/80

                  dark:border-slate-800/80
                  dark:bg-slate-900/60
                  dark:hover:border-sky-500/40
                  dark:hover:shadow-sky-500/10
                "
              >
                <div
                  className={
                    hackathon.images?.length
                      ? "grid grid-cols-1 lg:grid-cols-[1fr_380px]"
                      : "grid grid-cols-1"
                  }
                >
                  {/* ================= LEFT ================= */}
                  <div className="flex flex-col p-4 sm:p-6 md:p-7">
                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-zinc-500 dark:text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <CalendarDays size={14} className="shrink-0" />
                        <span>{hackathon.date}</span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <MapPin size={14} className="shrink-0" />
                        <span>{hackathon.location}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="mt-2 text-lg sm:text-xl md:text-2xl font-bold text-zinc-900 dark:text-slate-100">
                      {hackathon.title}
                    </h3>

                    {/* Achievement */}
                    <div className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full bg-orange-500/10 px-3 py-1 text-xs sm:text-sm font-semibold text-orange-600 dark:bg-orange-500/15 dark:text-orange-400">
                      <Trophy size={14} className="shrink-0" />
                      <span>{hackathon.achievement}</span>
                    </div>

                    {/* Description */}
                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-slate-300">
                      {hackathon.description}
                    </p>

                    {/* Buttons */}
                    <div className="mt-5 flex flex-wrap gap-2 sm:gap-2.5">
                      {hackathon.links.event && (
                        <Link
                          href={hackathon.links.event}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 sm:gap-2 rounded-xl border border-zinc-200/80 bg-white px-3 sm:px-3.5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-zinc-700 shadow-xs transition-all duration-200 hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900 hover:scale-[1.03] active:scale-95 dark:border-slate-700/80 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
                        >
                          <Globe size={15} />
                          Event Page
                        </Link>
                      )}

                      {hackathon.links.github && (
                        <Link
                          href={hackathon.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 sm:gap-2 rounded-xl border border-zinc-200/80 bg-white px-3 sm:px-3.5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-zinc-700 shadow-xs transition-all duration-200 hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900 hover:scale-[1.03] active:scale-95 dark:border-slate-700/80 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
                        >
                          <FaGithub size={15} />
                          GitHub
                        </Link>
                      )}

                      {hackathon.links.demo && (
                        <Link
                          href={hackathon.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 sm:gap-2 rounded-xl border border-zinc-200/80 bg-white px-3 sm:px-3.5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-zinc-700 shadow-xs transition-all duration-200 hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900 hover:scale-[1.03] active:scale-95 dark:border-slate-700/80 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
                        >
                          <Play size={14} className="fill-current" />
                          Demo
                        </Link>
                      )}

                      {hackathon.links.presentation && (
                        <Link
                          href={hackathon.links.presentation}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 sm:gap-2 rounded-xl border border-zinc-200/80 bg-white px-3 sm:px-3.5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-zinc-700 shadow-xs transition-all duration-200 hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900 hover:scale-[1.03] active:scale-95 dark:border-slate-700/80 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
                        >
                          <Presentation size={15} />
                          Presentation
                        </Link>
                      )}

                      {hackathon.links.certificate && (
                        <Link
                          href={hackathon.links.certificate}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 sm:gap-2 rounded-xl border border-orange-300/80 bg-orange-50/80 px-3 sm:px-3.5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-orange-700 transition-all duration-200 hover:border-orange-400 hover:bg-orange-100 hover:scale-[1.03] active:scale-95 dark:border-orange-500/30 dark:bg-orange-950/40 dark:text-orange-300 dark:hover:bg-orange-900/50"
                        >
                          <Award size={15} />
                          Certificate
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* ================= RIGHT ================= */}
                  {hackathon.images && (
                    <div className="flex h-full items-center justify-center border-t lg:border-t-0 lg:border-l border-zinc-200/70 p-4 sm:p-6 dark:border-slate-800/80">
                      <div className="w-full max-w-md">
                        <ImageCarousel images={hackathon.images} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
