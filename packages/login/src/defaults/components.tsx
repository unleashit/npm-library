import * as React from 'react';

interface Style {
  [key: string]: string;
}

export interface LoginLoaderProps {
  style: Style;
}

export interface LoginHeaderProps {
  signupUrl: string;
  style: Style;
}

export const LoginLoader: React.FC<LoginLoaderProps> = ({ style }): JSX.Element => (
  <div className={`${style.loader} unl-login__loader`}>
    <div className={`${style.loaderChild} unl-login__loader-child`}>Logging in...</div>
  </div>
);

export const LoginHeader: React.FC<LoginHeaderProps> = ({
  signupUrl,
  style,
}): JSX.Element => (
  <div className={`${style.header} unl-login__header`}>
    <h2>Login</h2>
    <p>
      Don{"'"}t have an account yet? <a href={signupUrl}>Sign up</a>
    </p>
  </div>
);
