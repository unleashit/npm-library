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
import { FormValues } from '../../types';

export interface CustomFieldsPropsHF<TSchema extends ZodTypeAny = ZodTypeAny> {
  cssModule: Record<string, string>;
  errors: FieldErrors<any>;
  componentName: string;
  fields: CustomFieldHF[];
  register: UseFormRegister<FormValues<TSchema>>;
}

export interface CustomFieldHF {
  element: 'input' | 'select' | 'textarea';
  type: string;
  name: string;
  label?: string;
  options?: Array<[string, string, OptionHTMLAttributes<any>?]>;
  attrs?: InputHTMLAttributes<any> & SelectHTMLAttributes<any>;
}

type FieldProps = {
  register: UseFormRegisterReturn<any>;
  componentName: CustomFieldsPropsHF['componentName'];
  cssModule: Record<string, string>;
  error: Partial<CustomFieldsPropsHF['errors']> | any;
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
  cssModule,
}: CustomFieldHF & FieldProps) {
  if (element === 'input') {
    return (
      <Input
        componentName={componentName}
        label={label}
        type={type}
        register={register}
        error={error}
        cssModule={cssModule}
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
        cssModule={cssModule}
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
        cssModule={cssModule}
        {...attrs}
      />
    );
  }

  throw new Error(`Unsupported custom field element \`${element}\``);
}

export function CustomFieldsHF({
  fields,
  register,
  errors,
  cssModule,
  componentName,
}: CustomFieldsPropsHF) {
  return (
    <>
      {fields.map((field) => (
        <Field
          componentName={componentName}
          register={register(field.name)}
          error={errors[field.name]}
          cssModule={cssModule}
          key={field.name}
          {...field}
        />
      ))}
    </>
  );
}
