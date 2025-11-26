export default function InfoCard({ title, children, id }) {
  return (
    <article id={id} className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-full bg-orange-400/20 flex items-center justify-center ring-1 ring-orange-400/30">
          <span className="text-orange-400 font-semibold">{title.split(" ")[0]}</span>
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-orange-300">{title}</h2>
          <div className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-gray-200">
            {children}
          </div>
        </div>
      </div>
    </article>
  );
}
