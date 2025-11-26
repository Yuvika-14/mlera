export default function DataTable({ rows = [{ x: 1, y: 2 }, { x: 2, y: 3 }, { x: 3, y: 5 }] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
      <table className="min-w-full table-auto divide-y divide-gray-200 dark:divide-gray-800">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">X</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Y</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900">
          {rows.map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white/80 dark:bg-gray-900/60" : "bg-gray-50/60 dark:bg-gray-800/50"}>
              <td className="px-4 py-3 text-sm">{r.x}</td>
              <td className="px-4 py-3 text-sm">{r.y}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
