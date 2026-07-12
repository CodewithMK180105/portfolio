import ContactSection from "@/components/Contact";
import Experience from "@/components/Experience";
import Hackathons from "@/components/Hackathons";
import Hero from "@/components/Hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* ========================= */}
      {/* Fixed Background Gradient */}
      {/* ========================= */}

      <div
        className="
          fixed
          inset-0
          -z-20
          transition-colors
          duration-500

          bg-[radial-gradient(circle_at_top,rgba(251,146,60,0.18),transparent_35%),linear-gradient(180deg,#fafaf9_0%,#f8fafc_100%)]

          dark:bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_35%),linear-gradient(180deg,#111827_0%,#1e293b_100%)]
        "
      />

      {/* ========================= */}
      {/* Fixed Glow - Light Theme */}
      {/* ========================= */}

      <div className="pointer-events-none fixed inset-0 -z-10 dark:hidden">
        <div
          className="
            absolute
            left-1/2
            top-1/3
            h-[650px]
            w-[650px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-orange-300/30
            blur-[170px]
          "
        />
      </div>

      {/* ========================= */}
      {/* Fixed Glow - Dark Theme */}
      {/* ========================= */}

      <div className="pointer-events-none fixed inset-0 -z-10 hidden dark:block">
        {/* Main Blue Glow */}
        <div
          className="
            absolute
            left-1/2
            top-1/3
            h-[750px]
            w-[750px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-cyan-400/18
            blur-[220px]
          "
        />

        {/* Purple Accent */}
        <div
          className="
            absolute
            right-0
            bottom-0
            h-[500px]
            w-[500px]
            rounded-full
            bg-violet-500/12
            blur-[180px]
          "
        />
      </div>

      {/* ========================= */}
      {/* Content */}
      {/* ========================= */}

      <Navbar />

      <main className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Hackathons />
        <ContactSection />
      </main>
    </div>
  );
}