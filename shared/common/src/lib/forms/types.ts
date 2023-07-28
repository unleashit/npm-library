import type { InputHTMLAttributes, SelectHTMLAttributes } from 'react';
import type { GlobalError, UseFormRegisterReturn } from 'react-hook-form';
import { CustomFieldHF } from './CustomFieldsHF';

type CommonFormProps = {
  componentName: string;
  label?: string;
  register: UseFormRegisterReturn;
  error?: GlobalError;
  cssModule?: Record<string, string>;
};

export type InputProps = InputHTMLAttributes<HTMLInputElement> &
  CommonFormProps & { type: string };
export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> &
  CommonFormProps & {
    options: NonNullable<CustomFieldHF['options']>;
  };
export type TextAreaProps = InputHTMLAttributes<HTMLTextAreaElement> &
  CommonFormProps;

export type ServerResponseBase<
  TFormValues extends Record<string, any> = Record<string, any>,
  Meta extends Record<string, any> = Record<string, any>,
> = {
  // success key informs client whether server validation passed or failed
  success: boolean;
  // errors only display if success=false
  errors?: {
    // Optional error msg to print in header
    // or send to toast when server validation fails
    root?: string;
    // pass any failing formValues
    // as key=name of field, value=message to print
  } & Partial<TFormValues>;
} & {
  [Prop in keyof Meta]: Meta[Prop];
};
