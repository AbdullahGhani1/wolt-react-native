// constants/colors.ts

const WHITE = "#FFFFFF";
const BLACK = "#000000";

const PRIMARY = "#01BEE5";
const PRIMARY_DARK = "#0094DD";
const PRIMARY_LIGHT = "#E9F9FF";

const SUCCESS = "#10B981";
const ERROR = "#EF4444";
const WARNING = "#F59E0B";
const INFO = "#3B82F6";

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

// Color palette type
export interface ColorPalette {
  // Background
  background: string;
  backgroundSecondary: string;
  backgroundTertiary: string;

  // Text
  text: string;
  textSecondary: string;
  textTertiary: string;
  textInverse: string;

  // Borders
  border: string;
  borderLight: string;
  borderStrong: string;

  // Interactive
  primary: string;
  primaryDark: string;
  primaryLight: string;
  secondary: string;

  // Status
  success: string;
  error: string;
  warning: string;
  info: string;

  // Buttons
  buttonPrimary: string;
  buttonPrimaryText: string;
  buttonSecondary: string;
  buttonSecondaryText: string;
  buttonSecondaryBorder: string;
  buttonTertiary: string;
  buttonTertiaryText: string;
  buttonDisabled: string;
  buttonDisabledText: string;

  // Overlay
  overlay: string;
  overlayLight: string;
}

export const Colors = {
  light: {
    background: WHITE,
    backgroundSecondary: GRAY_50,
    backgroundTertiary: GRAY_100,
    text: BLACK,
    textSecondary: GRAY_700,
    textTertiary: GRAY_500,
    textInverse: WHITE,
    border: GRAY_200,
    borderLight: GRAY_100,
    borderStrong: GRAY_400,
    primary: PRIMARY,
    primaryDark: PRIMARY_DARK,
    primaryLight: PRIMARY_LIGHT,
    secondary: PRIMARY_DARK,
    success: SUCCESS,
    error: ERROR,
    warning: WARNING,
    info: INFO,
    buttonPrimary: PRIMARY,
    buttonPrimaryText: WHITE,
    buttonSecondary: WHITE,
    buttonSecondaryText: BLACK,
    buttonSecondaryBorder: GRAY_300,
    buttonTertiary: GRAY_100,
    buttonTertiaryText: BLACK,
    buttonDisabled: GRAY_200,
    buttonDisabledText: GRAY_400,
    overlay: "rgba(0, 0, 0, 0.5)",
    overlayLight: "rgba(0, 0, 0, 0.1)",
  } as ColorPalette,

  dark: {
    background: GRAY_900,
    backgroundSecondary: GRAY_800,
    backgroundTertiary: GRAY_700,
    text: WHITE,
    textSecondary: GRAY_300,
    textTertiary: GRAY_400,
    textInverse: BLACK,
    border: GRAY_700,
    borderLight: GRAY_800,
    borderStrong: GRAY_500,
    primary: PRIMARY,
    primaryDark: PRIMARY_DARK,
    primaryLight: "#0D3A47",
    secondary: PRIMARY_DARK,
    success: SUCCESS,
    error: ERROR,
    warning: WARNING,
    info: INFO,
    buttonPrimary: PRIMARY,
    buttonPrimaryText: BLACK,
    buttonSecondary: GRAY_800,
    buttonSecondaryText: WHITE,
    buttonSecondaryBorder: GRAY_600,
    buttonTertiary: GRAY_700,
    buttonTertiaryText: WHITE,
    buttonDisabled: GRAY_700,
    buttonDisabledText: GRAY_500,
    overlay: "rgba(0, 0, 0, 0.7)",
    overlayLight: "rgba(0, 0, 0, 0.3)",
  } as ColorPalette,
};

export const getColors = (isDarkMode: boolean): ColorPalette => {
  return isDarkMode ? Colors.dark : Colors.light;
};

export default { WHITE, BLACK, Colors, getColors };
