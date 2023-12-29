import * as React from 'react';
import { isCSSModule } from './utils';

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
  cssModule: Style;
  errors: any;
  touched: any;
  componentName?: string;
  fields: CustomField[];
}

type FieldProps = Omit<PassedProps, 'cssModule' | 'fields'> & {
  theme: Style;
};

const ce = React.createElement;

const getOptions = (options: string[][]): React.ReactElement[] =>
  options.map(
    (option): React.ReactElement =>
      ce('option', { key: option[0], value: option[0] }, option[1]),
  );

function Field(props: CustomField & FieldProps): JSX.Element | null {
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
    values,
    errors,
    touched,
    theme,
    componentName,
  } = props;
  let Element;

  if (element === 'input') {
    Element = ce('input', {
      type,
      name,
      id: `${componentName}-form-${name}`,
      className: `${isCSSModule(theme.input, `unl-${componentName}__input`)} ${
        touched[name] && errors[name]
          ? isCSSModule(theme.inputError, `unl-${componentName}__input-error`)
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
      throw new Error(
        'Must provide and options prop for a select element field',
      );

    Element = ce(
      'select',
      {
        name,
        id: `${componentName}-form-${name}`,
        className: `${isCSSModule(
          theme.input,
          `unl-${componentName}__input`,
        )} ${
          touched[name] && errors[name]
            ? isCSSModule(theme.inputError, `unl-${componentName}__input-error`)
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
      className: `${isCSSModule(
        theme.checkbox,
        `unl-${componentName}__checkbox`,
      )} ${
        touched[name] && errors[name]
          ? isCSSModule(theme.inputError, `unl-${componentName}__input-error`)
          : ''
      }`,
      onChange: handleChange,
      onBlur: handleBlur,
      defaultChecked: values[name],
      value,
      ...custAttrs,
    });
  }
  if (element === 'textarea') {
    Element = ce('textarea', {
      name,
      id: `${componentName}-form-${name}`,
      className: `${isCSSModule(
        theme.textarea,
        `unl-${componentName}__textarea`,
      )} ${
        touched[name] && errors[name]
          ? isCSSModule(theme.inputError, `unl-${componentName}__input-error`)
          : ''
      }`,
      onChange: handleChange,
      onBlur: handleBlur,
      defaultValue: value,
      ...custAttrs,
    });
  }

  const htmlFor =
    custAttrs && 'id' in custAttrs
      ? custAttrs.id
      : `${componentName}-form-${name}`;

  return (
    <>
      <label
        htmlFor={htmlFor}
        className={`${theme.label} unl-${componentName}__label`}
      >
        {label}
      </label>
      {Element}
      {touched[name] && errors[name] && (
        <div
          className={isCSSModule(
            theme.errorMessage,
            `unl-${componentName}__error-message`,
          )}
        >
          <small>{errors[name]}</small>
        </div>
      )}
    </>
  );
}

export function CustomFields({
  fields,
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
  cssModule: theme,
  componentName = 'unknown',
}: PassedProps): JSX.Element {
  return (
    <div>
      {fields.map(
        (field): React.ReactElement => (
          <div
            key={field.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={isCSSModule(
              theme.formGroup,
              `unl-${componentName}__form-group`,
            )}
          >
            <Field
              errors={errors}
              touched={touched}
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values[field.name]}
              values={values}
              theme={theme}
              componentName={componentName}
              {...field}
            />
          </div>
        ),
      )}
    </div>
  );
}
