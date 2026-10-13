"use client";

import { ThemeContext } from "@/lib/context/theme";
import { useContext } from "react";
import { MoonIcon } from "../icons/MoonIcon";
import { SunIcon } from "../icons/SunIcon";

import "./theme.scss";

export default function ButtonTheme() {
  const { theme, setTheme } = useContext(ThemeContext);

  function switchThemeHandler() {
    const body = document.getElementsByTagName("body")[0];

    if (theme == "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      body.classList.replace("light", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
      body.classList.replace("dark", "light");
    }
  }

  return (
    <button
      onClick={switchThemeHandler}
      className={`theme`}
      aria-label="theme-button"
    >
      {theme == "light" ? <SunIcon width={24} /> : <MoonIcon width={24} />}
    </button>
  );
}
