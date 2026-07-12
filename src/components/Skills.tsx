"use client";

import {
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiLinux,
  SiPython,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "SQL", icon: SiMysql, color: "#4479A1" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#ffffff" },
      { name: "Prisma ORM", icon: SiPrisma, color: "#2D3748" },
      { name: "REST APIs", icon: SiPostman, color: "#FF6C37" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="mt-16 pb-20">
      <span className="rounded-lg bg-orange-100 px-3 py-1 text-xl font-medium text-zinc-900 dark:bg-zinc-800 dark:text-white">
        Technical Skills
      </span>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="
              rounded-3xl
              border
              border-zinc-200/60
              bg-white/40
              p-7
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
            <h3 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-zinc-900 dark:text-white">
              <span className="h-3 w-3 rounded-full bg-orange-500" />
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.name}
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-zinc-200
                      bg-blue-200/80
                      px-4
                      py-2

                      shadow-sm
                      transition-all
                      duration-300

                      hover:-translate-y-1
                      hover:shadow-md

                      dark:border-zinc-700
                      dark:bg-zinc-800/70
                    "
                  >
                    <Icon
                      size={18}
                      color={skill.color}
                    />

                    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}