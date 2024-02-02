import { DefaultHeader, ClsName } from '@unleashit/common';
import * as React from 'react';

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
