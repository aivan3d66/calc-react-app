import { css } from 'styled-components'

const font = 'Gill Sans, sans-serif'

// Color palette
const black = '#000000'
const darkGray = '#434343'
const lightGray = '#707070'
const extraLightGray = '#F2F2F2'
const white = '#ffffff'
const error = '#c86464'
const lightPink = '#E6E6FFFF'
const secondary = '#6c5b7b'
const secondaryLight = '#6a6b7b'

const boxShadows = [
  'box-shadow: 0px 4px 24px -8px rgba(0,0,0,0.75)',
]

const size = {
  xxs: 400,
  xs: 550,
  small: 768,
  med: 992,
  large: 1200,
  max: 100,
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
  size,
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
    primary: lightGray,
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
  size,
  boxShadows,
  font,
  opacity: {
    opacity0: 0,
    opacity50: 0.5,
    opacity100: 1,
  },
  height: {
    full: 100,
    h28: 7,
    h32: 8,
  },
  radius: {
    roundedSm: 0.5,  // 8px
    roundedMd: 1.5,  // 24px
    roundedFull: 9999,
  },
  paddings: {
    p5: 1.25, // 20px
    p10: 2.5, // 40px
  },
  margins: {
    m5: 1.25, // 20px
    m10: 2.5, // 40px
  },
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
    100,
    128,
  ],
  textStyle: {
    sm: {
      fontSize: 0.75,
      lineHeight: 1,
    },
    base: {
      fontSize: 1.25,
      lineHeight: 1.75,
    },
    lg: {
      fontSize: 1.875,
      lineHeight: 2.25,
    },
    xl: {
      fontSize: 2.25,
      lineHeight: 2.5,
    },
    xl2: {
      fontSize: 3,
      lineHeight: 1,
    },
  },
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
