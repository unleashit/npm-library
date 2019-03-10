import * as React from 'react';
import { Schema } from 'yup';
import { Field, Form, FormikProps, withFormik } from 'formik';
import { LoginLoader, LoginHeader, LoginHeaderProps } from './defaults/components';
import { CustomInput } from './defaults/fields';
import schema from './defaults/validations';
import * as style from './scss/login.scss';

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
  layout: string;
  header: React.FC<LoginHeaderProps>;
  signupUrl: string;
  loader: React.FC<{}>;
  schema: Schema<any>;
}

export function Login(props: FormikProps<FormValues> & Props): JSX.Element {
  const { errors, signupUrl, header: Header, loader: Loader, isSubmitting } = props;

  return (
    <div className={style.loginContainer}>
      <Header signupUrl={signupUrl} />
      {errors.serverAuth && (
        <div className={style.serverAuthError}>{errors.serverAuth}</div>
      )}
      {isSubmitting ? (
        <Loader />
      ) : (
        <Form className={style.loginForm}>
          <Field type="text" name="email" component={CustomInput} />
          <Field type="password" name="password" component={CustomInput} />
          <button type="submit" className={style.loginButton}>
            Login
          </button>
        </Form>
      )}
    </div>
  );
}

Login.defaultProps = {
  layout: 'page',
  header: LoginHeader,
  signupUrl: '/signup',
  loader: LoginLoader,
};

export default withFormik<Props, FormValues>({
  mapPropsToValues: () => ({ email: '', password: '', serverAuth: '' }),
  validationSchema: (props: any) => props.schema ? props.schema : schema,
  handleSubmit: async (
    values,
    { props, setFieldValue, setSubmitting, setErrors },
  ) => {
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
    } catch(err) {
      setSubmitting(false);
    	throw err;
    }
  },
})(Login);
