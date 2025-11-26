// components/ui/SectionCard.tsx
export default function SectionCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border bg-white/60 p-4 shadow-sm backdrop-blur
                    dark:bg-slate-900/60">
      <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
        {title}
      </h2>
      {children}
    </div>
  );
}
