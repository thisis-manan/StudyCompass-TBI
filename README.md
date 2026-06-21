# StudyCompass

An AI-powered learning assistant. Upload your notes, textbooks, and PDFs, then
ask questions in natural language — StudyCompass uses Retrieval-Augmented
Generation (RAG) to give accurate, easy-to-understand answers from your own
material.

> **Status:** Frontend skeleton (Weeks 2 & 3). RAG/AI backend comes later.

## Tech Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4**
- **next-themes** (dark/light mode)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

| Route        | Description                                |
| ------------ | ------------------------------------------ |
| `/`          | Home — Hero + feature card grid            |
| `/dashboard` | Placeholder dashboard                      |
| `/about`     | About the project                          |
| `/login`     | Demo login form                            |
| `/showcase`  | Live demo of the UI component library      |

## Project Structure

```
app/                  # routes (App Router)
components/            # Navbar, Hero, Card, Footer, PageShell
components/ui/         # Button, Input, Modal, Toast, Loader (+ index.ts)
```

See [`SUBMISSION.md`](./SUBMISSION.md) for the Week 2 / Week 3 deliverable
checklist and screenshot/Figma instructions.
