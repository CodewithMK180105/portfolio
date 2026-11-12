"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(-1);

  const experiences = [
    {
    company: "Quantiphi",
    role: "Framework Engineer",
    duration: "13 July 2026 - Present",
    logo: "/images/Quantiphi.png",
    points: [
      "Engineered Node.js backend integration services connecting frontend chat widgets with CX Agent Studio, optimizing webhook response payloads to remain within the 64 KiB limit while integrating Vertex AI Multimodal APIs.",
      "Migrated enterprise conversational AI workflows from Dialogflow CX to CX Agent Studio, implementing 5 reporting use cases and custom intent-routing logic to support business requirements.",
      "Designed and structured 5 BigQuery analytical tables and views to process streaming logs and power operational KPI dashboards using Looker Studio.",
      "Developed automated email notification services supporting up to 2,000 emails per sender daily, implementing quota management and automatic failover across multiple service accounts."
    ],
  },
  {
    company: "TestKart",
    role: "Frontend Developer Intern",
    duration: "7 January 2025 - 7 April 2025",
    logo: "/images/testkart.png",
    points: [
      "Developed production-ready frontend features for TestKart, an EdTech marketplace, and Intro.ai, an interview management platform, using React and modern frontend practices.",
      "Integrated REST APIs across multiple modules, replacing mock data with real-time backend data and improving application functionality.",
      "Built scalable frontend architecture using React, Redux Toolkit, and custom hooks to reduce prop drilling and improve state management.",
      "Implemented role-based dashboards and role-based access control (RBAC) for multiple user roles.",
      "Developed responsive chat interfaces and handled application-wide error management for a smoother user experience.",
      "Built reusable UI components with Shadcn UI, ensuring responsive design across desktop, tablet, and mobile devices.",
      "Collaborated with the backend team to integrate new features while maintaining clean, scalable, and maintainable code following modern frontend best practices.",
    ],
  },
  {
    company: "Zen Legal LLP",
    role: "Frontend Developer Intern",
    duration: "24 June 2024 - 24 October 2024",
    logo: "https://www.zenlegalgroup.com/images/header-logo.svg",
    points: [
      "Refactored the existing frontend codebase by removing redundant code and improving overall maintainability.",
      "Consolidated duplicated components into reusable components, creating a cleaner and more scalable architecture.",
      "Developed core application modules including the Dashboard, Search & Filtering, and Settings pages.",
      "Optimized application performance using memoization techniques to reduce unnecessary re-renders.",
      "Improved code organization by following reusable component architecture and clean coding practices.",
      "Built responsive interfaces using Shadcn UI, ensuring a consistent experience across all screen sizes.",
    ],
  },
  {
    company: "Vighnotech",
    role: "Frontend Developer Intern",
    duration: "04 June 2024 - 05 September 2024",
    logo: "/images/vighnotech.webp",
    points: [
      "Improved the company's search engine visibility by implementing technical SEO, metadata optimization, and on-page SEO, significantly increasing its discoverability on Google.",
      "Developed new frontend pages for the company website, CRM, and blog platform while enhancing existing user interfaces.",
      "Fixed UI bugs and resolved responsiveness issues across desktop, tablet, and mobile devices.",
      "Integrated W3Forms to streamline contact form submissions and customer inquiries.",
      "Improved website performance by implementing lazy loading and code splitting, reducing unnecessary initial page loads.",
      "Built reusable UI components and maintained clean, scalable frontend code.",
      "Ensured a responsive, user-friendly experience while contributing to the continuous enhancement of the company's web platform.",
    ],
  },
];

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="mt-16 sm:mt-20 scroll-mt-24"
    >
      <span className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm sm:text-base font-semibold text-orange-800 dark:bg-slate-800 dark:text-orange-400 shadow-2xs">
        Work Experience
      </span>

      <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
        {experiences.map((exp, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={exp.company}
              className="overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-200/80 bg-white/70 shadow-sm backdrop-blur-xl transition-all duration-300 hover:shadow-md hover:border-orange-300/70 dark:border-slate-800/80 dark:bg-slate-900/60 dark:hover:border-sky-500/30 dark:hover:shadow-sky-500/5"
            >
              <button
                onClick={() =>
                  setOpenIndex(isOpen ? -1 : index)
                }
                className="flex w-full items-center justify-between p-4 sm:p-6 md:p-7 text-left cursor-pointer transition-colors hover:bg-zinc-50/50 dark:hover:bg-slate-800/40"
              >
                <div className="flex items-center gap-3.5 sm:gap-5 min-w-0 flex-1">
                  <div className="relative h-12 w-12 sm:h-14 sm:w-14 flex-shrink-0 overflow-hidden rounded-xl bg-white p-1 shadow-xs border border-zinc-200/80 dark:border-slate-700/60 dark:bg-slate-800">
                    <Image
                      src={exp.logo}
                      alt={exp.company}
                      height={90}
                      width={90}
                      className="object-contain p-1"
                    />
                  </div>

                  <div className="min-w-0 flex-1 pr-2">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-zinc-900 dark:text-slate-100 truncate">
                      {exp.company}
                    </h3>

                    <p className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-slate-400 truncate">
                      {exp.role}
                    </p>

                    <span className="mt-1 block text-xs text-zinc-500 dark:text-slate-500 md:hidden">
                      {exp.duration}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 flex-shrink-0">
                  <span className="hidden text-sm font-medium text-zinc-500 dark:text-slate-400 md:block">
                    {exp.duration}
                  </span>

                  <ChevronDown
                    size={20}
                    className={`text-zinc-500 dark:text-slate-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-zinc-200/70 p-4 sm:p-6 md:px-8 md:py-6 dark:border-slate-800/80">
                      <ul className="pl-4 sm:pl-6 md:ml-14 md:pl-2 list-disc space-y-2.5 text-xs sm:text-sm md:text-base text-zinc-600 dark:text-slate-300">
                        {exp.points.map((point) => (
                          <li
                            key={point}
                            className="leading-relaxed sm:leading-relaxed"
                          >
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}