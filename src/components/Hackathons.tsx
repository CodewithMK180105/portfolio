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
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";

const hackathons = [
  {
    title: "Hackverse 2.0",
    date: "13 - 14 March 2026",
    achievement: "🥉 2nd Runner Up among 629 teams",
    location:
      "Watumull Institute Of Engineering Technology, Mumbai",
    logo: "/images/hackverse.png",
    description:
      "Developed EduTrace AI, an AI-powered learning platform that transforms YouTube lectures into interactive study experiences by generating transcripts, concise summaries, AI-based quizzes, contextual doubt resolution, classroom collaboration, personalized learning modes, gamified rewards, multilingual transcript support with Hindi PDF generation, and progress tracking. The project focused on converting passive video consumption into an engaging and personalized learning experience through intelligent automation.",
    links: {
      github: "https://github.com/CodewithMK180105/EduTrace-Ai",
    //   demo: "#",
      certificate: "#",
    },
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
    //   demo: "#",
    //   certificate: "#",
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
      presentation: "#",
      certificate: "#",
    },
  },
];

export default function Hackathons() {
  return (
    <section className="mt-28 pb-20">

      <span className="rounded-lg bg-orange-100 px-3 py-1 text-xl font-medium text-zinc-900 dark:bg-zinc-800 dark:text-white">
        Hackathons
      </span>

      <div className="relative mt-10">

        {/* Vertical Timeline */}

        <div className="absolute left-8 top-0 h-full w-px bg-zinc-300 dark:bg-zinc-700" />

        <div className="space-y-12">

          {hackathons.map((hackathon) => (

            <div
              key={hackathon.title}
              className="relative flex items-start gap-8"
            >

              {/* Logo */}

              <div className="relative z-10">

                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-lg dark:border-zinc-700 dark:bg-zinc-900">

                  <Image
                    src={hackathon.logo}
                    alt={hackathon.title}
                    width={52}
                    height={52}
                    className="object-contain rounded-full"
                  />

                </div>

              </div>

              {/* Card */}

              <div
                className="
                flex-1
                rounded-3xl
                border
                border-zinc-200/60
                bg-white/40
                p-8
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

                <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-500">

                  <div className="flex items-center gap-2">
                    <CalendarDays size={16} />
                    {hackathon.date}
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    {hackathon.location}
                  </div>

                </div>

                <h3 className="mt-4 text-3xl font-semibold text-zinc-900 dark:text-white">
                  {hackathon.title}
                </h3>

                <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-600 dark:text-orange-400">
                  <Trophy size={16} />
                  {hackathon.achievement}
                </div>

                <p className="mt-6 leading-8 text-zinc-600 dark:text-zinc-400">
                  {hackathon.description}
                </p>

                {/* Buttons start here */}
                                <div className="mt-8 flex flex-wrap gap-4">
                  {hackathon.links.github && (
                    <Link
                      href={hackathon.links.github}
                      target="_blank"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        border
                        border-zinc-200
                        bg-white
                        px-4
                        py-2
                        text-sm
                        font-medium
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:shadow-md

                        dark:border-zinc-700
                        dark:bg-zinc-900
                      "
                    >
                      <FaGithub size={16} />
                      GitHub
                    </Link>
                  )}

                  {/* {hackathon.links.demo && (
                    <Link
                      href={hackathon.links.demo}
                      target="_blank"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        border
                        border-zinc-200
                        bg-white
                        px-4
                        py-2
                        text-sm
                        font-medium
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:shadow-md

                        dark:border-zinc-700
                        dark:bg-zinc-900
                      "
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </Link>
                  )} */}

                  {hackathon.links.presentation && (
                    <Link
                      href={hackathon.links.presentation}
                      target="_blank"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        border
                        border-zinc-200
                        bg-white
                        px-4
                        py-2
                        text-sm
                        font-medium
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:shadow-md

                        dark:border-zinc-700
                        dark:bg-zinc-900
                      "
                    >
                      <Presentation size={16} />
                      Presentation
                    </Link>
                  )}

                  {hackathon.links.certificate && (
                    <Link
                      href={hackathon.links.certificate}
                      target="_blank"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        border
                        border-orange-300
                        bg-orange-50
                        px-4
                        py-2
                        text-sm
                        font-medium
                        text-orange-600
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:shadow-md

                        dark:border-orange-500/30
                        dark:bg-orange-500/10
                        dark:text-orange-400
                      "
                    >
                      <Award size={16} />
                      Certificate
                    </Link>
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