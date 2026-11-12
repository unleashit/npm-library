import { z } from 'zod';

const schema = z
  .object({
    email: z
      .string({ error: 'Please enter your email' })
      .nonempty({ message: 'Please enter your email' })
      .email({ message: 'Please enter a valid email' })
      .max(50, { message: 'Email is too long' })
      .default(''),
    password: z
      .string({ error: 'Please enter a password' })
      .nonempty({ message: 'Please enter a password' })
      .min(8, { message: 'Password must be at least 8 characters' })

      .max(56, { message: 'Password is too long' })
      .default(''),
    passwordConfirm: z
      .string({ error: 'Please enter the password again' })
      .nonempty({ message: 'Please enter the password again' })
      .min(8, { message: 'Password must be at least 8 characters' })

      .max(56, { message: 'Password is too long' })
      .default(''),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: 'Passwords must match',
    path: ['passwordConfirm'],
  });

export default schema;
