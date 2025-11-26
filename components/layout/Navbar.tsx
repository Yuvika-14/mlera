"use client";

import DarkModeToggle from "@/components/common/DarkMode";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-sky-400 to-indigo-500" />
          <span className="text-lg font-semibold">MLera</span>
        </div>

        <div className="flex items-center gap-4 text-sm">
          <Link href="/">Content</Link>
          <Link href="/build">Build</Link>

          <DarkModeToggle />
        </div>
      </nav>
    </header>
  );
}
