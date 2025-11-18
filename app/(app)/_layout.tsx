import { fontConfig } from "@/configs";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import React from "react";
const RootNav = () => {
  let [fontsLoaded] = useFonts(fontConfig);
  if (!fontsLoaded) return null;
  return (
    <Stack>
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(public)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootNav;
