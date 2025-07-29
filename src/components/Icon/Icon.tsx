import React from 'react'
import {EyeOnIcon} from '../../assests/icons/EyeOnIcon'
import {EyeOffIcon} from '../../assests/icons/EyeOffIcon'
import {UserIcon} from '../../assests/icons/UserIcon'
import {EmailIcon} from '../../assests/icons/EmailIcon'
import {LockIcon} from '../../assests/icons/LockIcon'
import {Pressable} from 'react-native'

import {useAppTheme} from '@hooks'
import {ThemeColors} from '@theme'

export interface IconBase {
  size?: number
  color?: string
}

export interface IconProps {
  name: IconName
  color?: ThemeColors
  size?: number
  onPress?: () => void
}

export function Icon({
  name,
  color = 'backgroundContrast',
  size,
  onPress
}: IconProps) {
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
