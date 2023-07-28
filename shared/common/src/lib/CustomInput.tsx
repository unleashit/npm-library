import { FieldProps } from 'formik';
import * as React from 'react';

import { isCSSModule, convertToSentence } from './utils';

interface CustomInputProps {
  cssModule: {
    [key: string]: string;
  };
  componentName: string;
}

export const CustomInput: React.FC<FieldProps<any> & CustomInputProps> = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  cssModule: style,
  componentName = 'unknown',
  ...props
}): JSX.Element => (
  <div
    className={isCSSModule(style.formGroup, `unl-${componentName}__form-group`)}
  >
    <label
      htmlFor={`${componentName}-form-${field.name}`}
      className={isCSSModule(style.label, `unl-${componentName}__label`)}
    >
      {convertToSentence(field.name)}
    </label>
    <input
      type="text"
      {...field}
      {...props}
      id={`${componentName}-form-${field.name}`}
      className={`${isCSSModule(style.input, `unl-${componentName}__input`)} ${
        touched[field.name] && errors[field.name]
          ? isCSSModule(style.inputError, `unl-${componentName}__input-error`)
          : ''
      }`}
    />
    {touched[field.name] && errors[field.name] && (
      <div
        className={isCSSModule(
          style.errorMessage,
          `unl-${componentName}__error-message`,
        )}
      >
        <small>{String(errors[field.name])}</small>
      </div>
    )}
  </div>
);
