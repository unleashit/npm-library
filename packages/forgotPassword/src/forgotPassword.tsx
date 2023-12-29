import React, { useMemo } from 'react';
import { ZodTypeAny } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  BaseFormProps,
  CustomFieldsHF,
  DefaultLinkComponent,
  DefaultLoader,
  formHandler,
  ShowSuccess,
  useShowSuccessTimer,
  useSetFocus,
  utils,
} from '@unleashit/common';
// import { Field, Form, FormikProps, withFormik } from 'formik';

// import { SchemaOf } from 'yup';

import {
  DefaultForgotPasswordHeader,
  DefaultForgotPasswordHeaderProps,
  DefaultForgotPasswordSuccessMessage,
  // ForgotPasswordHeader,
  // ForgotPasswordHeaderProps,
  // ForgotPasswordLoaderProps,
  // ForgotPasswordSuccessMessage,
} from './defaults/components';
import defaultForgotPasswordSchema from './defaults/schema';
import defaultForgotPasswordFields from './defaults/fields';
import { FormValues } from './types';

// export interface FormValues {
//   email: string;
//   serverAuth: string;
// }
// export interface ServerResponse {
//   success: boolean;
//   errors?: {
//     serverAuth: string; // error msg to print in browser when auth fails
//     [key: string]: string; // optionally validate anything else on server
//   };
// }

// export interface ForgotPasswordProps {
//   forgotPasswordHandler: (values: FormValues) => Promise<ServerResponse>;
//   onSuccess?: (resp: ServerResponse) => any;
//   header?: React.FC<ForgotPasswordHeaderProps>;
//   loader?: React.FC<ForgotPasswordLoaderProps>;
//   schema?: SchemaOf<any>;
//   customFields?: CustomField[];
//   showDefaultConfirmation?: boolean;
//   failMsg?: string; // loginHandler failure msg
//   toast?: (msg: string) => void; // optionally will call toast function with server or fail msgs
//   cssModule?: { [key: string]: string };
//   children?: React.ReactNode;
// }

export type ForgotPasswordProps = Omit<BaseFormProps, 'header'> & {
  header?: React.FC<DefaultForgotPasswordHeaderProps> | false | null;
  signupUrl?: string;
  childrenPosition?: 'top' | 'bottom';
  loginLink?: string | false | null;
  loginLinkText?: string;
  children?: React.ReactNode;
};

const { genClassNames, getDefaultsFromZodObject } = utils;

export const ForgotPassword = ({
  handler,
  onSuccess,
  title = 'Forgot Password',
  header: Header = DefaultForgotPasswordHeader,
  loader: Loader = DefaultLoader,
  childrenPosition = 'bottom',
  customFields = defaultForgotPasswordFields,
  customSchema: schema = defaultForgotPasswordSchema,
  toast,
  failMsg,
  successMessage = DefaultForgotPasswordSuccessMessage,
  loginLink = '/login',
  loginLinkText = 'Back to Login',
  linkComponent: LinkComponent = DefaultLinkComponent,
  linkComponentHrefAttr = 'href',
  cssModule = {},
  children,
}: ForgotPasswordProps) => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    setFocus,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues<ZodTypeAny>>({
    resolver: zodResolver(schema),
    defaultValues: getDefaultsFromZodObject<typeof schema>(schema),
  });

  // set focus on the first (if any) field with a focus prop
  useSetFocus(customFields, setFocus);

  // Submit handler
  const onSubmit = useMemo(
    () =>
      formHandler({
        schema,
        handler,
        onSuccess,
        toast,
        failMsg,
        setError,
        reset,
      }),
    [schema, handler, onSuccess, toast, failMsg, setError, reset],
  );

  const { clsName } = React.useMemo(
    () => genClassNames(ForgotPassword.displayName, cssModule),
    [cssModule],
  );

  // Set up success message if configured
  const [showSuccessMsg] = useShowSuccessTimer({
    isSubmitSuccessful,
    successMessage,
    reset,
  });

  if (!!successMessage && showSuccessMsg) {
    return <ShowSuccess successMessage={successMessage} clsName={clsName} />;
  }

  return (
    <div className={clsName('container')}>
      {isSubmitting ? (
        <Loader clsName={clsName} />
      ) : (
        <>
          {Header && <Header title={title} clsName={clsName} />}
          {errors.root && !toast && (
            <div className={clsName('serverAuthError')}>
              {errors.root.message}
            </div>
          )}
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{
              display: isSubmitting ? 'none' : 'block',
            }}
            className={clsName('form')}
          >
            {childrenPosition === 'bottom' && (
              <>
                <CustomFieldsHF
                  componentName={ForgotPassword.displayName}
                  fields={customFields}
                  register={register}
                  errors={errors}
                  clsName={clsName}
                />

                <button type="submit" className={clsName('button')}>
                  Next
                </button>
                {loginLink ? (
                  <div className={clsName('forgotPasswordLink')}>
                    <LinkComponent {...{ [linkComponentHrefAttr]: loginLink }}>
                      {loginLinkText}
                    </LinkComponent>
                  </div>
                ) : null}
              </>
            )}

            {children && children}

            {childrenPosition === 'top' && (
              <>
                <CustomFieldsHF
                  componentName={ForgotPassword.displayName}
                  fields={customFields}
                  register={register}
                  errors={errors}
                  clsName={clsName}
                />

                <button type="submit" className={clsName('button')}>
                  Next
                </button>
                {loginLink ? (
                  <div className={clsName('forgotPasswordLink')}>
                    <LinkComponent {...{ [linkComponentHrefAttr]: loginLink }}>
                      {loginLinkText}
                    </LinkComponent>
                  </div>
                ) : null}
              </>
            )}
          </form>
        </>
      )}
    </div>
  );
};

