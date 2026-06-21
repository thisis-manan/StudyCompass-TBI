"use client";

/**
 * Button — reusable action button.
 *
 * @prop variant  - visual style: "primary" | "secondary" | "ghost" (default "primary")
 * @prop type     - native button type (default "button")
 * @prop disabled - disables the button when true
 * @prop onClick  - click handler
 * @prop children - button label / content
 */
export type ButtonProps = {
  variant?: "primary" | "secondary" | "ghost";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
};

const styles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-foreground text-background hover:opacity-90",
  secondary:
    "border border-black/15 hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10",
  ghost: "hover:bg-black/5 dark:hover:bg-white/10",
};

export default function Button({
  variant = "primary",
  type = "button",
  disabled = false,
  onClick,
  children,
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition-all disabled:cursor-not-allowed disabled:opacity-50 ${styles[variant]}`}
    >
      {children}
    </button>
  );
}
