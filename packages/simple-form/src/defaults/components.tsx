import * as React from 'react';
import { genClassNames } from '@unleashit/common';

export interface DefaultHeaderProps {
  title?: string;
  cssModule: Record<string, string>;
}

export const DefaultHeader = ({
  title = 'Contact Us',
  cssModule,
}: DefaultHeaderProps) => {
  const { clsName } = genClassNames('simpleForm', cssModule);
  return (
    <div className={clsName('header')}>
      <h2>{title}</h2>
    </div>
  );
};

export interface DefaultSuccessProps {
  message?: string;
  cssModule?: Record<string, string>;
}

export const DefaultSuccess = ({
  message = 'Thanks for your message!',
  cssModule,
}: DefaultSuccessProps) => {
  const { clsName } = genClassNames('simpleForm', cssModule);
  return (
    <div className={clsName('simpleForm')}>
      <div className={clsName('thanks')}>{message}</div>
    </div>
  );
};
