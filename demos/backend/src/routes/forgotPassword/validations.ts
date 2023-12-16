import { ValidationErrors } from '../../helpers';

type FPPostBody = {
  email?: string;
};

type PRPostBody = {
  id?: string;
  token?: string;
  newPassword?: string;
  newPasswordConfirm?: string;
};

const user = {
  email: 'test@test.com',
};

export const validateEmail = ({ email }: FPPostBody) => {
  const errors: ValidationErrors<FPPostBody> = {};

  if (!email) {
    errors.root = 'You must provide a valid email';
    errors.email = 'Email is required';
  } else if (email !== user.email) {
    errors.root = 'A user with that email was not found';
  }

  return errors;
};

export const validatePassword = ({
  id,
  token,
  newPassword,
  newPasswordConfirm,
}: PRPostBody) => {
  const errors: ValidationErrors<PRPostBody> = {};
  const validUser = '1';
  const validToken = '1234567890';
  // const pwdReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (!token || token !== validToken || !id || id !== validUser) {
    errors.root = 'Unauthorized';
    return errors;
  }
  if (!newPassword) {
    errors.root = 'You must provide a new password';
    errors.newPassword = 'Password is required';
  }

  if (!newPasswordConfirm) {
    errors.root = 'You must confirm your password';
    errors.newPasswordConfirm = 'Password confirm is required';
  }

  // if (newPassword !== newPasswordConfirm) {
  //   errors.root = errors.newPasswordConfirm =
  //     'Password and password confirm must match';
  // }
  // if (!pwdReg.test(newPassword)) {
  //   errors.root = errors.newPassword =
  //     'Password must contain a min of 8 characters and have at least 1 letter and 1 number';
  // }

  return errors;
};
