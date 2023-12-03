export type BaseValidationErrors = { root?: string };

export const validator = <T extends Record<string, any> = Record<string, any>>(
  validations: (body: T) => T & BaseValidationErrors,
  body: T,
) => {
  const errors = validations(body);
  return { errors, valid: Object.keys(errors).length === 0 };
};
