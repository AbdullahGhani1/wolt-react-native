import { Fonts, Scale } from "@utils";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: { flex: 1 },
  infiniteScrollContainer: { flex: 0.8 },
  contentContainer: { flex: 1, alignItems: "center" },
  brandLong: {
    width: "100%",
    height: 48,
    resizeMode: "contain",
    marginBottom: 20,
  },
  tagline: {
    fontSize: 32,
    fontFamily: Fonts.getFontFamily("900"),
    textAlign: "center",
    marginBottom: 50,
    lineHeight: 36,
  },
  buttonContainer: {
    gap: 12,
  },
  otherButton: {
    backgroundColor: "black",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 12,
  },
  OtherButtonText: {
    color: "white",
    fontSize: 16,
    fontFamily: Fonts.getFontFamily("400"),
  },
  signInButton: {
    borderRadius: 5,
    marginVertical: Scale.getVerticalScale(20),
    marginHorizontal: Scale.getHorizontalScale(10),
    padding: Scale.getHorizontalScale(15),
  },
});
