import { Request, Response } from 'express';
import { validateEmail } from './validations';

export const checkUser = (req: Request, res: Response) => {
  const { email } = req.body;
  const validateLogin = validateEmail({ email });

  res.json({
    success: Object.keys(validateLogin).length === 0,
    errors: validateLogin,
  });
};
