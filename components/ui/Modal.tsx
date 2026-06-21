"use client";

import { useEffect } from "react";

/**
 * Modal — centered dialog with a backdrop.
 *
 * @prop open     - whether the modal is visible
 * @prop onClose  - called when the backdrop, close button, or Escape is used
 * @prop title    - heading shown at the top of the modal
 * @prop children - modal body content
 */
export type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

export default function Modal({ open, onClose, title, children }: ModalProps) {
  // Close on Escape for accessibility.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-xl border border-black/10 bg-background p-6 shadow-xl dark:border-white/15"
      >
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="rounded-md p-1 text-foreground/60 hover:bg-black/5 hover:text-foreground dark:hover:bg-white/10"
          >
            ✕
          </button>
        </div>
        <div className="text-sm text-foreground/80">{children}</div>
      </div>
    </div>
  );
}
