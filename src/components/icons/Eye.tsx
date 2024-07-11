import { Colors } from '@app/styles/colors';
import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export const EyeIcon = ({ color = Colors.grey60, width = 20, height = 20 }: SvgProps) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="#fff">
    <Path
      d="M2.03555 12.3224C1.96647 12.1151 1.9664 11.8907 2.03536 11.6834C3.42373 7.50972 7.36079 4.5 12.0008 4.5C16.6387 4.5 20.5742 7.50692 21.9643 11.6776C22.0334 11.8849 22.0335 12.1093 21.9645 12.3166C20.5761 16.4903 16.6391 19.5 11.9991 19.5C7.3612 19.5 3.42564 16.4931 2.03555 12.3224Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
