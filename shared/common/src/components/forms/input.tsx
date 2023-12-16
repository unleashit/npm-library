import React from 'react';
import { FieldGroup } from './fieldGroup';
import { InputProps } from '../../types';

export const Input = ({
  type,
  label,
  register,
  error,
  componentName,
  clsName,
  ...attrs
}: InputProps) => (
  <FieldGroup
    componentName={componentName}
    label={label}
    fieldName={register.name}
    error={error}
    clsName={clsName}
  >
    <input
      type={type}
      className={`${
        type === 'checkbox' ? clsName('checkbox') : clsName('input')
      } ${error ? clsName('inputError') : ''}`}
      id={`${componentName}-form-${register.name}`}
      {...register}
      {...attrs}
    />
  </FieldGroup>
);
