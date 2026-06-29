# StudyCompass

An AI-powered learning assistant. Upload your notes, textbooks, and PDFs, then
ask questions in natural language — StudyCompass uses Retrieval-Augmented
Generation (RAG) to give accurate, easy-to-understand answers from your own
material.

> **Status:** Frontend skeleton (Weeks 2 & 3) + REST API (Week 4). RAG/AI comes later.

## Tech Stack

**Frontend**

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4**
- **next-themes** (dark/light mode)

**Backend** (`/backend`)

- **Express** (Node.js) REST API
- File-based JSON store (no database to install)
- Full CRUD + search, validation, and error-handling middleware

## Getting Started

The app has two parts: run the **backend** and the **frontend** in two terminals.

### 1. Frontend (Next.js)

```bash
npm install
cp .env.example .env.local   # sets NEXT_PUBLIC_API_URL=http://localhost:4000
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The **/dashboard** page
fetches live data from the backend.

### 2. How to run the backend locally

```bash
cd backend
npm install
cp .env.example .env          # PORT=4000, CORS_ORIGIN, etc.
npm run dev                    # API on http://localhost:4000
```

Verify it's running:

```bash
curl http://localhost:4000/api/health
```

See [`backend/README.md`](./backend/README.md) for the full API reference,
endpoint list, and the Postman collection.

## Routes

| Route        | Description                                |
| ------------ | ------------------------------------------ |
| `/`          | Home — Hero + feature card grid            |
| `/dashboard` | **Live materials fetched from the backend API** |
| `/about`     | About the project                          |
| `/login`     | Demo login form                            |
| `/showcase`  | Live demo of the UI component library      |

## Project Structure

```
app/                  # routes (App Router)
components/            # Navbar, Hero, Card, Footer, PageShell
components/ui/         # Button, Input, Modal, Toast, Loader (+ index.ts)
lib/api.ts            # frontend client for the backend REST API
backend/              # Express REST API (see backend/README.md)
```

See [`SUBMISSION.md`](./SUBMISSION.md) for the Week 2 / Week 3 deliverable
checklist and screenshot/Figma instructions.
