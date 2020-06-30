import * as React from 'react';
import { Schema } from 'yup';
import { Field, Form, FormikProps, withFormik } from 'formik';
import { CustomFields, CustomField, CustomInput, isCSSModule } from '@unleashit/common';
import {
  LoginLoader,
  LoginHeader,
  LoginHeaderProps,
  LoginLoaderProps,
} from './defaults/components';
import schema from './defaults/validations';

export interface FormValues {
  email: string;
  password: string;
  serverAuth: string;
}
export interface ServerResponse {
  success: boolean;
  errors?: {
    serverAuth: string; // error msg to print in browser when auth fails
    [key: string]: string; // optionally validate anything else on server
  };
}
interface Props {
  loginHandler: (values: FormValues) => Promise<ServerResponse>;
  onSuccess: (resp: ServerResponse) => any;
  header?: React.FC<LoginHeaderProps>;
  signupUrl?: string;
  loader?: React.FC<LoginLoaderProps>;
  schema?: Schema<any>;
  customFields?: CustomField[];
  forgotPassword?: boolean;
  forgotPasswordLink?: string;
  forgotPasswordText?: string;
  orLine?: boolean;
  cssModuleStyles?: { [key: string]: string };
  children?: React.ReactNode;
}

export const Login = ({
  errors,
  signupUrl = '/signup',
  header: Header = LoginHeader,
  loader: Loader = LoginLoader,
  isSubmitting,
  handleChange,
  handleBlur,
  values,
  touched,
  customFields,
  forgotPassword = true,
  forgotPasswordLink = '/forgot-password',
  forgotPasswordText = 'Forgot your password?',
  orLine = true,
  cssModuleStyles: theme = {},
  children,
}: FormikProps<FormValues> & Props): React.ReactElement => {
  return (
    <div className={isCSSModule(theme.loginContainer, 'unl-login__container')}>
      <Header signupUrl={signupUrl} theme={theme} />
      {errors.serverAuth && (
        <div
          className={isCSSModule(theme.serverAuthError, 'unl-login__server-auth-error')}
        >
          {errors.serverAuth}
        </div>
      )}
      {isSubmitting ? (
        <Loader theme={theme} />
      ) : (
        <Form className={isCSSModule(theme.form, 'unl-login__form')}>
          {customFields ? (
            <CustomFields
              fields={customFields}
              values={values}
              errors={errors}
              touched={touched}
              handleChange={handleChange}
              handleBlur={handleBlur}
              cssModuleStyles={theme}
              componentName="login"
            />
          ) : (
            <>
              <Field
                type="text"
                name="email"
                component={CustomInput}
                cssModuleStyles={theme}
                componentName="login"
              />
              <Field
                type="password"
                name="password"
                component={CustomInput}
                cssModuleStyles={theme}
                componentName="login"
              />
            </>
          )}
          <button
            type="submit"
            className={isCSSModule(theme.button, 'unl-login__button')}
          >
            Login
          </button>
          {children && (
            <div className={isCSSModule(theme.socialLogins, 'unl-login__social-logins')}>
              {orLine && (
                <div className={isCSSModule(theme.orLine, 'unl-login__or-line')}>
                  <span>or</span>
                </div>
              )}
              {children}
            </div>
          )}
          {forgotPassword ? (
            <div
              className={isCSSModule(
                theme.forgotPasswordLink,
                'unl-login__forgot-password-link',
              )}
            >
              <a href={forgotPasswordLink}>{forgotPasswordText}</a>
            </div>
          ) : null}
        </Form>
      )}
    </div>
  );
};

export default withFormik<Props, FormValues>({
  mapPropsToValues: (): any => ({ email: '', password: '', serverAuth: '' }),
  validationSchema: (props: Props): Schema<any> => (props.schema ? props.schema : schema),
  handleSubmit: async (
    values,
    { props, setFieldValue, setSubmitting, setErrors },
  ): Promise<any> => {
    try {
      const resp: ServerResponse = await props.loginHandler(values);
      const errors = resp.errors || {};

      if (resp.success) {
        props.onSuccess(resp);
      } else {
        setFieldValue('password', '', false);
        setErrors(errors);
        setSubmitting(false);
      }
    } catch (err) {
      setSubmitting(false);
      console.error(err);
    }
  },
})(Login);
