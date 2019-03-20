import * as React from 'react';
import { FieldProps } from 'formik';
import * as style from '../scss/signup.scss';

const sentenceCase = (str: string): string => {
  return str
    .charAt(0).toUpperCase() + str.slice(1)
    .split(/(?=[A-Z])/)
    .join(' ')
};

export const CustomInput: React.FC<FieldProps<any>> = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}): JSX.Element => (
  <div className={`${style.formGroup} unl-signup__form-group`}>
    <label htmlFor={`signup-form-${field.name}`} className={`${style.label} unl-signup__label`}>
      {sentenceCase(field.name)}
    </label>
    <input
      type="text"
      {...field}
      {...props}
      id={`signup-form-${field.name}`}
      className={`${style.input} unl-signup__input ${
        touched[field.name] && errors[field.name] ? `${style.inputError} unl-signup__input-error` : ''
        }`}
    />
    {touched[field.name] && errors[field.name] && (
      <div className={`${style.errorMessage} unl-signup__error-message`}>
        <small>{errors[field.name]}</small>
      </div>
    )}
  </div>
);
