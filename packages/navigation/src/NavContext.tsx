import * as React from 'react';
import { DefaultLinkComponent, NavigationProps } from './index';

type NavContextValue = Required<
  Pick<NavigationProps, 'linkComponent' | 'linkComponentHrefAttr' | 'cssModule'>
>;
const NavContext = React.createContext<NavContextValue>({
  linkComponent: DefaultLinkComponent,
  linkComponentHrefAttr: 'href',
  cssModule: {},
});

export default NavContext;
