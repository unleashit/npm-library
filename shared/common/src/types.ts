import React from 'react';
import { z, ZodTypeAny } from 'zod';
import type { InputHTMLAttributes, SelectHTMLAttributes } from 'react';
import type { GlobalError, UseFormRegisterReturn } from 'react-hook-form';
import { CustomField } from './components/forms/CustomFields';
import { DefaultHeaderProps } from './components/defaults/header';
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

export type ServerResponse<
  TFormValues extends Record<string, string | string[]> = Record<string, any>,
  Meta extends Record<string, any> = Record<string, any>,
> = {
  // success key informs client whether server validation passed or failed
  success: boolean;
  // errors only display if success=false
  errors?: {
    // Optional error msg to print in header
    // or send to toast when server validation fails
    root?: string | string[];
    // pass any failing formValues
    // as key=name of field, value=message or array of messages to print
  } & Partial<TFormValues>;
} & Meta; // TODO: should Meta be forced optional?

// & {
//   [Prop in keyof Meta]?: Meta[Prop];
// };

export type FormValues<T extends ZodTypeAny, K = z.infer<T>> = {
  // [Prop in keyof K]: K[Prop] | K[Prop][];
  [Prop in keyof K]: K[Prop];
};

export type BaseFormProps = {
  handler: <T extends ZodTypeAny>(
    values: FormValues<T>,
  ) => Promise<ServerResponse<FormValues<T>>>;
  onSuccess?: <T extends ZodTypeAny, Meta extends Record<string, any>>(
    resp: ServerResponse<FormValues<T>, Meta>,
  ) => void;
  title?: string;
  header?: React.FC<DefaultHeaderProps> | false | null;
  footer?: React.FC<any>;
  loader?: React.FC<DefaultLoaderProps>;
  customFields?: CustomField[];
  customSchema?: z.AnyZodObject | z.ZodEffects<any>;
  // optionally send root server error message and/or
  // handler exceptions to toast
  toast?: (msg: string) => void;
  // override default failure message to show user
  failMsg?: string;
  // override or remove the default success message
  successMessage?: React.FC<any> | string | false | null;
  linkComponent?: React.ComponentType<any>;
  linkComponentHrefAttr?: string;
  // setting auto or undefined will honor prefers-color-scheme
  // light or dark will force light or dark mode
  darkMode?: boolean;
  cssModule?: Record<string, string>;
};
