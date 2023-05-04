import {
  CustomField,
  CustomFields,
  CustomInput,
  isCSSModule,
  DefaultLinkComponent,
} from '@unleashit/common';
import { Field, Form, FormikProps, withFormik } from 'formik';
import * as React from 'react';
import { SchemaOf } from 'yup';

import {
  LoginHeader,
  LoginHeaderProps,
  LoginLoader,
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
  } & { [key: string]: string }; // optionally validate anything else on server with key=name of field, val=error to print;
}
export interface LoginProps {
  loginHandler: (values: FormValues) => Promise<ServerResponse>;
  onSuccess: (resp: ServerResponse) => any;
  header?: React.FC<LoginHeaderProps>;
  signupUrl?: string;
  loader?: React.FC<LoginLoaderProps>;
  schema?: SchemaOf<any>;
  customFields?: CustomField[];
  forgotPassword?: boolean;
  forgotPasswordLink?: string;
  forgotPasswordText?: string;
  orLine?: boolean;
  linkComponent?: React.ComponentType<any>;
  linkComponentHrefAttr?: string;
  failMsg?: string; // loginHandler failure msg
  toast?: (msg: string) => void; // optionally will call toast function with server or fail msgs
  cssModule?: { [key: string]: string };
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
  linkComponent: LinkComponent = DefaultLinkComponent,
  linkComponentHrefAttr = 'href',
  cssModule: theme = {},
  children,
}: FormikProps<FormValues> & LoginProps): React.ReactElement => (
  <div className={isCSSModule(theme.loginContainer, 'unl-login__container')}>
    <Header
      signupUrl={signupUrl}
      theme={theme}
      linkComponent={LinkComponent}
      linkComponentHrefAttr={linkComponentHrefAttr}
    />
    {errors.serverAuth && (
      <div className={isCSSModule(theme.serverAuthError, 'unl-login__server-auth-error')}>
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
            cssModule={theme}
            componentName="login"
          />
        ) : (
          <>
            <Field
              type="text"
              name="email"
              component={CustomInput}
              cssModule={theme}
              componentName="login"
            />
            <Field
              type="password"
              name="password"
              component={CustomInput}
              cssModule={theme}
              componentName="login"
            />
          </>
        )}
        <button type="submit" className={isCSSModule(theme.button, 'unl-login__button')}>
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
            <LinkComponent {...{ [linkComponentHrefAttr]: forgotPasswordLink }}>
              {forgotPasswordText}
            </LinkComponent>
          </div>
        ) : null}
      </Form>
    )}
  </div>
);

export default withFormik<LoginProps, FormValues>({
  mapPropsToValues: (): any => ({ email: '', password: '', serverAuth: '' }),
  validationSchema: (props: LoginProps): SchemaOf<any> =>
    props.schema ? props.schema : schema,
  handleSubmit: async (
    values,
    { props, setFieldValue, setSubmitting, setErrors },
  ): Promise<any> => {
    try {
      const resp: ServerResponse = await props.loginHandler(values);
      const errors: ServerResponse['errors'] | Record<string, never> = resp.errors || {};

      if (resp.success) {
        props.onSuccess(resp);
      } else {
        setFieldValue('password', '', false);

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
})(Login);
