import { Scale, Width } from "@utils";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  btnContainerStyle: {
    justifyContent: "center",
    gap: 12,
  },
  secondaryButton: {
    width: Scale.getHorizontalScale(50),
    justifyContent: "center",
    alignItems: "center",
  },
  primaryButton: {
    width: Width - Scale.getHorizontalScale(40),
  },
  iconButton: { marginLeft: 15, marginBottom: -10 },
});
