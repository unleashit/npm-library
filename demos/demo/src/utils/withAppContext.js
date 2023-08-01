import React from 'react';

import { AppContext } from './context';

const withAppContext = (Component) => () => (
  <AppContext.Consumer>
    {({ state, store }) => <Component state={state} store={store} />}
  </AppContext.Consumer>
);

export default withAppContext;
