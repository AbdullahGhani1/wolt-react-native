import { SMOOTH_SCROLL_CONFIG } from "@components/molecules/auth/SmoothInfiniteScroll/constants";
import { DESIGN_SYSTEM } from "@constants";
import { Fonts } from "@utils";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

const { FONT_SIZE } = DESIGN_SYSTEM;
const { ITEM_HEIGHT, ICON_SIZE, BORDER_RADIUS, MARGIN } = SMOOTH_SCROLL_CONFIG;

interface SmoothScrollStyles {
  iconContainer: ViewStyle;
  emoji: TextStyle;
}

export default StyleSheet.create<SmoothScrollStyles>({
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
