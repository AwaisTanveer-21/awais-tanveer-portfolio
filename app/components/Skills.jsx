
"use client";

import { motion } from "motion/react";
import {
  PanelsTopLeft,
  Server,
  Database,
  ShieldCheck,
  Wrench,
  Users,
  Sparkles,
  Palette,
  FileSpreadsheet,
  Video,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend Development",
    description: "Responsive interfaces and modern web experiences",
    icon: PanelsTopLeft,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript ES6+",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "Redux Toolkit",
      "Responsive Web Design",
    ],
  },
  {
    title: "UI & Animation",
    description: "User interfaces and interactive components",
    icon: Sparkles,
    skills: [
      "Framer Motion",
      "shadcn/ui",
      "Reusable Components",
      "Modern UI Design",
    ],
  },
  {
    title: "Backend & APIs",
    description: "Server-side development and API integration",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "API Integration",
      "Basic Python",
      "Flask Basics",
    ],
  },
  {
    title: "Database Management",
    description: "Data storage and application data handling",
    icon: Database,
    skills: [
      "MongoDB",
      "Mongoose",
      "CRUD Operations",
      "Database Integration",
    ],
  },
  {
    title: "Authentication",
    description: "Basic application security and user access",
    icon: ShieldCheck,
    skills: [
      "JWT Authentication Concepts",
      "Authorization Concepts",
      "Protected Routes",
      "Input Validation",
      "Error Handling",
    ],
  },
  {
    title: "Developer Tools",
    description: "Tools for coding, testing and collaboration",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "Git Bash",
      "VS Code",
      "Postman",
      "MS Office",
    ],
  },
  {
    title: "Office & Data Entry",
    description: "Document preparation and office productivity",
    icon: FileSpreadsheet,
    skills: [
      "Data Entry",
      "Microsoft Word",
      "Microsoft Excel",
      "PowerPoint Presentations",
      "Document Formatting",
    ],
  },
  {
    title: "Graphic Design",
    description: "Basic visual design and creative content",
    icon: Palette,
    skills: [
      "Graphic Designing",
      "Canva",
      "Social Media Graphics",
      "Basic Visual Design",
    ],
  },
  {
    title: "Video Editing",
    description: "Video editing and content preparation",
    icon: Video,
    skills: [
      "Video Editing",
      "Basic Video Production",
      "Content Editing",
    ],
  },
  {
    title: "Professional Skills",
    description: "Working effectively with people and projects",
    icon: Users,
    skills: [
      "Communication",
      "Teamwork",
      "Problem Solving",
      "Time Management",
      "Creative Thinking",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[var(--background)] px-5 py-24 text-[var(--foreground)] sm:px-8"
    >
      <div className="pointer-events-none absolute right-0 top-20 h-64 w-64 rounded-full bg-[var(--primary)] opacity-[0.07] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--primary)]">
            <Sparkles size={16} />
            My Skills
          </span>

          <h2 className="mt-5 text-3xl font-bold sm:text-5xl">
            Skills & <span className="text-[var(--primary)]">Expertise</span>
          </h2>

          <p className="mt-5 leading-7 text-[var(--muted)]">
            My technical, office productivity, design and creative skills,
            including my current level of programming knowledge.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: (index % 3) * 0.08,
                }}
                whileHover={{ y: -5 }}
                className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)] transition-colors duration-300 hover:border-[var(--primary)] hover:shadow-[0_0_26px_var(--glow)]"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background)] text-[var(--primary)] transition group-hover:border-[var(--primary)]">
                    <Icon size={23} />
                  </span>

                  <div>
                    <h3 className="text-lg font-bold">{group.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                      {group.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-xs font-medium text-[var(--muted)] transition hover:border-[var(--primary)] hover:text-[var(--foreground)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
