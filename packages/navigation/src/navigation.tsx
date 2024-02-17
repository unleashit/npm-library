import React from 'react';
import {
  DefaultLinkComponent,
  utils,
  mapCSSVarsToStyles,
  CSSVars,
} from '@unleashit/common';
import AuthLinks from './AuthLinks';
import NavLinks from './NavLinks';
import NavContext from './NavContext';
import { addTemplateClasses, mapArrayToClasses } from './utils/generateClasses';
import { AuthLinkTypes, NavigationLink } from './types';

// mdx_navigation_props_start
export interface NavigationProps {
  links: NavigationLink[];
  linkComponent?: React.ComponentType<any>;
  linkComponentHrefAttr?: string;
  direction?: 'horizontal' | 'vertical' | 'horz' | 'vert';
  template?: 'clean' | 'dark-buttons' | 'light-buttons' | 'none';
  classes?: string[];
  isAuth?: boolean;
  authLinks?: AuthLinkTypes;
  darkMode?: boolean;
  cssVars?: CSSVars<typeof varNames>;
  cssModule?: Record<string, string>;
}
// mdx_navigation_props_end

const { genClassNames } = utils;

const varNames = [
  'light',
  'dark',
  'textLight',
  'textDark',
  'lightDarker5',
  'lightDarker10',
  'lightDarker15',
  'darkLighter5',
  'darkLighter10',
  'darkLighter15',
] as const;

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
  cssVars,
  classes,
  isAuth,
  authLinks,
  linkComponent = DefaultLinkComponent,
  linkComponentHrefAttr = 'href',
  darkMode = false,
  cssModule = {},
}: NavigationProps): React.ReactElement => {
  // show default authLinks if isAuth is provided.
  // if user provides authLinks, they will override the default on a property by property basis
  // don't show authLinks if both authLinks and isAuth are omitted.
  const authSidecarLinks =
    isAuth !== undefined ? mapAuthLinks(isAuth, authLinks) : authLinks || null;

  const { clsName } = React.useMemo(
    () => genClassNames(Navigation.displayName, cssModule),
    [cssModule],
  );

  const contextValue = React.useMemo(
    () => ({
      linkComponent,
      linkComponentHrefAttr,
      clsName,
    }),
    [linkComponent, linkComponentHrefAttr, clsName],
  );

  return (
    <NavContext.Provider value={contextValue}>
      {/*
       * if template is 'none', container class name is changed which prevents any style
       * add classes for template and direction
       * add any user supplied classes
       */}
      <nav
        className={`${clsName('container')}${addTemplateClasses(
          template,
          direction,
          clsName,
        )}${mapArrayToClasses<NavigationProps['classes']>(classes)}`}
        data-theme={darkMode ? 'dark' : 'light'}
        style={mapCSSVarsToStyles<typeof varNames>({
          cssVars,
          varNames,
        })}
      >
        <NavLinks links={links} clsName={clsName} />
        {authSidecarLinks && (
          <AuthLinks links={authSidecarLinks} clsName={clsName} />
        )}
      </nav>
    </NavContext.Provider>
  );
};

Navigation.displayName = 'navigation';
export default Navigation;
