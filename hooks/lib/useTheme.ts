import { COLORS } from "@constants";
import { useThemeStore } from "@store/themeStore";
import { useMemo } from "react";

export const useTheme = () => {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const isDarkMode = theme === "dark";

  const colors = useMemo(() => COLORS.getColors(isDarkMode), [isDarkMode]);

  return {
    theme,
    colors,
    isDarkMode,
    toggleTheme,
  };
};
