import React from 'react';
import { genClassNames } from '../utils';
import { InputProps } from './types';

interface FieldGroupProps {
  componentName: string;
  fieldName: string;
  label?: string;
  error: Partial<InputProps['error']>;
  cssModule: Record<string, string>;
  children: React.ReactNode;
}

export function FieldGroup({
  fieldName,
  label,
  error,
  componentName,
  cssModule = {},
  children,
}: FieldGroupProps) {
  const { clsName } = genClassNames(componentName, cssModule);
  return (
    <div className={clsName(`formGroup`)}>
      {label && (
        <label
          htmlFor={`${componentName}-form-${fieldName}`}
          className={clsName(`label`)}
        >
          {label}
        </label>
      )}
      {children}
      {error?.message && (
        <span className={clsName('errorMessage')}>{error.message}</span>
      )}
    </div>
  );
}
