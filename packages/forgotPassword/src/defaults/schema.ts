import { z } from 'zod';

export const defaultForgotPasswordSchema = z.object({
  email: z
    .string({ error: 'Please enter your email' })
    .nonempty({ message: 'Please enter your email' })
    .email({ message: 'Please enter a valid email' })
    .max(50, { message: 'Email is too long' })
    .default(''),
});

const passwordReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export const defaultForgotPasswordResetSchema = z
  .object({
    newPassword: z
      .string({ error: 'Please enter a password' })
      .nonempty({ message: 'Please enter a password' })
      .regex(
        passwordReg,
        'Password must have at least 8 characters and contain at least 1 letter and 1 number',
      )
      .min(8, { message: 'Password must be at least 8 characters' })

      .max(56, { message: 'Password is too long' })
      .default(''),
    newPasswordConfirm: z
      .string({ error: 'Please enter the password again' })
      .nonempty({ message: 'Please enter the password again' })
      .regex(
        passwordReg,
        'Password must have at least 8 characters and contain at least 1 letter and 1 number',
      )
      .min(8, { message: 'Password must be at least 8 characters' })

      .max(56, { message: 'Password is too long' })
      .default(''),
  })
  .refine((data) => data.newPassword === data.newPasswordConfirm, {
    message: 'Passwords must match',
    // the field is named `newPasswordConfirm`; a stale path here meant the
    // error was never rendered
    path: ['newPasswordConfirm'],
  });
