import { isCSSModule } from '@unleashit/common';
import * as React from 'react';

interface Style {
  [key: string]: string;
}

export interface ForgotPasswordLoaderProps {
  theme: Style;
}

export interface ForgotPasswordHeaderProps {
  theme: Style;
}

export const ForgotPasswordLoader: React.FC<ForgotPasswordLoaderProps> = ({
  theme,
}): JSX.Element => (
  <div className={isCSSModule(theme.loader, `unl-forgot-password__loader`)}>
    <div className={isCSSModule(theme.loaderChild, `unl-forgot-password__loader-child`)}>
      Sending...
    </div>
  </div>
);

export const ForgotPasswordHeader: React.FC<ForgotPasswordHeaderProps> = ({
  theme,
}): JSX.Element => (
  <div className={isCSSModule(theme.header, `unl-forgot-password__header`)}>
    <h2>Forgot Password</h2>
    <p>
      Enter the email address for your account. We'll send an email with a link to reset
      your password.
    </p>
  </div>
);

export const ForgotPasswordResetHeader: React.FC<ForgotPasswordHeaderProps> = ({
  theme,
}): JSX.Element => (
  <div className={isCSSModule(theme.resetHeader, `unl-forgot-password__reset-header`)}>
    <h2>Reset Password</h2>
    <p>Please enter a new password and confirm.</p>
  </div>
);

export const ForgotPasswordSuccessMessage: React.FC<{ theme: Style }> = ({
  theme,
}): JSX.Element => (
  <div className={isCSSModule(theme.confirmation, `unl-forgot-password__confirmation`)}>
    <h2>Verification Email Sent</h2>
    <p>
      Please check your inbox and click on the provided link. You will then be able to
      reset your password and login.
    </p>
  </div>
);

export const ForgotPasswordResetSuccessMessage: React.FC<{ theme: Style }> = ({
  theme,
}): JSX.Element => (
  <div
    className={isCSSModule(
      theme.resetConfirmation,
      `unl-forgot-password__reset-confirmation`,
    )}
  >
    <h2>Thank you.</h2>
    <p>Your password has been updated. You may now login with the new password.</p>
  </div>
);
