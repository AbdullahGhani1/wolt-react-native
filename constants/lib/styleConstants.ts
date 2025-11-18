export const ANIMATION_DELAYS = {
  FAST: 0,
  NORMAL: 100,
  SLOW: 200,
  EXTRA_SLOW: 300,
} as const;

export const SPACING = {
  XS: 4,
  SM: 8,
  MD: 12,
  LG: 16,
  XL: 20,
  XXL: 24,
  XXXL: 32,
  MEGA: 40,
  JUMBO: 50,
  ULTRA: 60,
  SUPER: 70,
  HYPER: 80,
  EPIC: 90,
  LEGENDARY: 100,
} as const;

export const GAP = {
  XS: 4,
  SM: 8,
  MD: 12,
  LG: 16,
  XL: 20,
  XXL: 24,
} as const;

export const BORDER_RADIUS = {
  SM: 4,
  MD: 8,
  LG: 12,
  XL: 16,
  FULL: 999,
} as const;

export const LINE_HEIGHT = {
  TIGHT: 1.2,
  NORMAL: 1.4,
  RELAXED: 1.6,
  LOOSE: 1.8,
  EXTRA_LOOSE: 2,
} as const;

export const FONT_SIZE = {
  XS: 12,
  SM: 14,
  MD: 16,
  LG: 18,
  XL: 20,
  XXL: 24,
  XXXL: 32,
  MEGA: 40,
  JUMBO: 50,
} as const;

export default {
  ANIMATION_DELAYS,
  SPACING,
  GAP,
  BORDER_RADIUS,
  LINE_HEIGHT,
  FONT_SIZE,
} as const;
