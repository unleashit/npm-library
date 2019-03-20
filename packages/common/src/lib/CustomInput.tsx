import * as React from 'react';
import { FieldProps } from 'formik';

interface CustomInputProps {
  cssModuleStyles: {
    [key: string]: string;
  };
  componentName: string;
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
  cssModuleStyles: style,
  componentName = 'unknown',
  ...props
}): JSX.Element => (
  <div className={`${style.formGroup} unl-${componentName}__form-group`}>
    <label
      htmlFor={`${componentName}-form-${field.name}`}
      className={`${style.label} unl-${componentName}__label`}
    >
      {sentenceCase(field.name)}
    </label>
    <input
      type="text"
      {...field}
      {...props}
      id={`${componentName}-form-${field.name}`}
      className={`${style.input} unl-${componentName}__input ${
        touched[field.name] && errors[field.name]
          ? `${style.inputError} unl-${componentName}__input-error`
          : ''
      }`}
    />
    {touched[field.name] && errors[field.name] && (
      <div className={`${style.errorMessage} unl-${componentName}__error-message`}>
        <small>{errors[field.name]}</small>
      </div>
    )}
  </div>
);
