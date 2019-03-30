import * as React from 'react';

interface Style {
  [key: string]: string;
}

export interface DefaultComponentProps {
  cssModuleStyle: Style;
}

export const DefaultLoader: React.FC<DefaultComponentProps> = ({ cssModuleStyle: style }): JSX.Element => (
  <div className={`${style.loader} unl-async-handler__loader`}>
    <div className={`${style.loaderChild ? style.loaderChild : ''} unl-async-handler__loader-child`}>Loading...</div>
  </div>
);

export const DefaultNoResults: React.FC<DefaultComponentProps> = ({ cssModuleStyle: style }): JSX.Element => (
  <div className={`${style.nothingFound} unl-async-handler__nothing-found`}>
    Nothing found.
  </div>
);
