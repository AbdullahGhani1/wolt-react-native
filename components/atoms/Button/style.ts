import { DESIGN_SYSTEM } from "@constants";
import { Fonts, Scale } from "@utils";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

const { SPACING, BORDER_RADIUS } = DESIGN_SYSTEM;

interface ButtonStyles {
  button: ViewStyle;
  text: TextStyle;
}

export default StyleSheet.create<ButtonStyles>({
  button: {
    alignItems: "center",
    borderRadius: BORDER_RADIUS.MD,
    flexDirection: "row",
    justifyContent: "center",
    gap: Scale.getHorizontalScale(SPACING.SM),
    paddingVertical: Scale.getVerticalScale(SPACING.MD),
    paddingHorizontal: Scale.getHorizontalScale(SPACING.MD),
    minHeight: Scale.getVerticalScale(48),
  },
  text: {
    fontSize: Fonts.scaleFontSize(16),
    fontFamily: Fonts.getFontFamily("600"),
    fontWeight: "600",
  },
});
