
"use client";

import { Mail, Phone, MapPin, Code2, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)]">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* About */}
          <div>
            <a href="/" className="text-xl font-bold">
              Awais<span className="text-[var(--primary)]">Tanveer</span>
            </a>

            <p className="mt-3 max-w-sm text-sm leading-6 text-[var(--muted)]">
              Full-Stack Web Developer building modern, responsive, and
              user-friendly web applications.
            </p>

            <a
              href="https://github.com/AwaisTanveer-21"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--muted)] transition hover:text-[var(--primary)]"
            >
              <Code2 size={17} />
              GitHub Profile
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold">Quick Links</h3>

            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--muted)] transition hover:text-[var(--primary)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold">Contact Information</h3>

            <ul className="mt-3 space-y-3">
              <li>
                <a
                  href="mailto:awaistanveer210@gmail.com"
                  className="flex items-center gap-3 text-sm text-[var(--muted)] transition hover:text-[var(--primary)]"
                >
                  <Mail size={17} className="shrink-0" />
                  awaistanveer210@gmail.com
                </a>
              </li>

              <li>
                <a
                  href="tel:+923181556110"
                  className="flex items-center gap-3 text-sm text-[var(--muted)] transition hover:text-[var(--primary)]"
                >
                  <Phone size={17} className="shrink-0" />
                  +92 318 1556110
                </a>
              </li>

              <li className="flex items-center gap-3 text-sm text-[var(--muted)]">
                <MapPin size={17} className="shrink-0" />
                Abbottabad, Pakistan
              </li>
            </ul>

            <a
              href="https://wa.me/923181556110"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-medium text-[var(--primary)] hover:underline"
            >
              Connect on WhatsApp →
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-[var(--border)] pt-5 text-center">
          <p className="text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} Awais Tanveer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
