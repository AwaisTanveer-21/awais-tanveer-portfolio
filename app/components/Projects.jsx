
"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Code2,
  ExternalLink,
  FolderGit2,
  Layers3,
  Search,
  Sparkles,
  X,
} from "lucide-react";

const repositories = [
  {
    name: "AT-store-using-mern-stack",
    category: "Full Stack",
    description:
      "An e-commerce project focused on building a store experience with the MERN stack.",
    technologies: ["MERN Stack", "E-commerce"],
    featured: true,
  },
  {
    name: "e-commerce-mern-stack-project",
    category: "Full Stack",
    description:
      "A full-stack e-commerce project exploring product management and online shopping workflows.",
    technologies: ["MERN Stack", "E-commerce"],
    featured: true,
  },
  {
    name: "Dashboard-Using-NextJs",
    category: "Frontend",
    description:
      "A dashboard interface built to practise modern page layouts and reusable UI components.",
    technologies: ["Next.js", "Dashboard UI"],
    featured: true,
  },
  {
    name: "Food-delievery-project",
    category: "Frontend",
    description:
      "A food delivery project focused on creating a user-friendly food browsing experience.",
    technologies: ["Web Development", "Food Delivery"],
    featured: true,
  },
  {
    name: "JwT-Auth-App",
    category: "Backend",
    description:
      "An authentication-focused project exploring JWT-based login and protected application routes.",
    technologies: ["Authentication", "JWT"],
    featured: true,
  },
  {
    name: "Corvit-assets-management-system",
    category: "Full Stack",
    description:
      "An asset management system project for practising digital asset tracking and management workflows.",
    technologies: ["Web Application", "Asset Management"],
    featured: true,
  },
  {
    name: "Reactjs-projects",
    category: "Frontend",
    description:
      "A collection of React.js projects and exercises demonstrating frontend development practice.",
    technologies: ["React.js", "JavaScript"],
  },
  {
    name: "Reactjs-with-Vite-and-Tailwindcss",
    category: "Frontend",
    description:
      "Frontend development practice using React, Vite and Tailwind CSS.",
    technologies: ["React.js", "Vite", "Tailwind CSS"],
  },
  {
    name: "Nova-Collection-frontend",
    category: "Frontend",
    description:
      "A frontend project for practising modern layouts and user interfaces for a collection or shopping experience.",
    technologies: ["Frontend", "Web UI"],
  },
  {
    name: "NextJs-Taiwindcss",
    category: "Frontend",
    description:
      "A Next.js and Tailwind CSS project focused on responsive interface development.",
    technologies: ["Next.js", "Tailwind CSS"],
  },
  {
    name: "HTML-CSS",
    category: "Frontend",
    description:
      "Practice projects covering page structure, styling and foundational web design.",
    technologies: ["HTML", "CSS"],
  },
  {
    name: "HTML-",
    category: "Frontend",
    description:
      "HTML practice repository for working with the building blocks of web pages.",
    technologies: ["HTML"],
  },
  {
    name: "javascript-projects",
    category: "JavaScript",
    description:
      "JavaScript practice projects exploring core language features and browser-based interactions.",
    technologies: ["JavaScript"],
  },
  {
    name: "NodeJs-tutorial",
    category: "Backend",
    description:
      "A learning repository for practising Node.js fundamentals and backend development.",
    technologies: ["Node.js"],
  },
  {
    name: "nodeJS-practice",
    category: "Backend",
    description:
      "Hands-on Node.js practice and experiments while learning server-side development.",
    technologies: ["Node.js"],
  },
  {
    name: "Mern_stack-Projects",
    category: "Full Stack",
    description:
      "A collection of projects for practising full-stack web development with the MERN ecosystem.",
    technologies: ["MERN Stack"],
  },
  {
    name: "Todo-list-using-mern-stack",
    category: "Full Stack",
    description:
      "A task-list project for practising CRUD workflows in a MERN stack application.",
    technologies: ["MERN Stack", "CRUD"],
  },
];

const categories = [
  "All",
  "Full Stack",
  "Frontend",
  "Backend",
  "JavaScript",
];

const projectColors = [
  "#a78bfa",
  "#38bdf8",
  "#34d399",
  "#fb923c",
  "#f472b6",
  "#60a5fa",
];

