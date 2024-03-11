import * as React from 'react';
import {
  FieldErrors,
  UseFormRegister,
  UseFormRegisterReturn,
} from 'react-hook-form';
import { ZodTypeAny } from 'zod';
import {
  SelectHTMLAttributes,
  InputHTMLAttributes,
  OptionHTMLAttributes,
} from 'react';
import { Input } from './input';
import { Textarea } from './textarea';
import { Select } from './select';
import { ClsName, FormValues } from '../../types';

export interface CustomFieldsProps<TSchema extends ZodTypeAny = ZodTypeAny> {
  errors: FieldErrors<any>;
  componentName: string;
  fields: CustomField[];
  register: UseFormRegister<FormValues<TSchema>>;
  clsName: ClsName;
}

export interface CustomField {
  /** Html element type for the field */
  element: 'input' | 'select' | 'textarea';
  /** Html type attribute for the field */
  type: string;
  /** Html name attribute for the field */
  name: string;
  /** Html label elem text */
  label?: string;
  /**
   * Set the browser focus to this field on mount.
   * Only the first field with the attribute will be focused
   */
  focus?: boolean;
  /**
   * Clear the field value on server error.
   * Use for example to reset password fields on bad logins, etc.
   */
  clearOnServerError?: boolean;
  /**
   * Array of html option key/value pairs.
   * Only applicable to select elements (optgroup and datalist not yet supported)
   */
  options?: Array<[string, string, OptionHTMLAttributes<any>?]>;
  /** Any other html attributes to apply to the field */
  attrs?: InputHTMLAttributes<any> & SelectHTMLAttributes<any>;
}

type FieldProps = {
  register: UseFormRegisterReturn<any>;
  componentName: CustomFieldsProps['componentName'];
  clsName: ClsName;
  error: Partial<CustomFieldsProps['errors']> | any;
};

function Field({
  element,
  type,
  options,
  label,
  attrs,
  error,
  componentName,
  register,
  clsName,
}: CustomField & FieldProps) {
  if (element === 'input') {
    return (
      <Input
        componentName={componentName}
        label={label}
        type={type}
        register={register}
        error={error}
        clsName={clsName}
        {...attrs}
      />
    );
  }

  if (element === 'select') {
    if (!options)
      throw new Error('Must provide an options prop for a select field');

    return (
      <Select
        componentName={componentName}
        label={label}
        options={options}
        register={register}
        error={error}
        clsName={clsName}
        {...attrs}
      />
    );
  }

  if (element === 'textarea') {
    return (
      <Textarea
        componentName={componentName}
        label={label}
        register={register}
        error={error}
        clsName={clsName}
        {...attrs}
      />
    );
  }

  throw new Error(`Unsupported custom field element \`${element}\``);
}

export function CustomFields({
  fields,
  register,
  errors,
  clsName,
  componentName,
}: CustomFieldsProps) {
  return (
    <>
      {fields.map((field) => (
        <Field
          componentName={componentName}
          register={register(field.name)}
          error={errors[field.name]}
          clsName={clsName}
          key={field.name}
          {...field}
        />
      ))}
    </>
  );
}
