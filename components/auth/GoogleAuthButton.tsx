import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const GoogleAuthButton = () => {
  return (
    <TouchableOpacity style={styles.googleButton}>
      <Ionicons name="logo-google" size={24} color="white" />
      <Text style={styles.googleButtonText}>Continue with Google</Text>
    </TouchableOpacity>
  );
};

export default GoogleAuthButton;

const styles = StyleSheet.create({
  googleButton: {
    gap: 4,
    borderRadius: 12,
    paddingVertical: 16,
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4285F4",
  },
  googleButtonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Brand-Regular",
    fontWeight: "600",
  },
});
