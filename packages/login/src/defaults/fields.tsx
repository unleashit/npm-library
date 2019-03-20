import * as React from 'react';
import { FieldProps } from 'formik';

interface CustomInputProps {
  cssModuleStyle: {
    [key: string]: string;
  };
}

const sentenceCase = (str: string): string => {
  return (
    str.charAt(0).toUpperCase() +
    str
      .slice(1)
      .split(/(?=[A-Z])/)
      .join(' ')
  );
};

export const CustomInput: React.FC<FieldProps<any> & CustomInputProps> = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  cssModuleStyle: style,
  ...props
}): JSX.Element => (
  <div className={`${style.formGroup} unl-login__form-group`}>
    <label
      htmlFor={`login-form-${field.name}`}
      className={`${style.label} unl-login__label`}
    >
      {sentenceCase(field.name)}
    </label>
    <input
      type="text"
      {...field}
      {...props}
      id={`login-form-${field.name}`}
      className={`${style.input} unl-login__input ${
        touched[field.name] && errors[field.name]
          ? `${style.inputError} unl-login__input-error`
          : ''
      }`}
    />
    {touched[field.name] && errors[field.name] && (
      <div className={`${style.errorMessage} unl-login__error-message`}>
        <small>{errors[field.name]}</small>
      </div>
    )}
  </div>
);
