import * as React from 'react';

export const isCSSModule = (themeProp: string | undefined, fallback: string): string =>
  themeProp || fallback;

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

export const sentenceCase = (str: string): string =>
  str.charAt(0).toUpperCase() +
  str
    .slice(1)
    .split(/(?=[A-Z])/)
    .join(' ');

export const removeUndefined = (val: unknown[]) => val.filter((v) => v !== undefined);
