import { isCSSModule } from '@unleashit/common';
import * as React from 'react';

import { NavigationLink } from './index';
import NavContext from './NavContext';
import { getAuthLinkClass, mapArrayToClasses } from './utils/generateClasses';

export interface NavLinkExtraProps {
  authLink?: 'login' | 'logout' | 'signup' | null;
}

// generates the attr name and value for the link in case
// the user is using a routing component like React Router
// which uses a `to` attribute instead of the standard `href`
// const getHref = (attrName: string, href: string) => ({ [attrName]: href });

const NavLink = ({
  href,
  title,
  active,
  classes,
  display = true,
  attrs,
  icon,
  iconPosition = 'left',
  authLink = null,
}: NavigationLink & NavLinkExtraProps): React.ReactElement | null => {
  const {
    linkComponent: LinkComponent,
    linkComponentHrefAttr,
    cssModule,
  } = React.useContext(NavContext);

  if (display) {
    return (
      <li
        className={`${isCSSModule(
          cssModule.linkItem,
          'unl-navigation__link-item',
        )} ${mapArrayToClasses<NavigationLink['classes']>(classes)} ${
          active
            ? isCSSModule(cssModule.active, `unl-navigation__link-item--active`)
            : ''
        }`}
      >
        <LinkComponent
          {...{ [linkComponentHrefAttr]: href }}
          className={`${isCSSModule(cssModule.link, `unl-navigation__link`)}${
            authLink ? getAuthLinkClass(authLink, cssModule) : ''
          }`}
          {...attrs}
        >
          {icon && iconPosition === 'left' && (
            <span
              className={isCSSModule(
                cssModule.iconSpanLeft,
                `unl-navigation__icon-span--left`,
              )}
            >
              <img
                src={icon}
                alt=""
                className={isCSSModule(cssModule.icon, `unl-navigation__icon`)}
              />
            </span>
          )}
          <span>{title}</span>
          {icon && iconPosition === 'right' && (
            <span
              className={isCSSModule(
                cssModule.iconSpanRight,
                `unl-navigation__icon-span--right`,
              )}
            >
              <img
                src={icon}
                alt=""
                className={isCSSModule(cssModule.icon, `unl-navigation__icon`)}
              />
            </span>
          )}
        </LinkComponent>
      </li>
    );
  }
  return null;
};

export default NavLink;
