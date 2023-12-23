import {
  FormValues as FormValuesBase,
  ServerResponse as ServerResponseBase,
} from '@unleashit/common';
import { z } from 'zod';
import schema from './defaults/schema';

type DefaultForgotPasswordSchema = typeof schema;

export type FormValues<T extends z.ZodTypeAny = DefaultForgotPasswordSchema> =
  FormValuesBase<T>;

export type ServerResponse<
  TFormValues extends Record<string, any> = FormValues,
  Meta extends Record<string, any> = Record<string, any>,
> = ServerResponseBase<TFormValues, Meta>;

export { type CustomFieldHF } from '@unleashit/common';
