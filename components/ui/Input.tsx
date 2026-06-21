"use client";

/**
 * Input — labelled text input.
 *
 * @prop label       - text label shown above the field
 * @prop value       - controlled value
 * @prop onChange    - called with the new string value
 * @prop placeholder - placeholder text
 * @prop type        - native input type (default "text")
 * @prop id          - optional id (defaults to a slug of the label)
 */
export type InputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  id?: string;
};

export default function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  id,
}: InputProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={inputId} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={inputId}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-black/15 bg-transparent px-3 py-2 text-sm outline-none transition-colors focus:border-foreground dark:border-white/20"
      />
    </div>
  );
}
