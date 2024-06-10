"use client";

import React, { useEffect, useState } from "react";
import { ThemeContext, ThemeContextProps, Themes } from "../context/theme";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Themes | null>(null);
  const value: ThemeContextProps = {
    theme: theme as Themes,
    setTheme: setTheme as any,
  };

  useEffect(() => {
    setTheme(getLocalTheme());
  }, []);

  if (!theme) return;

  return (
    <ThemeContext.Provider value={value}>
      <div className={theme as string}>{children}</div>
    </ThemeContext.Provider>
  );
}

function getLocalTheme(): Themes {
  const localTheme = localStorage.getItem("theme") as Themes;
  if (localTheme) return localTheme;
  return "light";
}
