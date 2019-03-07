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

interface Props {
  onSuccess: (resp: any) => any;
  loginHandler: (values: any) => Promise<any>;
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
    { props, resetForm, setFieldValue, setSubmitting, setErrors },
  ) => {
    const resp = await props.loginHandler(values);
    const errors = resp.errors || {};

    if (resp.success) {
      props.onSuccess(resp);
    } else {
      resetForm();
      setFieldValue('email', values.email || '', false);
      setErrors(errors);
      setSubmitting(false);
    }
  },
})(Login);
