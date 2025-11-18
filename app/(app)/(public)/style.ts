import { DESIGN_SYSTEM } from "@constants";
import { ColorPalette } from "@constants/lib/colors";
import { Fonts, Scale } from "@utils";
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";

const { SPACING, LINE_HEIGHT, FONT_SIZE } = DESIGN_SYSTEM;

interface LandingStyles {
  container: ViewStyle;
  scrollContainer: ViewStyle;
  contentContainer: ViewStyle;
  brandLogo: ImageStyle;
  tagline: TextStyle;
  subtitle: TextStyle;
  description: TextStyle;
  buttonContainer: ViewStyle;
}

export const createStyles = (colors: ColorPalette): LandingStyles => {
  const horizontalPadding = Scale.getHorizontalScale(SPACING.LG);
  const verticalGap = Scale.getVerticalScale(SPACING.XL);

  return StyleSheet.create<LandingStyles>({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: horizontalPadding,
    },
    scrollContainer: {
      flex: 0.8,
    },
    contentContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    brandLogo: {
      width: "100%",
      height: Scale.getVerticalScale(SPACING.MEGA),
      resizeMode: "contain",
      marginBottom: verticalGap,
    },
    tagline: {
      fontSize: Fonts.scaleFontSize(FONT_SIZE.XXXL),
      fontFamily: Fonts.getFontFamily("900"),
      fontWeight: "900",
      textAlign: "center",
      marginBottom: Scale.getVerticalScale(SPACING.JUMBO),
      lineHeight: FONT_SIZE.XXXL * LINE_HEIGHT.NORMAL,
      color: colors.text,
    },
    subtitle: {
      fontSize: Fonts.scaleFontSize(FONT_SIZE.MD),
      fontFamily: Fonts.getFontFamily("400"),
      fontWeight: "400",
      textAlign: "center",
      marginBottom: Scale.getVerticalScale(SPACING.XXL),
      lineHeight: FONT_SIZE.MD * LINE_HEIGHT.RELAXED,
      color: colors.textSecondary,
    },
    description: {
      fontSize: Fonts.scaleFontSize(FONT_SIZE.SM),
      fontFamily: Fonts.getFontFamily("500"),
      fontWeight: "500",
      textAlign: "center",
      lineHeight: FONT_SIZE.SM * LINE_HEIGHT.RELAXED,
      color: colors.textTertiary,
    },
    buttonContainer: {
      width: "100%",
      gap: verticalGap,
      paddingVertical: Scale.getVerticalScale(SPACING.LG),
    },
  });
};
