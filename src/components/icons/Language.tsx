import { Colors } from '@app/styles/colors';
import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export const LanguageIcon = ({
  color = Colors.black100,
  width = 24,
  height = 24,
  ...props
}: SvgProps) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <Path
      d="M10.5 21L15.75 9.75L21 21M12 18H19.5M3 5.62136C4.96557 5.37626 6.96804 5.25 9 5.25M9 5.25C10.1208 5.25 11.2326 5.28841 12.3343 5.364M9 5.25V3M12.3343 5.364C11.1763 10.6578 7.68868 15.0801 3 17.5023M12.3343 5.364C13.2298 5.42545 14.1186 5.51146 15 5.62136M10.4113 14.1162C8.78554 12.4619 7.47704 10.4949 6.58432 8.31366"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
