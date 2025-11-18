import React, { FC, useMemo } from "react";
import Animated from "react-native-reanimated";

import IconItem from "@components/molecules/auth/SmoothInfiniteScroll/IconItem";
import { useInfiniteScroll } from "@hooks";
import {
  ICON_DATA_SETS,
  SMOOTH_SCROLL_CONFIG,
  SmoothInfiniteScrollProps,
} from "./constants";
import styles from "./style";

const SmoothInfiniteScroll: FC<SmoothInfiniteScrollProps> = ({
  scrollDirection = "down",
  iconSet = "set1",
}) => {
  const iconData = ICON_DATA_SETS[iconSet];
  const { ITEM_HEIGHT } = SMOOTH_SCROLL_CONFIG;

  // Calculate total content height for scroll loop detection
  const totalContentHeight = useMemo(
    () => iconData.length * ITEM_HEIGHT,
    [iconData.length, ITEM_HEIGHT]
  );

  // Duplicate items for infinite scroll effect
  const displayItems = useMemo(() => [...iconData, ...iconData], [iconData]);

  // Setup infinite scroll animation
  const { scrollRef } = useInfiniteScroll({
    scrollDirection,
    totalContentHeight,
  });

  return (
    <Animated.ScrollView
      ref={scrollRef}
      contentContainerStyle={styles.container}
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
      testID="smooth-infinite-scroll"
    >
      {displayItems.map((item, index) => (
        <IconItem key={`${iconSet}-${index}`} item={item} index={index} />
      ))}
    </Animated.ScrollView>
  );
};

export default SmoothInfiniteScroll;
