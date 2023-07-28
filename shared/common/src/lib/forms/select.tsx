import React from 'react';
import { genClassNames } from '../utils';
import { SelectProps } from './types';
import { FieldGroup } from './fieldGroup';

export const Select = ({
  options,
  register,
  error,
  componentName,
  cssModule = {},
  ...attrs
}: SelectProps) => {
  const { clsName } = genClassNames(componentName, cssModule);
  return (
    <FieldGroup
      componentName={componentName}
      fieldName={register.name}
      error={error}
      cssModule={cssModule}
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
};
