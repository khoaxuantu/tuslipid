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
    const localTheme = getLocalTheme();

    setTheme(localTheme);
    document.getElementsByTagName("body")[0].classList.add(localTheme);
  }, []);

  if (!theme) return;

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

function getLocalTheme(): Themes {
  const localTheme = localStorage.getItem("theme") as Themes;
  if (localTheme) return localTheme;
  return "dark";
}
