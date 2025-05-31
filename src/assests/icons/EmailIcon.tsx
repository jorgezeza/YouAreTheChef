import React from 'react'
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg'
import { IconBase } from '../../components/Icon/Icon'

export function EmailIcon({size = 20, color = 'white'}:IconBase) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="none"
      >
      <G clip-path="url(#clip0_2445_1349)">
        <Path
          d="M23.75 6.25H6.25C4.86929 6.25 3.75 7.36929 3.75 8.75V21.25C3.75 22.6307 4.86929 23.75 6.25 23.75H23.75C25.1307 23.75 26.25 22.6307 26.25 21.25V8.75C26.25 7.36929 25.1307 6.25 23.75 6.25Z"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M3.75 8.75L15 16.25L26.25 8.75"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Rect width="30" height="30"/>
      <Defs>
        <ClipPath id="clip0_2445_1349">
          <Rect width="30" height="30" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
