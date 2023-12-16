import { DefaultHeader, ClsName } from '@unleashit/common';
import * as React from 'react';

// interface Style {
//   [key: string]: string;
// }
//
// export interface SignupLoaderProps {
//   theme: Style;
// }
//
// export interface SignupHeaderProps {
//   loginUrl: string;
//   linkComponent: React.ComponentType<any>;
//   linkComponentHrefAttr: string;
//   theme: Style;
// }

// export const SignupLoader: React.FC<SignupLoaderProps> = ({
//   theme,
// }): JSX.Element => (
//   <div className={isCSSModule(theme.loader, `unl-signup__loader`)}>
//     <div className={isCSSModule(theme.loaderChild, `unl-signup__loader-child`)}>
//       Signing up...
//     </div>
//   </div>
// );

// export const SignupHeader: React.FC<SignupHeaderProps> = ({
//   loginUrl,
//   linkComponent: LinkComponent,
//   linkComponentHrefAttr = 'href',
//   theme,
// }): JSX.Element => (
//   <div className={isCSSModule(theme.header, `unl-signup__header`)}>
//     <h2>Sign Up</h2>
//     <p>
//       Already have an account?{' '}
//       <LinkComponent {...{ [linkComponentHrefAttr]: loginUrl }}>
//         Login
//       </LinkComponent>
//     </p>
//   </div>
// );

export interface DefaultSignupHeaderProps {
  title: string;
  loginUrl: string;
  linkComponent: React.ComponentType<any>;
  linkComponentHrefAttr: string;
  clsName: ClsName;
}

export const DefaultSignupHeader = ({
  title = 'Signup',
  loginUrl,
  linkComponent: LinkComponent,
  linkComponentHrefAttr = 'href',
  clsName,
}: DefaultSignupHeaderProps) => (
  <DefaultHeader title={title} clsName={clsName}>
    <p>
      Already have an account?{' '}
      <LinkComponent {...{ [linkComponentHrefAttr]: loginUrl }}>
        Login
      </LinkComponent>
    </p>
  </DefaultHeader>
);
