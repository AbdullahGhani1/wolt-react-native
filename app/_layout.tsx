import { useThemeStore } from "@store/themeStore";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Slot } from "expo-router";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const queryClient = new QueryClient();
export default function RootLayout() {
  const initThemeListener = useThemeStore((state) => state.initThemeListener);
  useEffect(() => {
    initThemeListener();
  }, [initThemeListener]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <Slot />
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
