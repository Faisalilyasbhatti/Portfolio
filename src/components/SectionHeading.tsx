type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="section-eyebrow mb-3">{eyebrow}</p>
      <h2 className="font-mono text-2xl font-bold tracking-tight text-ink-50 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-300">{description}</p>
      )}
    </div>
  );
}
