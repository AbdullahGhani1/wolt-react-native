import { useTheme } from "@hooks";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./style";

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme, colors } = useTheme();

  return (
    <TouchableOpacity style={styles.button} onPress={toggleTheme}>
      <Text style={[styles.text, { color: colors.text }]}>
        {isDarkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </Text>
    </TouchableOpacity>
  );
}
