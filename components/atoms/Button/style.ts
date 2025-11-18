import { Fonts, Scale } from "@utils";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    gap: Scale.getHorizontalScale(8),
    paddingVertical: Scale.getVerticalScale(14),
    paddingHorizontal: Scale.getHorizontalScale(12),
    minHeight: Scale.getVerticalScale(48),
  },
  text: {
    fontSize: Fonts.scaleFontSize(16),
    fontFamily: Fonts.getFontFamily("600"),
    fontWeight: "600",
  },
});
