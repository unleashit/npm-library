import * as React from 'react';
import { Schema } from 'yup';
import { Field, Form, FormikProps, withFormik } from 'formik';
import {
  LoginLoader,
  LoginHeader,
  LoginHeaderProps,
  LoginLoaderProps,
} from './defaults/components';
import { CustomInput } from './defaults/fields';
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
  cssModuleStyles?: { [key: string]: string };
}

export function Login(props: FormikProps<FormValues> & Props): JSX.Element {
  const {
    errors,
    signupUrl,
    header: Header,
    loader: Loader,
    isSubmitting,
    cssModuleStyles,
  } = props;

  const style = cssModuleStyles || defaultStyle;

  return (
    <div className={`${style.container} unl-login__container`}>
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
          <Field
            type="text"
            name="email"
            component={CustomInput}
            cssModuleStyle={style}
          />
          <Field
            type="password"
            name="password"
            component={CustomInput}
            cssModuleStyle={style}
          />
          <button type="submit" className={`${style.button} unl-login__button`}>
            Login
          </button>
        </Form>
      )}
    </div>
  );
}

Login.defaultProps = {
  header: LoginHeader,
  signupUrl: '/signup',
  loader: LoginLoader,
};

export default withFormik<Props, FormValues>({
  mapPropsToValues: () => ({ email: '', password: '', serverAuth: '' }),
  validationSchema: (props: any) => (props.schema ? props.schema : schema),
  handleSubmit: async (values, { props, setFieldValue, setSubmitting, setErrors }) => {
    try {
      const resp: LoginHandlerResponse = await props.loginHandler(values);
      const errors = resp.errors || {};

      if (resp.success === true) {
        props.onSuccess(resp);
      } else {
        setFieldValue('password', '', false);
        setErrors(errors);
        setSubmitting(false);
      }
    } catch (err) {
      setSubmitting(false);
      throw err;
    }
  },
})(Login);
