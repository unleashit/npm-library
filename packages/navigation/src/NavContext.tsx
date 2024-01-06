import * as React from 'react';
import { DefaultLinkComponent } from '@unleashit/common';
import { NavigationProps } from './navigation';

type NavContextValue = Required<
  Pick<NavigationProps, 'linkComponent' | 'linkComponentHrefAttr' | 'cssModule'>
>;
const NavContext = React.createContext<NavContextValue>({
  linkComponent: DefaultLinkComponent,
  linkComponentHrefAttr: 'href',
  cssModule: {},
});

NavContext.displayName = 'Navigation';

export default NavContext;
