import { z } from 'zod';
import {
  FormValues as FormValuesBase,
  ServerResponse as ServerResponseBase,
} from '@unleashit/common';
import {
  defaultContactSchema,
  defaultContactSchemaWithPhone,
} from './defaults/schema';

export type DefaultContactSchema = typeof defaultContactSchema;
export type DefaultContactSchemaWithPhone =
  typeof defaultContactSchemaWithPhone;

type DefaultContactSchemas =
  | DefaultContactSchema
  | DefaultContactSchemaWithPhone;

export type FormValues<T extends z.ZodTypeAny = DefaultContactSchemas> =
  FormValuesBase<T>;

export type ServerResponse<
  TFormValues extends Record<string, any> = FormValues,
  Meta extends Record<string, any> = Record<string, any>,
> = ServerResponseBase<TFormValues, Meta>;

// type ContactSchema<T extends z.ZodTypeAny = DefaultContactSchemas> = z.infer<T>;

// export type FormValues<
//   T extends z.ZodTypeAny = DefaultContactSchemas,
//   K = ContactSchema<T>,
// > = {
//   [Prop in keyof K]: K[Prop] | K[Prop][];
// };
//
// export type ServerResponse<
//   Schema extends z.ZodTypeAny = DefaultContactSchemas,
//   Meta extends Record<string, any> = Record<string, any>,
// > = ServerResponseBase<FormValues<Schema>, Meta>;

export { type CustomField } from '@unleashit/common';
