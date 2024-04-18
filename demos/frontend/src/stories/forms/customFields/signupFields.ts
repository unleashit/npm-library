import { z } from 'zod';
import { type CustomField } from '@unleashit/common';

export const signupFields: CustomField[] = [
  {
    element: 'input',
    type: 'email',
    name: 'name',
    label: 'Name',
    focus: true,
  },
  {
    element: 'input',
    type: 'email',
    name: 'email',
    label: 'Email',
  },
  {
    element: 'input',
    type: 'password',
    name: 'password',
    label: 'Password',
  },
  {
    element: 'input',
    type: 'password',
    name: 'passwordConfirm',
    label: 'Confirm Password',
  },
  {
    element: 'input',
    type: 'checkbox',
    name: 'newsletter',
    label: 'Subscribe to our newsletter?',
  },
];

const signupSchema = z
  .object({
    name: z.string().max(50, { message: 'Name is too long' }).default(''),
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
    newsletter: z.boolean().default(true),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: 'Passwords must match',
    path: ['passwordConfirm'],
  });

export default signupSchema;
