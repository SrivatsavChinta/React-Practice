import { createContext, useContext } from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<Theme | null>(null);

export function useTheme() {
  const theme = useContext(ThemeContext);

  if (theme === null) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return theme;
}

export { ThemeContext };
