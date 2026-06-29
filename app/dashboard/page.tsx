"use client";

import { useEffect, useState } from "react";
import PageShell from "@/components/PageShell";
import { Loader } from "@/components/ui";
import { getMaterials, type Material, API_URL } from "@/lib/api";

/**
 * Dashboard — now backed by the live REST API (Week 4).
 * Fetches study materials from the backend on mount and renders them, with
 * explicit loading and error states. Watch the Network tab to see the
 * GET /api/materials call return 200.
 */
export default function DashboardPage() {
  const [materials, setMaterials] = useState<Material[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading"
  );
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    getMaterials(controller.signal)
      .then((data) => {
        setMaterials(data);
        setStatus("ready");
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        setError(err.message);
        setStatus("error");
      });
    return () => controller.abort();
  }, []);

  return (
    <PageShell>
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-3xl font-bold sm:text-4xl">My Materials</h1>
        <p className="mt-4 max-w-2xl text-foreground/70 leading-relaxed">
          Live data from the StudyCompass REST API at{" "}
          <code className="rounded bg-foreground/10 px-1.5 py-0.5 text-sm">
            {API_URL}/api/materials
          </code>
          .
        </p>

        {status === "loading" && (
          <div className="mt-12 flex items-center gap-3 text-foreground/70">
            <Loader /> Loading materials…
          </div>
        )}

        {status === "error" && (
          <div className="mt-12 rounded-xl border border-red-500/30 bg-red-500/5 p-6 text-sm leading-relaxed">
            <p className="font-semibold text-red-500">
              Couldn&apos;t reach the backend.
            </p>
            <p className="mt-1 text-foreground/70">{error}</p>
            <p className="mt-2 text-foreground/70">
              Make sure the API is running: <code>cd backend &amp;&amp; npm run dev</code>
            </p>
          </div>
        )}

        {status === "ready" && (
          <>
            <p className="mt-8 text-sm text-foreground/60">
              {materials.length} material{materials.length === 1 ? "" : "s"} found
            </p>
            <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {materials.map((m) => (
                <article
                  key={m.id}
                  className="flex flex-col gap-3 rounded-xl border border-black/10 p-6 transition-shadow hover:shadow-lg dark:border-white/10"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full bg-foreground/10 px-2.5 py-0.5 text-xs font-medium uppercase tracking-wide">
                      {m.type}
                    </span>
                    {typeof m.pages === "number" && (
                      <span className="text-xs text-foreground/50">
                        {m.pages} pages
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold">{m.title}</h3>
                  <p className="text-sm font-medium text-foreground/60">
                    {m.subject}
                  </p>
                  {m.description && (
                    <p className="text-sm leading-relaxed text-foreground/70">
                      {m.description}
                    </p>
                  )}
                  {m.tags && m.tags.length > 0 && (
                    <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                      {m.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-black/10 px-2 py-0.5 text-xs text-foreground/60 dark:border-white/15"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </>
        )}
      </div>
    </PageShell>
  );
}
