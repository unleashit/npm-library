import * as React from 'react';
import { Schema } from 'yup';
import { Field, Form, FormikProps, withFormik } from 'formik';
import { CustomFields, CustomField, CustomInput } from '@unleashit/common';
import {
  LoginLoader,
  LoginHeader,
  LoginHeaderProps,
  LoginLoaderProps,
} from './defaults/components';
import schema from './defaults/validations';
import * as defaultStyle from './scss/login.scss';

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
    cssModuleStyles,
    forgotPassword,
    forgotPasswordLink,
    forgotPasswordText,
    orLine,
    children,
  } = props;

  const style = cssModuleStyles || defaultStyle;

  return (
    <div className={`${style.loginContainer} unl-login__container`}>
      <Header signupUrl={signupUrl} style={style} />
      {errors.serverAuth && (
        <div className={`${style.serverAuthError} unl-login__server-auth-error`}>
          {errors.serverAuth}
        </div>
      )}
      {isSubmitting ? (
        <Loader style={style} />
      ) : (
        <Form className={`${style.form} unl-login__form`}>
          {customFields ? (
            <CustomFields
              fields={customFields}
              values={values}
              errors={errors}
              touched={touched}
              handleChange={handleChange}
              handleBlur={handleBlur}
              cssModuleStyles={style}
              componentName="login"
            />
          ) : (
            <React.Fragment>
              <Field
                type="text"
                name="email"
                component={CustomInput}
                cssModuleStyles={style}
                componentName="login"
              />
              <Field
                type="password"
                name="password"
                component={CustomInput}
                cssModuleStyles={style}
                componentName="login"
              />
            </React.Fragment>
          )}
          <button type="submit" className={`${style.button} unl-login__button`}>
            Login
          </button>
          {children && (
            <div className={`${style.socialLogins} unl-login__social-logins`}>
              {orLine && (
                <div className={`${style.orLine} unl-login__or-line`}>
                  <span>or</span>
                </div>
              )}
              {children}
            </div>
          )}
          {forgotPassword ? (
            <div
              className={`${style.forgotPasswordLink} unl-login__forgot-password-link`}
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
