import React, { FC } from "react";
import { Text, View, ViewStyle } from "react-native";
import type { IconData } from "../constants";
import styles from "./style";

interface IconItemProps {
  item: IconData;
  index: number;
}

const IconItem: FC<IconItemProps> = ({ item, index }) => {
  const containerStyle: ViewStyle = {
    ...styles.iconContainer,
    backgroundColor: item.color,
  };

  return (
    <View key={index} style={containerStyle}>
      <Text style={styles.emoji}>{item.emoji}</Text>
    </View>
  );
};

export default IconItem;
