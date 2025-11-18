import { DESIGN_SYSTEM } from "@constants";
import { Scale, Width } from "@utils";
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
      justifyContent: "center",
      gap: SPACING.MD,
    },
    secondaryButton: {
      width: Scale.getHorizontalScale(50),
      justifyContent: "center",
      alignItems: "center",
    },
    primaryButton: {
      width: Width - Scale.getHorizontalScale(SPACING.XXL),
    },
    iconButton: {
      marginLeft: SPACING.LG,
      marginBottom: -SPACING.SM,
    },
  });

export default createStyles();
