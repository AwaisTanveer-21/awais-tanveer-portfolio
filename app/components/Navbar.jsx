
"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import {
  Menu,
  X,
  Sun,
  Moon,
  Code2,
  ArrowUpRight,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme, mounted } = useTheme();

  const [menuOpen, setMenuOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  // Keep server and first client render identical.
  const isActive = (href) =>
    isHydrated && pathname === href;

  const linkClasses = (href) =>
    `relative rounded-lg px-3 py-2 text-sm font-medium transition-colors lg:px-4 ${
      isActive(href)
        ? "bg-[var(--primary)]/10 text-[var(--primary)]"
        : "text-[var(--muted)] hover:bg-[var(--surface)] hover:text-[var(--primary)]"
    }`;

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/90 text-[var(--foreground)] shadow-[var(--shadow)] backdrop-blur-xl"
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-3 px-4 sm:gap-4 sm:px-6 lg:px-8"
      >
        {/* Logo */}
        <a
          href="/"
          onClick={closeMenu}
          aria-label="Awais Tanveer - Home"
          className="group flex min-w-0 shrink-0 items-center gap-2 sm:gap-2.5"
        >
          <motion.span
            whileHover={{ rotate: 8, scale: 1.08 }}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--primary)]/50 bg-[var(--surface)] text-[var(--primary)] shadow-[0_0_18px_var(--glow)]"
          >
            <Code2 size={23} />
          </motion.span>

          <span className="whitespace-nowrap text-base font-extrabold tracking-tight sm:text-xl">
            Awais<span className="text-[var(--primary)]">Tanveer</span>
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              aria-current={
                isActive(link.href) ? "page" : undefined
              }
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.07 }}
              whileHover={{ y: -2 }}
              className={linkClasses(link.href)}
            >
              {link.label}

              {isActive(link.href) && (
                <motion.span
                  layoutId="active-nav-indicator"
                  className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-[var(--primary)]"
                  transition={{ duration: 0.2 }}
                />
              )}
            </motion.a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-2">
          {/* Theme toggle */}
          <motion.button
            type="button"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={toggleTheme}
            aria-label={
              mounted
                ? `Switch to ${
                    theme === "dark" ? "light" : "dark"
                  } mode`
                : "Toggle theme"
            }
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--primary)] transition-colors hover:border-[var(--primary)]"
          >
            {mounted && theme === "light" ? (
              <Moon size={19} />
            ) : (
              <Sun size={19} />
            )}
          </motion.button>

          {/* Contact CTA */}
          <a
            href="/contact"
            className="hidden items-center gap-1.5 rounded-xl border border-[var(--primary)]/50 bg-[var(--primary)]/10 px-3 py-2.5 text-sm font-semibold text-[var(--primary)] transition-all hover:bg-[var(--primary)] hover:text-white lg:flex"
          >
            Let's Talk
            <ArrowUpRight size={16} />
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] transition-colors hover:border-[var(--primary)] md:hidden"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      {/* Mobile navigation */}
      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-[var(--border)] bg-[var(--surface)] md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
              {links.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  aria-current={
                    isActive(link.href) ? "page" : undefined
                  }
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={closeMenu}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "bg-[var(--primary)]/10 text-[var(--primary)]"
                      : "text-[var(--muted)] hover:bg-[var(--surface-secondary)] hover:text-[var(--primary)]"
                  }`}
                >
                  {link.label}

                  {isActive(link.href) && (
                    <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
                  )}
                </motion.a>
              ))}

              <a
                href="/contact"
                onClick={closeMenu}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-4 py-3 font-semibold text-white transition-opacity hover:opacity-90"
              >
                Let's Talk
                <ArrowUpRight size={17} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
