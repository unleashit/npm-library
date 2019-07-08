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

interface Props {
  onSuccess: (resp: any) => any;
  signupHandler: (values: any) => Promise<SignupHandlerResponse>;
  layout: string;
  header: React.FC<SignupHeaderProps>;
  loginUrl: string;
  loader: React.FC<SignupLoaderProps>;
  schema: Schema<any>;
  customFields?: CustomField[];
  cssModuleStyles?: { [key: string]: string };
  orLine: boolean;
}

export const Signup: React.FC<FormikProps<FormValues> & Props> = ({
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
  cssModuleStyles: theme = {},
  orLine,
  children,
}): React.ReactElement => {
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

Signup.defaultProps = {
  header: SignupHeader,
  loginUrl: '/login',
  loader: SignupLoader,
  orLine: true,
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
      const resp: SignupHandlerResponse = await props.signupHandler(values);
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
