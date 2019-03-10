import * as React from 'react';
import { Schema } from 'yup';
import { Field, Form, FormikProps, withFormik } from 'formik';
import { SignupLoader, SignupHeader, SignupHeaderProps } from './defaults/components';
import { CustomInput } from './defaults/fields';
import CustomFields from './CustomFields';
import schema from './defaults/validations';
import * as style from './scss/signup.scss';

interface FormValues {
  email: string;
  password: string;
  passwordConfirm: string;
  serverAuth: string;
}

interface SignupHandlerResponse {
  success: boolean;
  errors?: {
    serverAuth: string; // error msg to print in browser when auth fails
    [key: string]: string; // optionally validate anything else on server
  };
}

interface CustomField {
  elementType: 'input' | 'select' | 'checkbox' | 'radio';
  type: string;
  name: string;
  label: string;
  options?: string[][];
  custAttrs?: { [key: string]: string };
}

interface Props {
  onSuccess: (resp: any) => any;
  signupHandler: (values: any) => Promise<SignupHandlerResponse>;
  layout: string;
  header: React.FC<SignupHeaderProps>;
  loginUrl: string;
  loader: React.FC<{}>;
  schema: Schema<any>;
  customFields?: CustomField[];
}

export function Signup(props: FormikProps<FormValues> & Props): JSX.Element {
  const {
    errors,
    loginUrl,
    header: Header,
    loader: Loader,
    isSubmitting,
    handleChange,
    handleBlur,
    values,
    touched,
    customFields,
  } = props;

  return (
    <div className={style.signupContainer}>
      <Header loginUrl={loginUrl} />
      {errors.serverAuth && (
        <div className={style.serverAuthError}>{errors.serverAuth}</div>
      )}

      {isSubmitting ? (
        <Loader />
      ) : (
        <Form className={style.signupForm}>
          {customFields ? (
            <CustomFields
              fields={customFields}
              values={values}
              errors={errors}
              touched={touched}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
          ) : (
            <React.Fragment>
              <Field type="text" name="email" component={CustomInput} />
              <Field type="password" name="password" component={CustomInput} />
              <Field
                type="passwordConfirm"
                name="passwordConfirm"
                component={CustomInput}
              />
            </React.Fragment>
          )}
          <button type="submit" className={style.signupButton}>
            Signup
          </button>
        </Form>
      )}
    </div>
  );
}

Signup.defaultProps = {
  layout: 'page',
  header: SignupHeader,
  loginUrl: '/login',
  loader: SignupLoader,
};

const mapDefaultValues = (
  fields: { [key: string]: string }[],
): { [key: string]: string } => {
  return fields.reduce((a, b) => {
    a[b.name] = b.defaultValue || '';
    return a;
  }, {});
};

export default withFormik<Props, FormValues | any>({
  mapPropsToValues: (props: any) => {
    return props.customFields
      ? mapDefaultValues(props.customFields)
      : {
          email: '',
          password: '',
          passwordConfirm: '',
          serverAuth: '',
        };
  },
  validationSchema: (props: any) => (props.schema ? props.schema : schema),
  handleSubmit: async (values, { props, setFieldValue, setSubmitting, setErrors }) => {
    const resp: SignupHandlerResponse = await props.signupHandler(values);
    const errors = resp.errors || {};

    if (resp.success === true) {
      props.onSuccess(resp);
    } else {
      setFieldValue('password', '', false);
      setFieldValue('passwordConfirm', '', false);
      setErrors(errors);
      setSubmitting(false);
    }
  },
})(Signup);
