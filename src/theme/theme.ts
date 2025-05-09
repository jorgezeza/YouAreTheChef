import { createTheme } from '@shopify/restyle'

 const palette = {
  grennPrimary: '#00A127',
  redPrimary: '#F41F2D',
  redSecondary: '#FF1929',
  redTertiary: '#ED0010',
  blue: '#2F2CE3',
  backgroundPrimary: '#353232',
  white: '#ffffff',
  whiteSecondary: '#ECE1E1',
  black: '#000000',
  blackSecondary: '#151515'
 }

export const theme = createTheme({
  colors: {
    ...palette,
    primary: palette.redPrimary,
    secondary: palette.grennPrimary,
    primaryContrast: palette.white,
    secondaryContrast: palette.black,
    background: palette.backgroundPrimary
  },
  spacing: {
    s4: 4,
    s8: 8,
    s10: 10,
    s12: 12,
    s14: 14,
    s16: 16,
    s20: 20,
    s24: 24,
    s32: 32,
    s40: 40,
    s48: 48,
    s56: 56
  },
  borderRadii: {
    s4: 4,
    s12: 12,
    s50: 50
  }
})

export type Theme = typeof theme
