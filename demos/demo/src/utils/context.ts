import { createContext } from 'react';

type AppContextValue = {
  globalState: any;
  store: any;
};

export const AppContext = createContext<AppContextValue>({
  globalState: undefined,
  store: undefined,
});
