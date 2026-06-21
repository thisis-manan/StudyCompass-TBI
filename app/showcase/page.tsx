"use client";

import { useState } from "react";
import PageShell from "@/components/PageShell";
import { Button, Input, Modal, Toast, Loader } from "@/components/ui";

/**
 * Component showcase / demo page — renders every UI library component live
 * so the W3 "components used in a demo page" requirement is satisfied.
 */
export default function ShowcasePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [name, setName] = useState("");

  return (
    <PageShell>
      <div className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="text-3xl font-bold">Component Library</h1>
        <p className="mt-2 text-foreground/70">
          A live showcase of the reusable UI components used across StudyCompass.
        </p>

        <div className="mt-10 flex flex-col gap-10">
          {/* Buttons */}
          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold">Button</h2>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="primary" onClick={() => setToastOpen(true)}>
                Primary
              </Button>
              <Button variant="secondary" onClick={() => setToastOpen(true)}>
                Secondary
              </Button>
              <Button variant="ghost" onClick={() => setToastOpen(true)}>
                Ghost
              </Button>
              <Button disabled>Disabled</Button>
            </div>
          </section>

          {/* Input */}
          <section className="flex max-w-sm flex-col gap-3">
            <h2 className="text-xl font-semibold">Input</h2>
            <Input
              label="Your name"
              value={name}
              onChange={setName}
              placeholder="Type something…"
            />
            {name && (
              <p className="text-sm text-foreground/60">Hello, {name}!</p>
            )}
          </section>

          {/* Modal */}
          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold">Modal</h2>
            <div>
              <Button onClick={() => setModalOpen(true)}>Open modal</Button>
            </div>
          </section>

          {/* Toast */}
          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold">Toast</h2>
            <div>
              <Button variant="secondary" onClick={() => setToastOpen(true)}>
                Show toast
              </Button>
            </div>
          </section>

          {/* Loader */}
          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold">Loader</h2>
            <div className="flex items-center gap-4">
              <Loader size={20} />
              <Loader size={32} />
              <Loader size={48} />
            </div>
          </section>
        </div>
      </div>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Example Modal"
      >
        <p>
          This is a reusable modal component. Click the backdrop, the close
          button, or press Escape to close it.
        </p>
        <div className="mt-4 flex justify-end">
          <Button onClick={() => setModalOpen(false)}>Got it</Button>
        </div>
      </Modal>

      <Toast
        open={toastOpen}
        message="This is a toast notification!"
        type="success"
        onClose={() => setToastOpen(false)}
      />
    </PageShell>
  );
}
