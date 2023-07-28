import { isCSSModule } from '@unleashit/common';
import * as React from 'react';
import { AsyncHandlerProps } from '../index';

export interface DefaultComponentProps {
  cssModule?: AsyncHandlerProps['cssModule'];
}

export interface DefaultErrorComponentProps extends DefaultComponentProps {
  error?: any;
}

export const DefaultLoader: React.FC<DefaultComponentProps> = ({
  cssModule: theme = {},
}): JSX.Element => (
  <div className={isCSSModule(theme.loader, `unl-async-handler__loader`)}>
    <div
      className={isCSSModule(
        theme.loaderChild,
        `unl-async-handler__loader-child`,
      )}
    >
      Loading...
    </div>
  </div>
);

export const DefaultNoResults: React.FC<DefaultComponentProps> = ({
  cssModule: theme = {},
}): JSX.Element => (
  <div
    className={isCSSModule(
      theme.nothingFound,
      `unl-async-handler__nothing-found`,
    )}
  >
    Nothing found.
  </div>
);

export const DefaultError: React.FC<DefaultErrorComponentProps> = ({
  cssModule: theme = {},
  error,
}): JSX.Element => (
  <div
    className={isCSSModule(
      theme.errorMessage,
      `unl-async-handler__error-message`,
    )}
  >
    <p>Sorry, we have encountered a problem.</p>
    {error ? <p>{error.message ? error.message : error}</p> : ''}
  </div>
);
