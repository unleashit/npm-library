import React from 'react';
import { ClsName, DefaultHeader } from '@unleashit/common';

export interface DefaultForgotPasswordHeaderProps {
  title: string;
  clsName: ClsName;
}

export const DefaultForgotPasswordHeader = ({
  title,
  clsName,
}: DefaultForgotPasswordHeaderProps) => (
  <DefaultHeader title={title} clsName={clsName}>
    <p>
      Enter the email address for your account. We'll send an email with a link
      to reset your password.
    </p>
  </DefaultHeader>
);

export const DefaultForgotPasswordResetHeader = ({
  title,
  clsName,
}: DefaultForgotPasswordHeaderProps) => (
  <DefaultHeader title={title} clsName={clsName}>
    <p>Please enter a new password and confirm.</p>
  </DefaultHeader>
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

export const DefaultForgotPasswordResetSuccessMessage = ({
  clsName,
}: {
  clsName: ClsName;
}) => (
  <div className={clsName('resetConfirmation')}>
    <h2>Thank you.</h2>
    <p>
      Your password has been updated. You may now login with the new password.
    </p>
  </div>
);
