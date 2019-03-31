import * as React from 'react';

const isEmpty = (data: any): boolean => {
  if (Array.isArray(data)) {
    return !data.length;
  }
  if (typeof data === 'object') {
    return !Object.keys(data).length;
  }
  return !data;
};

const returnComponentFormat = (C: React.ReactNode | Function, attrs: object): any => {
  if (React.isValidElement(C)) {
    return C;
  }
  if (typeof C === 'function') {
    return <C {...attrs} />;
  }
  throw new Error(
    'Not a valid component. Please supply a component or component instance.',
  );
};

export { isEmpty, returnComponentFormat };
