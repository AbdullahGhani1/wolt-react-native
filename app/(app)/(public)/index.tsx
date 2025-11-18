import Button from "@components/atoms/Button";
import AppleAuthButton from "@components/auth/AppleAuthButton";
import GoogleAuthButton from "@components/auth/GoogleAuthButton";
import ThemeToggle from "@components/ThemeToggle";
import { TEXT } from "@constants";
import { useTheme } from "@hooks";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import styles from "./style";

export default function Index() {
  const { colors } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.BACKGROUND }]}>
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
          <Animated.View entering={FadeInDown.delay(100)}>
            <GoogleAuthButton />
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(200)}>
            <AppleAuthButton />
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(300)}>
            <TouchableOpacity style={styles.otherButton}>
              <Text style={styles.OtherButtonText}>Others</Text>
            </TouchableOpacity>
          </Animated.View>
          <Button
            mode="outlined"
            style={styles.signInButton}
            onPress={() => {}}
            btnText={TEXT.BTN_SIGNIN_SIMPLE}
            buttonColor={colors.BUTTON_COLOR}
          />
          <ThemeToggle />
        </View>
      </View>
    </View>
  );
}
