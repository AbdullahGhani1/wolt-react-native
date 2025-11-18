export const SMOOTH_SCROLL_CONFIG = {
  ITEM_HEIGHT: 160,
  SCROLL_SPEED: 20, // pixels per second
  FRAME_RATE: 60, // frames per second
  ICON_SIZE: 160,
  BORDER_RADIUS: 20,
  MARGIN: 5,
} as const;

export const ICON_DATA_SETS = {
  set1: [
    { emoji: "🍕", color: "#FFE5CC" },
    { emoji: "🍔", color: "#F3D03F" },
    { emoji: "🍿", color: "#F8D7DA" },
    { emoji: "🌭", color: "#D5EDDA" },
    { emoji: "🌮", color: "#FADBD8" },
  ],
  set2: [
    { emoji: "⚽️", color: "#D1ECF1" },
    { emoji: "🏀", color: "#E2E3E5" },
    { emoji: "🏈", color: "#F4D03F" },
    { emoji: "⚾️", color: "#FFE5CC" },
    { emoji: "🎳", color: "#F8D7DA" },
  ],
  set3: [
    { emoji: "🛵", color: "#FADBD8" },
    { emoji: "🚒", color: "#D1ECF1" },
    { emoji: "🚔", color: "#FFE5CC" },
    { emoji: "🛻", color: "#D4EDDA" },
    { emoji: "🚚", color: "#E2E3E5" },
  ],
} as const;

export type IconSetType = keyof typeof ICON_DATA_SETS;
export type ScrollDirectionType = "up" | "down";

export interface SmoothInfiniteScrollProps {
  scrollDirection?: ScrollDirectionType;
  iconSet?: IconSetType;
}

export interface IconData {
  emoji: string;
  color: string;
}
