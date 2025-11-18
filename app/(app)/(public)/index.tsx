import React, { useCallback, useMemo } from "react";
import { Linking, Text, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

import Button from "@components/atoms/Button";
import OAuth from "@components/molecules/auth/OAuth";
import SmoothInfiniteScroll from "@components/molecules/auth/SmoothInfiniteScroll";
import { TEXT } from "@constants";
import { useTheme } from "@hooks";
import { LinearGradient } from "expo-linear-gradient";
import { createStyles } from "./style";

const LOGO_IMAGE = require("@assets/images/wolt-logo.png");

export default function LandingScreen() {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);

  const handleEmailSignIn = useCallback(() => {
    // Email sign-in logic here
  }, []);
  const openWebBrowser = () => {
    Linking.openURL("https://munazaphysio.studio/");
  };
  return (
    <View style={styles.container}>
      <View style={styles.infiniteScrollContainer}>
        <View>
          <SmoothInfiniteScroll scrollDirection="down" iconSet="set1" />
        </View>
        <View>
          <SmoothInfiniteScroll scrollDirection="up" iconSet="set2" />
        </View>
        <View>
          <SmoothInfiniteScroll scrollDirection="down" iconSet="set3" />
        </View>
        <LinearGradient
          colors={["transparent", colors.background]}
          style={styles.gradientOverlay}
        />
      </View>

      <View style={styles.contentContainer}>
        <Animated.Image
          entering={FadeInDown}
          source={LOGO_IMAGE}
          style={styles.brandLogo}
        />
        <Animated.Text entering={FadeInDown.delay(100)} style={styles.tagline}>
          {TEXT.TAGLINE_DELIVERY}
        </Animated.Text>

        {/* Buttons container  */}
        <View style={styles.buttonContainer}>
          <OAuth size="default" direction="column" />

          <Animated.View entering={FadeInDown.delay(200)}>
            <Button
              mode="tertiary"
              btnText={TEXT.BTN_SIGNIN_SIMPLE}
              onPress={handleEmailSignIn}
            />
          </Animated.View>
        </View>
        <Animated.View
          style={styles.privacyContainer}
          entering={FadeInDown.delay(400)}
        >
          <Text style={styles.privacyText}>
            {TEXT.PR_TEXT}
            <Text style={styles.privacyLink} onPress={openWebBrowser}>
              {TEXT.PR_LINK_TEXT}
            </Text>
            {TEXT.PR_SEC_TEXT}
          </Text>
        </Animated.View>
      </View>
    </View>
  );
}
