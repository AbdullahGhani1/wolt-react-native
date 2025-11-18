import {
  SMOOTH_SCROLL_CONFIG,
  ScrollDirectionType,
} from "@components/molecules/auth/SmoothInfiniteScroll/constants";
import { useEffect } from "react";
import Animated, {
  scrollTo,
  useAnimatedReaction,
  useAnimatedRef,
  useSharedValue,
} from "react-native-reanimated";

interface UseInfiniteScrollProps {
  scrollDirection: ScrollDirectionType;
  totalContentHeight: number;
}

export const useInfiniteScroll = ({
  scrollDirection,
  totalContentHeight,
}: UseInfiniteScrollProps) => {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollY = useSharedValue(0);

  const { SCROLL_SPEED, FRAME_RATE } = SMOOTH_SCROLL_CONFIG;

  useEffect(() => {
    // Initialize scroll position
    if (scrollDirection === "up") {
      scrollY.value = totalContentHeight;
    } else {
      scrollY.value = 0;
    }

    // Setup continuous scroll interval
    const interval = setInterval(() => {
      const increment =
        (SCROLL_SPEED / FRAME_RATE) * (scrollDirection === "up" ? -1 : 1);
      scrollY.value += increment;
    }, 1000 / FRAME_RATE);

    return () => clearInterval(interval);
  }, [scrollDirection, totalContentHeight]);

  // Handle scroll looping
  useAnimatedReaction(
    () => scrollY.value,
    (y) => {
      if (scrollDirection === "down") {
        if (y >= totalContentHeight) {
          scrollY.value = 0;
          scrollTo(scrollRef, 0, 0, false);
        } else {
          scrollTo(scrollRef, 0, y, false);
        }
      } else {
        if (y <= 0) {
          scrollY.value = totalContentHeight;
          scrollTo(scrollRef, 0, totalContentHeight, false);
        } else {
          scrollTo(scrollRef, 0, y, false);
        }
      }
    }
  );

  return { scrollRef, scrollY };
};
export default useInfiniteScroll;
