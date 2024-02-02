import {
  FormValues as FormValuesBase,
  ServerResponse as ServerResponseBase,
} from '@unleashit/common';
import { z } from 'zod';
import {
  defaultForgotPasswordSchema,
  defaultForgotPasswordResetSchema,
} from './defaults/schema';

type DefaultForgotPasswordSchema = typeof defaultForgotPasswordSchema;
type DefaultForgotPasswordResetSchema = typeof defaultForgotPasswordResetSchema;

export type FormValues<T extends z.ZodTypeAny = DefaultForgotPasswordSchema> =
  FormValuesBase<T>;

export type FormValuesReset<
  T extends z.ZodTypeAny = DefaultForgotPasswordResetSchema,
> = FormValuesBase<T>;

export type ServerResponse<
  TFormValues extends Record<string, any> = FormValues,
  Meta extends Record<string, any> = Record<string, any>,
> = ServerResponseBase<TFormValues, Meta>;

export type ServerResponseReset<
  TFormValues extends Record<string, any> = FormValuesReset,
  Meta extends Record<string, any> = Record<string, any>,
> = ServerResponseBase<TFormValues, Meta>;

export { type CustomField } from '@unleashit/common';
