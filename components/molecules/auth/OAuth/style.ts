import { DESIGN_SYSTEM } from "@constants";
import { Scale } from "@utils";
import { StyleSheet, ViewStyle } from "react-native";

const { SPACING } = DESIGN_SYSTEM;

interface OAuthStyles {
  btnContainerStyle: ViewStyle;
  secondaryButton: ViewStyle;
  primaryButton: ViewStyle;
  iconButton: ViewStyle;
}

export const createStyles = (): OAuthStyles =>
  StyleSheet.create<OAuthStyles>({
    btnContainerStyle: {
      gap: SPACING.MD,
      justifyContent: "center",
      alignItems: "stretch",
    },
    secondaryButton: {
      width: Scale.getHorizontalScale(50),
      justifyContent: "center",
      alignItems: "center",
    },
    primaryButton: {
      width: "100%",
    },
    iconButton: {
      marginLeft: SPACING.LG,
      marginBottom: -SPACING.SM,
    },
  });

export default createStyles();
