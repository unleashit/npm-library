import { isValidEmail, ValidationErrors } from '../../helpers';

export type ResetRequestPostBody = {
  email?: string;
};

export type TokenPostBody = {
  id?: string;
  token?: string;
  newPassword?: string;
  newPasswordConfirm?: string;
};

export const validateResetRequest = ({ email }: ResetRequestPostBody) => {
  const errors: ValidationErrors<ResetRequestPostBody> = {};

  if (!email) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(email)) {
    errors.email = 'Email must be valid';
  }

  return errors;
};

export const validatePassword = ({
  id,
  token,
  newPassword,
  newPasswordConfirm,
}: TokenPostBody) => {
  const errors: ValidationErrors<TokenPostBody> = {};
  const validUser = '1';
  const validToken = '1234567890';
  const pwdReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

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

  if (newPassword !== newPasswordConfirm) {
    const msg = 'Password and password confirmation must match';
    errors.root = msg;
    errors.newPasswordConfirm = msg;
  }

  if (newPassword && !pwdReg.test(newPassword)) {
    const msg =
      'Password must contain a min of 8 characters and have at least 1 letter and 1 number';
    errors.root = msg;
    errors.newPassword = msg;
  }

  return errors;
};
