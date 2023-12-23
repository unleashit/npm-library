import { Request, Response } from 'express';
import { validator } from '../../helpers';
import { validateResetRequest, ResetRequestPostBody } from './validations';

export const resetRequest = (req: Request, res: Response) => {
  const { errors, valid } = validator<ResetRequestPostBody>(
    validateResetRequest,
    req.body,
  );

  res.status(valid ? 200 : 401);

  res.json({
    success: valid,
    errors,
  });
};
