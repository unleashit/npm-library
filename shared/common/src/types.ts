import { ComponentType, ReactNode } from 'react';
import { z, ZodTypeAny } from 'zod';
import type { InputHTMLAttributes, SelectHTMLAttributes } from 'react';
import type { GlobalError, UseFormRegisterReturn } from 'react-hook-form';
import { CustomField } from './components/forms/CustomFields';
import { DefaultLoaderProps } from './components/defaults/loader';

/**
 * Schema accepted by the form components and handed to `@hookform/resolvers`.
 *
 * resolvers v7 requires the schema input to extend `FieldValues`, which a bare
 * `z.ZodType` (input `unknown`) does not satisfy.
 */
export type FormSchema = z.ZodType<Record<string, any>, Record<string, any>>;

export type ClsName = (camelCaseClassName: string) => string;

type CommonFormProps = {
  componentName: string;
  label?: string;
  register: UseFormRegisterReturn;
  error?: GlobalError;
  clsName: ClsName;
};

export type InputProps = InputHTMLAttributes<HTMLInputElement> &
  CommonFormProps & { type: string };
export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> &
  CommonFormProps & {
    options: NonNullable<CustomField['options']>;
  };
export type TextAreaProps = InputHTMLAttributes<HTMLTextAreaElement> &
  CommonFormProps;

// mdx_server_response_start
export type BaseServerResponse<
  TFormValues extends Record<string, any> = Record<string, any>,
  Meta extends Record<string, any> = Record<string, any>,
> = {
  /* success key informs client whether server validation passed or failed */
  success: boolean;
  /* errors only display if success=false */
  errors?: {
    /* Optional error msg to print in header
     * or send to toast when server validation fails
     */
    root?: string | string[];
    /*
     * pass any failing formValues
     * as key=name of field, value=message or array of messages to print
     */
  } & Partial<TFormValues>;
} & Meta;
// mdx_server_response_end
// TODO: should Meta be forced optional?

/**
 * Object form of a schema's inferred values.
 *
 * When `T` is still generic (or otherwise not statically known, e.g. `z.ZodType`)
 * `z.infer<T>` resolves to `unknown` and a mapped type over `unknown` collapses to
 * `{}` — which then rejects perfectly valid field names. Fall back to an open record
 * in that case so the erased-generic call sites keep working.
 */
export type FormValues<T extends ZodTypeAny, K = z.infer<T>> = [K] extends [
  Record<string, any>,
]
  ? {
      // [Prop in keyof K]: K[Prop] | K[Prop][];
      [Prop in keyof K]: K[Prop];
    }
  : Record<string, any>;

// mdx_base_form_start
export type BaseFormProps = {
  /**
   * Handler to submit form. Receives form values and returns Promise with ServerResponse
   *
   * `values` stays loose because `customSchema` comes from the consumer.
   */
  handler: (values: any, event?: Event) => Promise<BaseServerResponse>;
  /** Handler that fires upon successful server validation */
  onSuccess?: <Meta extends Record<string, any>>(
    resp: BaseServerResponse<Record<string, any>, Meta>,
  ) => void;
  /**
   * Custom header component or
   * false to disable the default header
   */
  header?: ComponentType<any> | ReactNode | false;
  /** Header text for default header */
  headerText?: string;
  /** Custom loader component */
  loader?: ComponentType<DefaultLoaderProps>;
  /** Label for form submit button */
  buttonText?: string;
  /** Custom fields to override default fields */
  customFields?: CustomField[];
  /** Custom schema to override default schema */
  customSchema?: FormSchema;
  /**
   * Optionally send root server error message and/or
   * handler exceptions to toast
   */
  toast?: (msg: string) => void;
  /** Override the default catch error shown to user */
  failMsg?: string;
  /** Override or remove the default success message */
  successMessage?: ComponentType<any> | string | false;
  /** Disable/override initial form focus if set */
  isFocused?: boolean;
  /**
   * Boolean to toggle component's data-theme attribute
   * between light and dark mode
   */
  darkMode?: boolean;
  /** CSS module to target internal styles */
  cssModule?: Record<string, string>;
};
// mdx_base_form_end
