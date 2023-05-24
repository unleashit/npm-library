import { createContext } from 'react';

export type AppContextValue = {
  globalState: any;
  store: any;
};

export const AppContext = createContext<AppContextValue>({
  globalState: undefined,
  store: undefined,
});
