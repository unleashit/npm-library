import { CSSProperties } from 'react';
import { stringToKebab } from './utils';

export type Colors<TColorKeys extends readonly string[]> = {
  [key in TColorKeys[number]]?: CSSProperties['color'];
};

type MapColorsToStyles<TColorKeys extends readonly string[]> = {
  componentName: string;
  colors?: Colors<TColorKeys>;
  colorKeys: readonly string[];
};

export const mapColorsToStyles = <ColorKeys extends readonly string[]>({
  componentName,
  colors,
  colorKeys,
}: MapColorsToStyles<ColorKeys>) => {
  if (!colors) return {};

  const styles: Partial<Record<string, string>> = {};

  colorKeys.forEach((key) => {
    if (key in colors) {
      const kebabCaseKey = `--unl-${componentName}-${stringToKebab(key)}`;

      styles[kebabCaseKey] = (colors as Record<string, CSSProperties['color']>)[
        key
      ];
    }
  });

  return styles;
};
