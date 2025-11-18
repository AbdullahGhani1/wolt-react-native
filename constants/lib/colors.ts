// Base colors
export const WHITE = "#FFFFFF";
export const BLACK = "#000000";

// Primary palette (Wolt-inspired)
const PRIMARY = "#01BEE5";
const PRIMARY_DARK = "#0094DD";
const PRIMARY_LIGHT = "#E9F9FF";

// Semantic colors
const SUCCESS = "#10B981";
const ERROR = "#EF4444";
const WARNING = "#F59E0B";
const INFO = "#3B82F6";

// Grays
const GRAY_50 = "#F9FAFB";
const GRAY_100 = "#F3F4F6";
const GRAY_200 = "#E5E7EB";
const GRAY_300 = "#D1D5DB";
const GRAY_400 = "#9CA3AF";
const GRAY_500 = "#6B7280";
const GRAY_600 = "#4B5563";
const GRAY_700 = "#374151";
const GRAY_800 = "#1F2937";
const GRAY_900 = "#111827";

export const Colors = {
  PRIMARY: PRIMARY,
  WHITE: WHITE,
  BLACK: BLACK,
  // Light mode
  light: {
    // Background
    background: WHITE,
    backgroundSecondary: GRAY_50,
    backgroundTertiary: GRAY_100,

    // Text
    text: BLACK,
    textSecondary: GRAY_700,
    textTertiary: GRAY_500,
    textInverse: WHITE,

    // Borders
    border: GRAY_200,
    borderLight: GRAY_100,
    borderStrong: GRAY_400,

    // Interactive
    primary: PRIMARY,
    primaryDark: PRIMARY_DARK,
    primaryLight: PRIMARY_LIGHT,
    secondary: PRIMARY_DARK,

    // Status
    success: SUCCESS,
    error: ERROR,
    warning: WARNING,
    info: INFO,

    // Buttons
    buttonPrimary: PRIMARY,
    buttonPrimaryText: WHITE,
    buttonSecondary: WHITE,
    buttonSecondaryText: BLACK,
    buttonSecondaryBorder: GRAY_300,
    buttonTertiary: GRAY_100,
    buttonTertiaryText: BLACK,
    buttonDisabled: GRAY_200,
    buttonDisabledText: GRAY_400,

    // Overlay
    overlay: "rgba(0, 0, 0, 0.5)",
    overlayLight: "rgba(0, 0, 0, 0.1)",
  },

  // Dark mode
  dark: {
    // Background
    background: GRAY_900,
    backgroundSecondary: GRAY_800,
    backgroundTertiary: GRAY_700,

    // Text
    text: WHITE,
    textSecondary: GRAY_300,
    textTertiary: GRAY_400,
    textInverse: BLACK,

    // Borders
    border: GRAY_700,
    borderLight: GRAY_800,
    borderStrong: GRAY_500,

    // Interactive
    primary: PRIMARY,
    primaryDark: PRIMARY_DARK,
    primaryLight: "#0D3A47",
    secondary: PRIMARY_DARK,

    // Status
    success: SUCCESS,
    error: ERROR,
    warning: WARNING,
    info: INFO,

    // Buttons
    buttonPrimary: PRIMARY,
    buttonPrimaryText: BLACK,
    buttonSecondary: GRAY_800,
    buttonSecondaryText: WHITE,
    buttonSecondaryBorder: GRAY_600,
    buttonTertiary: GRAY_700,
    buttonTertiaryText: WHITE,
    buttonDisabled: GRAY_700,
    buttonDisabledText: GRAY_500,

    // Overlay
    overlay: "rgba(0, 0, 0, 0.7)",
    overlayLight: "rgba(0, 0, 0, 0.3)",
  },
};

export const getColors = (isDarkMode: boolean) => {
  return isDarkMode ? Colors.dark : Colors.light;
};

export default { WHITE, BLACK, Colors, getColors };
