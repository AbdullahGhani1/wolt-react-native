import Constants from "expo-constants";
import dimensions from "./dimensions";

const { width, height } = dimensions;
const hasNotch = Constants.statusBarHeight > 24;

const isSmallDevice = width < 375 && !hasNotch;

const guidelineBaseWidth = () => (isSmallDevice ? 330 : 350);
const getHorizontalScale = (size: number) =>
  (width / guidelineBaseWidth()) * size;

const guidelineBaseHeight = () => {
  if (isSmallDevice) {
    return 550;
  } else if (width > 410) {
    return 620;
  } else {
    return 680;
  }
};
const getVerticalScale = (size: number) =>
  (height / guidelineBaseHeight()) * size;

export default { getHorizontalScale, getVerticalScale };
