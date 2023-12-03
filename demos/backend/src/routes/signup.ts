import { Request, Response } from 'express';
import { BaseValidationErrors, validator } from '../helpers';

export interface SignupResponse {
  success: boolean;
  errors: ValidationErrors;
}

type PostBody = {
  email?: string;
  password?: string;
  passwordConfirm?: string;
};
type ValidationErrors = BaseValidationErrors & PostBody;

const demoUsers = [
  {
    email: 'test@test.com',
    password: '12345678',
  },
  {
    email: 'test2@test2.com',
    password: '12345678',
  },
];

function validations({ email, password, passwordConfirm }: PostBody) {
  const errors: ValidationErrors = {};

  if (!email) {
    errors.email = 'Email is required';
  }

  if (!password) {
    errors.password = 'Password is required';
  }

  if (!passwordConfirm) {
    errors.password = 'Password confirm is required';
  }

  if (password !== passwordConfirm) {
    errors.password = 'Password and password confirm must match';
  }

  if (demoUsers.find((u) => u.email === email)) {
    errors.root = 'That email is already associated with an account';
  }

  return errors;
}

const signup = (req: Request, res: Response<SignupResponse>) => {
  const { errors, valid } = validator<PostBody>(validations, req.body);

  res.status(valid ? 200 : 401);

  return res.json({
    success: valid,
    errors,
  });
};

export default signup;
