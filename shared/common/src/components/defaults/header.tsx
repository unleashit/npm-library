import React from 'react';
import { ClsName } from '../../types';

export type DefaultHeaderProps = {
  title: string;
  clsName: ClsName;
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
