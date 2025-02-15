"use-client";
import * as React from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
// import type { ThemeProviderProps } from "next-themes";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
}
