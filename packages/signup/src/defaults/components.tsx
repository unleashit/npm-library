import * as React from 'react';

interface Style {
  [key: string]: string;
}

export interface SignupLoaderProps {
  style: Style;
}

export interface SignupHeaderProps {
  loginUrl: string;
  style: Style;
}

export const SignupLoader: React.FC<SignupLoaderProps> = ({ style }): JSX.Element => (
  <div className={`${style.loader} unl-signup__loader`}>
    <div className={`${style.loaderChild} unl-signup__loader-child`}>Signing up...</div>
  </div>
);

export const SignupHeader: React.FC<SignupHeaderProps> = ({
  loginUrl,
  style,
}): JSX.Element => (
  <div className={`${style.header} unl-signup__header`}>
    <h2>Signup</h2>
    <p>
      Already have an account? <a href={loginUrl}>Login</a>
    </p>
  </div>
);
