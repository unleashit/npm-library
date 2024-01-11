import * as React from 'react';
import { DefaultLinkComponent, ClsName } from '@unleashit/common';
import { NavigationProps } from './navigation';

type NavContextValue = Required<
  Pick<NavigationProps, 'linkComponent' | 'linkComponentHrefAttr'> & {
    clsName: ClsName;
  }
>;
const NavContext = React.createContext<NavContextValue>({
  linkComponent: DefaultLinkComponent,
  linkComponentHrefAttr: 'href',
  clsName: () => '',
});

NavContext.displayName = 'Navigation';

export default NavContext;
