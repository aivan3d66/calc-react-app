import { css } from "styled-components"

const font = "Gill Sans, sans-serif"

// Color palette
const black = "#000000"
const darkGray = "#434343"
const lightGray = "#707070"
const extraLightGray = "#F2F2F2"
const white = "#ffffff"
const error = "#c86464"
const lightPink = "#E6E6FFFF"
const secondary = "#6c5b7b"
const secondaryLight = "#6a6b7b"

const boxShadows = [
  "box-shadow: 0px 4px 24px -8px rgba(0,0,0,0.75)",
]

const size = {
  xs: 550,
  small: 768,
  med: 992,
  large: 1200,
}

const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

const below = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

const theme = {
  above,
  below,
  boxShadows,
  font,
  padding: [],
  spaces: [
    0,
    1,
    2,
    4,
    8,
    10,
    15,
    16,
    19,
    20,
    25,
    32,
    35,
    40,
    64,
    70,
    128,
  ],
  fontSizes: [
    12,
    14,
    16,
    20,
    24,
    32,
    40,
    56,
    70,
    72,
    80,
    100,
    500,
  ],
  colors: {
    lightPink,
    secondary,
    secondaryLight,
    black,
    white,
    error,
    darkGray,
  },
}

export const appLightTheme = {
  ...theme,
  headerColor: {
    primary: darkGray,
  },
  appBackgroundColor: {
    primary: white,
  },
  textColor: {
    primary: white,
  },
  buttonColor: {
    primary: extraLightGray,
  },
  buttonHoverColor: {
    primary: secondary,
  },
}
export const appDarkTheme = {
  ...theme,
  headerColor: {
    primary: black,
  },
  appBackgroundColor: {
    primary: darkGray,
  },
  textColor: {
    primary: lightPink,
  },
  buttonColor: {
    primary: secondaryLight,
  },
  buttonHoverColor: {
    primary: secondary,
  },
}
export const appColoredTheme = {
  ...theme,
  headerColor: {
    primary: secondary,
  },
  appBackgroundColor: {
    primary: lightPink,
  },
  textColor: {
    primary: secondaryLight,
  },
  buttonColor: {
    primary: extraLightGray,
  },
  buttonHoverColor: {
    primary: error,
  },
}

export default {
  above,
  below,
  boxShadows,
  font,
  spaces: [
    0,
    1,
    2,
    4,
    8,
    10,
    15,
    20,
    25,
    // 9
    16,
    32,
    35,
    40,
    64,
    128,
    19,
    70,
    21,
    170,
  ],
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 56, 72, 80, 500],
  colors: {
    black,
    darkGray,
    lightGray,
    extraLightGray,
    white,
    error,
    lightPink,
    secondary,
    secondaryLight,
  },
}
