import React, { FC, useMemo } from "react";
import { Platform, View } from "react-native";

import Button from "@components/atoms/Button";
import { TEXT } from "@constants";
import { Ionicons } from "@expo/vector-icons";
import Animated, { FadeInDown } from "react-native-reanimated";

import { useTheme } from "@hooks";
import styles from "./style";

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

  const iconColor = useMemo(() => colors.buttonSecondaryText, [colors]);

  const isSmall = size === "small";
  const buttonStyle =
    direction === "row" ? styles.secondaryButton : styles.primaryButton;

  return (
    <View style={[styles.btnContainerStyle, { flexDirection: direction }]}>
      {Platform.OS === "ios" ? (
        <>
          <Animated.View entering={FadeInDown.delay(100)}>
            <Button
              leftIcon
              mode="primary"
              outlinedWidth={isSmall ? 0 : 2}
              btnText={isSmall ? "" : TEXT.BTN_APPLE}
              style={{
                ...buttonStyle,
                ...(isSmall ? styles.iconButton : {}),
              }}
              onPress={() => {}}
              icon={
                <Ionicons
                  name="logo-apple"
                  size={isSmall ? 35 : 25}
                  color="white"
                />
              }
            />
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(200)}>
            <Button
              leftIcon
              mode="secondary"
              outlinedWidth={isSmall ? 0 : 2}
              btnText={isSmall ? "" : TEXT.BTN_GOOGLE}
              style={{
                ...buttonStyle,
                ...(isSmall ? styles.iconButton : {}),
              }}
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
        <Animated.View entering={FadeInDown.delay(100)}>
          <Button
            leftIcon
            mode="primary"
            outlinedWidth={isSmall ? 0 : 2}
            btnText={isSmall ? "" : TEXT.BTN_GOOGLE}
            style={{
              ...buttonStyle,
              ...(isSmall ? styles.iconButton : {}),
            }}
            onPress={() => {}}
            icon={
              <Ionicons
                name="logo-google"
                size={isSmall ? 35 : 25}
                color="white"
              />
            }
          />
        </Animated.View>
      )}
    </View>
  );
};

export default OAuth;
