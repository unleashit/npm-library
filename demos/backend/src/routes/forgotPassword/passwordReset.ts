import { Request, Response } from 'express';
import { validatePassword } from './validations';

export const passwordReset = (req: Request, res: Response) => {
  const { newPassword, newPasswordConfirm } = req.body;
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
