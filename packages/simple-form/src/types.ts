import { ServerResponseBase } from '@unleashit/common';
import { z } from 'zod';
import {
  defaultContactSchema,
  defaultContactSchemaWithPhone,
} from './defaults/schema';

type DefaultContactSchemas =
  | typeof defaultContactSchema
  | typeof defaultContactSchemaWithPhone;

type ContactSchema<T extends z.ZodTypeAny = DefaultContactSchemas> = z.infer<T>;

export type FormValues<
  T extends z.ZodTypeAny = DefaultContactSchemas,
  K = ContactSchema<T>,
> = {
  [Prop in keyof K]: K[Prop] | K[Prop][];
};

export type ServerResponse<
  Schema extends z.ZodTypeAny = DefaultContactSchemas,
  Meta extends Record<string, any> = Record<string, any>,
> = ServerResponseBase<FormValues<Schema>, Meta>;
