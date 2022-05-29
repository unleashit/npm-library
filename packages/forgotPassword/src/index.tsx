import { CustomField, CustomFields, CustomInput, isCSSModule } from '@unleashit/common';
import { Field, Form, FormikProps, withFormik } from 'formik';
import * as React from 'react';
import { SchemaOf } from 'yup';

import {
  ForgotPasswordHeader,
  ForgotPasswordHeaderProps,
  ForgotPasswordLoader,
  ForgotPasswordLoaderProps,
  ForgotPasswordSuccessMessage,
} from './defaults/components';
import schema from './defaults/validations';

export interface FormValues {
  email: string;
  serverMessage: string;
}
export interface ServerResponse {
  success: boolean;
  errors?: {
    serverMessage: string; // error msg to print in browser when auth fails
    [key: string]: string; // optionally validate anything else on server
  };
}
export interface ForgotPasswordProps {
  forgotPasswordHandler: (values: FormValues) => Promise<ServerResponse>;
  onSuccess?: (resp: ServerResponse) => any;
  header?: React.FC<ForgotPasswordHeaderProps>;
  loader?: React.FC<ForgotPasswordLoaderProps>;
  schema?: SchemaOf<any>;
  customFields?: CustomField[];
  cssModuleStyles?: { [key: string]: string };
  showDefaultConfirmation?: boolean;
  children?: React.ReactNode;
}

export const ForgotPassword = (
  props: FormikProps<FormValues> & ForgotPasswordProps,
): React.ReactElement => {
  const {
    errors,
    header: Header = ForgotPasswordHeader,
    loader: Loader = ForgotPasswordLoader,
    isSubmitting,
    handleChange,
    handleBlur,
    values,
    touched,
    customFields,
    cssModuleStyles: theme = {},
    onSuccess,
    status,
    children,
  } = props;

  if (status) {
    return React.isValidElement(onSuccess) ? (
      onSuccess
    ) : (
      <ForgotPasswordSuccessMessage theme={theme} />
    );
  }

  return (
    <div className={isCSSModule(theme.container, `unl-forgot-password__container`)}>
      <Header theme={theme} />
      {errors.serverMessage && (
        <div
          className={isCSSModule(
            theme.serverAuthError,
            `unl-forgot-password__server-auth-error`,
          )}
        >
          {errors.serverMessage}
        </div>
      )}
      {isSubmitting ? (
        <Loader theme={theme} />
      ) : (
        <Form className={isCSSModule(theme.form, `unl-forgot-password__form`)}>
          {customFields ? (
            <CustomFields
              fields={customFields}
              values={values}
              errors={errors}
              touched={touched}
              handleChange={handleChange}
              handleBlur={handleBlur}
              cssModuleStyles={theme}
              componentName="forgot-password"
            />
          ) : (
            <Field
              type="text"
              name="email"
              component={CustomInput}
              cssModuleStyles={theme}
              componentName="forgot-password"
            />
          )}
          <button
            type="submit"
            className={isCSSModule(theme.button, `unl-forgot-password__button`)}
          >
            Send
          </button>
          {children && (
            <div className={isCSSModule(theme.footer, `unl-forgot-password__footer`)}>
              {children}
            </div>
          )}
        </Form>
      )}
    </div>
  );
};

export default withFormik<ForgotPasswordProps, FormValues>({
  mapPropsToValues: (): any => ({ email: '', serverMessage: '' }),
  validationSchema: (props: ForgotPasswordProps): SchemaOf<any> =>
    props.schema ? props.schema : schema,
  handleSubmit: async (
    values,
    { props, setFieldValue, setSubmitting, setErrors, setStatus },
  ): Promise<any> => {
    try {
      const resp: ServerResponse = await props.forgotPasswordHandler(values);
      const errors = resp.errors || {};

      if (resp.success) {
        const isComponent = props.onSuccess && React.isValidElement(props.onSuccess);

        if (props.onSuccess && !isComponent) {
          props.onSuccess(resp);
        }
        if (isComponent || props.showDefaultConfirmation) {
          setStatus({ success: true });
          setSubmitting(false);
        }
      } else {
        setFieldValue('email', '', false);
        setErrors(errors);
        setSubmitting(false);
      }
    } catch (err) {
      setSubmitting(false);
      console.error(err);
    }
  },
})(ForgotPassword);

export * from './forgotPasswordReset';
