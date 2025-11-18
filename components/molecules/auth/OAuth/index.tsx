import React, { FC, useMemo } from "react";
import { Platform, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

import Button from "@components/atoms/Button";
import { DESIGN_SYSTEM, TEXT } from "@constants";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@hooks";
import { createStyles } from "./style";

const { ANIMATION_DELAYS } = DESIGN_SYSTEM;

interface Props {
  size?: "small" | "default";
  direction?: "row" | "column";
  onLoadingChange?: (isLoading: boolean) => void;
}

const OAuth: FC<Props> = ({
  size = "default",
  direction = "column",
  onLoadingChange = () => {},
}) => {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(), []);

  const iconColor = useMemo(() => colors.buttonSecondaryText, [colors]);
  const isSmall = size === "small";
  const buttonStyle =
    direction === "row" ? styles.secondaryButton : styles.primaryButton;

  const appleAnimationDelay =
    Platform.OS === "ios" ? ANIMATION_DELAYS.NORMAL : ANIMATION_DELAYS.FAST;
  const googleAnimationDelay =
    Platform.OS === "ios" ? ANIMATION_DELAYS.SLOW : ANIMATION_DELAYS.FAST;

  // Combine styles properly
  const appleButtonStyle = isSmall
    ? [buttonStyle, styles.iconButton]
    : buttonStyle;

  const googleButtonStyle = isSmall
    ? [buttonStyle, styles.iconButton]
    : buttonStyle;

  return (
    <View style={[styles.btnContainerStyle, { flexDirection: direction }]}>
      {Platform.OS === "ios" ? (
        <>
          {/* Apple Sign-In Button */}
          <Animated.View entering={FadeInDown.delay(appleAnimationDelay)}>
            <Button
              leftIcon
              mode="primary"
              outlinedWidth={isSmall ? 0 : 1}
              btnText={isSmall ? "" : TEXT.BTN_APPLE}
              style={appleButtonStyle}
              onPress={() => {}}
              icon={
                <Ionicons
                  name="logo-apple"
                  size={isSmall ? 35 : 25}
                  color={colors.buttonPrimaryText}
                />
              }
            />
          </Animated.View>

          {/* Google Sign-In Button */}
          <Animated.View entering={FadeInDown.delay(googleAnimationDelay)}>
            <Button
              leftIcon
              mode="secondary"
              outlinedWidth={isSmall ? 0 : 1}
              btnText={isSmall ? "" : TEXT.BTN_GOOGLE}
              style={googleButtonStyle}
              onPress={() => {}}
              icon={
                <Ionicons
                  name="logo-google"
                  size={isSmall ? 35 : 25}
                  color={iconColor}
                />
              }
            />
          </Animated.View>
        </>
      ) : (
        /* Android - Google Only */
        <Animated.View entering={FadeInDown.delay(googleAnimationDelay)}>
          <Button
            leftIcon
            mode="primary"
            outlinedWidth={isSmall ? 0 : 1}
            btnText={isSmall ? "" : TEXT.BTN_GOOGLE}
            style={googleButtonStyle}
            onPress={() => {}}
            icon={
              <Ionicons
                name="logo-google"
                size={isSmall ? 35 : 25}
                color={colors.buttonPrimaryText}
              />
            }
          />
        </Animated.View>
      )}
    </View>
  );
};

export default OAuth;
