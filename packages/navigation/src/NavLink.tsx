import { isCSSModule } from '@unleashit/common';
import * as React from 'react';

import { Link, Style } from './index';
import { getAuthClasses } from './utils/templateClasses';

export interface NavLinkExtraProps {
  theme: Style;
  authLink?: 'login' | 'logout' | 'signup' | null;
}

const getUserClasses = (classes: Link['classes']): string =>
  classes ? classes.join(' ') : '';

const NavLink = ({
  url,
  text,
  active,
  classes,
  display = true,
  attrs,
  icon,
  iconPosition = 'left',
  authLink = null,
  theme,
}: Link & NavLinkExtraProps): React.ReactElement | null => {
  if (display) {
    return (
      <li
        className={`${isCSSModule(
          theme.linkItem,
          'unl-navigation__link-item',
        )} ${getUserClasses(classes)} ${
          active ? isCSSModule(theme.active, `unl-navigation__link-item--active`) : ''
        }`}
      >
        {icon && iconPosition === 'left' && (
          <span
            className={isCSSModule(theme.iconSpanLeft, `unl-navigation__icon-span--left`)}
          >
            <img
              src={icon}
              alt=""
              className={isCSSModule(theme.icon, `unl-navigation__icon`)}
            />
          </span>
        )}
        <a
          href={url}
          className={`${isCSSModule(theme.link, `unl-navigation__link`)}${
            authLink ? getAuthClasses(authLink, theme) : ''
          }`}
          {...attrs}
        >
          {text}
        </a>
        {icon && iconPosition === 'right' && (
          <span
            className={isCSSModule(
              theme.iconSpanRight,
              `unl-navigation__icon-span--right`,
            )}
          >
            <img
              src={icon}
              alt=""
              className={isCSSModule(theme.icon, `unl-navigation__icon`)}
            />
          </span>
        )}
      </li>
    );
  }
  return null;
};

export default NavLink;
