import { ComponentType } from 'react';
import { z, ZodTypeAny } from 'zod';
import type { InputHTMLAttributes, SelectHTMLAttributes } from 'react';
import type { GlobalError, UseFormRegisterReturn } from 'react-hook-form';
import { CustomField } from './components/forms/CustomFields';
import { DefaultLoaderProps } from './components/defaults/loader';

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
  TFormValues extends Record<string, string | string[]> = Record<string, any>,
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

export type FormValues<T extends ZodTypeAny, K = z.infer<T>> = {
  // [Prop in keyof K]: K[Prop] | K[Prop][];
  [Prop in keyof K]: K[Prop];
};

// mdx_base_form_start
export type BaseFormProps = {
  /** Handler to submit form. Receives form values and returns Promise with ServerResponse */
  handler: <T extends ZodTypeAny>(
    values: FormValues<T>,
    event?: Event,
  ) => Promise<BaseServerResponse<FormValues<T>>>;
  /** Handler that fires upon successful server validation */
  onSuccess?: <T extends ZodTypeAny, Meta extends Record<string, any>>(
    resp: BaseServerResponse<FormValues<T>, Meta>,
  ) => void;
  /** Header text for default header */
  headerText?: string;
  /** Custom footer component */
  footer?: ComponentType<any>;
  /** Custom loader component */
  loader?: ComponentType<DefaultLoaderProps>;
  /** Label for form submit button */
  buttonText?: string;
  /** Custom fields to override default fields */
  customFields?: CustomField[];
  /** Custom schema to override default schema */
  customSchema?: z.AnyZodObject | z.ZodEffects<any>;
  /**
   * optionally send root server error message and/or
   * handler exceptions to toast
   */
  toast?: (msg: string) => void;
  /** override the default catch error shown to user */
  failMsg?: string;
  /** override or remove the default success message */
  successMessage?: ComponentType<any> | string | false | null;
  /** Link component for client side routing */
  linkComponent?: ComponentType<any>;
  /** Link component's href attribute */
  linkComponentHrefAttr?: string;
  /** Should the first field in the form be focused on page load */
  isFocused?: boolean;
  /**
   * setting auto or undefined will honor prefers-color-scheme
   * light or dark will force light or dark mode
   */
  darkMode?: boolean;
  /** CSS module to target internal styles */
  cssModule?: Record<string, string>;
};
// mdx_base_form_end
