"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Contact() {
  const [result, setResult] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "692dfdea-c142-4a96-82b4-3d2f1d7df86b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully!");
      formRef.current?.reset();
    } else {
      setResult(data.message || "Something went wrong.");
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="mt-16 sm:mt-20 pb-16 sm:pb-24 scroll-mt-24"
    >
      <span className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm sm:text-base font-semibold text-orange-800 dark:bg-slate-800 dark:text-orange-400 shadow-2xs">
        Contact
      </span>

      <div className="mt-6 sm:mt-8 grid gap-6 sm:gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left Card */}
        <div className="rounded-2xl sm:rounded-3xl border border-zinc-200/80 bg-white/70 p-5 sm:p-7 md:p-8 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-orange-300/80 dark:border-slate-800/80 dark:bg-slate-900/60 dark:hover:border-sky-500/40">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-slate-100">
            Let&apos;s Connect 👋
          </h2>

          <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-slate-300">
            I&apos;m always open to discussing exciting projects, learning
            opportunities, full-time roles, or just having a conversation about
            software engineering and AI agents.
          </p>

          <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-5">
            <div className="flex items-center gap-3.5 sm:gap-4">
              <div className="rounded-xl bg-orange-500/10 p-2.5 sm:p-3 text-orange-500 dark:bg-orange-500/15 dark:text-orange-400 shrink-0">
                <Mail size={20} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-xs text-zinc-500 dark:text-slate-400">Email</p>
                <Link
                  href="mailto:manishkumar180105@gmail.com"
                  className="text-xs sm:text-sm md:text-base font-medium text-zinc-800 hover:text-orange-500 dark:text-slate-200 dark:hover:text-orange-400 transition-colors break-all"
                >
                  manishkumar180105@gmail.com
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-3.5 sm:gap-4">
              <div className="rounded-xl bg-blue-500/10 p-2.5 sm:p-3 text-blue-500 dark:bg-blue-500/15 dark:text-blue-400 shrink-0">
                <Phone size={20} />
              </div>

              <div>
                <p className="text-xs text-zinc-500 dark:text-slate-400">Phone</p>
                <p className="text-xs sm:text-sm md:text-base font-medium text-zinc-800 dark:text-slate-200">
                  +91 9137102892
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 sm:gap-4">
              <div className="rounded-xl bg-emerald-500/10 p-2.5 sm:p-3 text-emerald-500 dark:bg-emerald-500/15 dark:text-emerald-400 shrink-0">
                <MapPin size={20} />
              </div>

              <div>
                <p className="text-xs text-zinc-500 dark:text-slate-400">Location</p>
                <p className="text-xs sm:text-sm md:text-base font-medium text-zinc-800 dark:text-slate-200">
                  Mumbai, India
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            <Link
              href="https://github.com/CodewithMK180105"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="rounded-xl border border-zinc-200/80 bg-white p-3 text-zinc-700 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900 hover:scale-110 active:scale-95 dark:border-slate-700/80 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              <FaGithub size={18} />
            </Link>

            <Link
              href="https://linkedin.com/in/manishk-gupta"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="rounded-xl border border-zinc-200/80 bg-white p-3 text-zinc-700 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900 hover:scale-110 active:scale-95 dark:border-slate-700/80 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              <FaLinkedin size={18} />
            </Link>
          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-2xl sm:rounded-3xl border border-zinc-200/80 bg-white/70 p-5 sm:p-7 md:p-8 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-orange-300/80 dark:border-slate-800/80 dark:bg-slate-900/60 dark:hover:border-sky-500/40">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-slate-100">
            Send a Message
          </h2>

          <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-zinc-600 dark:text-slate-400">
            Fill out the form below and I&apos;ll get back to you as soon as possible.
          </p>

          <form ref={formRef} onSubmit={onSubmit} className="mt-6 sm:mt-8 space-y-4 sm:space-y-5">
            <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full rounded-xl sm:rounded-2xl border border-zinc-200/90 bg-white px-4 py-3 sm:px-5 sm:py-3.5 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-all duration-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 dark:border-slate-700/80 dark:bg-slate-800/80 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-sky-400 dark:focus:ring-sky-400/20"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full rounded-xl sm:rounded-2xl border border-zinc-200/90 bg-white px-4 py-3 sm:px-5 sm:py-3.5 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-all duration-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 dark:border-slate-700/80 dark:bg-slate-800/80 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-sky-400 dark:focus:ring-sky-400/20"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full rounded-xl sm:rounded-2xl border border-zinc-200/90 bg-white px-4 py-3 sm:px-5 sm:py-3.5 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-all duration-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 dark:border-slate-700/80 dark:bg-slate-800/80 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-sky-400 dark:focus:ring-sky-400/20"
            />

            <textarea
              name="message"
              rows={5}
              placeholder="Write your message..."
              required
              className="w-full resize-none rounded-xl sm:rounded-2xl border border-zinc-200/90 bg-white px-4 py-3 sm:px-5 sm:py-3.5 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-all duration-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 dark:border-slate-700/80 dark:bg-slate-800/80 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-sky-400 dark:focus:ring-sky-400/20"
            />

            <button
              type="submit"
              disabled={result === "Sending..."}
              className="w-full sm:w-auto inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-7 py-3 text-xs sm:text-sm font-semibold text-white shadow-md shadow-orange-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 hover:scale-[1.03] active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {result === "Sending..." ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>

            {result && (
              <p
                className={`text-xs sm:text-sm font-medium ${
                  result.includes("success")
                    ? "text-emerald-500"
                    : result === "Sending..."
                      ? "text-blue-500"
                      : "text-rose-500"
                }`}
              >
                {result}
              </p>
            )}
          </form>
        </div>
      </div>
    </motion.section>
  );
}
