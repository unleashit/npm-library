import { isCSSModule } from '@unleashit/common';
import * as React from 'react';

import AuthLinks from './AuthLinks';
import NavLinks from './NavLinks';
import NavContext from './NavContext';
import { addTemplateClasses } from './utils/templateClasses';

export type Style = Record<string, string>;
// type LinkProps = HTMLAnchorElement;

// type CommonLinkProps = {
//   active?: boolean;
//   classes?: string[];
//   style?: React.CSSProperties;
//   icon?: string;
//   iconPosition?: 'left' | 'right';
//   display?: boolean;
//   attrs?: React.AllHTMLAttributes<any>;
// }
//
// export type Link<T = LinkProps> = {
//   url: string;
//   text: string;
// } & CommonLinkProps | {
//   component: React.FC<T> | React.ReactElement<T>;
// } & CommonLinkProps;

export interface NavigationLink {
  href: string;
  title: string;
  active?: boolean;
  classes?: string[];
  style?: React.CSSProperties;
  icon?: string;
  iconPosition?: 'left' | 'right';
  display?: boolean;
  attrs?: React.AllHTMLAttributes<any>;
}
export interface AuthLinkTypes {
  login?: NavigationLink;
  logout?: NavigationLink;
  signup?: NavigationLink;
}
export interface NavigationProps {
  links: NavigationLink[];
  linkComponent?: React.ComponentType<any>;
  linkComponentHrefAttr?: string;
  direction?: 'horizontal' | 'vertical' | 'horz' | 'vert';
  template?: 'plain' | 'clean' | 'dark-buttons' | 'light-buttons';
  isAuth?: boolean;
  authLinks?: AuthLinkTypes;
  cssModule?: Record<string, string>;
}

export const DefaultLinkComponent = ({ children, ...rest }: any) => (
  <a {...rest}>{children}</a>
);
const mapAuthLinks = (
  isAuth: boolean,
  authLinks: NavigationProps['authLinks'] = {},
): AuthLinkTypes => {
  const defaults = {
    login: {
      title: 'Login',
      href: '/login',
      display: !isAuth,
    },
    logout: {
      title: 'Logout',
      href: '/logout',
      display: isAuth,
    },
    signup: {
      title: 'Signup',
      href: '/signup',
      display: !isAuth,
    },
  };

  return {
    login: { ...defaults.login, ...authLinks.login },
    logout: { ...defaults.logout, ...authLinks.logout },
    signup: { ...defaults.signup, ...authLinks.signup },
  };
};

const Navigation = ({
  links,
  direction = 'horizontal',
  template = 'clean',
  isAuth,
  authLinks,
  linkComponent = DefaultLinkComponent,
  linkComponentHrefAttr = 'href',
  cssModule = {},
}: NavigationProps): React.ReactElement => {
  // * show default authLinks if isAuth is provided.
  // * if user provides authLinks, they will override the default on a property by property basis
  // * don't show authLinks if both authLinks and isAuth are omitted.
  const authSidecarLinks =
    isAuth !== undefined ? mapAuthLinks(isAuth, authLinks) : authLinks || null;

  const contextValue = React.useMemo(
    () => ({
      linkComponent,
      linkComponentHrefAttr,
      cssModule,
    }),
    [linkComponent, linkComponentHrefAttr, cssModule],
  );

  return (
    <NavContext.Provider value={contextValue}>
      <nav
        className={`${isCSSModule(
          cssModule.container,
          `unl-navigation__container`,
        )}${addTemplateClasses(template, direction, cssModule)}`}
      >
        <NavLinks links={links} cssModule={cssModule} />
        {authSidecarLinks && <AuthLinks links={authSidecarLinks} cssModule={cssModule} />}
      </nav>
    </NavContext.Provider>
  );
};

export default Navigation;
