import * as React from 'react';
import { isCSSModule } from '@unleashit/common';

interface CSSModule {
  [key: string]: string;
}

export interface LoginLoaderProps {
  theme: CSSModule;
}

export interface LoginHeaderProps {
  signupUrl: string;
  theme: CSSModule;
}

export const LoginLoader: React.FC<LoginLoaderProps> = ({ theme }): JSX.Element => (
  <div className={isCSSModule(theme.loader, 'unl-login__loader')}>
    <div className={isCSSModule(theme.loaderChild, 'unl-login__loader-child')}>
      Logging in...
    </div>
  </div>
);

export const LoginHeader: React.FC<LoginHeaderProps> = ({
  signupUrl,
  theme,
}): JSX.Element => (
  <div className={isCSSModule(theme.header, 'unl-login__header')}>
    <h2>Login</h2>
    <p>
      Don{"'"}t have an account yet? <a href={signupUrl}>Sign up</a>
    </p>
  </div>
);
