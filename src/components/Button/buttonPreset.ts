import { ThemeColors } from "@theme"
import { ButtonPreset, TouchableOpacityBoxProps } from "@components"

interface ButtonUI {
  container: TouchableOpacityBoxProps,
  content: ThemeColors,
  icon?: any
}

 export const buttonPresets: Record<ButtonPreset, {
  default: ButtonUI,
  disabled: ButtonUI,
 }> = {
  primary: {
    default: {
      container: {
        backgroundColor: 'primary'
      },
      content: 'primaryContrast'
    },
    disabled: {
      container: {
        backgroundColor: 'background'
      },
      content: 'secondaryContrast'
    }
  },
  secondary: {
    default: {
      container: {
        backgroundColor: 'secondary'
      },
      content: 'primaryContrast'
    },
    disabled: {
      container: {
        backgroundColor: 'background'
      },
      content: 'backgroundContrast'
    }
  },
  outline: {
    default: {
      container: {
        borderWidth: 1,
        borderColor: 'primary'
      },
      content: 'primary'
    },
    disabled: {
      container: {
        borderWidth: 1,
        borderColor: 'backgroundContrast'
      },
      content: 'primaryContrast'
    }

  }
}
