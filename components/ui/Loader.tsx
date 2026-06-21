/**
 * Loader — spinning indicator for loading states.
 *
 * @prop size  - diameter in pixels (default 24)
 * @prop label - accessible label (default "Loading")
 */
export type LoaderProps = {
  size?: number;
  label?: string;
};

export default function Loader({ size = 24, label = "Loading" }: LoaderProps) {
  return (
    <span
      role="status"
      aria-label={label}
      style={{ width: size, height: size, borderWidth: Math.max(2, size / 10) }}
      className="inline-block animate-spin rounded-full border-solid border-foreground/25 border-t-foreground"
    />
  );
}
