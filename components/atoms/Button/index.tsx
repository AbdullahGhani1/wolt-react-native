import React, { FC } from "react";
import {
  ActivityIndicator,
  Pressable,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";

import { useTheme } from "@hooks";
import styles from "./style";

interface Props {
  btnText?: string;
  loading?: boolean;
  style?: ViewStyle;
  textColor?: string;
  leftIcon?: boolean;
  disabled?: boolean;
  rightIcon?: boolean;
  buttonColor?: string;
  textStyle?: TextStyle;
  icon?: React.ReactNode;
  outlinedColor?: string;
  outlinedWidth?: number;
  mode?: "solid" | "outlined" | "text";
  onPress?: () => void;
}

const Button: FC<Props> = ({
  style = {},
  icon = null,
  btnText = "",
  textColor = "",
  textStyle = {},
  mode = "solid",
  loading = false,
  disabled = false,
  buttonColor = "",
  leftIcon = false,
  rightIcon = false,
  outlinedWidth = 0,
  outlinedColor = "",
  onPress = () => {},
}) => {
  const { colors } = useTheme();
  const dynamicOpacity =
    disabled || loading ? { opacity: 0.5 } : { opacity: 1 };

  const getButtonStyle = (): ViewStyle => {
    switch (mode) {
      case "outlined":
        return {
          backgroundColor: buttonColor || colors.BACKGROUND,
          borderColor: outlinedColor || colors.BUTTON_OUTLINE,
          borderWidth: outlinedWidth,
        };
      case "text":
        return {
          backgroundColor: "transparent",
          borderWidth: 0,
        };
      default:
        return {
          backgroundColor: buttonColor || colors.BUTTON_COLOR,
          borderColor: colors.BUTTON_OUTLINE,
        };
    }
  };

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={[styles.button, getButtonStyle(), style, dynamicOpacity]}
    >
      {loading && <ActivityIndicator color={textColor || colors.TEXT} />}
      {leftIcon && icon}
      {btnText && (
        <Text
          style={[styles.text, textStyle, { color: textColor || colors.TEXT }]}
        >
          {btnText}
        </Text>
      )}
      {rightIcon && icon}
    </Pressable>
  );
};

export default Button;
