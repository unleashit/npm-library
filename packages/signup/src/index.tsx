import * as React from 'react';
import { Schema } from 'yup';
import { Field, Form, FormikProps, withFormik } from 'formik';
import { CustomFields, CustomField, CustomInput, isCSSModule } from '@unleashit/common';
import {
  SignupLoader,
  SignupHeader,
  SignupHeaderProps,
  SignupLoaderProps,
} from './defaults/components';
import schema from './defaults/validations';

export interface FormValues {
  email: string;
  password: string;
  passwordConfirm: string;
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
  signupHandler: (values: FormValues) => Promise<ServerResponse>;
  onSuccess: (resp: ServerResponse) => any;
  layout?: string;
  header?: React.FC<SignupHeaderProps>;
  loginUrl?: string;
  loader?: React.FC<SignupLoaderProps>;
  schema?: Schema<any>;
  customFields?: CustomField[];
  orLine?: boolean;
  cssModuleStyles?: { [key: string]: string };
  children?: React.ReactNode;
}

export const Signup = ({
  errors,
  loginUrl = '/login',
  header: Header = SignupHeader,
  loader: Loader = SignupLoader,
  isSubmitting,
  handleChange,
  handleBlur,
  values,
  touched,
  customFields,
  orLine = true,
  cssModuleStyles: theme = {},
  children,
}: FormikProps<FormValues> & Props): React.ReactElement => {
  return (
    <div className={isCSSModule(theme.signupContainer, `unl-signup__container`)}>
      <Header loginUrl={loginUrl} theme={theme} />
      {errors.serverAuth && (
        <div
          className={isCSSModule(theme.serverAuthError, `unl-signup__server-auth-error`)}
        >
          {errors.serverAuth}
        </div>
      )}

      {isSubmitting ? (
        <Loader theme={theme} />
      ) : (
        <Form className={isCSSModule(theme.form, `unl-signup__form`)}>
          {customFields ? (
            <CustomFields
              fields={customFields}
              values={values}
              errors={errors}
              touched={touched}
              handleChange={handleChange}
              handleBlur={handleBlur}
              cssModuleStyles={theme}
              componentName="signup"
            />
          ) : (
            <React.Fragment>
              <Field
                type="text"
                name="email"
                component={CustomInput}
                cssModuleStyles={theme}
                componentName="signup"
              />
              <Field
                type="password"
                name="password"
                component={CustomInput}
                cssModuleStyles={theme}
                componentName="signup"
              />
              <Field
                type="password"
                name="passwordConfirm"
                component={CustomInput}
                cssModuleStyles={theme}
                componentName="signup"
              />
            </React.Fragment>
          )}
          <button
            type="submit"
            className={isCSSModule(theme.button, `unl-signup__button`)}
          >
            Sign Up
          </button>
          {children && (
            <div className={isCSSModule(theme.socialSignup, `unl-signup__social-signup`)}>
              {orLine && (
                <div className={isCSSModule(theme.orLine, `unl-signup__or-line`)}>
                  <span>or</span>
                </div>
              )}
              {children}
            </div>
          )}
        </Form>
      )}
    </div>
  );
};

export const mapDefaultValues = (
  fields: { [key: string]: string }[],
): { [key: string]: string } => {
  return fields.reduce((a, b): object => {
    return {
      ...a,
      [b.name]: b.defaultValue || '',
    };
  }, {});
};

export default withFormik<Props, FormValues | any>({
  mapPropsToValues: (props: any): object => {
    return props.customFields
      ? mapDefaultValues(props.customFields)
      : {
          email: '',
          password: '',
          passwordConfirm: '',
          serverAuth: '',
        };
  },
  validationSchema: (props: any): Schema<any> => (props.schema ? props.schema : schema),
  handleSubmit: async (
    values,
    { props, setFieldValue, setSubmitting, setErrors },
  ): Promise<any> => {
    try {
      const resp: ServerResponse = await props.signupHandler(values);
      const errors = resp.errors || {};

      if (resp.success) {
        props.onSuccess(resp);
      } else {
        setFieldValue('password', '', false);
        setFieldValue('passwordConfirm', '', false);
        setErrors(errors);
        setSubmitting(false);
      }
    } catch (err) {
      setSubmitting(false);
      console.error(err);
    }
  },
})(Signup);
