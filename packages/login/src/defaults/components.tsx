import * as React from 'react';
import { ClsName, DefaultHeader } from '@unleashit/common';

export interface DefaultLoginHeaderProps {
  title: string;
  signupUrl: string;
  linkComponent: React.ComponentType<any>;
  linkComponentHrefAttr: string;
  clsName: ClsName;
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
