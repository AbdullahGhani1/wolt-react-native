const BLACK = "#000000";
export const WHITE = "#FFFFFF";

export const Colors = {
  background: "#fff",
  text: "#FFE81F",
  primary: "#01BEE5",
  secondary: "#0094DD",
  dark: "#000000",
  light: "#e6e6e6",
  primaryLight: "#E9F9FF",
};

export const getColors = (isDarkMode: boolean) => ({
  BACKGROUND: isDarkMode ? Colors.dark : Colors.background,
  TEXT: isDarkMode ? Colors.background : Colors.text,
  PRIMARY: Colors.primary,
  SECONDARY: Colors.secondary,
  DARK: Colors.dark,
  LIGHT: Colors.light,
  PRIMARY_LIGHT: Colors.primaryLight,
  BUTTON_COLOR: isDarkMode ? BLACK : WHITE,
  BUTTON_OUTLINE: isDarkMode ? "#D1D5DB" : "#25282D",
});

export default { WHITE, BLACK, getColors };
