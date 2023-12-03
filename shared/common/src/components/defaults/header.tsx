import React from 'react';

export type DefaultHeaderProps = {
  title: string;
  clsName: (camelCaseClassName: string) => string;
  children?: React.ReactNode;
};

export const DefaultHeader = ({
  title,
  children,
  clsName,
}: DefaultHeaderProps) => (
  <div className={clsName('header')}>
    <h2>{title}</h2>
    {children && children}
  </div>
);
