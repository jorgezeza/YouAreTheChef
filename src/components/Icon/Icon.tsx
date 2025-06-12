import React from 'react'
import {EyeOnIcon} from '../../assests/icons/EyeOnIcon'
import {EyeOffIcon} from '../../assests/icons/EyeOffIcon'
import {themeColors} from '../../theme/theme'
import {useAppTheme} from '../../hooks/useAppTheme'
import {UserIcon} from '../../assests/icons/UserIcon'
import {EmailIcon} from '../../assests/icons/EmailIcon'
import {LockIcon} from '../../assests/icons/LockIcon'
import {Pressable} from 'react-native'

export interface IconBase {
  size?: number
  color?: string
}

interface Props {
  name: IconName
  color?: themeColors
  size?: number
  onPress?: () => void
}

export function Icon({
  name,
  color = 'backgroundContrast',
  size,
  onPress
}: Props) {
  const {colors} = useAppTheme()
  const SVGIcon = iconRegistry[name]

  if (onPress) {
    return (
      <Pressable hitSlop={10} onPress={onPress}>
        <SVGIcon color={colors[color]} size={size} />
      </Pressable>
    )
  }

  return <SVGIcon color={colors[color]} size={size} />
}

const iconRegistry = {
  eyeOn: EyeOnIcon,
  eyeOff: EyeOffIcon,
  user: UserIcon,
  email: EmailIcon,
  lock: LockIcon
}

type IconType = typeof iconRegistry

type IconName = keyof IconType
