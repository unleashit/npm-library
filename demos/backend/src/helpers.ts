type ErrorValues = string | string[];
type BaseValidationErrors = {
  root?: ErrorValues;
};
export type ValidationErrors<
  T extends Record<string, unknown> = Record<string, unknown>,
> = {
  [key in keyof T]?: ErrorValues;
} & BaseValidationErrors;

export const validator = <
  T extends Record<string, unknown> = Record<string, unknown>,
>(
  validations: (body: T) => ValidationErrors<T>,
  // Express 5 leaves `req.body` undefined when no body parser matched the
  // request (a POST with no body no longer yields `{}`)
  body?: T,
) => {
  const errors = validations(body ?? ({} as T));
  return { errors, valid: Object.keys(errors).length === 0 };
};

export const isValidEmail = (email: string) =>
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
