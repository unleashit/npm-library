import * as React from 'react';

interface Style {
  [key: string]: string;
}

export interface ForgotPasswordLoaderProps {
  style: Style;
}

export interface ForgotPasswordHeaderProps {
  style: Style;
}

export const ForgotPasswordLoader: React.FC<ForgotPasswordLoaderProps> = ({
  style,
}): JSX.Element => (
  <div className={`${style.loader} unl-forgot-password__loader`}>
    <div className={`${style.loaderChild} unl-forgot-password__loader-child`}>
      Sending...
    </div>
  </div>
);

export const ForgotPasswordHeader: React.FC<ForgotPasswordHeaderProps> = ({
  style,
}): JSX.Element => (
  <div className={`${style.header} unl-forgot-password__header`}>
    <h2>Forgot Password</h2>
    <p>
      Enter the email address for your account. We{"'"}ll send an email with a link to
      reset your password.
    </p>
  </div>
);

export const ForgotPasswordResetHeader: React.FC<ForgotPasswordHeaderProps> = ({
  style,
}): JSX.Element => (
  <div className={`${style.resetHeader} unl-forgot-password__reset-header`}>
    <h2>Reset Password</h2>
    <p>Please enter a new password and confirm.</p>
  </div>
);

export const ForgotPasswordSuccessMessage: React.FC<{ style: Style }> = ({
  style,
}): JSX.Element => (
  <div className={`${style.confirmation} unl-forgot-password__confirmation`}>
    <h2>Verification Email Sent</h2>
    <p>
      Please check your inbox and click on the provided link. You will then be able to
      reset your password and login.
    </p>
  </div>
);

export const ForgotPasswordResetSuccessMessage: React.FC<{ style: Style }> = ({
  style,
}): JSX.Element => (
  <div className={`${style.resetConfirmation} unl-forgot-password__reset-confirmation`}>
    <h2>Thank you.</h2>
    <p>Your password has been updated. You may now login with the new password.</p>
  </div>
);
