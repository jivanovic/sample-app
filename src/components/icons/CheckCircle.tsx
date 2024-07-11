import { Colors } from '@app/styles/colors';
import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export const CheckCircleIcon = ({ color = Colors.white, width = 13, height = 13 }: SvgProps) => (
  <Svg width={width} height={height} fill="none" viewBox="0 0 13 13">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.667 1.231A6 6 0 0 1 6 .221a6.007 6.007 0 0 1 6 6 6 6 0 1 1-9.333-4.99Zm6.512 3.5a.675.675 0 1 0-1.108-.77L5.42 7.776 3.866 6.132a.675.675 0 1 0-.982.927l2.125 2.25a.675.675 0 0 0 1.045-.079l3.125-4.5Z"
      fill={color}
    />
  </Svg>
);
