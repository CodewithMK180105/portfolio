"use client";

import Image from "next/image";
import { Mail, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-2 sm:pt-4 pb-12 sm:pb-16" id="home">

      {/* HERO */}
      <div className="flex flex-col-reverse items-center justify-between gap-8 sm:gap-10 lg:flex-row lg:gap-14">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left"
        >

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-300/60 bg-emerald-50/80 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-emerald-800 dark:border-emerald-500/30 dark:bg-slate-900/80 dark:text-emerald-400 shadow-xs"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for work</span>
            <Sparkles size={13} className="text-emerald-600 dark:text-emerald-400 opacity-80" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-slate-100 sm:text-4xl lg:text-5xl xl:text-6xl"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 dark:from-sky-400 dark:via-blue-500 dark:to-cyan-300 bg-clip-text text-transparent animate-gradient-text">
              Manishkumar
            </span>{" "}
            👋
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-3 max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed text-zinc-600 dark:text-slate-400 mx-auto lg:mx-0"
          >
            Framework Engineer Intern @ Quantiphi | Software Engineer | Generative AI &amp; AI Agents | Full-Stack Development | Google Cloud ACE &amp; Claude CCDV-F Certified
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            <Link href="#contact">
              <button className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 dark:from-sky-500 dark:to-blue-600 px-6 py-2.5 sm:px-7 sm:py-3 text-sm sm:text-base font-medium text-white shadow-md shadow-blue-500/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95 cursor-pointer">
                <Mail size={18} className="transition-transform group-hover:rotate-12" />
                <span>Get In Touch</span>
              </button>
            </Link>
          </motion.div>

        </motion.div>

        {/* Right Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative flex justify-center"
        >

          {/* Glowing Ambient Halo */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-400/30 to-blue-500/20 blur-2xl dark:from-sky-500/25 dark:to-blue-600/25 animate-pulse" />

          {/* Floating Avatar Container */}
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-36 w-36 sm:h-44 sm:w-44 lg:h-52 lg:w-52"
          >
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-orange-500/40 via-amber-400/30 to-blue-500/30 dark:from-sky-400/40 dark:via-blue-500/30 dark:to-cyan-400/40 blur-xs" />
            <Image
              src="/images/manish.jpeg"
              alt="Manishkumar Gupta"
              fill
              sizes="(max-width: 640px) 144px, (max-width: 1024px) 176px, 208px"
              priority
              className="rounded-full border-4 border-white object-cover shadow-2xl dark:border-slate-800 transition-transform duration-500 hover:scale-[1.03]"
            />
          </motion.div>

        </motion.div>

      </div>

      {/* ABOUT */}
      <motion.div
        id="about"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="mt-12 sm:mt-16 scroll-mt-24"
      >

        <span className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm sm:text-base font-semibold text-orange-800 dark:bg-slate-800 dark:text-orange-400 shadow-2xs">
          About
        </span>

        <div className="mt-3 rounded-2xl sm:rounded-3xl border border-zinc-200/80 bg-white/70 p-5 sm:p-7 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-orange-300/60 dark:border-slate-800/80 dark:bg-slate-900/60 dark:hover:border-sky-500/30">

          <p className="text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose text-zinc-600 dark:text-slate-300">
            I&apos;m a Software Engineer and Framework Engineer Intern at Quantiphi, focused on building scalable applications, backend systems, and AI-powered solutions. At Quantiphi, I&apos;ve contributed to enterprise projects involving Node.js backend integrations, conversational AI migration, Vertex AI, BigQuery analytics, and scalable notification services. My technical expertise includes React.js, Next.js, Node.js, Express.js, TypeScript, Python, PostgreSQL, and MongoDB, along with hands-on experience in Generative AI, Google ADK, RAG pipelines, and Google Cloud Platform. I&apos;m a Google Cloud Certified Associate Cloud Engineer and Claude CCDV-F certified developer.
          </p>

        </div>

      </motion.div>

    </section>
  );
}