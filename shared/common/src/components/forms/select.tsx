import React from 'react';
import { SelectProps } from '../../types';
import { FieldGroup } from './fieldGroup';

export const Select = ({
  options,
  register,
  error,
  componentName,
  label,
  clsName,
  ...attrs
}: SelectProps) => (
  <FieldGroup
    componentName={componentName}
    label={label}
    fieldName={register.name}
    error={error}
    clsName={clsName}
  >
    <select
      className={`${clsName('input')} ${error ? clsName('inputError') : ''}`}
      id={`${componentName}-form-${register.name}`}
      {...register}
      {...attrs}
    >
      {options.map(([display, value, optAttrs]) => (
        <option key={value} value={value} {...optAttrs}>
          {display}
        </option>
      ))}
    </select>
  </FieldGroup>
);
