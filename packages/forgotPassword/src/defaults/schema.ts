import { z } from 'zod';

export const defaultForgotPasswordSchema = z.object({
  email: z
    .string({ required_error: 'Please enter your email' })
    .nonempty({ message: 'Please enter your email' })
    .email({ message: 'Please enter a valid email' })
    .max(50, { message: 'Email is too long' }),
});

const passwordReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export const defaultForgotPasswordResetSchema = z
  .object({
    newPassword: z
      .string({ required_error: 'Please enter a password' })
      .nonempty({ message: 'Please enter a password' })
      .regex(
        passwordReg,
        'Password must have at least 8 characters and contain at least 1 letter and 1 number',
      )
      .min(8)
      .max(56),
    newPasswordConfirm: z
      .string({ required_error: 'Please enter the password again' })
      .nonempty({ message: 'Please enter the password again' })
      .regex(
        passwordReg,
        'Password must have at least 8 characters and contain at least 1 letter and 1 number',
      )
      .min(8)
      .max(56),
  })
  .refine((data) => data.newPassword === data.newPasswordConfirm, {
    message: 'Passwords must match',
    path: ['passwordConfirm'],
  });
