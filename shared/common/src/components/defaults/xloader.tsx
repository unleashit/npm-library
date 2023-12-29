import React from 'react';
import { genClassNames } from '../../lib/utils';

export interface SignupLoaderProps {
  componentName: string;
  title: string;
  cssModule: Record<string, string>;
}

export const SignupLoader: React.FC<SignupLoaderProps> = ({
  componentName,
  title = 'Signing up...',
  cssModule,
}) => {
  const { clsName } = React.useMemo(
    () => genClassNames(componentName, cssModule),
    [componentName, cssModule],
  );

  return (
    <div className={clsName(`loader`)}>
      <div className={clsName(`loader-child`)}>{title}</div>
    </div>
  );
};
