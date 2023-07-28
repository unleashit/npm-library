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
  SignupHeader,
  SignupHeaderProps,
  SignupLoader,
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

export interface SignupProps {
  signupHandler: (values: FormValues) => Promise<ServerResponse>;
  onSuccess: (resp: ServerResponse) => any;
  layout?: string;
  header?: React.FC<SignupHeaderProps>;
  loginUrl?: string;
  loader?: React.FC<SignupLoaderProps>;
  schema?: SchemaOf<any>;
  customFields?: CustomField[];
  orLine?: boolean;
  linkComponent?: React.ComponentType<any>;
  linkComponentHrefAttr?: string;
  failMsg?: string; // signupHandler failure msg
  toast?: (msg: string) => void; // optionally will call toast function with server or fail msgs
  cssModule?: { [key: string]: string };
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
  linkComponent = DefaultLinkComponent,
  linkComponentHrefAttr = 'href',
  cssModule: theme = {},
  children,
}: FormikProps<FormValues> & SignupProps): React.ReactElement => (
  <div className={isCSSModule(theme.signupContainer, `unl-signup__container`)}>
    <Header
      loginUrl={loginUrl}
      theme={theme}
      linkComponent={linkComponent}
      linkComponentHrefAttr={linkComponentHrefAttr}
    />
    {errors.serverAuth && (
      <div
        className={isCSSModule(
          theme.serverAuthError,
          `unl-signup__server-auth-error`,
        )}
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
            cssModule={theme}
            componentName="signup"
          />
        ) : (
          <>
            <Field
              type="text"
              name="email"
              component={CustomInput}
              cssModule={theme}
              componentName="signup"
            />
            <Field
              type="password"
              name="password"
              component={CustomInput}
              cssModule={theme}
              componentName="signup"
            />
            <Field
              type="password"
              name="passwordConfirm"
              component={CustomInput}
              cssModule={theme}
              componentName="signup"
            />
          </>
        )}
        <button
          type="submit"
          className={isCSSModule(theme.button, `unl-signup__button`)}
        >
          Sign Up
        </button>
        {children && (
          <div
            className={isCSSModule(
              theme.socialSignup,
              `unl-signup__social-signup`,
            )}
          >
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

type AnyObjLit = { [key: string]: string };

export const mapDefaultValues = (fields: AnyObjLit[]): AnyObjLit =>
  fields.reduce(
    (a, b): AnyObjLit => ({
      ...a,
      [b.name]: b.defaultValue || '',
    }),
    {},
  );

export default withFormik<SignupProps, FormValues | any>({
  mapPropsToValues: (props: any): Record<string, unknown> =>
    props.customFields
      ? mapDefaultValues(props.customFields)
      : {
          email: '',
          password: '',
          passwordConfirm: '',
          serverAuth: '',
        },
  validationSchema: (props: any): SchemaOf<any> =>
    props.schema ? props.schema : schema,
  handleSubmit: async (
    values,
    { props, setFieldValue, setSubmitting, setErrors },
  ): Promise<any> => {
    try {
      const resp: ServerResponse = await props.signupHandler(values);
      const errors: ServerResponse['errors'] | Record<string, never> =
        resp.errors || {};

      if (resp.success) {
        props.onSuccess(resp);
      } else {
        setFieldValue('password', '', false);
        setFieldValue('passwordConfirm', '', false);

        if (props.toast && errors.serverAuth) {
          props.toast(errors.serverAuth);
        }

        setErrors(errors);
        setSubmitting(false);
      }
    } catch (err: any) {
      console.error(err);

      const failMsg = props.failMsg || 'Failed to Fetch. Are you online?';

      if (props.toast) {
        props.toast(failMsg);
      }

      setErrors({ serverAuth: failMsg });
      setSubmitting(false);
    }
  },
})(Signup);
