import { THEME } from "@constants";
import { Appearance } from "react-native";
import { create } from "zustand";

interface ThemeState {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
  toggleTheme: () => void;
  initThemeListener: () => void;
}

const getInitialTheme = () => {
  const systemColorScheme = Appearance.getColorScheme();
  return systemColorScheme === THEME.DARK ? THEME.DARK : THEME.LIGHT;
};

export const useThemeStore = create<ThemeState>((set) => ({
  theme: getInitialTheme(),

  setTheme: (theme) => set({ theme }),

  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === THEME.DARK ? THEME.LIGHT : THEME.DARK,
    })),

  initThemeListener: () => {
    Appearance.addChangeListener(({ colorScheme }) => {
      const theme = colorScheme === THEME.DARK ? THEME.DARK : THEME.LIGHT;
      set({ theme });
    });
  },
}));
