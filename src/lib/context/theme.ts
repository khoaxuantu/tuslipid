import { Dispatch, SetStateAction, createContext } from "react";

export type Themes = "light" | "dark";

export interface ThemeContextProps {
  theme: Themes;
  setTheme: Dispatch<SetStateAction<Themes>>
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  setTheme: () => {},
});
