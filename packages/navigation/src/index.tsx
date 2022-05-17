import { isCSSModule } from '@unleashit/common';
import * as React from 'react';

import AuthLinks from './AuthLinks';
import NavLinks from './NavLinks';
import { addTemplateClasses } from './utils/templateClasses';

export interface Style {
  [key: string]: any;
}

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

export interface Link {
  url: string;
  text: string;
  active?: boolean;
  classes?: string[];
  style?: React.CSSProperties;
  icon?: string;
  iconPosition?: 'left' | 'right';
  display?: boolean;
  attrs?: React.AllHTMLAttributes<any>;
}
export interface AuthLinkTypes {
  login?: Link;
  logout?: Link;
  signup?: Link;
}
export interface Props {
  links: Link[];
  direction?: 'horizontal' | 'vertical' | 'horz' | 'vert';
  template?: 'plain' | 'clean' | 'dark-buttons' | 'light-buttons';
  isAuth?: boolean;
  authLinks?: AuthLinkTypes;
  cssModuleStyles?: { [key: string]: string };
}

const buildAuthLinks = (
  isAuth: boolean,
  authLinks: Props['authLinks'] = {},
): AuthLinkTypes => {
  const defaults = {
    login: {
      text: 'Login',
      url: '/login',
      display: !isAuth,
    },
    logout: {
      text: 'Logout',
      url: '/logout',
      display: isAuth,
    },
    signup: {
      text: 'Signup',
      url: '/signup',
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
  cssModuleStyles: theme = {},
}: Props): React.ReactElement => {
  // * show default authLinks if isAuth is provided.
  // * if user provides authLinks, they will override the default on a property by property basis
  // * don't show authLinks if both authLinks and isAuth are omitted.
  const newAuthLinks =
    isAuth !== undefined ? buildAuthLinks(isAuth, authLinks) : authLinks || null;
  console.log(links);
  return (
    <nav
      className={`${isCSSModule(
        theme.container,
        `unl-navigation__container`,
      )}${addTemplateClasses(template, direction, theme)}`}
    >
      <NavLinks links={links} theme={theme} />
      {newAuthLinks && <AuthLinks links={newAuthLinks} theme={theme} />}
    </nav>
  );
};

export default Navigation;
