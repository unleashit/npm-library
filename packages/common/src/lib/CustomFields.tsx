import * as React from 'react';

export interface CustomField {
  element: 'input' | 'select' | 'textarea';
  type: string;
  name: string;
  label: string;
  options?: string[][];
  defaultChecked?: boolean;
  custAttrs?: { [key: string]: string };
}

interface Style {
  [key: string]: string;
}

export interface PassedProps {
  handleChange: any;
  handleBlur: any;
  values?: any;
  value?: any;
  cssModuleStyles: Style;
  errors: any;
  touched: any;
  componentName?: string;
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
    cssModuleStyles: style,
    componentName,
  } = props;
  let Element;

  if (element === 'input') {
    Element = ce('input', {
      type,
      name,
      id: `${componentName}-form-${name}`,
      className: `${style.input} unl-${componentName}__input ${
        touched[name] && errors[name]
          ? `${style.inputError} unl-${componentName}__input-error`
          : ''
      }`,
      onChange: handleChange,
      onBlur: handleBlur,
      defaultValue: value,
      ...custAttrs,
    });
  }
  if (element === 'select') {
    if (!options)
      throw new Error('Must provide and options prop for a select element field');

    Element = ce(
      'select',
      {
        name,
        id: `${componentName}-form-${name}`,
        className: `${style.input} unl-${componentName}__input ${
          touched[name] && errors[name]
            ? `${style.inputError} unl-${componentName}__input-error`
            : ''
        }`,
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
      id: `${componentName}-form-${name}`,
      className: `${style.checkbox} unl-${componentName}__checkbox ${
        touched[name] && errors[name]
          ? `${style.inputError} unl-${componentName}__input-error`
          : ''
      }`,
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
      id: `${componentName}-form-${name}`,
      className: `${style.textarea} unl-${componentName}__textarea ${
        touched[name] && errors[name]
          ? `${style.inputError} unl-${componentName}__input-error`
          : ''
      }`,
      onChange: handleChange,
      onBlur: handleBlur,
      defaultValue: value,
      ...custAttrs,
    });
  }

  const htmlFor =
    custAttrs && 'id' in custAttrs ? custAttrs.id : `${componentName}-form-${name}`;

  return (
    <React.Fragment>
      <label htmlFor={htmlFor} className={`${style.label} unl-${componentName}__label`}>
        {label}
      </label>
      {Element}
      {touched[name] && errors[name] && (
        <div className={`${style.errorMessage} unl-${componentName}__error-message`}>
          <small>{errors[name]}</small>
        </div>
      )}
    </React.Fragment>
  );
}

export function CustomFields({
  fields,
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
  cssModuleStyles,
  componentName = 'unknown',
}: {
  fields: CustomField[];
} & PassedProps): JSX.Element {
  return (
    <div>
      {fields.map(field => (
        <div
          key={field.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${cssModuleStyles.formGroup} unl-${componentName}__form-group`}
        >
          <Field
            errors={errors}
            touched={touched}
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={values[field.name]}
            cssModuleStyles={cssModuleStyles}
            componentName={componentName}
            {...field}
          />
        </div>
      ))}
    </div>
  );
}