ForgotPassword.displayName = 'forgotPassword';
export default ForgotPassword;

// export const ForgotPassword = (
//   props: FormikProps<FormValues> & ForgotPasswordProps,
// ): React.ReactElement => {
//   const {
//     errors,
//     header: Header = ForgotPasswordHeader,
//     loader: Loader = ForgotPasswordLoader,
//     isSubmitting,
//     handleChange,
//     handleBlur,
//     values,
//     touched,
//     customFields,
//     cssModule: theme = {},
//     onSuccess,
//     status,
//     children,
//   } = props;
//
//   if (status) {
//     return React.isValidElement(onSuccess) ? (
//       onSuccess
//     ) : (
//       <ForgotPasswordSuccessMessage theme={theme} />
//     );
//   }
//
//   return (
//     <div
//       className={isCSSModule(theme.container, `unl-forgot-password__container`)}
//     >
//       <Header theme={theme} />
//       {errors.serverAuth && (
//         <div
//           className={isCSSModule(
//             theme.serverAuthError,
//             `unl-forgot-password__server-auth-error`,
//           )}
//         >
//           {errors.serverAuth}
//         </div>
//       )}
//       {isSubmitting ? (
//         <Loader theme={theme} />
//       ) : (
//         <Form className={isCSSModule(theme.form, `unl-forgot-password__form`)}>
//           {customFields ? (
//             <CustomFields
//               fields={customFields}
//               values={values}
//               errors={errors}
//               touched={touched}
//               handleChange={handleChange}
//               handleBlur={handleBlur}
//               cssModule={theme}
//               componentName="forgot-password"
//             />
//           ) : (
//             <Field
//               type="text"
//               name="email"
//               component={CustomInput}
//               cssModule={theme}
//               componentName="forgot-password"
//             />
//           )}
//           <button
//             type="submit"
//             className={isCSSModule(theme.button, `unl-forgot-password__button`)}
//           >
//             Send
//           </button>
//           {children && (
//             <div
//               className={isCSSModule(
//                 theme.footer,
//                 `unl-forgot-password__footer`,
//               )}
//             >
//               {children}
//             </div>
//           )}
//         </Form>
//       )}
//     </div>
//   );
// };

// export default withFormik<ForgotPasswordProps, FormValues>({
//   mapPropsToValues: (): any => ({ email: '', serverAuth: '' }),
//   validationSchema: (props: ForgotPasswordProps): SchemaOf<any> =>
//     props.schema ? props.schema : schema,
//   handleSubmit: async (
//     values,
//     { props, setFieldValue, setSubmitting, setErrors, setStatus },
//   ): Promise<any> => {
//     try {
//       const resp: ServerResponse = await props.forgotPasswordHandler(values);
//       const errors: ServerResponse['errors'] | Record<string, never> =
//         resp.errors || {};
//
//       if (resp.success) {
//         const isComponent =
//           props.onSuccess && React.isValidElement(props.onSuccess);
//
//         if (props.onSuccess && !isComponent) {
//           props.onSuccess(resp);
//         }
//         if (isComponent || props.showDefaultConfirmation) {
//           setStatus({ success: true });
//           setSubmitting(false);
//         }
//       } else {
//         setFieldValue('email', '', false);
//
//         if (props.toast && errors.serverAuth) {
//           props.toast(errors.serverAuth);
//         }
//
//         setErrors(errors);
//         setSubmitting(false);
//       }
//     } catch (err) {
//       console.error(err);
//
//       const failMsg = props.failMsg || 'Failed to Fetch. Are you online?';
//
//       if (props.toast) {
//         props.toast(failMsg);
//       }
//
//       setErrors({ serverAuth: failMsg });
//       setSubmitting(false);
//     }
//   },
// })(ForgotPassword);
