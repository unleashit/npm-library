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
  body: T,
) => {
  const errors = validations(body);
  return { errors, valid: Object.keys(errors).length === 0 };
};
