import * as React from 'react';
import { Schema } from 'yup';
import { Field, Form, FormikProps, withFormik } from 'formik';
import { CustomInput } from '@unleashit/common';
import {
  ForgotPasswordLoader,
  ForgotPasswordResetHeader,
  ForgotPasswordHeaderProps,
  ForgotPasswordLoaderProps,
  ForgotPasswordResetSuccessMessage,
} from './defaults/components';
import schema from './defaults/validationsReset';
import * as defaultStyle from './scss/forgotPassword.scss';

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

const ForgotPasswordResetRaw: React.FC<FormikProps<FormValues> & ForgotPasswordResetProps> = (
  props,
): React.ReactElement => {
  const {
    errors,
    header: Header,
    loader: Loader,
    isSubmitting,
    cssModuleStyles,
    onSuccess,
    status,
    children,
  } = props;

  const style = cssModuleStyles || defaultStyle;

  if (status) {
    return React.isValidElement(onSuccess) ? (
      onSuccess
    ) : (
      <ForgotPasswordResetSuccessMessage style={style} />
    );
  }

  return (
    <div className={`${style.container} unl-forgot-password__container`}>
      <Header style={style} />
      {errors.serverMessage && (
        <div
          className={`${style.serverMessageError} unl-forgot-password__server-auth-error`}
        >
          {errors.serverMessage}
        </div>
      )}
      {isSubmitting ? (
        <Loader style={style} />
      ) : (
        <Form className={`${style.form} unl-forgot-password__form`}>
          <Field
            type="password"
            name="newPassword"
            component={CustomInput}
            cssModuleStyles={style}
            componentName="Password"
          />
          <Field
            type="password"
            name="newPasswordConfirm"
            component={CustomInput}
            cssModuleStyles={style}
            componentName="Confirm Password"
          />
          <button type="submit" className={`${style.button} unl-forgot-password__button`}>
            Send
          </button>
          {children && (
            <div className={`${style.footer} unl-forgot-password__footer`}>
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
