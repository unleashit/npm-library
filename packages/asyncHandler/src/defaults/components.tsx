import * as React from 'react';

interface Style {
  [key: string]: string;
}

export interface DefaultLoaderProps {
  cssModuleStyle: Style;
}

export const DefaultLoader: React.FC<DefaultLoaderProps> = ({ cssModuleStyle: style }): JSX.Element => (
  <div className={`${style.loader} unl-async-handler__loader`}>
    <div className={`${style.loaderChild ? style.loaderChild : ''} unl-async-handler__loader-child`}>Loading...</div>
  </div>
);
