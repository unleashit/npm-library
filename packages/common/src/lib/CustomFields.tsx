import * as React from 'react';
import * as style from '../scss/customFields.scss';

export interface CustomField {
  element: 'input' | 'select' | 'textarea';
  type: string;
  name: string;
  label: string;
  options?: string[][];
  defaultChecked?: boolean;
  custAttrs?: { [key: string]: string };
}

export interface PassedFormikProps {
  handleChange: any;
  handleBlur: any;
  values?: any;
  value?: any; // added for simplicity, not passed down from parent
  errors: any;
  touched: any;
}

const ce = React.createElement;

const getOptions = (options: string[][]): any => {
  return options.map(option => {
    return ce('option', { key: option[0], value: option[0] }, option[1]);
  });
};

const Field = (props: CustomField & PassedFormikProps): JSX.Element | null => {
  const {
    element,
    type,
    name,
    options,
    label,
    custAttrs,
    handleChange,
    handleBlur,
    value,
    errors,
    touched,
    defaultChecked
  } = props;
  let Element;

  if (element === 'input') {
    Element = ce('input', {
      type,
      name,
      id: `signup-form-${name}`,
      className: `${style.signupInput}`,
      onChange: handleChange,
      onBlur: handleBlur,
      defaultValue: value,
      ...custAttrs,
    });
  }
  if (element === 'select') {
    if (!options) throw new Error('Must provide and options prop for a select element field');

    Element = ce(
      'select',
      {
        name,
        id: `signup-form-${name}`,
        className: `${style.signupInput}`,
        onChange: handleChange,
        onBlur: handleBlur,
        defaultValue: value,
        ...custAttrs,
      },
      getOptions(options),
    );
  }
  if (element === 'input' && type === 'checkbox') {
    Element = ce('input', {
      type: 'checkbox',
      name,
      id: `signup-form-${name}`,
      className: `${style.signupCheckbox}`,
      onChange: handleChange,
      onBlur: handleBlur,
      defaultChecked,
      defaultValue: value,
      ...custAttrs,
    });
  }
  if (element === 'textarea') {
    Element = ce('textarea', {
      name,
      id: `signup-form-${name}`,
      className: `${style.signupTextarea}`,
      onChange: handleChange,
      onBlur: handleBlur,
      defaultValue: value,
      ...custAttrs,
    });
  }

  const htmlFor = custAttrs && 'id' in custAttrs ? custAttrs.id : `signup-form-${name}`;

  return (
    <React.Fragment>
      <label htmlFor={htmlFor} className={style.signupLabel}>
        {label}
      </label>
      {Element}
      {touched[name] && errors[name] && (
        <div className={style.errorMessage}>
          <small>{errors[name]}</small>
        </div>
      )}
    </React.Fragment>
  );
};

export function CustomFields({
  fields,
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
}: {
  fields: CustomField[]
} & PassedFormikProps): JSX.Element {
  return (
    <div>
      {fields.map(field => (
        <div
          key={field.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={style.signupFormGroup}
        >
          <Field
            errors={errors}
            touched={touched}
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={values[field.name]}
            {...field}
          />
        </div>
      ))}
    </div>
  );
}
