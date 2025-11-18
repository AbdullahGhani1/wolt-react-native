import { useTheme as useThemeContext } from '@/contexts/ThemeContext';
import { COLORS } from '@/constants';

const useTheme = () => {
  const { theme, isDarkMode, toggleTheme, setTheme } = useThemeContext();
  const colors = COLORS.getColors(isDarkMode);

  return { theme, colors, toggleTheme, setTheme, isDarkMode };
};

export default useTheme;
