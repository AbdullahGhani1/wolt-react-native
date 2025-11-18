import React, { createContext, useContext, useEffect, useState } from 'react';
import { Appearance, ColorSchemeName } from 'react-native';
import { THEME } from '@/constants';

type ThemeType = typeof THEME.DARK | typeof THEME.LIGHT;

interface ThemeContextType {
  theme: ThemeType;
  isDarkMode: boolean;
  toggleTheme: () => void;
  setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const getInitialTheme = (): ThemeType => {
    const systemColorScheme = Appearance.getColorScheme();
    return systemColorScheme === THEME.DARK ? THEME.DARK : THEME.LIGHT;
  };

  const [theme, setThemeState] = useState<ThemeType>(getInitialTheme());
  const isDarkMode = theme === THEME.DARK;

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }: { colorScheme: ColorSchemeName }) => {
      setThemeState(colorScheme === THEME.DARK ? THEME.DARK : THEME.LIGHT);
    });

    return () => subscription.remove();
  }, []);

  const toggleTheme = () => {
    setThemeState((prevTheme) => (prevTheme === THEME.DARK ? THEME.LIGHT : THEME.DARK));
  };

  const setTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme);
  };

  const value: ThemeContextType = {
    theme,
    isDarkMode,
    toggleTheme,
    setTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
