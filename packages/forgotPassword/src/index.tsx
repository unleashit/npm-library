import * as React from 'react';
import { Schema } from 'yup';
import { Field, Form, FormikProps, withFormik } from 'formik';
import { CustomFields, CustomField, CustomInput, isCSSModule } from '@unleashit/common';
import {
  ForgotPasswordLoader,
  ForgotPasswordHeader,
  ForgotPasswordHeaderProps,
  ForgotPasswordLoaderProps,
  ForgotPasswordSuccessMessage,
} from './defaults/components';
import schema from './defaults/validations';

interface FormValues {
  email: string;
  serverMessage: string;
}

interface ForgotPasswordHandlerResponse {
  success: boolean;
  errors?: {
    serverMessage: string; // error msg to print in browser when auth fails
    [key: string]: string; // optionally validate anything else on server
  };
}

interface Props {
  onSuccess?: (resp: any) => any;
  forgotPasswordHandler: (values: any) => Promise<ForgotPasswordHandlerResponse>;
  header: React.FC<ForgotPasswordHeaderProps>;
  loader: React.FC<ForgotPasswordLoaderProps>;
  schema: Schema<any>;
  customFields?: CustomField[];
  cssModuleStyles?: { [key: string]: string };
  showDefaultConfirmation: boolean;
}

export const ForgotPassword: React.FC<FormikProps<FormValues> & Props> = (
  props,
): React.ReactElement => {
  const {
    errors,
    header: Header,
    loader: Loader,
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
            <React.Fragment>
              <Field
                type="text"
                name="email"
                component={CustomInput}
                cssModuleStyles={theme}
                componentName="forgot-password"
              />
            </React.Fragment>
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

ForgotPassword.defaultProps = {
  header: ForgotPasswordHeader,
  loader: ForgotPasswordLoader,
  showDefaultConfirmation: false,
};

export default withFormik<Props, FormValues>({
  mapPropsToValues: (): any => ({ email: '', serverMessage: '' }),
  validationSchema: (props: any): Schema<any> => (props.schema ? props.schema : schema),
  handleSubmit: async (
    values,
    { props, setFieldValue, setSubmitting, setErrors, setStatus },
  ): Promise<any> => {
    try {
      const resp: ForgotPasswordHandlerResponse = await props.forgotPasswordHandler(
        values,
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
