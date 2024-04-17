import { CustomField } from '@unleashit/common';

export const defaultForgotPasswordFields: CustomField[] = [
  {
    element: 'input',
    type: 'text',
    name: 'email',
    label: 'Email',
    focus: true,
  },
];

export const defaultForgotPasswordResetFields: CustomField[] = [
  {
    element: 'input',
    type: 'password',
    name: 'newPassword',
    label: 'New password',
    focus: true,
    clearOnServerError: true,
  },
  {
    element: 'input',
    type: 'password',
    name: 'newPasswordConfirm',
    label: 'Password confirm',
    clearOnServerError: true,
  },
];
