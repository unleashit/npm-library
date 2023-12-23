// import { CustomInput, isCSSModule } from '@unleashit/common';
// import { Field, Form, FormikProps, withFormik } from 'formik';
// import * as React from 'react';
// import { SchemaOf } from 'yup';
//
// import {
//   ForgotPasswordHeaderProps,
//   ForgotPasswordLoader,
//   ForgotPasswordLoaderProps,
//   ForgotPasswordResetHeader,
//   ForgotPasswordResetSuccessMessage,
// } from './defaults/components';
// import schema from './defaults/validationsReset';
//
// import type { ServerResponse } from '.';
//
// export interface FormValuesReset {
//   newPassword: string;
//   newPasswordConfirm: string;
//   serverAuth: string;
// }
//
// interface ForgotPasswordResetProps {
//   forgotPasswordResetHandler: (values: any) => Promise<ServerResponse>;
//   onSuccess?: (resp: any) => any;
//   header?: React.FC<ForgotPasswordHeaderProps>;
//   loader?: React.FC<ForgotPasswordLoaderProps>;
//   schema?: SchemaOf<any>;
//   showDefaultConfirmation?: boolean;
//   failMsg?: string; // loginHandler failure msg
//   toast?: (msg: string) => void; // optionally will call toast function with server or fail msgs
//   cssModule?: { [key: string]: string };
//   children?: React.ReactNode;
// }
//
// const ForgotPasswordResetRaw: React.FC<
//   FormikProps<FormValuesReset> & ForgotPasswordResetProps
// > = (props): React.ReactElement => {
//   const {
//     errors,
//     header: Header = ForgotPasswordResetHeader,
//     loader: Loader = ForgotPasswordLoader,
//     isSubmitting,
//     cssModule: theme = {},
//     onSuccess,
//     status,
//     children,
//   } = props;
//
//   if (status) {
//     // server response successful and showDefaultConfirmation is set to true
//     return React.isValidElement(onSuccess) ? (
//       onSuccess
//     ) : (
//       <ForgotPasswordResetSuccessMessage theme={theme} />
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
//           <Field
//             type="password"
//             name="newPassword"
//             component={CustomInput}
//             cssModule={theme}
//             componentName="forgot-password"
//           />
//           <Field
//             type="password"
//             name="newPasswordConfirm"
//             component={CustomInput}
//             cssModule={theme}
//             componentName="forgot-password"
//           />
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
//
// export const ForgotPasswordReset = withFormik<
//   ForgotPasswordResetProps,
//   FormValuesReset
// >({
//   mapPropsToValues: (): any => ({
//     newPassword: '',
//     newPasswordConfirm: '',
//     serverAuth: '',
//   }),
//   validationSchema: (props: ForgotPasswordResetProps): SchemaOf<any> =>
//     props.schema ? props.schema : schema,
//   handleSubmit: async (
//     values,
//     { props, setSubmitting, setErrors, setStatus },
//   ): Promise<any> => {
//     try {
//       const resp: ServerResponse = await props.forgotPasswordResetHandler({
//         ...values,
//       });
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
//         // setFieldValue('newPassword', '', false);
//         // setFieldValue('newPasswordConfirm', '', false);
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
// })(ForgotPasswordResetRaw);

export default null;
