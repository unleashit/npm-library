import { CSSProperties } from 'react';
import { stringToKebab } from './utils';

export type CSSVars<TVarNames extends readonly string[]> = {
  [name in TVarNames[number]]?: CSSProperties['color'];
};

type MapColorsToStyles<TVarNames extends readonly string[]> = {
  // user supplied css var overrides
  cssVars?: CSSVars<TVarNames>;
  // camel case array of available css var names
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

/*
 * Common css custom property names for all forms
 * */

// sort by light and dark mode
export const varNamesCommonForm = [
  'formPadding',
  'formLightModeText',
  'formDarkModeText',
  'formLightModeBackground',
  'formDarkModeBackground',
  'formLightModeLinkColor',
  'formDarkModeLinkColor',
  'formLightModeFieldBackground',
  'formDarkModeFieldBackground',
  'formLightModeBorderColor',
  'formDarkModeBorderColor',
  'formLightModeButtonColor',
  'formDarkModeButtonColor',
  'formButtonHoverColor',
  'formDarkModeButtonHoverColor',
  'formFieldGroupMargin',
  'formErrorColor',
  'formErrorBorderColor',
  'formRootErrorColor',
  'formRootErrorBackground',
  'formLightModeFocusColor',
  'successJustifyContent',
  'successAlignItems',
  'successFontSize',
] as const;
