import { useTheme } from "@hooks";
import React, { FC, useMemo } from "react";
import {
  ActivityIndicator,
  Pressable,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";
import styles from "./style";

type ButtonMode = "primary" | "secondary" | "tertiary" | "text";

interface ButtonProps {
  btnText?: string;
  loading?: boolean;
  style?: ViewStyle;
  textColor?: string;
  disabled?: boolean;
  buttonColor?: string;
  textStyle?: TextStyle;
  icon?: React.ReactNode;
  outlinedColor?: string;
  outlinedWidth?: number;
  mode?: ButtonMode;
  onPress?: () => void;
  leftIcon?: boolean;
  rightIcon?: boolean;
}

const Button: FC<ButtonProps> = ({
  style,
  icon,
  btnText,
  textColor,
  textStyle,
  mode = "primary",
  loading = false,
  disabled = false,
  buttonColor,
  leftIcon = false,
  rightIcon = false,
  outlinedWidth = 1,
  outlinedColor,
  onPress,
}) => {
  const { colors } = useTheme();
  const isDisabled = disabled || loading;

  const buttonStyle = useMemo<ViewStyle>(() => {
    switch (mode) {
      case "secondary":
        return {
          backgroundColor: buttonColor || colors.buttonSecondary,
          borderColor: outlinedColor || colors.buttonSecondaryBorder,
          borderWidth: outlinedWidth,
        };
      case "tertiary":
        return {
          backgroundColor: buttonColor || colors.buttonTertiary,
          borderWidth: 0,
        };
      case "text":
        return {
          backgroundColor: "transparent",
          borderWidth: 0,
        };
      default:
        return {
          backgroundColor: buttonColor || colors.buttonPrimary,
          borderWidth: 0,
        };
    }
  }, [mode, buttonColor, colors, outlinedColor, outlinedWidth]);

  const dynamicStyle = useMemo<ViewStyle>(
    () => ({
      opacity: isDisabled ? 0.6 : 1,
    }),
    [isDisabled]
  );

  const getTextColor = (): string => {
    if (textColor) return textColor;

    switch (mode) {
      case "secondary":
        return colors.buttonSecondaryText;
      case "tertiary":
        return colors.buttonTertiaryText;
      case "text":
        return colors.primary;
      default:
        return colors.buttonPrimaryText;
    }
  };

  const finalTextColor = isDisabled
    ? colors.buttonDisabledText
    : getTextColor();

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      style={[styles.button, buttonStyle, style, dynamicStyle]}
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled, busy: loading }}
    >
      {loading && <ActivityIndicator size="small" color={finalTextColor} />}
      {leftIcon && !loading && icon}
      {btnText && (
        <Text
          style={[styles.text, textStyle, { color: finalTextColor }]}
          numberOfLines={1}
        >
          {btnText}
        </Text>
      )}
      {rightIcon && !loading && icon}
    </Pressable>
  );
};

export default Button;
