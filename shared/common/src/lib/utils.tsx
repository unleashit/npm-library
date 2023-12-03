import * as React from 'react';
import { z, AnyZodObject } from 'zod';
import { prefix } from './constants';

export const removeUndefined = (val: unknown[]) =>
  val.filter((v) => v !== undefined);

// const kebabToCamel = (str) => str.replace(/-./g, (m) => m.toUpperCase()[1]);

const camelToKebab = (str: string) =>
  str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

export const convertToSentence = (str: string): string =>
  str.charAt(0).toUpperCase() +
  str
    .slice(1)
    .split(/(?=[A-Z])/)
    .join(' ');

export const isCSSModule = (
  themeProp: string | undefined,
  fallback: string,
): string => themeProp || fallback;

export const genClassNames = (
  moduleName: string,
  cssModule?: Record<string, string>,
) => ({
  clsName: (camelCaseClassName: string) => {
    if (!cssModule || !(camelCaseClassName in cssModule)) {
      return `${prefix}-${moduleName}__${camelToKebab(camelCaseClassName)}`;
    }
    return cssModule[camelCaseClassName];
  },
});

export const returnComponentFormat = (
  // eslint-disable-next-line @typescript-eslint/ban-types
  C: React.ReactNode | Function,
  attrs: Record<string, unknown>,
): any => {
  if (React.isValidElement(C)) {
    return C;
  }
  if (typeof C === 'function') {
    return <C {...attrs} />;
  }
  throw new Error(
    'Not a valid component. Please supply a component or valid React element.',
  );
};

export function getDefaultsFromZodObject<Schema extends AnyZodObject>(
  s: Schema,
) {
  return Object.fromEntries(
    Object.entries(s.shape).map(([key, value]) => {
      if (value instanceof z.ZodDefault)
        return [key, value._def.defaultValue()];
      return [key, undefined];
    }),
  );
}
