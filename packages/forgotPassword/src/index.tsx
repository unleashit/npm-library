import {
  CustomField,
  CustomFields,
  CustomInput,
  isCSSModule,
} from '@unleashit/common';
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
  serverAuth: string;
}
export interface ServerResponse {
  success: boolean;
  errors?: {
    serverAuth: string; // error msg to print in browser when auth fails
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
  showDefaultConfirmation?: boolean;
  failMsg?: string; // loginHandler failure msg
  toast?: (msg: string) => void; // optionally will call toast function with server or fail msgs
  cssModule?: { [key: string]: string };
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
    cssModule: theme = {},
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
    <div
      className={isCSSModule(theme.container, `unl-forgot-password__container`)}
    >
      <Header theme={theme} />
      {errors.serverAuth && (
        <div
          className={isCSSModule(
            theme.serverAuthError,
            `unl-forgot-password__server-auth-error`,
          )}
        >
          {errors.serverAuth}
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
              cssModule={theme}
              componentName="forgot-password"
            />
          ) : (
            <Field
              type="text"
              name="email"
              component={CustomInput}
              cssModule={theme}
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
            <div
              className={isCSSModule(
                theme.footer,
                `unl-forgot-password__footer`,
              )}
            >
              {children}
            </div>
          )}
        </Form>
      )}
    </div>
  );
};

export default withFormik<ForgotPasswordProps, FormValues>({
  mapPropsToValues: (): any => ({ email: '', serverAuth: '' }),
  validationSchema: (props: ForgotPasswordProps): SchemaOf<any> =>
    props.schema ? props.schema : schema,
  handleSubmit: async (
    values,
    { props, setFieldValue, setSubmitting, setErrors, setStatus },
  ): Promise<any> => {
    try {
      const resp: ServerResponse = await props.forgotPasswordHandler(values);
      const errors: ServerResponse['errors'] | Record<string, never> =
        resp.errors || {};

      if (resp.success) {
        const isComponent =
          props.onSuccess && React.isValidElement(props.onSuccess);

        if (props.onSuccess && !isComponent) {
          props.onSuccess(resp);
        }
        if (isComponent || props.showDefaultConfirmation) {
          setStatus({ success: true });
          setSubmitting(false);
        }
      } else {
        setFieldValue('email', '', false);

        if (props.toast && errors.serverAuth) {
          props.toast(errors.serverAuth);
        }

        setErrors(errors);
        setSubmitting(false);
      }
    } catch (err) {
      console.error(err);

      const failMsg = props.failMsg || 'Failed to Fetch. Are you online?';

      if (props.toast) {
        props.toast(failMsg);
      }

      setErrors({ serverAuth: failMsg });
      setSubmitting(false);
    }
  },
})(ForgotPassword);

export * from './forgotPasswordReset';
