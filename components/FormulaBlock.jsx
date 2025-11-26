"use client";
import { useEffect, useRef } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

export default function FormulaBlock({ formula, displayMode = true }) {
  const elRef = useRef(null);

  useEffect(() => {
    if (!elRef.current) return;
    try {
      katex.render(formula, elRef.current, {
        throwOnError: false,
        displayMode,
      });
    } catch (e) {
      elRef.current.textContent = formula;
    }
  }, [formula, displayMode]);

  return (
    <div className="mt-3 p-6 bg-gradient-to-br from-purple-700/40 to-purple-900/25 rounded-lg text-center">
      <div ref={elRef} className="text-lg text-white" />
    </div>
  );
}
