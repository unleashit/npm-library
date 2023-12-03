import React from 'react';
import { genClassNames } from '../../lib/utils';
import { TextAreaProps } from '../../types';
import { FieldGroup } from './fieldGroup';

export const Textarea = ({
  componentName,
  label,
  register,
  error,
  cssModule = {},
  ...attrs
}: TextAreaProps) => {
  const { clsName } = genClassNames(componentName, cssModule);
  return (
    <FieldGroup
      componentName={componentName}
      label={label}
      fieldName={register.name}
      error={error}
      cssModule={cssModule}
    >
      <textarea
        className={`${clsName('textarea')} ${error && clsName('inputError')}`}
        id={`${componentName}-form-${register.name}`}
        {...register}
        {...attrs}
      />
    </FieldGroup>
  );
};
