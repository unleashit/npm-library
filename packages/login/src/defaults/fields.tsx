import * as React from 'react';
import { FieldProps } from 'formik';
import * as style from '../scss/login.scss';

const sentenceCase = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
};

export const CustomInput: React.FC<FieldProps<any>> = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}): JSX.Element => (
  <div className={style.loginFormGroup}>
    <label htmlFor={`login-form-${field.name}`} className={style.loginLabel}>
      {sentenceCase(field.name)}
    </label>
    <input
      type="text"
      {...field}
      {...props}
      id={`login-form-${field.name}`}
      className={`${style.loginInput} ${
        touched[field.name] && errors[field.name] ? style.loginInputError : ''
        }`}
    />
    {touched[field.name] && errors[field.name] && (
      <div className={style.errorMessage}>
        <small>{errors[field.name]}</small>
      </div>
    )}
  </div>
);
