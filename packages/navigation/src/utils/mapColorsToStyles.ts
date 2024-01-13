import { CSSProperties } from 'react';
import { utils } from '@unleashit/common';

const colorKeys = [
  'light',
  'dark',
  'textLight',
  'textDark',
  'lightDarker5',
  'lightDarker10',
  'lightDarker15',
  'darkLighter5',
  'darkLighter10',
  'darkLighter15',
] as const;

export type Colors = {
  [key in (typeof colorKeys)[number]]?: CSSProperties['color'];
};

export const mapColorsToStyles = (colors?: Colors) => {
  if (!colors) return {};

  const styles: Partial<Record<string, string>> = {};

  colorKeys.forEach((key) => {
    if (colors[key]) {
      const kebabCaseKey = `--unl-navigation-${utils.stringToKebab(key)}`;

      styles[kebabCaseKey] = colors[key];
    }
  });

  return styles;
};
