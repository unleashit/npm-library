import * as React from 'react';

const isCSSModule = (themeProp: string | undefined, fallback: string): string => {
  return themeProp || fallback;
};

const returnComponentFormat = (
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

const sentenceCase = (str: string): string => {
  return (
    str.charAt(0).toUpperCase() +
    str
      .slice(1)
      .split(/(?=[A-Z])/)
      .join(' ')
  );
};

export { isCSSModule, returnComponentFormat, sentenceCase };
