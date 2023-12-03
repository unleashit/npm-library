import React from 'react';
import { FieldGroup } from './fieldGroup';
import { genClassNames } from '../../lib/utils';
import { InputProps } from '../../types';

export const Input = ({
  type,
  label,
  register,
  error,
  componentName,
  cssModule = {},
  ...attrs
}: InputProps) => {
  const { clsName } = genClassNames(componentName, cssModule);
  return (
    <FieldGroup
      componentName={componentName}
      label={label}
      fieldName={register.name}
      error={error}
      cssModule={cssModule}
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
};
