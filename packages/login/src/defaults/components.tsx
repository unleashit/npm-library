import { isCSSModule } from '@unleashit/common';
import * as React from 'react';

interface CSSModule {
  [key: string]: string;
}

export interface LoginLoaderProps {
  theme: CSSModule;
}

export interface LoginHeaderProps {
  signupUrl: string;
  linkComponent: React.ComponentType<any>;
  linkComponentHrefAttr: string;
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
  linkComponent: LinkComponent,
  linkComponentHrefAttr = 'href',
  theme,
}): JSX.Element => (
  <div className={isCSSModule(theme.header, 'unl-login__header')}>
    <h2>Login</h2>
    <p>
      Don't have an account yet?{' '}
      <LinkComponent {...{ [linkComponentHrefAttr]: signupUrl }}>Sign up</LinkComponent>
    </p>
  </div>
);
