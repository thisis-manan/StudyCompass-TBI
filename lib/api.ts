/**
 * Thin client for the StudyCompass backend REST API.
 * The base URL comes from NEXT_PUBLIC_API_URL (see .env.example), falling back
 * to the local backend dev server on port 4000.
 */
export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

/** A study material as returned by the backend. */
export type Material = {
  id: string;
  title: string;
  subject: string;
  type: "note" | "textbook" | "pdf" | "slide";
  description?: string;
  tags?: string[];
  pages?: number;
  createdAt: string;
  updatedAt: string;
};

type ListResponse = { count: number; data: Material[] };

/** Fetch all study materials. Throws on a non-2xx response. */
export async function getMaterials(signal?: AbortSignal): Promise<Material[]> {
  const res = await fetch(`${API_URL}/api/materials`, {
    signal,
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(`Request failed (${res.status})`);
  }
  const json: ListResponse = await res.json();
  return json.data;
}
