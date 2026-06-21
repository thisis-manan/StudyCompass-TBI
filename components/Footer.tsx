import Link from "next/link";

/**
 * Site footer. Rendered on every page (via PageShell). No props.
 */
export default function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-black/10 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-foreground/60 sm:flex-row">
        <p>© {new Date().getFullYear()} StudyCompass. All rights reserved.</p>
        <nav className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <Link href="/dashboard" className="hover:text-foreground">
            Dashboard
          </Link>
          <Link href="/about" className="hover:text-foreground">
            About
          </Link>
          <Link href="/login" className="hover:text-foreground">
            Login
          </Link>
        </nav>
      </div>
    </footer>
  );
}
