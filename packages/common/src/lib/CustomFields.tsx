import * as React from 'react';
// import * as style from '../scss/customFields.scss';

export interface CustomField {
  element: 'input' | 'select' | 'textarea';
  type: string;
  name: string;
  label: string;
  options?: string[][];
  defaultChecked?: boolean;
  custAttrs?: { [key: string]: string };
}

export interface PassedProps {
  handleChange: any;
  handleBlur: any;
  values?: any;
  value?: any;
  style?: any;
  errors: any;
  touched: any;
}

const ce = React.createElement;

const getOptions = (options: string[][]): React.ReactElement[] => {
  return options.map(option => {
    return ce('option', { key: option[0], value: option[0] }, option[1]);
  });
};

function Field(props: CustomField & PassedProps): JSX.Element | null {
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
    defaultChecked,
    style
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
  style
}: {
  fields: CustomField[]
} & PassedProps): JSX.Element {
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
            style={style}
            {...field}
          />
        </div>
      ))}
    </div>
  );
}
