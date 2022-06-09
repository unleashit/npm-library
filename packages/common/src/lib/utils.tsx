import * as React from 'react';
import { FormikHelpers } from 'formik';

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

export const formSubmitErrorHandler = (
  err: unknown,
  setErrors: FormikHelpers<any>['setErrors'],
  setSubmitting: FormikHelpers<any>['setSubmitting'],
) => {
  console.error(err);

  const message =
    // eslint-disable-next-line no-nested-ternary
    err instanceof Error
      ? err.message
      : typeof err === 'string'
      ? err
      : 'Something went wrong. Are you connected to the network?';

  setErrors({ serverAuth: message });
  setSubmitting(false);
};
