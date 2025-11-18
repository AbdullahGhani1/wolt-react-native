import { DESIGN_SYSTEM } from "@constants";
import { Fonts, Scale } from "@utils";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { SMOOTH_SCROLL_CONFIG } from "./constants";

const { SPACING, FONT_SIZE } = DESIGN_SYSTEM;
const { ITEM_HEIGHT, ICON_SIZE, BORDER_RADIUS, MARGIN } = SMOOTH_SCROLL_CONFIG;

interface SmoothScrollStyles {
  container: ViewStyle;
  iconContainer: ViewStyle;
  emoji: TextStyle;
}

export default StyleSheet.create<SmoothScrollStyles>({
  container: {
    gap: Scale.getHorizontalScale(SPACING.MD),
    paddingVertical: Scale.getVerticalScale(SPACING.XL),
  },
  iconContainer: {
    width: ICON_SIZE,
    height: ITEM_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: BORDER_RADIUS,
    marginHorizontal: MARGIN,
  },
  emoji: {
    fontSize: Fonts.scaleFontSize(FONT_SIZE.JUMBO),
  },
});
