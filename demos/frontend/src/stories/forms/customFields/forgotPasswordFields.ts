import { z } from 'zod';
import { type CustomField } from '@unleashit/common';

export const forgotPasswordFields: CustomField[] = [
  {
    element: 'input',
    type: 'email',
    name: 'email',
    label: 'Email',
    focus: true,
  },
  {
    element: 'input',
    type: 'text',
    name: 'secret_question_1',
    label: 'What is the name of your first pet?',
  },
  {
    element: 'input',
    type: 'text',
    name: 'secret_question_2',
    label: "What is your mother's maiden name?",
  },
];

export const forgotPasswordSchema = z.object({
  email: z
    .string({ required_error: 'Please enter your email' })
    .nonempty({ message: 'Please enter your email' })
    .email({ message: 'Please enter a valid email' })
    .max(50, { message: 'Email is too long' })
    .default(''),
  secret_question_1: z
    .string({ required_error: 'Secret question #1 is required' })
    .nonempty({ message: 'Secret question #1 is required' })
    .max(56)
    .default(''),
  secret_question_2: z
    .string({ required_error: 'Secret question #2 is required' })
    .nonempty({ message: 'Secret question #2 is required' })
    .max(56)
    .default(''),
});

export const forgotPasswordResetFields: CustomField[] = [
  {
    element: 'input',
    type: 'text',
    name: 'token',
    label: 'Enter the token received',
    clearOnServerError: true,
    focus: true,
  },
  {
    element: 'input',
    type: 'password',
    name: 'newPassword',
    label: 'New password',
    clearOnServerError: true,
  },
  {
    element: 'input',
    type: 'password',
    name: 'newPasswordConfirm',
    label: 'Confirm the new password',
    clearOnServerError: true,
  },
];

export const forgotPasswordResetSchema = z.object({
  token: z
    .string({ required_error: 'Please enter the token from the email we sent' })
    .nonempty({ message: 'Please enter the token from the email we sent' })
    .max(50, { message: 'Token is too long' })
    .default(''),
  newPassword: z
    .string({ required_error: 'New Password is required' })
    .nonempty({ message: 'New Password is required' })
    .max(56)
    .default(''),
  newPasswordConfirm: z
    .string({ required_error: 'Password confirmation is required' })
    .nonempty({ message: 'Password confirmation is required' })
    .max(56)
    .default(''),
});
