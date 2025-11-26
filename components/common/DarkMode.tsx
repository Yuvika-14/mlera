"use client";

import { useTheme } from "next-themes";

export default function DarkMode() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="flex items-center gap-2 rounded-full border px-3 py-1 text-sm transition
                 hover:shadow-sm"
    >
      <span>{theme === "light" ? "🌙 Dark" : "☀️ Light"}</span>
    </button>
  );
}
