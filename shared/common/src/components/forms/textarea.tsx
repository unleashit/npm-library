import React from 'react';
import { TextAreaProps } from '../../types';
import { FieldGroup } from './fieldGroup';

export const Textarea = ({
  componentName,
  label,
  register,
  error,
  clsName,
  ...attrs
}: TextAreaProps) => (
  <FieldGroup
    componentName={componentName}
    label={label}
    fieldName={register.name}
    error={error}
    clsName={clsName}
  >
    <textarea
      className={`${clsName('textarea')} ${error ? clsName('inputError') : ''}`}
      id={`${componentName}-form-${register.name}`}
      {...register}
      {...attrs}
    />
  </FieldGroup>
);
