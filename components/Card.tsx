/**
 * Reusable feature card. Used on the Home page in a responsive grid.
 * @prop title       - card heading
 * @prop description - card body text
 * @prop icon        - optional emoji/icon shown above the title
 */
type CardProps = {
  title: string;
  description: string;
  icon?: string;
};

export default function Card({ title, description, icon }: CardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-black/10 p-6 transition-shadow hover:shadow-lg dark:border-white/10">
      {icon && (
        <span aria-hidden className="text-3xl">
          {icon}
        </span>
      )}
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm leading-relaxed text-foreground/70">{description}</p>
    </div>
  );
}
