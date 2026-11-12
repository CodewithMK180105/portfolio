import Certifications from "@/components/Certifications";
import ContactSection from "@/components/Contact";
import Experience from "@/components/Experience";
import GridBackground from "@/components/GridBackground";
import Hackathons from "@/components/Hackathons";
import Hero from "@/components/Hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* ========================= */}
      {/* Background Atmosphere     */}
      {/* ========================= */}
      <div
        className="
          fixed
          inset-0
          -z-30
          transition-colors
          duration-500
          bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(251,146,60,0.12),transparent_70%),linear-gradient(180deg,#fafaf9_0%,#f8fafc_100%)]
          dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(56,189,248,0.08),transparent_70%),radial-gradient(ellipse_60%_50%_at_100%_100%,rgba(99,102,241,0.05),transparent_70%),linear-gradient(180deg,#0B1120_0%,#0e1726_100%)]
        "
      />

      {/* Floating Ambient Orbs */}
      <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
        <div className="absolute -top-32 -left-24 h-[480px] w-[480px] rounded-full bg-gradient-to-br from-orange-400/15 to-amber-300/10 blur-[120px] dark:from-sky-500/15 dark:to-blue-600/10 animate-float-slow" />
        <div className="absolute top-[40%] -right-24 h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-amber-400/12 to-orange-500/10 blur-[130px] dark:from-indigo-600/12 dark:to-cyan-400/10 animate-float-reverse" />
        <div className="absolute -bottom-32 left-[15%] h-[480px] w-[480px] rounded-full bg-gradient-to-t from-orange-300/10 to-amber-400/10 blur-[120px] dark:from-blue-600/10 dark:to-sky-500/10 animate-float-slow" />
      </div>

      {/* Interactive Grid & Starburst Flares */}
      <GridBackground />

      {/* ========================= */}
      {/* Navigation Header         */}
      {/* ========================= */}
      <Navbar />

      {/* ========================= */}
      {/* Content                   */}
      {/* ========================= */}
      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 pt-20 sm:pt-24 pb-20">
        <Hero />
        <Experience />
        <Projects />
        <Certifications />
        <Skills />
        <Hackathons />
        <ContactSection />
      </main>
    </div>
  );
}