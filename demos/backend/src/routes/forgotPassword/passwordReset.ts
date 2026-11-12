import { Request, Response } from 'express';
import { validatePassword } from './validations';

/**
 * Express 5 widened `ParamsDictionary` to `string | string[]` (array params are now
 * supported), so the route params are declared explicitly to keep them `string`.
 */
type ResetParams = {
  id: string;
  token: string;
};

export const passwordReset = (req: Request<ResetParams>, res: Response) => {
  const { newPassword, newPasswordConfirm } = req.body ?? {};
  const { id, token } = req.params;

  const validateLogin = validatePassword({
    id,
    token,
    newPassword,
    newPasswordConfirm,
  });

  res.json({
    success: Object.keys(validateLogin).length === 0,
    errors: validateLogin,
  });
};
