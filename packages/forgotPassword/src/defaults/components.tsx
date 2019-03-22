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
      Enter the email address for your account. We{"'"}ll send an email with
      a link to reset your password.
    </p>
  </div>
);

export const ForgotPasswordSuccessMessage: React.FC<{ style: Style }> = ({
  style,
}): JSX.Element => (
  <div className={`${style.confirmation} unl-forgot-password__confirmation`}>
    <h2>Verification Email Sent</h2>
    <p>Please check your inbox and click on the provided link. You will then be able to reset your password and login.</p>
  </div>
);
