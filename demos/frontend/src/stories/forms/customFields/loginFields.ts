import { z } from 'zod';
import { type CustomField } from '@unleashit/common';

export const loginFields: CustomField[] = [
  {
    element: 'select',
    type: 'text',
    name: 'department',
    label: 'Department',
    options: [
      ['-- select --', ''],
      ['Administrative', 'administrative'],
      ['Executive', 'executive'],
      ['IT', 'IT'],
      ['Marketing', 'marketing'],
      ['Sales', 'sales'],
    ],
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
    type: 'checkbox',
    name: 'remember_me',
    label: 'Remember Me',
  },
];

const loginSchema = z.object({
  department: z
    .string()
    .min(1, { message: 'Please select your department' })
    .max(50, { message: 'Department name is too long' }),
  email: z
    .string()
    .min(1, { message: 'Please enter your email' })
    .email({ message: 'Please enter a valid email' })
    .max(50, { message: 'Email is too long' }),
  password: z
    .string({ required_error: 'Please enter a password' })
    .min(1, { message: 'Please enter a password' })
    .min(8)
    .max(56),
  remember_me: z.boolean().default(true),
});

export default loginSchema;
