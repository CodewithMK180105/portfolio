import Image from "next/image";
import { Download, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="mx-auto px-6 pt-12 pb-16">

      {/* HERO */}
      <div className="flex flex-col-reverse items-center justify-between gap-14 lg:flex-row">

        {/* Left */}
        <div className="flex-1">

          <div className="inline-flex items-center gap-2 rounded-full border border-lime-300/60 bg-lime-100/70 px-4 py-2 text-sm text-zinc-700 dark:border-lime-500/30 dark:bg-[#0F172A] dark:text-zinc-300">
            <span className="h-2 w-2 rounded-full bg-lime-500" />
            Available for work
          </div>

          <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-white lg:text-6xl">
            Hi, I&apos;m <span className="text-orange-500">Manishkumar</span> 👋
          </h1>

          <p className="mt-2 max-w-xl text-lg leading-9 text-zinc-600 dark:text-zinc-400">
            Framework Engineer @ Quantiphi | Software Engineer | React | Next.js | Node.js | Express.js | TypeScript | PostgreSQL | MongoDB | Hackathon Winner (Inspiriobiz 5.0, Hackverse 2.0) 
          </p>

          <div className="mt-5 flex flex-wrap gap-5">

            <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-7 py-3 text-white shadow-lg transition duration-300 hover:scale-105">
              <Download size={18} />
              Download Resume
            </button>

            <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-7 py-3 text-white shadow-lg transition duration-300 hover:scale-105">
              <Mail size={18} />
              Get In Touch
            </button>

          </div>

        </div>

        {/* Right */}

        <div className="relative flex justify-center">

          <div className="absolute inset-0 rounded-full bg-orange-300/30 blur-3xl dark:bg-blue-500/20" />

          <Image
            src="/images/manish.jpeg"
            alt="Profile"
            width={220}
            height={220}
            priority
            className="relative rounded-full border-4 border-white shadow-2xl dark:border-zinc-800"
          />

        </div>

      </div>

      {/* ABOUT */}

      <div className="mt-8">

        <span className="rounded-lg bg-orange-100 px-3 py-1 text-xl font-medium text-zinc-800 dark:bg-zinc-800 dark:text-white">
          About
        </span>

        <div className="mt-3 rounded-3xl border border-zinc-200/50 bg-white/40 p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/40">

          <p className="text-lg leading-9 text-zinc-600 dark:text-zinc-400">
            I&apos;m a Software Engineer passionate about building scalable, high-performance web applications and solving real-world problems through technology. I have hands-on experience developing full-stack applications using React, Next.js, Node.js, Express.js, TypeScript, PostgreSQL, and MongoDB. Along the way, I’ve strengthened my problem-solving skills through data structures and algorithms and earned recognition as a Hackathon Winner at Inspiriobiz 5.0 and Hackverse 2.0. Currently, I’m expanding my expertise in DevOps and AWS to better understand modern cloud infrastructure, deployment workflows, and scalable system design. 
          </p>

        </div>

      </div>

    </section>
  );
}