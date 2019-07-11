import * as React from 'react';
import { Schema } from 'yup';
import { Field, Form, FormikProps, withFormik } from 'formik';
import { CustomInput, isCSSModule } from '@unleashit/common';
import {
  ForgotPasswordLoader,
  ForgotPasswordResetHeader,
  ForgotPasswordHeaderProps,
  ForgotPasswordLoaderProps,
  ForgotPasswordResetSuccessMessage,
} from './defaults/components';
import schema from './defaults/validationsReset';

export interface FormValuesReset {
  newPassword: string;
  newPasswordConfirm: string;
  serverMessage: string;
}

export interface ServerResponseReset {
  success: boolean;
  errors?: {
    serverMessage: string; // error msg to print in browser when auth fails
    [key: string]: string; // optionally validate anything else on server
  };
}

interface ForgotPasswordResetProps {
  forgotPasswordResetHandler: (values: any) => Promise<ServerResponseReset>;
  onSuccess?: (resp: any) => any;
  header?: React.FC<ForgotPasswordHeaderProps>;
  loader?: React.FC<ForgotPasswordLoaderProps>;
  schema?: Schema<any>;
  showDefaultConfirmation?: boolean;
  cssModuleStyles?: { [key: string]: string };
}

const ForgotPasswordResetRaw: React.FC<
  FormikProps<FormValuesReset> & ForgotPasswordResetProps
> = (props): React.ReactElement => {
  const {
    errors,
    header: Header = ForgotPasswordResetHeader,
    loader: Loader = ForgotPasswordLoader,
    isSubmitting,
    cssModuleStyles: theme = {},
    onSuccess,
    status,
    children,
  } = props;

  if (status) {
    // server response successful and showDefaultConfirmation is set to true
    return React.isValidElement(onSuccess) ? (
      onSuccess
    ) : (
      <ForgotPasswordResetSuccessMessage theme={theme} />
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
          <Field
            type="password"
            name="newPassword"
            component={CustomInput}
            cssModuleStyles={theme}
            componentName="forgot-password"
          />
          <Field
            type="password"
            name="newPasswordConfirm"
            component={CustomInput}
            cssModuleStyles={theme}
            componentName="forgot-password"
          />
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

export const ForgotPasswordReset = withFormik<ForgotPasswordResetProps, FormValuesReset>({
  mapPropsToValues: (): any => ({
    newPassword: '',
    newPasswordConfirm: '',
    serverMessage: '',
  }),
  validationSchema: (props: ForgotPasswordResetProps): Schema<any> =>
    props.schema ? props.schema : schema,
  handleSubmit: async (
    values,
    { props, setSubmitting, setErrors, setStatus },
  ): Promise<any> => {
    try {
      const resp: ServerResponseReset = await props.forgotPasswordResetHandler({
        ...values,
      });
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
        // setFieldValue('newPassword', '', false);
        // setFieldValue('newPasswordConfirm', '', false);
        setErrors(errors);
        setSubmitting(false);
      }
    } catch (err) {
      setSubmitting(false);
      console.error(err);
    }
  },
})(ForgotPasswordResetRaw);
