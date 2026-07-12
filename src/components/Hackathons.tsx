"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  MapPin,
  Trophy,
  ExternalLink,
  Presentation,
  Award,
  Globe,
  Play,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";
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
    <section className="mt-8 pb-8">
      <span className="rounded-lg bg-orange-100 px-3 py-1 text-xl font-medium text-zinc-900 dark:bg-zinc-800 dark:text-white">
        Hackathons
      </span>

      <div className="relative mt-10">
        {/* Timeline */}
        <div className="absolute left-8 top-0 h-full w-px bg-zinc-300 dark:bg-zinc-700" />

        <div className="space-y-6">
          {hackathons.map((hackathon) => (
            <div
              key={hackathon.title}
              className="relative flex items-start gap-8"
            >
              {/* Logo */}
              <div className="relative z-10 shrink-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-lg dark:border-zinc-700 dark:bg-zinc-900">
                  <Image
                    src={hackathon.logo}
                    alt={hackathon.title}
                    width={52}
                    height={52}
                    className="rounded-full object-contain"
                  />
                </div>
              </div>

              {/* Card */}

              <div
                className="
                flex-1
                overflow-hidden
                rounded-3xl
                border
                border-zinc-200/60
                bg-white/40
                backdrop-blur-xl
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl

                dark:border-white/10
                dark:bg-white/5
              "
              >
                <div
                  className={
                    hackathon.images?.length
                      ? "grid lg:grid-cols-[1fr_420px]"
                      : "grid grid-cols-1"
                  }
                >
                  {/* ================= LEFT ================= */}

                  <div className="flex flex-col px-8 py-4">
                    {/* Meta */}

                    <div className="flex flex-wrap items-center gap-1 text-sm text-zinc-500">
                      <div className="flex items-center gap-2">
                        <CalendarDays size={15} />
                        {hackathon.date}
                      </div>

                      <div className="flex items-center gap-2">
                        <MapPin size={15} />
                        {hackathon.location}
                      </div>
                    </div>

                    {/* Title */}

                    <h3 className="mt-1 text-2xl font-bold text-zinc-900 dark:text-white">
                      {hackathon.title}
                    </h3>

                    {/* Achievement */}

                    <div className="mt-1 inline-flex w-fit items-center gap-2 rounded-full bg-orange-500/10 px-3 py-1.5 text-sm font-medium text-orange-600 dark:text-orange-400">
                      <Trophy size={15} />
                      {hackathon.achievement}
                    </div>

                    {/* Description */}

                    <p className="mt-2 text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">
                      {hackathon.description}
                    </p>

                    {/* Buttons */}

                    <div className="mt-2 flex flex-wrap gap-3">

                      {hackathon.links.event && (
                        <Link
                          href={hackathon.links.event}
                          target="_blank"
                          className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900"
                          >
                          <Globe size={16} />
                          Event Page
                        </Link>
                      )}
                      
                      {hackathon.links.github && (
                        <Link
                          href={hackathon.links.github}
                          target="_blank"
                          className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900"
                        >
                          <FaGithub size={16} />
                          GitHub
                        </Link>
                      )}

                      {hackathon.links.demo && (
                        <Link
                          href={hackathon.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900"
                        >
                          <Play size={16} />
                          Demo
                        </Link>
                      )}

                      {hackathon.links.presentation && (
                        <Link
                          href={hackathon.links.presentation}
                          target="_blank"
                          className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900"
                        >
                          <Presentation size={16} />
                          Presentation
                        </Link>
                      )}

                      {hackathon.links.certificate && (
                        <Link
                          href={hackathon.links.certificate}
                          target="_blank"
                          className="inline-flex items-center gap-2 rounded-xl border border-orange-300 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-orange-500/30 dark:bg-orange-500/10 dark:text-orange-400"
                        >
                          <Award size={16} />
                          Certificate
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* ================= RIGHT ================= */}

                  {hackathon.images && (
                    <div className="flex h-full items-center justify-center border-l border-zinc-200/60 px-6 py-6 dark:border-white/10">
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
    </section>
  );
}
