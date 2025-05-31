import React from 'react'
import Svg, {Defs, G, Path, Rect, ClipPath} from 'react-native-svg'
import {IconBase} from '../../components/Icon/Icon'

export function LockIcon({size = 20, color = 'white'}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 30 30" fill="none">
      <G clip-path="url(#clip0_2445_1348)">
        <Path
          d="M21.25 13.75H8.75C7.36929 13.75 6.25 14.8693 6.25 16.25V23.75C6.25 25.1307 7.36929 26.25 8.75 26.25H21.25C22.6307 26.25 23.75 25.1307 23.75 23.75V16.25C23.75 14.8693 22.6307 13.75 21.25 13.75Z"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M15 21.25C15.6904 21.25 16.25 20.6904 16.25 20C16.25 19.3096 15.6904 18.75 15 18.75C14.3096 18.75 13.75 19.3096 13.75 20C13.75 20.6904 14.3096 21.25 15 21.25Z"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M10 13.75V8.75C10 7.42392 10.5268 6.15215 11.4645 5.21447C12.4021 4.27678 13.6739 3.75 15 3.75C16.3261 3.75 17.5979 4.27678 18.5355 5.21447C19.4732 6.15215 20 7.42392 20 8.75V13.75"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2445_1348">
          <Rect width="30" height="30" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
