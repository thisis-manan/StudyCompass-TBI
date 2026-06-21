"use client";

import { ThemeProvider } from "next-themes";

/**
 * Wraps the app in next-themes' ThemeProvider so the dark/light toggle
 * (see components/Navbar.tsx) can switch the `class` on <html>.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      {children}
    </ThemeProvider>
  );
}
