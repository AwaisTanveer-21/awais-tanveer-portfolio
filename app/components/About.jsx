
"use client";

import { motion } from "motion/react";
import {
  Code2,
  Layers3,
  MonitorSmartphone,
  Rocket,
  Sparkles,
} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Building web applications with React, Node.js, Express.js and MongoDB.",
    color: "#a78bfa",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive Interfaces",
    description:
      "Creating interfaces that adapt smoothly to mobile, tablet and desktop screens.",
    color: "#38bdf8",
  },
  {
    icon: Layers3,
    title: "Modern Web Technologies",
    description:
      "Exploring React, Next.js, JavaScript and reusable component-based architecture.",
    color: "#34d399",
  },
  {
    icon: Rocket,
    title: "Learning by Building",
    description:
      "Improving development skills through practical projects, experimentation and problem-solving.",
    color: "#fb7185",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-[var(--background)] px-5 py-20 text-[var(--foreground)] sm:px-8 sm:py-24 lg:px-10"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-32 top-20 -z-10 h-72 w-72 rounded-full bg-violet-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/40 bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--primary)] shadow-[0_0_22px_var(--glow)]">
            <Sparkles size={15} />
            A LITTLE ABOUT ME
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            The Developer{" "}
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Behind the Code
            </span>
          </h2>

          <p className="mt-5 text-base leading-8 text-[var(--muted)] sm:text-lg">
            I&apos;m Awais Tanveer, a web developer interested in building
            useful, modern and user-friendly web applications. I enjoy turning
            ideas into working interfaces and learning how frontend and backend
            systems fit together.
          </p>
        </motion.div>

        {/* About content */}
        <div className="grid items-stretch gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Main introduction card */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            whileHover={{ y: -4 }}
            className="group relative rounded-3xl p-px"
            style={{
              background:
                "linear-gradient(135deg, #a78bfa, var(--border), #38bdf8)",
            }}
          >
            <div className="h-full rounded-3xl bg-[var(--surface)] p-6 sm:p-8">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/40 bg-violet-500/10 text-violet-400 shadow-[0_0_24px_rgba(139,92,246,0.15)] transition-transform duration-300 group-hover:scale-110">
                <Code2 size={28} />
              </div>

              <h3 className="text-2xl font-bold">
                Turning Ideas Into Web Experiences
              </h3>

              <p className="mt-4 leading-8 text-[var(--muted)]">
                My main focus is web development, especially the MERN stack.
                I enjoy working on frontend layouts, connecting APIs, managing
                application data and building features that make an application
                useful.
              </p>

              <p className="mt-4 leading-8 text-[var(--muted)]">
                I believe the best way to improve as a developer is to keep
                building, understand the code behind each feature, and learn
                from real project challenges.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {["React", "Node.js", "Express.js", "MongoDB", "Next.js"].map(
                  (technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-[var(--border)] bg-[var(--surface-secondary)] px-3 py-2 text-sm font-medium transition-all duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)]"
                    >
                      {technology}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>

          {/* Highlight cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -5, scale: 1.015 }}
                  className="group relative rounded-2xl p-px transition-shadow duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${item.color}99, var(--border), ${item.color}44)`,
                  }}
                >
                  <div className="h-full rounded-2xl bg-[var(--surface)] p-5 sm:p-6">
                    <div
                      className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border transition-all duration-300 group-hover:scale-110"
                      style={{
                        color: item.color,
                        borderColor: `${item.color}66`,
                        backgroundColor: `${item.color}15`,
                        boxShadow: `0 0 22px ${item.color}18`,
                      }}
                    >
                      <Icon size={24} />
                    </div>

                    <h3 className="text-lg font-bold">{item.title}</h3>

                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                      {item.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
