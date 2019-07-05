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

interface FormValues {
  email: string;
  password: string;
  serverAuth: string;
}

interface LoginHandlerResponse {
  success: boolean;
  errors?: {
    serverAuth: string; // error msg to print in browser when auth fails
    [key: string]: string; // optionally validate anything else on server
  };
}

interface Props {
  onSuccess: (resp: any) => any;
  loginHandler: (values: any) => Promise<LoginHandlerResponse>;
  header: React.FC<LoginHeaderProps>;
  signupUrl: string;
  loader: React.FC<LoginLoaderProps>;
  schema: Schema<any>;
  customFields?: CustomField[];
  cssModuleStyles?: { [key: string]: string };
  forgotPassword: boolean;
  forgotPasswordLink: string;
  forgotPasswordText: string;
  orLine: boolean;
}

export const Login: React.FC<FormikProps<FormValues> & Props> = (
  props,
): React.ReactElement => {
  const {
    errors,
    signupUrl,
    header: Header,
    loader: Loader,
    isSubmitting,
    handleChange,
    handleBlur,
    values,
    touched,
    customFields,
    cssModuleStyles: theme,
    forgotPassword,
    forgotPasswordLink,
    forgotPasswordText,
    orLine,
    children,
  } = props;

  return (
    <div className={isCSSModule(theme, 'loginContainer', 'unl-login__container')}>
      <Header signupUrl={signupUrl} theme={theme} />
      {errors.serverAuth && (
        <div
          className={isCSSModule(
            theme,
            'serverAuthError',
            'unl-login__server-auth-error',
          )}
        >
          {errors.serverAuth}
        </div>
      )}
      {isSubmitting ? (
        <Loader theme={theme} />
      ) : (
        <Form className={isCSSModule(theme, 'form', 'unl-login__form')}>
          {customFields ? (
            <CustomFields
              fields={customFields}
              values={values}
              errors={errors}
              touched={touched}
              handleChange={handleChange}
              handleBlur={handleBlur}
              cssModuleStyles={theme || {}}
              componentName="login"
            />
          ) : (
            <React.Fragment>
              <Field
                type="text"
                name="email"
                component={CustomInput}
                cssModuleStyles={theme || {}}
                componentName="login"
              />
              <Field
                type="password"
                name="password"
                component={CustomInput}
                cssModuleStyles={theme || {}}
                componentName="login"
              />
            </React.Fragment>
          )}
          <button
            type="submit"
            className={isCSSModule(theme, 'button', 'unl-login__button')}
          >
            Login
          </button>
          {children && (
            <div
              className={isCSSModule(theme, 'socialLogins', 'unl-login__social-logins')}
            >
              {orLine && (
                <div className={isCSSModule(theme, 'orLine', 'unl-login__or-line')}>
                  <span>or</span>
                </div>
              )}
              {children}
            </div>
          )}
          {forgotPassword ? (
            <div
              className={isCSSModule(
                theme,
                'forgotPasswordLink',
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

Login.defaultProps = {
  header: LoginHeader,
  signupUrl: '/signup',
  loader: LoginLoader,
  forgotPassword: true,
  forgotPasswordLink: '/forgot-password',
  forgotPasswordText: 'Forgot your password?',
  orLine: true,
};

export default withFormik<Props, FormValues>({
  mapPropsToValues: (): any => ({ email: '', password: '', serverAuth: '' }),
  validationSchema: (props: any): Schema<any> => (props.schema ? props.schema : schema),
  handleSubmit: async (
    values,
    { props, setFieldValue, setSubmitting, setErrors },
  ): Promise<any> => {
    try {
      const resp: LoginHandlerResponse = await props.loginHandler(values);
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
