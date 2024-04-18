import { Request, Response } from 'express';
import { validator, ValidationErrors, isValidEmail } from '../helpers';

type PostBody = {
  email?: string;
  password?: string;
};
export interface LoginResponse {
  success: boolean;
  errors: ValidationErrors<PostBody>;
}

const demoUser = {
  email: 'test@test.com',
  password: '12345678',
};

function validations({ email, password }: PostBody) {
  const errors: ValidationErrors<PostBody> = {};

  if (!email) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(email)) {
    errors.email = 'Email must be valid';
  }

  if (!password) {
    errors.password = 'Password is required';
  }

  if (
    Object.keys(errors).length === 0 &&
    (email !== demoUser.email || password !== demoUser.password)
  ) {
    errors.root = 'Invalid credentials';
  }

  return errors;
}

const login = (req: Request, res: Response<LoginResponse>) => {
  const { errors, valid } = validator<PostBody>(validations, req.body);

  res.status(valid ? 200 : 401);

  return res.json({
    success: valid,
    errors,
  });
};

export default login;
