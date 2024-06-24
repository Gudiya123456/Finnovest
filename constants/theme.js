import { Dimensions } from "react-native";
import { create } from "react-native-pixel-perfect";

export const { width, height } = Dimensions.get("window");

export const perfectSize = create(PerfectFixSize);

export const PerfectFixSize = {
  width: 414,
  height: 896,
};

export const COLORS = {
  background: "#031F2B",
  // primary: "#E65100",
  primary: "#000",
  secondary: "#D6D2D2",
  tertiary: "#263238",
  white: "#FFFFFF",
  gray: "#F0F5FA",
  black: "#32343E",
  error: "#ff2121",
};

export const SIZES = {
  // GLOBAL SIZES
  base: 8,
  font: 14,
  radius: 30,
  padding: 8,
  padding2: 12,
  padding3: 16,

  // FONTS SIZES
  largeTitle: 50,
  h1: 24,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  // APP DIMENSIONS
  width,
  height,
};

export const Default = {
  shadow: {
    shadowColor: "#7e7e7e",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 8,
  },
  shadowGrey: {
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,
    elevation: 8,
  },
  shadowBtn: {
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },

  fixPadding: perfectSize(10),
};

export const FONTS = {
  largeTitle: {
    fontFamily: "bold",
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  h1: { fontFamily: "bold", fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: "bold", fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: "bold", fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: "bold", fontSize: SIZES.h4, lineHeight: 20 },
  body1: { fontFamily: "regular", fontSize: SIZES.body1, lineHeight: 36 },
  body2: { fontFamily: "regular", fontSize: SIZES.body2, lineHeight: 30 },
  body3: { fontFamily: "regular", fontSize: SIZES.body3, lineHeight: 22 },
  body4: { fontFamily: "regular", fontSize: SIZES.body4, lineHeight: 20 },
  body5: { fontFamily: "regular", fontSize: SIZES.body5, lineHeight: 18 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
