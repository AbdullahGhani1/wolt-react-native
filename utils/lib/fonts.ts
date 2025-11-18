import dimensions from "./dimensions";

const { width } = dimensions;

const FONTS = {
  EXTRA_LIGHT: "Nunito-ExtraLight",
  LIGHT: "Nunito-Light",
  REGULAR: "Nunito-Regular",
  MEDIUM: "Nunito-Medium",
  SEMI_BOLD: "Nunito-SemiBold",
  BOLD: "Nunito-Bold",
  EXTRA_BOLD: "Nunito-ExtraBold",
  BLACK: "Nunito-Black",
  EXTRA_LIGHT_ITALIC: "Nunito-ExtraLightItalic",
  LIGHT_ITALIC: "Nunito-LightItalic",
  REGULAR_ITALIC: "Nunito-RegularItalic",
  MEDIUM_ITALIC: "Nunito-MediumItalic",
  SEMI_BOLD_ITALIC: "Nunito-SemiBoldItalic",
  BOLD_ITALIC: "Nunito-BoldItalic",
  EXTRA_BOLD_ITALIC: "Nunito-ExtraBoldItalic",
  BLACK_ITALIC: "Nunito-BlackItalic",
};

const guidelineBaseFonts = () => (width > 410 ? 430 : 400);

export const scaleFontSize = (size: number) =>
  Math.round((width / guidelineBaseFonts()) * size);

export const getFontFamily = (weight: string) => {
  switch (weight) {
    case "200":
      return FONTS.EXTRA_LIGHT;
    case "300":
      return FONTS.LIGHT;
    case "normal":
    case "400":
      return FONTS.REGULAR;
    case "500":
      return FONTS.MEDIUM;
    case "600":
      return FONTS.SEMI_BOLD;
    case "bold":
    case "700":
      return FONTS.BOLD;
    case "800":
      return FONTS.EXTRA_BOLD;
    case "900":
      return FONTS.BLACK;
    default:
      return FONTS.REGULAR;
  }
};
