import { z } from 'zod';

const contactSchema = z.object({
  first_name: z
    .string({ required_error: 'First name is missing' })
    .nonempty({ message: 'Name is missing' }),
  last_name: z
    .string({ required_error: 'Last name is missing' })
    .nonempty({ message: 'Last name is missing' }),
  email: z
    .string({ required_error: 'Email is missing' })
    .nonempty({ message: 'Email is missing' })
    .email({ message: 'Please enter a valid email' }),
  favorite_color: z
    .string({ required_error: 'Favorite color is missing' })
    .nonempty({ message: 'Favorite color is missing' }),
  message: z
    .string({ required_error: 'Please enter a message' })
    .nonempty({ message: 'Please enter a message' }),
  subscribe: z.boolean().default(true),
});

export default contactSchema;
