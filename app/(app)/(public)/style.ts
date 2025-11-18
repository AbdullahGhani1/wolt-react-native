import { DESIGN_SYSTEM } from "@constants";
import { ColorPalette } from "@constants/lib/colors";
import { Fonts, Scale } from "@utils";
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";

const { SPACING, LINE_HEIGHT, FONT_SIZE } = DESIGN_SYSTEM;

interface LandingStyles {
  container: ViewStyle;
  infiniteScrollContainer: ViewStyle;
  gradientOverlay: ViewStyle;
  contentContainer: ViewStyle;
  brandLogo: ImageStyle;
  tagline: TextStyle;
  subtitle: TextStyle;
  description: TextStyle;
  buttonContainer: ViewStyle;
  privacyContainer: ViewStyle;
  privacyText: TextStyle;
  privacyLink: TextStyle;
}

export const createStyles = (colors: ColorPalette): LandingStyles => {
  const verticalGap = Scale.getVerticalScale(SPACING.XL);
  const horizontalPadding = Scale.getHorizontalScale(SPACING.LG);

  return StyleSheet.create<LandingStyles>({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    infiniteScrollContainer: {
      flex: 0.8,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: SPACING.XS,
      position: "relative",
      overflow: "hidden",
    },
    gradientOverlay: {
      position: "absolute",
      height: SPACING.HYPER,
      left: 0,
      right: 0,
      bottom: 0,
    },
    contentContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "space-around",
      paddingHorizontal: horizontalPadding,
      paddingVertical: Scale.getVerticalScale(SPACING.XXL),
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
      marginBottom: Scale.getVerticalScale(SPACING.MD),
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
      paddingVertical: Scale.getVerticalScale(SPACING.SM),
    },
    privacyContainer: {
      marginTop: SPACING.SM,
      paddingHorizontal: SPACING.XL,
    },
    privacyText: {
      fontSize: Fonts.scaleFontSize(FONT_SIZE.XS),
      color: colors.text,
      textAlign: "center",
      lineHeight: FONT_SIZE.XS * LINE_HEIGHT.LOOSE,
    },
    privacyLink: {
      color: colors.primary,
      textDecorationLine: "underline",
    },
  });
};
