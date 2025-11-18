import React, { useCallback, useMemo } from "react";
import { View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

import Button from "@components/atoms/Button";
import OAuth from "@components/molecules/auth/OAuth";
import ThemeToggle from "@components/ThemeToggle";
import { TEXT } from "@constants";
import { useTheme } from "@hooks";
import { createStyles } from "./style";

const LOGO_IMAGE = require("@assets/images/wolt-logo.png");

export default function LandingScreen() {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);

  const handleEmailSignIn = useCallback(() => {
    // Email sign-in logic here
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.scrollContainer} />

      <View style={styles.contentContainer}>
        <Animated.Image
          entering={FadeInDown}
          source={LOGO_IMAGE}
          style={styles.brandLogo}
        />
        <Animated.Text entering={FadeInDown.delay(100)} style={styles.tagline}>
          {TEXT.TAGLINE_DELIVERY}
        </Animated.Text>

        <OAuth size="default" direction="column" />
        <Animated.View
          entering={FadeInDown.delay(200)}
          style={styles.buttonContainer}
        >
          <Button
            mode="tertiary"
            btnText={TEXT.BTN_SIGNIN_SIMPLE}
            onPress={handleEmailSignIn}
          />
        </Animated.View>
      </View>

      <ThemeToggle />
    </View>
  );
}
