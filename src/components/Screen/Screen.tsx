import React from 'react'
import {Box} from '../Box/Box'
import {useAppTheme} from '../../hooks/useAppTheme'
import {useAppSafeArea} from '../../hooks/useAppSafeArea'

interface ScreenProps {
  children: React.ReactNode
}

export function Screen({children}: ScreenProps) {
  const {top} = useAppSafeArea()
  const {spacing} = useAppTheme()
  return (
    <Box paddingBottom="s24" paddingHorizontal="s24" style={{paddingTop: top}}>
      {children}
    </Box>
  )
}
