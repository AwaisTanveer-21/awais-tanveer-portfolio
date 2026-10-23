
"use client";

import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MessageCircle,
  ArrowUpRight,
  Sparkles,
  Code2,
  MapPin,
  Send,
} from "lucide-react";

const contacts = [
  {
    title: "Email",
    value: "awaistanveer210@gmail.com",
    href: "mailto:awaistanveer210@gmail.com",
    icon: Mail,
    description: "Send me an email",
  },
  {
    title: "Phone",
    value: "+92 318 1556110",
    href: "tel:+923181556110",
    icon: Phone,
    description: "Call me directly",
  },
  {
    title: "WhatsApp",
    value: "Let's talk about your project",
    href: "https://wa.me/923181556110",
    icon: MessageCircle,
    description: "Message me on WhatsApp",
  },
  {
    title: "LinkedIn",
    value: "Connect with me professionally",
    href: "https://www.linkedin.com/in/awais-tanveer-17b132389",
    icon: ArrowUpRight,
    description: "Let's connect professionally",
  },
  {
    title: "GitHub",
    value: "Explore my repositories",
    href: "https://github.com/AwaisTanveer-21",
    icon: Code2,
    description: "View my development work",
  },
];

const technologies = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[var(--background)] px-5 py-20 text-[var(--foreground)] sm:px-8 sm:py-24 lg:px-10"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-32 top-20 -z-10 h-72 w-72 rounded-full bg-violet-500/10 blur-[110px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/40 bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--primary)] shadow-[0_0_22px_var(--glow)]">
            <Sparkles size={16} />
            GET IN TOUCH
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            Let's Work{" "}
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Together
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            I'm Awais Tanveer, a Full-Stack Web Developer. Contact me for
            web development opportunities, collaborations, or projects.
          </p>
        </motion.div>

        <div className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow)] sm:p-8"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--primary)]/25 bg-[var(--primary)]/10 text-[var(--primary)]">
                <Mail size={22} />
              </span>

              <div>
                <h3 className="text-xl font-bold sm:text-2xl">
                  Contact Information
                </h3>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  Choose your preferred way to connect.
                </p>
              </div>
            </div>

            <div className="mt-7 space-y-3">
              {contacts.map(({ title, value, href, icon: Icon, description }) => {
                const isExternal = href.startsWith("https://");

                return (
                  <motion.a
                    key={title}
                    href={href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.99 }}
                    className="group flex min-w-0 items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-3.5 transition-colors hover:border-[var(--primary)] hover:shadow-[0_0_20px_var(--glow)] sm:gap-4 sm:p-4"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--surface-secondary)] text-[var(--primary)] transition-colors group-hover:bg-[var(--primary)] group-hover:text-white">
                      <Icon size={20} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block font-semibold">{title}</span>

                      <span className="mt-1 block break-words text-sm leading-5 text-[var(--muted)]">
                        {value}
                      </span>

                      <span className="mt-1 block text-xs text-[var(--muted)] opacity-80">
                        {description}
                      </span>
                    </span>

                    <ArrowUpRight
                      size={18}
                      className="shrink-0 text-[var(--muted)] transition-colors group-hover:text-[var(--primary)]"
                    />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Project inquiry panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow)] sm:p-8"
          >
            <div>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--primary)]/25 bg-[var(--primary)]/10 text-[var(--primary)]">
                <Code2 size={23} />
              </span>

              <h3 className="mt-6 text-2xl font-bold sm:text-3xl">
                Have a project in mind?
              </h3>

              <p className="mt-4 leading-7 text-[var(--muted)]">
                Let's turn your idea into a responsive, user-friendly web
                application using modern web technologies.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--muted)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-5 sm:p-6">
              <h4 className="text-lg font-bold">
                Let's discuss your idea
              </h4>

              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                Send me an inquiry by email or start a conversation on
                WhatsApp.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=awaistanveer210%40gmail.com&su=Web%20Development%20Inquiry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-5 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_0_25px_var(--glow)]"
                >
                  <Send size={17} />
                  Email Me
                  <ArrowUpRight size={17} />
                </a>

                <a
                  href="https://wa.me/923181556110"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-3.5 font-semibold transition hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-[var(--primary)]"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                  <ArrowUpRight size={16} />
                </a>
              </div>

              <div className="mt-6 flex items-start gap-2 text-sm leading-6 text-[var(--muted)]">
                <MapPin size={17} className="mt-1 shrink-0 text-[var(--primary)]" />
                <span>
                  Abbottabad, Pakistan
                  <span className="block">
                    Open to web development opportunities
                  </span>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
