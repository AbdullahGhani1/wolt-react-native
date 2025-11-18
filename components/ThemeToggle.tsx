import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks';

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme, colors } = useTheme();

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors.PRIMARY }]}
      onPress={toggleTheme}
    >
      <Text style={[styles.text, { color: colors.BACKGROUND }]}>
        {isDarkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});
