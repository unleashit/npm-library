import {
  FormValues as FormValuesBase,
  ServerResponse as ServerResponseBase,
} from '@unleashit/common';
import { z } from 'zod';
import schema from './defaults/schema';

type DefaultLoginSchema = typeof schema;

// type LoginSchema<T extends z.ZodTypeAny = DefaultLoginSchema> = z.infer<T>;
// type LoginSchema = z.infer<DefaultLoginSchema>;

// export type LoginFormValues<
//   T extends z.ZodTypeAny = DefaultLoginSchema,
//   K = LoginSchema<T>,
// > = {
//   [Prop in keyof K]: K[Prop] | K[Prop][];
// };

// export type FormValues = FormValuesBase<DefaultLoginSchema>;

export type FormValues<T extends z.ZodTypeAny = DefaultLoginSchema> =
  FormValuesBase<T>;

// export type ServerResponse = ServerResponseBase<FormValues>;
export type ServerResponse<
  TFormValues extends Record<string, any> = FormValues,
  Meta extends Record<string, any> = Record<string, any>,
> = ServerResponseBase<TFormValues, Meta>;

// export type ServerResponse = ServerResponseBase<LoginFormValues>;

// export type ServerResponse<
//   Schema extends z.ZodTypeAny = DefaultLoginSchema,
//   Meta extends Record<string, any> = Record<string, any>,
// > = ServerResponseBase<FormValues<Schema>, Meta>;

export { type CustomFieldHF } from '@unleashit/common';
