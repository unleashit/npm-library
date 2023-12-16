import React from 'react';
import { ClsName, InputProps } from '../../types';

interface FieldGroupProps {
  componentName: string;
  fieldName: string;
  label?: string;
  error: Partial<InputProps['error']>;
  clsName: ClsName;
  children: React.ReactNode;
}

export function FieldGroup({
  fieldName,
  label,
  error,
  componentName,
  clsName,
  children,
}: FieldGroupProps) {
  return (
    <div className={clsName(`fieldGroup`)}>
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
