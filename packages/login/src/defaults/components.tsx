import React, { ComponentType, ReactNode } from 'react';
import { utils, ClsName, DefaultHeader } from '@unleashit/common';

export interface DefaultLoginHeaderProps {
  title: string;
  signupLink: ComponentType | ReactNode;
  clsName: ClsName;
}

const { normalizeComponentProp } = utils;

export const DefaultLoginHeader = ({
  title = 'Login',
  signupLink: SignupLink,
  clsName,
}: DefaultLoginHeaderProps) => (
  <DefaultHeader title={title} clsName={clsName}>
    <p>Don't have an account yet? {normalizeComponentProp(SignupLink)}</p>
  </DefaultHeader>
);
