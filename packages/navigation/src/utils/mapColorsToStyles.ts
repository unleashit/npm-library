import { CSSProperties } from 'react';
import { utils } from '@unleashit/common';

// export interface Colors {
//   light?: CSSProperties['color'];
//   lightDarker5?: CSSProperties['color'];
//   lightDarker10?: CSSProperties['color'];
//   lightDarker15?: CSSProperties['color'];
//   dark?: CSSProperties['color'];
//   darkLighter5?: CSSProperties['color'];
//   darkLighter10?: CSSProperties['color'];
//   darkLighter15?: CSSProperties['color'];
//   textLight?: CSSProperties['color'];
//   textDark?: CSSProperties['color'];
// }

// export const mapColorsToStyles = (colors?: Colors) => {
//   const styles: Record<string, string> = {};
//   if (!colors) return styles;
//
//   colors.light && (styles['--unl-navigation-light'] = colors.light);
//   colors.dark && (styles['--unl-navigation-dark'] = colors.dark);
//   colors.textLight &&
//     (styles['--unl-navigation-text-light'] = colors.textLight);
//   colors.textDark && (styles['--unl-navigation-text-dark'] = colors.textDark);
//   colors.lightDarker5 &&
//     (styles['--unl-navigation-light-darker-5'] = colors.lightDarker5);
//   colors.lightDarker10 &&
//     (styles['--unl-navigation-light-darker-10'] = colors.lightDarker10);
//   colors.lightDarker15 &&
//     (styles['--unl-navigation-light-darker-15'] = colors.lightDarker15);
//   colors.darkLighter5 &&
//     (styles['--unl-navigation-dark-lighter-5'] = colors.darkLighter5);
//   colors.darkLighter10 &&
//     (styles['--unl-navigation-dark-lighter-10'] = colors.darkLighter10);
//   colors.darkLighter15 &&
//     (styles['--unl-navigation-dark-lighter-15'] = colors.darkLighter15);
//   return styles;
// };

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
