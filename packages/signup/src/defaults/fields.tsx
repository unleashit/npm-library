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
  <div className={style.signupFormGroup}>
    <label htmlFor={`signup-form-${field.name}`} className={style.signupLabel}>
      {sentenceCase(field.name)}
    </label>
    <input
      type="text"
      {...field}
      {...props}
      id={`signup-form-${field.name}`}
      className={`${style.signupInput} ${
        touched[field.name] && errors[field.name] ? style.signupInputError : ''
        }`}
    />
    {touched[field.name] && errors[field.name] && (
      <div className={style.errorMessage}>
        <small>{errors[field.name]}</small>
      </div>
    )}
  </div>
);
