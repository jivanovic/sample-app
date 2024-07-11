import { Colors } from '@app/styles/colors';
import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export const EyeSlashIcon = ({ color = Colors.grey60, width = 20, height = 20 }: SvgProps) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path
      d="M3.97993 8.22257C3.05683 9.31382 2.35242 10.596 1.93436 12.0015C3.22565 16.338 7.24311 19.5 11.9991 19.5C12.9917 19.5 13.9521 19.3623 14.8623 19.1049M6.22763 6.22763C7.88389 5.13558 9.86771 4.5 12 4.5C16.756 4.5 20.7734 7.66205 22.0647 11.9985C21.3528 14.3919 19.8106 16.4277 17.772 17.772M6.22763 6.22763L3 3M6.22763 6.22763L9.87868 9.87868M17.772 17.772L21 21M17.772 17.772L14.1213 14.1213M14.1213 14.1213C14.6642 13.5784 15 12.8284 15 12C15 10.3431 13.6569 9 12 9C11.1716 9 10.4216 9.33579 9.87868 9.87868M14.1213 14.1213L9.87868 9.87868"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
