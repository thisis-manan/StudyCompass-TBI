# StudyCompass — Submission Guide (Week 2 & Week 3)

This file lists exactly what's done and the manual steps you (the intern) still
need to do. Replace `[InternID]` with your actual intern ID in every filename.

## Run the app

```bash
npm install
npm run dev
```

Open http://localhost:3000. Routes: `/`, `/dashboard`, `/about`, `/login`,
`/showcase`. The dark/light toggle is the 🌙/☀️ button in the navbar.

---

## ✅ Done in code

### Week 2 — Deliverable 1 (Frontend Skeleton)
- Home page (`app/page.tsx`) uses **Navbar, Hero, Card (×6 in a grid), Footer**.
- 3 extra routes: **/about, /dashboard, /login** — each renders Navbar + Footer
  (via `components/PageShell.tsx`) and a heading + paragraph.
- Responsive: grids stack on mobile, `overflow-x-hidden` on body — no
  horizontal scroll.
- 4 components live in `/components`: `Navbar`, `Hero`, `Card`, `Footer`.

### Week 3 — Deliverable 2 (Component Library)
- 5 components in `/components/ui/`: **Button, Input, Modal, Toast, Loader**.
- `components/ui/index.ts` barrel-exports all of them.
- Props documented at the top of each file (JSDoc comment **and** TypeScript
  types).
- All are used live on the **/showcase** page (Login also uses Button/Input/Toast).

### Week 3 — Deliverable 4 (Dark/Light Mode)
- Working toggle in the navbar (`next-themes`, class-based).

---

## ✍️ Manual steps you still need to do

### Week 2 — Deliverable 3: Screenshot Pack (PDF)
1. `npm run dev`, open http://localhost:3000.
2. **Home – desktop:** full-screen screenshot (1920×1080 or similar).
3. **Home – mobile:** open Chrome DevTools (Cmd/Ctrl+Shift+I) → click the device
   toolbar icon (Cmd/Ctrl+Shift+M) → pick **iPhone** or **Pixel** → screenshot.
4. **One other page:** screenshot `/dashboard` or `/about`.
5. Combine the 3 images into one PDF.
   - macOS: open all in Preview → File → Print → Save as PDF, or select images
     in Finder → right-click → Quick Actions → Create PDF.
6. Name it **`W2_FrontendScreenshots_[InternID].pdf`**.

### Week 3 — Deliverable 1: Figma Wireframes (PDF) — *needs ~30 min in Figma*
Create **5 lo-fi frames** (grey boxes, placeholder text, no colour). Your built
pages mirror these so you can copy the layouts:
1. **Home** → mirror `/`
2. **Dashboard** → mirror `/dashboard`
3. **Detail / List view** → a list of uploaded materials (cards in a column)
4. **Login / Signup** → mirror `/login`
5. **AI feature screen** → a chat screen: message list + input box at the bottom
- Export: Figma → **File → Export frames to PDF** → name it
  **`W3_Wireframes_[InternID].pdf`**.
- Share the Figma **view-only** link in the LMS text field.

### Week 3 — Deliverable 3: Responsive Screenshots (PDF)
1. DevTools → device toolbar → set **Responsive** and type the width.
2. Screenshot **/dashboard** (full page) at **375px**, **768px**, **1440px**.
   - Tip: DevTools ⋮ menu → **Capture full size screenshot**.
3. Toggle dark mode and take **2 more** shots of the same page: light + dark.
4. Combine all 5 into **`W3_ResponsiveScreenshots_[InternID].pdf`**.

### GitHub
The commit history is already set up with conventional commits. Push it:
```bash
git push -u origin main
```
(The remote is set to your StudyCompass-TBI repo. If `main` doesn't exist on the
remote yet, this command creates it.)

### LMS
- Upload the PDFs to the Week 2 / Week 3 assignment boxes.
- Paste the Figma view-only link and GitHub repo URL in the text field.
- Submit the Weekly Progress Report form by Sunday 11:59 PM IST.
