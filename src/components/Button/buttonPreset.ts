import { themeColors } from '../../theme/theme'
import { TouchableOpacityBoxProps } from '../Box/Box'
import { ButtonPreset } from './Button'

interface ButtonUI {
  container: TouchableOpacityBoxProps,
  content: themeColors,
  icon?: any
}

 export const buttonPresets: Record<ButtonPreset, ButtonUI> = {
  primary: {
    container: {
      backgroundColor: 'primary'
    },
    content: 'primaryContrast'
  },
  outline: {
    container: {
      borderWidth: 1,
      borderColor: 'black'
    },
    content: 'secondaryContrast'
  },
  withIcon: {
    container: {
      backgroundColor: 'redPrimary'
    },
    content: 'blue'
  }
}

