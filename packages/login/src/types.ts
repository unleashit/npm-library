import {
  FormValues as FormValuesBase,
  BaseServerResponse,
} from '@unleashit/common';
import { z } from 'zod';
import schema from './defaults/schema';

type DefaultLoginSchema = typeof schema;

export type FormValues<T extends z.ZodTypeAny = DefaultLoginSchema> =
  FormValuesBase<T>;

// mdx_server_response_start
export type ServerResponse<
  TFormValues extends Record<string, any> = FormValues,
  Meta extends Record<string, any> = Record<string, any>,
> = BaseServerResponse<TFormValues, Meta>;
// mdx_server_response_end

export { type CustomField } from '@unleashit/common';
