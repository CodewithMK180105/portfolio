"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(0);

  const experiences = [
    {
    company: "Quantiphi",
    role: "Framework Engineer",
    duration: "13 July 2026 - Present",
    logo: "/images/Quantiphi.png",
    points: [
      
    ],
  },
  {
    company: "TestKart",
    role: "Frontend Developer Intern",
    duration: "7 Jan 2025 - 7 Apr 2025",
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
    duration: "24 Jun 2024 - 24 Oct 2024",
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
    duration: "04 Jun 2024 - 05 Sep 2024",
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
    <section className="pb-12">
      <span className="rounded-lg bg-orange-100 px-3 py-1 text-xl font-medium text-zinc-900 dark:bg-zinc-800 dark:text-white">
        Work Experience
      </span>

      <div className="mt-8 space-y-6">
        {experiences.map((exp, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={exp.company}
              className="overflow-hidden rounded-3xl border border-zinc-200/60 bg-white/40 shadow-sm backdrop-blur-xl transition-all duration-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/40"
            >
              <button
                onClick={() =>
                  setOpenIndex(isOpen ? -1 : index)
                }
                className="flex w-full items-center justify-between p-8 text-left"
              >
                <div className="flex items-center gap-5">
                  <Image
                    src={exp.logo}
                    alt={exp.company}
                    width={60}
                    height={60}
                    className="object-cover"
                  />

                  <div>
                    <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white">
                      {exp.company}
                    </h3>

                    <p className="text-zinc-500 dark:text-zinc-400">
                      {exp.role}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <span className="hidden text-zinc-500 md:block">
                    {exp.duration}
                  </span>

                  <ChevronDown
                    size={22}
                    className={`transition-transform duration-300 ${
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
                    <div className="border-t border-zinc-200/60 px-8 py-6 dark:border-zinc-800">
                      <ul className="ml-[84px] list-disc space-y-3 text-zinc-600 dark:text-zinc-400">
                        {exp.points.map((point) => (
                          <li
                            key={point}
                            className="leading-7"
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
    </section>
  );
}