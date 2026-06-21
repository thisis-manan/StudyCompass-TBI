"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

/**
 * Top navigation bar. Rendered on every page (via PageShell).
 * Holds links to all routes and the dark/light mode toggle button.
 * No props.
 */

const links = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/about", label: "About" },
  { href: "/showcase", label: "Components" },
  { href: "/login", label: "Login" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // next-themes can only read the active theme on the client; wait for mount
  // to avoid a hydration mismatch on the toggle icon.
  useEffect(() => setMounted(true), []);

  const isDark = theme === "dark";

  return (
    <header className="sticky top-0 z-40 w-full border-b border-black/10 bg-background/80 backdrop-blur dark:border-white/10">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <span aria-hidden className="text-xl">🧭</span>
          <span>StudyCompass</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Toggle dark mode"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="rounded-lg border border-black/10 p-2 text-lg transition-colors hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
          >
            {mounted ? (isDark ? "☀️" : "🌙") : "🌓"}
          </button>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg border border-black/10 p-2 md:hidden dark:border-white/15"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <ul className="flex flex-col gap-1 border-t border-black/10 px-4 py-2 md:hidden dark:border-white/10">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-2 py-2 text-sm font-medium text-foreground/80 hover:bg-black/5 dark:hover:bg-white/10"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
