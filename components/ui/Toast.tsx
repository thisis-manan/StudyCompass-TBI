"use client";

import { useEffect } from "react";

/**
 * Toast — transient notification pinned to the bottom-right.
 *
 * @prop open     - whether the toast is visible
 * @prop message  - text to display
 * @prop type     - "success" | "error" | "info" (default "info"), controls color
 * @prop onClose  - called when auto-dismiss fires or the close button is clicked
 * @prop duration - ms before auto-dismiss (default 3000)
 */
export type ToastProps = {
  open: boolean;
  message: string;
  type?: "success" | "error" | "info";
  onClose: () => void;
  duration?: number;
};

const colors: Record<NonNullable<ToastProps["type"]>, string> = {
  success: "bg-green-600 text-white",
  error: "bg-red-600 text-white",
  info: "bg-foreground text-background",
};

export default function Toast({
  open,
  message,
  type = "info",
  onClose,
  duration = 3000,
}: ToastProps) {
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(onClose, duration);
    return () => clearTimeout(t);
  }, [open, duration, onClose]);

  if (!open) return null;

  return (
    <div
      role="status"
      className={`fixed bottom-4 right-4 z-50 flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium shadow-lg ${colors[type]}`}
    >
      <span>{message}</span>
      <button
        type="button"
        aria-label="Dismiss"
        onClick={onClose}
        className="opacity-80 hover:opacity-100"
      >
        <svg
          width={16}
          height={16}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
