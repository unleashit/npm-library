import { z } from 'zod';

const schema = z
  .object({
    email: z
      .string({ required_error: 'Please enter your email' })
      .nonempty({ message: 'Please enter your email' })
      .email({ message: 'Please enter a valid email' })
      .max(50, { message: 'Email is too long' })
      .default(''),
    password: z
      .string({ required_error: 'Please enter a password' })
      .nonempty({ message: 'Please enter a password' })
      .min(8)
      .max(56)
      .default(''),
    passwordConfirm: z
      .string({ required_error: 'Please enter the password again' })
      .nonempty({ message: 'Please enter the password again' })
      .min(8)
      .max(56)
      .default(''),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: 'Passwords must match',
    path: ['passwordConfirm'],
  });

export default schema;