function ProjectCard({ project, index }) {
  const color = projectColors[index % projectColors.length];

  const repositoryUrl = `https://github.com/AwaisTanveer-21/${encodeURIComponent(
    project.name
  )}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.06 }}
      whileHover={{ y: -6 }}
      className="group relative flex h-full flex-col rounded-2xl p-px"
      style={{
        background: `linear-gradient(135deg, ${color}bb, var(--border), ${color}55)`,
      }}
    >
      <div
        className="pointer-events-none absolute -inset-1 -z-10 rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30"
        style={{ backgroundColor: color }}
      />

      <div className="flex h-full flex-col rounded-[15px] bg-[var(--surface)] p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border"
            style={{
              color,
              borderColor: `${color}77`,
              backgroundColor: `${color}18`,
              boxShadow: `0 0 20px ${color}18`,
            }}
          >
            <FolderGit2 size={24} />
          </div>

          {project.featured ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 px-3 py-1 text-xs font-medium text-[var(--primary)]">
              <Sparkles size={13} />
              Featured
            </span>
          ) : (
            <span className="rounded-full border border-[var(--border)] bg-[var(--surface-secondary)] px-3 py-1 text-xs text-[var(--muted)]">
              {project.category}
            </span>
          )}
        </div>

        <h3 className="mt-5 break-words text-lg font-bold leading-7 transition-colors group-hover:text-[var(--primary)] sm:text-xl">
          {project.name.replace(/[-_]+/g, " ")}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-7 text-[var(--muted)]">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-lg border border-[var(--border)] bg-[var(--surface-secondary)] px-2.5 py-1.5 text-xs font-medium text-[var(--muted)]"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-6 border-t border-[var(--border)] pt-4">
          <a
            href={repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.name} on GitHub`}
            className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3 hover:text-[var(--primary)]"
            style={{ color }}
          >
            <Code2 size={17} />
            View on GitHub
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return repositories.filter((project) => {
      const matchesCategory =
        activeCategory === "All" ||
        project.category === activeCategory;

      const searchableText = [
        project.name,
        project.category,
        project.description,
        ...project.technologies,
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && searchableText.includes(query);
    });
  }, [activeCategory, searchQuery]);

  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden bg-[var(--background)] px-5 py-20 text-[var(--foreground)] sm:px-8 sm:py-24 lg:px-10"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-violet-500/10 blur-[110px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 -z-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[110px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-12"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/40 bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--primary)] shadow-[0_0_22px_var(--glow)]">
            <Sparkles size={16} />
            MY WORK
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mt-5 text-base leading-8 text-[var(--muted)] sm:text-lg">
            Explore my web development projects, from frontend interfaces
            to full-stack applications and backend practice.
          </p>
        </motion.div>

        {/* Search */}
        <div className="mx-auto mb-6 max-w-xl">
          <label htmlFor="project-search" className="sr-only">
            Search projects
          </label>

          <div className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 transition-colors focus-within:border-[var(--primary)]">
            <Search
              size={19}
              className="shrink-0 text-[var(--muted)]"
            />

            <input
              id="project-search"
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search projects or technologies..."
              className="min-w-0 flex-1 bg-transparent text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted)]"
            />

            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear project search"
                className="rounded-md p-1 text-[var(--muted)] transition-colors hover:text-[var(--primary)]"
              >
                <X size={17} />
              </button>
            )}
          </div>
        </div>

        {/* Category filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={`rounded-xl border px-4 py-2.5 text-sm font-medium transition-all ${
                  isActive
                    ? "border-[var(--primary)] bg-[var(--primary)] text-white shadow-[0_0_18px_var(--glow)]"
                    : "border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:border-[var(--primary)] hover:text-[var(--primary)]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Results count */}
        <div className="mb-5 flex items-center justify-between gap-3">
          <p className="text-sm text-[var(--muted)]">
            Showing{" "}
            <span className="font-semibold text-[var(--foreground)]">
              {filteredProjects.length}
            </span>{" "}
            of {repositories.length} repositories
          </p>

          {(searchQuery || activeCategory !== "All") && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="text-sm font-medium text-[var(--primary)] hover:underline"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Project cards */}
        {filteredProjects.length > 0 ? (
          <div className="grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.name}
                project={project}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5 py-14 text-center">
            <FolderGit2
              size={36}
              className="mx-auto text-[var(--muted)]"
            />

            <h3 className="mt-4 text-lg font-bold">
              No projects found
            </h3>

            <p className="mt-2 text-sm text-[var(--muted)]">
              Try another search term or select a different category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="mt-5 rounded-xl bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Show all projects
            </button>
          </div>
        )}

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/AwaisTanveer-21"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-[var(--primary)]/50 bg-[var(--surface)] px-6 py-3.5 font-semibold text-[var(--primary)] shadow-[0_0_22px_var(--glow)] transition-all hover:-translate-y-1 hover:bg-[var(--surface-secondary)]"
          >
            <Layers3 size={19} />
            Explore My GitHub
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
