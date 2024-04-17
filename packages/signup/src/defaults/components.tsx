import React, { ComponentType, ReactNode } from 'react';
import { DefaultHeader, ClsName, utils } from '@unleashit/common';

export interface DefaultSignupHeaderProps {
  title: string;
  loginLink: ComponentType | ReactNode;
  clsName: ClsName;
}

const { normalizeComponentProp } = utils;

export const DefaultSignupHeader = ({
  title = 'Signup',
  loginLink,
  clsName,
}: DefaultSignupHeaderProps) => (
  <DefaultHeader title={title} clsName={clsName}>
    <p>Already have an account? {normalizeComponentProp(loginLink)}</p>
  </DefaultHeader>
);
