import React from 'react';
import { ClsName } from '../../types';

export type SpinnerSVGProps = {
  width?: string;
  height?: string;
  color?: string;
  opacity?: string;
};

function SpinnerSVG({
  width = '4.688rem',
  height = '10.938rem',
  color = '#555555',
  opacity = '0.2',
}: SpinnerSVGProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
    >
      <g strokeWidth="0" />
      <g strokeLinecap="round" strokeLinejoin="round" />
      <g>
        <path
          opacity={opacity}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          fill={color}
        />
        <path
          d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
          fill={color}
        />
      </g>
    </svg>
  );
}

export interface DefaultLoaderProps {
  clsName: ClsName;
  width?: string;
  height?: string;
  color?: string;
  opacity?: string;
}

export const DefaultLoader = ({
  clsName,
  width,
  height,
  color,
  opacity,
}: DefaultLoaderProps) => (
  <div className={clsName('loader')}>
    <SpinnerSVG color={color} opacity={opacity} width={width} height={height} />
  </div>
);
