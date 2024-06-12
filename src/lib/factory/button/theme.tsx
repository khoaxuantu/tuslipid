"use client";

import { useContext } from "react";
import { ThemeButtonProps } from "./type";
import { ThemeContext } from "@/lib/context/theme";
import { MoonIcon } from "../icons/MoonIcon";
import { SunIcon } from "../icons/SunIcon";

export default function ThemeButton(props: ThemeButtonProps) {
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
      {...props}
      className={`sl-c-btn__theme ${props.className ?? ""}`}
    >
      {theme == "light" ? <SunIcon width={24} /> : <MoonIcon width={24} />}
    </button>
  );
}
