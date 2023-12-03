import { Request, Response } from 'express';
import { BaseValidationErrors, validator } from '../helpers';

type PostBody = {
  email?: string;
  message?: string;
};
type ValidationErrors = BaseValidationErrors & PostBody;
export interface QuickFormResponse {
  success: boolean;
  errors: ValidationErrors;
}

function validations({ email, message }: PostBody) {
  const errors: ValidationErrors = {};

  if (!email) {
    errors.email = 'Email is required';
  }

  if (!message) {
    errors.message = 'Message is required';
  }

  if (message && message.includes('dinosaur')) {
    errors.root = 'Message should not contain dinosaur';
  }

  return errors;
}

const quickForm = (req: Request, res: Response<QuickFormResponse>) => {
  const { errors, valid } = validator<PostBody>(validations, req.body);

  res.status(valid ? 200 : 401);

  return res.json({
    success: valid,
    errors,
  });
};

export default quickForm;
