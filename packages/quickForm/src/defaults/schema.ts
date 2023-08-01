import { z } from 'zod';

const base = {
  name: z
    .string({ required_error: 'Please enter your name' })
    .max(50, { message: 'Name is too long' })
    .nonempty({ message: 'Please enter your name' }),
  email: z
    .string({ required_error: 'Please enter your email' })
    .nonempty({ message: 'Please enter your email' })
    .email({ message: 'Please enter a valid email' })
    .max(50, { message: 'Email is too long' }),
  message: z
    .string({ required_error: 'Please enter a message' })
    .max(3000, { message: 'Message is too long' })
    .nonempty({ message: 'Please enter a message' })
    .refine((val) => val.trim().split(' ').length > 5, {
      message: 'Message is too short',
    }),
};

const phone = {
  phone: z.string().max(25, { message: 'Phone is too long' }),
};

export const defaultContactSchema = z.object(base);
export const defaultContactSchemaWithPhone = z.object({
  ...base,
  ...phone,
});
