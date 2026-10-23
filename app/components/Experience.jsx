
"use client";

import { motion } from "motion/react";
import {
  BriefcaseBusiness,
  GraduationCap,
  MapPin,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Languages,
} from "lucide-react";

const experiences = [
  {
    role: "MERN Stack Intern",
    company: "Corvit Institute",
    location: "Rawalpindi, Pakistan",
    type: "Full-Stack Development",
    points: [
      "Developed responsive web interfaces using React.js, Next.js, JavaScript and Tailwind CSS.",
      "Built and integrated REST APIs using Node.js and Express.js.",
      "Worked with MongoDB data models and CRUD operations.",
      "Practiced JWT-based authentication, protected routes and API integration.",
      "Worked on frontend-backend integration, validation and error handling.",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
  {
    role: "Frontend Development Intern",
    company: "Nexora Lab — AUST",
    location: "Abbottabad, Pakistan",
    type: "Frontend Development",
    points: [
      "Developed responsive interfaces with React.js and Next.js.",
      "Integrated APIs and contributed to UI/UX improvements.",
      "Worked with MongoDB CRUD operations.",
      "Created animated interfaces using Tailwind CSS and Framer Motion.",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
];

const education = [
  {
    degree: "BS Computer Science",
    period: "2022 – 2026",
    detail: "Bachelor's degree",
  },
  {
    degree: "Intermediate",
    period: "2019 – 2021",
    detail: "Higher secondary education",
  },
  {
    degree: "Matriculation",
    period: "2017 – 2019",
    detail: "Secondary education",
  },
];

const languages = ["Urdu", "English", "Hindko"];

function SectionHeading({ icon: Icon, children }) {
  return (
    <h3 className="mb-7 flex items-center gap-3 text-xl font-bold sm:text-2xl">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--primary)]/30 bg-[var(--primary)]/10 text-[var(--primary)]">
        <Icon size={22} />
      </span>
      {children}
    </h3>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative isolate overflow-hidden bg-[var(--background)] px-5 py-20 text-[var(--foreground)] sm:px-8 sm:py-24 lg:px-10"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-40 top-24 -z-10 h-80 w-80 rounded-full bg-violet-500/10 blur-[110px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 -z-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[110px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/40 bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--primary)] shadow-[0_0_22px_var(--glow)]">
            <Sparkles size={16} />
            MY JOURNEY
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            Experience &{" "}
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            My development experience, education and the skills I continue
            building through practical work and learning.
          </p>
        </motion.div>

        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          {/* Work experience */}
          <div>
            <SectionHeading icon={BriefcaseBusiness}>
              Work Experience
            </SectionHeading>

            <div className="relative space-y-6 before:absolute before:bottom-8 before:left-[17px] before:top-8 before:w-px before:bg-[var(--border)] sm:before:left-[21px]">
              {experiences.map((experience, index) => (
                <motion.article
                  key={experience.company}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="relative pl-10 sm:pl-12"
                >
                  {/* Timeline marker */}
                  <span className="absolute left-[10px] top-7 z-10 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[var(--primary)] bg-[var(--background)] sm:left-[14px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                  </span>

                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)] hover:shadow-[0_0_24px_var(--glow)] sm:p-6">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/25 bg-[var(--primary)]/10 px-3 py-1.5 text-xs font-semibold text-[var(--primary)]">
                      <BriefcaseBusiness size={14} />
                      Internship
                    </span>

                    <h4 className="mt-5 text-xl font-bold leading-snug sm:text-2xl">
                      {experience.role}
                    </h4>

                    <p className="mt-2 font-semibold text-[var(--primary)]">
                      {experience.company}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-[var(--muted)]">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={15} />
                        {experience.location}
                      </span>

                      <span className="inline-flex items-center gap-1.5">
                        <Code2 size={15} />
                        {experience.type}
                      </span>
                    </div>

                    <div className="my-5 border-t border-[var(--border)]" />

                    <h5 className="text-sm font-semibold">
                      Responsibilities & Learning
                    </h5>

                    <ul className="mt-4 space-y-3">
                      {experience.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-sm leading-7 text-[var(--muted)]"
                        >
                          <CheckCircle2
                            size={17}
                            className="mt-1 shrink-0 text-[var(--primary)]"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-[var(--border)] bg-[var(--surface-secondary)] px-2.5 py-1.5 text-xs font-medium text-[var(--muted)]"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Education and languages */}
          <div>
            <SectionHeading icon={GraduationCap}>
              Education
            </SectionHeading>

            <div className="space-y-4">
              {education.map((item, index) => (
                <motion.article
                  key={item.degree}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  className="group flex gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)] hover:shadow-[0_0_24px_var(--glow)] sm:p-6"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[var(--primary)]/20 bg-[var(--primary)]/10 text-[var(--primary)] transition-colors group-hover:bg-[var(--primary)]/15">
                    <GraduationCap size={24} />
                  </span>

                  <div className="min-w-0 flex-1">
                    <h4 className="text-lg font-bold leading-snug">
                      {item.degree}
                    </h4>

                    <p className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-[var(--primary)]">
                      {item.period}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                      {item.detail}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow)] sm:p-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--surface-secondary)] text-[var(--primary)]">
                  <Languages size={21} />
                </span>

                <h4 className="text-lg font-bold">Languages</h4>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {languages.map((language) => (
                  <span
                    key={language}
                    className="rounded-full border border-[var(--border)] bg-[var(--surface-secondary)] px-4 py-2 text-sm font-medium text-[var(--muted)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* GitHub profile link */}
            <motion.a
              href="https://github.com/AwaisTanveer-21"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[var(--primary)]/40 bg-[var(--surface)] px-5 py-3.5 text-sm font-semibold text-[var(--primary)] transition-colors hover:bg-[var(--surface-secondary)]"
            >
              Explore My Development Work
              <ArrowUpRight size={17} />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
