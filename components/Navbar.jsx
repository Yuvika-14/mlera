"use client";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white dark:bg-gray-900/60 backdrop-blur-md shadow-sm rounded-xl">

      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LEFT CORNER: LOGO + TITLE */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg 
                          flex items-center justify-center text-white font-bold">
            ML
          </div>
          <h1 className="text-lg font-semibold">ML Tutorial</h1>
        </div>

        {/* MIDDLE: PAGE LINKS */}
        <nav className="hidden md:flex items-center gap-4">
          <a className="px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800" href="#what">What</a>
          <a className="px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800" href="#math">Mathematics</a>
          <a className="px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800" href="#examples">Examples</a>
        </nav>

        {/* RIGHT CORNER: DARK MODE TOGGLE + MOBILE BUTTON */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/70 px-4 py-3 flex flex-col gap-2">
          <a className="py-1" href="#what">What</a>
          <a className="py-1" href="#math">Mathematics</a>
          <a className="py-1" href="#examples">Examples</a>
        </div>
      )}

    </header>
  );
}
