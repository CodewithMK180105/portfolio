"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

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
    <section className="mt-28 pb-24" id="contact">
      <span className="rounded-lg bg-orange-100 px-3 py-1 text-xl font-medium text-zinc-900 dark:bg-zinc-800 dark:text-white">
        Contact
      </span>

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left Card */}

        <div className="rounded-3xl border border-zinc-200/60 bg-white/40 p-8 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
            Let&apos;s Connect 👋
          </h2>

          <p className="mt-4 leading-8 text-zinc-600 dark:text-zinc-400">
            I&apos;m always open to discussing exciting projects, learning
            opportunities, full-time roles, or just having a conversation about
            software engineering.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-orange-500/10 p-3 text-orange-500">
                <Mail size={22} />
              </div>

              <div>
                <p className="text-sm text-zinc-500">Email</p>

                <Link
                  href="mailto:manishkumar180105@gmail.com"
                  className="font-medium hover:text-orange-500"
                >
                  manishkumar180105@gmail.com
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-blue-500/10 p-3 text-blue-500">
                <Phone size={22} />
              </div>

              <div>
                <p className="text-sm text-zinc-500">Phone</p>

                <p className="font-medium">+91 9137102892</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-green-500/10 p-3 text-green-500">
                <MapPin size={22} />
              </div>

              <div>
                <p className="text-sm text-zinc-500">Location</p>

                <p className="font-medium">Mumbai, India</p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex gap-4">
            <Link
              href="https://github.com/CodewithMK180105"
              target="_blank"
              className="rounded-xl border border-zinc-200 bg-white p-3 transition hover:-translate-y-1 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900"
            >
              <FaGithub size={20} />
            </Link>

            <Link
              href="https://linkedin.com/in/manishk-gupta"
              target="_blank"
              className="rounded-xl border border-zinc-200 bg-white p-3 transition hover:-translate-y-1 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900"
            >
              <FaLinkedin size={20} />
            </Link>

            {/* <Link
              href="https://x.com"
              target="_blank"
              className="rounded-xl border border-zinc-200 bg-white p-3 transition hover:-translate-y-1 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900"
            >
              <FaXTwitter size={20} />
            </Link> */}
          </div>
        </div>
        {/* Contact Form */}

        <div className="rounded-3xl border border-zinc-200/60 bg-white/40 p-8 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
            Send a Message
          </h2>

          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Fill out the form below and I&apos;ll get back to you as soon as
            possible.
          </p>

          <form ref={formRef} onSubmit={onSubmit} className="mt-8 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 outline-none transition focus:border-orange-500 dark:border-zinc-700 dark:bg-zinc-900"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 outline-none transition focus:border-orange-500 dark:border-zinc-700 dark:bg-zinc-900"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 outline-none transition focus:border-orange-500 dark:border-zinc-700 dark:bg-zinc-900"
            />

            <textarea
              name="message"
              rows={7}
              placeholder="Write your message..."
              required
              className="w-full resize-none rounded-2xl border border-zinc-200 bg-white px-5 py-4 outline-none transition focus:border-orange-500 dark:border-zinc-700 dark:bg-zinc-900"
            />

            <button
              type="submit"
              disabled={result === "Sending..."}
              className="inline-flex cursor-pointer items-center gap-3 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-400 px-7 py-4 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
            >
              {result === "Sending..." ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>

            {result && (
              <p
                className={`text-sm font-medium ${
                  result.includes("success")
                    ? "text-green-500"
                    : result === "Sending..."
                      ? "text-blue-500"
                      : "text-red-500"
                }`}
              >
                {result}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
