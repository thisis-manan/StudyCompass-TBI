"use client";

import { useState } from "react";
import PageShell from "@/components/PageShell";
import { Button, Input, Toast } from "@/components/ui";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toastOpen, setToastOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: no real auth yet — just confirm the form works.
    setToastOpen(true);
  };

  return (
    <PageShell>
      <div className="mx-auto flex max-w-md flex-col px-4 py-16">
        <h1 className="text-3xl font-bold sm:text-4xl">Login</h1>
        <p className="mt-2 text-foreground/70">
          Sign in to access your study materials. (Authentication is a
          placeholder for now.)
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={setEmail}
            placeholder="you@example.com"
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={setPassword}
            placeholder="••••••••"
          />
          <Button type="submit">Sign In</Button>
        </form>
      </div>

      <Toast
        open={toastOpen}
        message="Login submitted (demo only)."
        type="info"
        onClose={() => setToastOpen(false)}
      />
    </PageShell>
  );
}
