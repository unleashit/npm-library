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

interface FormValues {
  newPassword: string;
  newPasswordConfirm: string;
  serverMessage: string;
}

interface ForgotPasswordHandlerResetResponse {
  success: boolean;
  errors?: {
    serverMessage: string; // error msg to print in browser when auth fails
    [key: string]: string; // optionally validate anything else on server
  };
}

interface ForgotPasswordResetProps {
  onSuccess?: (resp: any) => any;
  forgotPasswordResetHandler: (
    values: any,
  ) => Promise<ForgotPasswordHandlerResetResponse>;
  header: React.FC<ForgotPasswordHeaderProps>;
  loader: React.FC<ForgotPasswordLoaderProps>;
  schema: Schema<any>;
  showDefaultConfirmation: boolean;
  cssModuleStyles?: { [key: string]: string };
}

const ForgotPasswordResetRaw: React.FC<
  FormikProps<FormValues> & ForgotPasswordResetProps
> = (props): React.ReactElement => {
  const {
    errors,
    header: Header,
    loader: Loader,
    isSubmitting,
    cssModuleStyles: theme = {},
    onSuccess,
    status,
    children,
  } = props;

  if (status) {
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

ForgotPasswordResetRaw.defaultProps = {
  header: ForgotPasswordResetHeader,
  loader: ForgotPasswordLoader,
  showDefaultConfirmation: false,
};

export const ForgotPasswordReset = withFormik<ForgotPasswordResetProps, FormValues>({
  mapPropsToValues: (): any => ({
    newPassword: '',
    newPasswordConfirm: '',
    serverMessage: '',
  }),
  validationSchema: (props: any): Schema<any> => (props.schema ? props.schema : schema),
  handleSubmit: async (
    values,
    { props, setSubmitting, setErrors, setStatus },
  ): Promise<any> => {
    try {
      const resp: ForgotPasswordHandlerResetResponse = await props.forgotPasswordResetHandler(
        { ...values },
      );
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
