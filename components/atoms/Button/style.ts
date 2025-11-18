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
  },
  text: {
    fontSize: Fonts.scaleFontSize(16),
    marginTop: Scale.getVerticalScale(3),
    fontFamily: Fonts.getFontFamily("600"),
  },
});

export const dynamicStyles = (isDisabledOrLoading: boolean) =>
  StyleSheet.create({
    opacity: {
      opacity: isDisabledOrLoading ? 0.5 : 1,
    },
  });
