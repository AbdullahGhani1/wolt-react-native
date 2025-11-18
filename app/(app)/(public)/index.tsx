import Button from "@components/atoms/Button";
import OAuth from "@components/molecules/auth/OAuth";
import ThemeToggle from "@components/ThemeToggle";
import { TEXT } from "@constants";
import { useTheme } from "@hooks";
import React from "react";
import { Image, Platform, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import styles from "./style";

export default function Index() {
  const { colors } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.infiniteScrollContainer}></View>
      <View style={styles.contentContainer}>
        <Image
          source={require("@assets/images/wolt-logo.png")}
          style={styles.brandLong}
        />
        <Animated.Text entering={FadeInDown} style={styles.tagline}>
          Almost everything delivered
        </Animated.Text>

        {/* Login Buttons */}

        <View style={styles.buttonContainer}>
          <OAuth />
          <Animated.View
            entering={FadeInDown.delay(Platform.OS === "ios" ? 300 : 200)}
          >
            <Button
              mode="tertiary"
              btnText={TEXT.BTN_APPLE}
              onPress={() => {}}
            />
          </Animated.View>

          <ThemeToggle />
        </View>
      </View>
    </View>
  );
}
