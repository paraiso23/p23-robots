
import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

export const useTheme = () => {
  const [theme, setThemeState] = useState<Theme>("system");

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setThemeState(isDarkMode ? "dark" : "light");
  }, []);

  useEffect(() => {
    const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (theme === "system") {
      document.documentElement.classList.toggle("dark", isSystemDark);
    } else {
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return { theme, setTheme };
};
