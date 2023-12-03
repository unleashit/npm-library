import * as React from 'react';
import { DefaultHeader } from '@unleashit/common';

// interface CSSModule {
//   [key: string]: string;
// }
//
// export interface LoginLoaderProps {
//   theme: CSSModule;
// }
//

//
// export const LoginLoader: React.FC<LoginLoaderProps> = ({
//   theme,
// }): JSX.Element => (
//   <div className={isCSSModule(theme.loader, 'unl-login__loader')}>
//     <div className={isCSSModule(theme.loaderChild, 'unl-login__loader-child')}>
//       Logging in...
//     </div>
//   </div>
// );

// export const LoginHeader: React.FC<LoginHeaderProps> = ({
//   title = 'Login',
//   signupUrl,
//   linkComponent: LinkComponent,
//   linkComponentHrefAttr = 'href',
//   theme,
// }): JSX.Element => (
//   <div className={isCSSModule(theme.header, 'unl-login__header')}>
//     <h2>{title}</h2>
//     <p>
//       Don't have an account yet?{' '}
//       <LinkComponent {...{ [linkComponentHrefAttr]: signupUrl }}>
//         Sign up
//       </LinkComponent>
//     </p>
//   </div>
// );

export interface DefaultLoginHeaderProps {
  title: string;
  signupUrl: string;
  linkComponent: React.ComponentType<any>;
  linkComponentHrefAttr: string;
  clsName: (camelCaseClassName: string) => string;
}

export const DefaultLoginHeader = ({
  title = 'Login',
  signupUrl,
  linkComponent: LinkComponent,
  linkComponentHrefAttr = 'href',
  clsName,
}: DefaultLoginHeaderProps) => (
  <DefaultHeader title={title} clsName={clsName}>
    <p>
      Don't have an account yet?{' '}
      <LinkComponent {...{ [linkComponentHrefAttr]: signupUrl }}>
        Sign up
      </LinkComponent>
    </p>
  </DefaultHeader>
);
