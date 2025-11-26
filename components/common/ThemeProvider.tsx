// themeprovider.tsx
"use client";

import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

// Extend (or augment) the library props to include children
interface ThemeProviderWithChildren extends ThemeProviderProps {
  children?: ReactNode;
}

export function ThemeProvider({ children }: Props) {
  const providerProps: ThemeProviderWithChildren = {
    attribute: "class",
    defaultTheme: "light",
    enableSystem: false,
    children,
  };

  // spread the typed props (TS is happy because children is on our extended interface)
  return <NextThemesProvider {...providerProps} />;
}
