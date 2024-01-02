import { ClsName, DefaultHeader } from '@unleashit/common';
import * as React from 'react';

// interface Style {
//   [key: string]: string;
// }

// export interface ForgotPasswordLoaderProps {
//   theme: Style;
// }

// export interface ForgotPasswordHeaderProps {
//   theme: Style;
// }

export interface DefaultForgotPasswordHeaderProps {
  title: string;
  clsName: ClsName;
}

// const { isCSSModule } = utils;

// export const ForgotPasswordLoader: React.FC<ForgotPasswordLoaderProps> = ({
//   theme,
// }): JSX.Element => (
//   <div className={isCSSModule(theme.loader, `unl-forgot-password__loader`)}>
//     <div
//       className={isCSSModule(
//         theme.loaderChild,
//         `unl-forgot-password__loader-child`,
//       )}
//     >
//       Sending...
//     </div>
//   </div>
// );

// export const ForgotPasswordHeader: React.FC<ForgotPasswordHeaderProps> = ({
//   theme,
// }): JSX.Element => (
//   <div className={isCSSModule(theme.header, `unl-forgot-password__header`)}>
//     <h2>Forgot Password</h2>
//     <p>
//       Enter the email address for your account. We'll send an email with a link
//       to reset your password.
//     </p>
//   </div>
// );

export const DefaultForgotPasswordHeader = ({
  title = 'Forgot Password',
  clsName,
}: DefaultForgotPasswordHeaderProps) => (
  <DefaultHeader title={title} clsName={clsName}>
    <p>
      Enter the email address for your account. We'll send an email with a link
      to reset your password.
    </p>
  </DefaultHeader>
);

export const DefaultForgotPasswordResetHeader: React.FC<
  DefaultForgotPasswordHeaderProps
> = ({ clsName }) => (
  <div className={clsName('resetHeader')}>
    <h2>Reset Password</h2>
    <p>Please enter a new password and confirm.</p>
  </div>
);

export const DefaultForgotPasswordSuccessMessage = ({
  clsName,
}: {
  clsName: ClsName;
}) => (
  <div className={clsName('confirmation')}>
    <h2>Verification Email Sent</h2>
    <p>
      Please check your inbox and click on the provided link. You will then be
      able to reset your password and login.
    </p>
  </div>
);

// export const ForgotPasswordResetSuccessMessage: React.FC<{ theme: Style }> = ({
//   theme,
// }) => (
//   <div
//     className={isCSSModule(
//       theme.resetConfirmation,
//       `unl-forgot-password__reset-confirmation`,
//     )}
//   >
//     <h2>Thank you.</h2>
//     <p>
//       Your password has been updated. You may now login with the new password.
//     </p>
//   </div>
// );
