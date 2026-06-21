import Link from "next/link";

/**
 * Landing hero section for the Home page.
 * @prop title    - main headline
 * @prop subtitle - supporting line under the headline
 */
type HeroProps = {
  title: string;
  subtitle: string;
};

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center sm:py-24">
      <span className="rounded-full border border-black/10 px-3 py-1 text-xs font-medium text-foreground/60 dark:border-white/15">
        AI-Powered Learning Assistant
      </span>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        {title}
      </h1>
      <p className="max-w-2xl text-base text-foreground/70 sm:text-lg">
        {subtitle}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/dashboard"
          className="rounded-lg bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
        >
          Get Started
        </Link>
        <Link
          href="/about"
          className="rounded-lg border border-black/15 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}
