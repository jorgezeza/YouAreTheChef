import { createTheme } from '@shopify/restyle'

 export const palette = {
  grennPrimary: '#00A127',
  redPrimary: '#F41F2D',
  redSecondary: '#FF1929',
  redTertiary: '#ED0010',
  blue: '#2F2CE3',
  backgroundPrimary: '#353232',
  white: '#ffffff',
  whiteSecondary: '#ECE1E1',
  black: '#000000',
  blackSecondary: '#151515',
  backgroundPrimaryTransparente: 'rgba(35, 32, 32, 0.2)',
  transparent: 'transparent',
  none: 'none',
  whiteSecondaryTranparent: 'rgba(255, 253, 253, 0.3)'
 }

export const theme = createTheme({
  colors: {
    ...palette,
    primary: palette.grennPrimary,
    secondary: palette.redPrimary,
    primaryContrast: palette.white,
    secondaryContrast: palette.black,
    background: palette.backgroundPrimary,
    backgroundContrast: palette.whiteSecondary,
    backgroundInput: palette.backgroundPrimaryTransparente,
    whiteSecondaryTranparent: palette.whiteSecondaryTranparent
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
  },
  textVariants: {
    defaults: {}
  }
})

export type Theme = typeof theme
export type ThemeColors = keyof Theme['colors']
