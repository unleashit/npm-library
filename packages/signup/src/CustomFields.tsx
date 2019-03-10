import * as React from 'react';
import * as style from './scss/signup.scss';

interface CustomField {
  elementType: 'input' | 'select' | 'checkbox' | 'radio';
  type: string;
  name: string;
  label: string;
  options?: string[][];
  defaultChecked?: boolean;
  custAttrs?: { [key: string]: string };
}

interface PassedFormikProps {
  handleChange: any;
  handleBlur: any;
  value: any;
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
    elementType,
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

  if (elementType === 'input') {
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
  if (elementType === 'select' && options) {
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
  if (elementType === 'checkbox') {
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

function CustomFields({
  fields,
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
}: {
  fields: CustomField[];
  handleChange: any;
  handleBlur: any;
  values: any;
  errors: any;
  touched: any;
}): JSX.Element {
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

export default CustomFields;
