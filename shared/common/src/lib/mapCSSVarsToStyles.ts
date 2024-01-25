import { CSSProperties } from 'react';
import { stringToKebab } from './utils';

export type CSSVars<TVarNames extends readonly string[]> = {
  [name in TVarNames[number]]?: CSSProperties['color'];
};

type MapColorsToStyles<TVarNames extends readonly string[]> = {
  cssVars?: CSSVars<TVarNames>;
  varNames: readonly string[];
};

export const mapCSSVarsToStyles = <VarNames extends readonly string[]>({
  cssVars,
  varNames,
}: MapColorsToStyles<VarNames>) => {
  if (!cssVars) return {};

  const styles: Partial<Record<string, string>> = {};

  varNames.forEach((name) => {
    if (name in cssVars) {
      const kebabCaseKey = `--unl-${stringToKebab(name)}`;

      styles[kebabCaseKey] = (
        cssVars as Record<string, CSSProperties['color']>
      )[name];
    }
  });

  return styles;
};
