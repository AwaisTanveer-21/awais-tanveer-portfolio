
"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Download,
  Sparkles,
  Terminal,
} from "lucide-react";

const technologies = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[var(--background)] text-[var(--foreground)]"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-violet-500/10 blur-[100px]" />
        <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[110px]" />
        <div className="absolute inset-0 bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] bg-[size:52px_52px] opacity-20" />
      </div>

      <div className="mx-auto grid min-h-[calc(100svh-72px)] max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:px-10 lg:py-24">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="order-2 min-w-0 lg:order-1"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/40 bg-[var(--surface)] px-4 py-2 text-sm text-[var(--primary)] shadow-[0_0_24px_var(--glow)]"
          >
            <Sparkles size={16} />
            <span>Full-Stack Web Developer</span>
          </motion.div>

          <p className="mb-3 text-base text-[var(--muted)] sm:text-lg">
            Hello, I&apos;m
          </p>

          <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl xl:text-7xl">
            Awais
            <span className="mt-1 block bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text pb-2 text-transparent">
              Tanveer
            </span>
          </h1>

          <h2 className="mt-5 text-xl font-bold leading-relaxed sm:text-2xl">
            Building modern{" "}
            <span className="text-[var(--primary)]">
              web applications.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            I enjoy turning ideas into practical digital experiences using
            modern web technologies. I work with frontend interfaces, backend
            APIs and databases while continuously improving my development
            skills through hands-on projects.
          </p>

          {/* Technology badges */}
          <div className="mt-7 flex flex-wrap gap-2">
            {technologies.map((technology, index) => (
              <motion.span
                key={technology}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + index * 0.07 }}
                whileHover={{ y: -3, scale: 1.04 }}
                className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2 text-sm transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
              >
                {technology}
              </motion.span>
            ))}
          </div>

          {/* Main actions */}
          <div className="mt-9 flex flex-wrap gap-3">
            <motion.a
              href="#projects"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-5 py-3.5 font-semibold text-white shadow-[0_0_24px_rgba(124,58,237,0.25)] transition-shadow hover:shadow-[0_0_32px_rgba(124,58,237,0.4)]"
            >
              View My Projects
              <ArrowUpRight size={18} />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-3.5 font-semibold transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              Contact Me
              <ArrowUpRight size={18} />
            </motion.a>

            {/* Download CV */}
            <motion.a
              href="/Awais-Tanveer-CV.pdf"
              download="Awais-Tanveer-CV.pdf"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--primary)]/50 bg-[var(--surface)] px-5 py-3.5 font-semibold text-[var(--primary)] transition-colors hover:bg-[var(--primary)]/10"
            >
              Download CV
              <Download size={18} />
            </motion.a>
          </div>

          {/* Social profile links */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="mr-1 text-sm text-[var(--muted)]">
              Find me:
            </span>

            <motion.a
              href="https://github.com/AwaisTanveer-21"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm font-semibold transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              <Code2 size={17} />
              GitHub
              <ArrowUpRight size={15} />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/awais-tanveer-17b132389"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm font-semibold transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              LinkedIn
              <ArrowUpRight size={15} />
            </motion.a>
          </div>
        </motion.div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, x: 25, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative order-1 mx-auto w-full max-w-[280px] sm:max-w-[340px] lg:order-2 lg:max-w-[420px]"
        >
          {/* Neon ring animations */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -inset-3 rounded-[38%_62%_55%_45%/45%_40%_60%_55%] border border-violet-400/60 shadow-[0_0_25px_rgba(139,92,246,0.18)] sm:-inset-5"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 36,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -inset-1 rounded-[55%_45%_40%_60%/45%_55%_45%_55%] border border-cyan-400/40"
          />

          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative rounded-[30px] border border-[var(--primary)]/50 bg-[var(--surface)] p-2 shadow-[0_0_40px_var(--glow)]"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[23px] bg-[var(--surface-secondary)]">
              <Image
                src="/awais.jpeg"
                alt="Awais Tanveer"
                fill
                priority
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 420px"
                className="object-cover object-center"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              <div className="absolute inset-x-3 bottom-3 rounded-xl border border-white/20 bg-slate-950/75 p-3 text-white backdrop-blur-md sm:inset-x-4 sm:bottom-4 sm:p-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-400/10 text-cyan-300">
                    <Code2 size={22} />
                  </span>

                  <div className="min-w-0">
                    <p className="font-bold">MERN Stack Developer</p>
                    <p className="mt-1 text-xs text-slate-300">
                      Learn · Build · Improve
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating cards */}
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-4 top-10 hidden items-center gap-2 rounded-xl border border-violet-400/50 bg-[var(--surface)] px-3 py-2.5 text-[var(--primary)] shadow-[0_0_25px_var(--glow)] sm:flex"
          >
            <Terminal size={18} />
            <span className="text-sm font-semibold">Clean Code</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-3 bottom-24 hidden items-center gap-2 rounded-xl border border-cyan-400/50 bg-[var(--surface)] px-3 py-2.5 text-sm font-semibold text-cyan-500 shadow-[0_0_25px_rgba(34,211,238,0.12)] sm:flex"
          >
            <Code2 size={18} />
            Full Stack
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="col-span-full mx-auto mt-2 hidden items-center gap-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--primary)] lg:flex"
        >
          Explore more
          <ArrowDown size={16} />
        </motion.a>
      </div>
    </section>
  );
}
