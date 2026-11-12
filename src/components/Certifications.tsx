"use client";

import Link from "next/link";
import { ExternalLink, Award, CheckCircle2 } from "lucide-react";
import { SiGooglecloud, SiAnthropic, SiGooglegemini } from "react-icons/si";
import { motion } from "framer-motion";

export interface Certification {
  title: string;
  issuer: string;
  credentialUrl: string;
  badgeId: string;
  icon: React.ComponentType<{ size?: number; className?: string; color?: string }>;
  accentColor: string;
  category: string;
}

const certifications: Certification[] = [
  {
    title: "Google Cloud Associate Cloud Engineer (ACE)",
    issuer: "Google Cloud",
    credentialUrl:
      "https://www.credly.com/badges/d302f40e-7edd-405b-86a6-488fed388f58/public_url",
    badgeId: "ACE",
    icon: SiGooglecloud,
    accentColor: "#4285F4",
    category: "Cloud Engineering",
  },
  {
    title: "Google Enterprise Agent Development (GEAD)",
    issuer: "Google Cloud",
    credentialUrl:
      "https://www.credly.com/badges/44f7d4d6-94ad-470c-9027-8a39d314fc78/public_url",
    badgeId: "GEAD",
    icon: SiGooglegemini,
    accentColor: "#1A73E8",
    category: "AI & Agent Development",
  },
  {
    title: "Claude Certified Developer – Foundations (CCDV-F)",
    issuer: "Anthropic",
    credentialUrl:
      "https://www.credly.com/badges/da2d7489-0b77-474f-b4bd-6851f0ec1e7e/public_url",
    badgeId: "CCDV-F",
    icon: SiAnthropic,
    accentColor: "#D97706",
    category: "LLM & AI Systems",
  },
];

export default function Certifications() {
  return (
    <motion.section
      id="certifications"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="mt-16 sm:mt-20 scroll-mt-24"
    >
      <div className="flex flex-col items-start gap-1">
        <span className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm sm:text-base font-semibold text-orange-800 dark:bg-slate-800 dark:text-orange-400 shadow-2xs">
          Certifications
        </span>
        <p className="mt-1 text-xs sm:text-sm text-zinc-500 dark:text-slate-400">
          Professional cloud and generative AI engineering credentials.
        </p>
      </div>

      <div className="mt-6 sm:mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 sm:gap-6">
        {certifications.map((cert) => {
          const Icon = cert.icon;

          return (
            <article
              key={cert.title}
              className="
                group
                flex
                flex-col
                justify-between
                rounded-2xl
                sm:rounded-3xl
                border
                border-zinc-200/80
                bg-white/70
                p-5
                sm:p-6
                backdrop-blur-xl
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1.5
                hover:border-orange-300/80
                hover:shadow-lg
                dark:border-slate-800/80
                dark:bg-slate-900/60
                dark:hover:border-sky-500/40
                dark:hover:shadow-sky-500/10
              "
            >
              <div>
                {/* Header: Issuer Icon & Credly Verified Tag */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-200/80 bg-zinc-50 p-2.5 shadow-xs transition-transform duration-300 group-hover:scale-110 dark:border-slate-700/70 dark:bg-slate-800/80">
                    <Icon size={26} color={cert.accentColor} />
                  </div>

                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-400">
                    <CheckCircle2 size={13} className="shrink-0" />
                    Verified
                  </span>
                </div>

                {/* Issuer & Category */}
                <div className="mt-5 flex items-center justify-between text-xs font-medium text-zinc-500 dark:text-slate-400">
                  <span>{cert.issuer}</span>
                  <span className="rounded-md bg-zinc-100 px-2 py-0.5 dark:bg-slate-800/80 text-zinc-600 dark:text-slate-300">
                    {cert.category}
                  </span>
                </div>

                {/* Certification Title */}
                <h3 className="mt-3 text-lg sm:text-xl font-bold leading-snug text-zinc-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-sky-400">
                  {cert.title}
                </h3>
              </div>

              {/* Footer: View Credential CTA */}
              <div className="mt-6 pt-5 border-t border-zinc-200/60 dark:border-slate-800/80">
                <Link
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-zinc-200
                    bg-white
                    px-4
                    py-2.5
                    text-sm
                    font-medium
                    text-zinc-800
                    shadow-2xs
                    transition-all
                    duration-200
                    hover:border-zinc-300
                    hover:bg-zinc-50
                    hover:text-zinc-950
                    hover:shadow-xs
                    hover:scale-[1.02]
                    active:scale-95
                    dark:border-slate-700/80
                    dark:bg-slate-800/70
                    dark:text-slate-200
                    dark:hover:border-slate-600
                    dark:hover:bg-slate-800
                    dark:hover:text-white
                  "
                >
                  <Award size={16} className="text-orange-500 dark:text-sky-400" />
                  <span>View Credential</span>
                  <ExternalLink size={14} className="opacity-70" />
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </motion.section>
  );
}
