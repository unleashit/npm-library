import * as React from 'react';
import { Link, Style } from './index';
import { getAuthClasses } from './utils/templateClasses';

export interface NavLinkExtraProps {
  cssModuleStyle: Style;
  authLink?: 'login' | 'logout' | 'signup' | null;
}

const getUserClasses = (classes: Link['classes']): string => {
  return classes ? classes.join(' ') : '';
};

const NavLink: React.FC<Link & NavLinkExtraProps> = ({
  url,
  text,
  active,
  classes,
  display = true,
  attrs,
  icon,
  iconPosition = 'left',
  authLink = null,
  cssModuleStyle: style,
}): React.ReactElement | null => {
  if (display) {
    return (
      <li
        className={`${style.linkItem} ${getUserClasses(
          classes,
        )} unl-navigation__link-item ${
          active ? `${style.active} unl-navigation__link-item--active` : ''
        }`}
      >
        {icon && iconPosition === 'left' && (
          <span className={`${style.iconSpanLeft} unl-navigation__icon-span--left`}>
            <img src={icon} alt="" className={`${style.icon} unl-navigation__icon`} />
          </span>
        )}
        <a
          href={url}
          className={`${style.link} unl-navigation__link${
            authLink ? getAuthClasses(authLink, style) : ''
          }`}
          {...attrs}
        >
          {text}
        </a>
        {icon && iconPosition === 'right' && (
          <span className={`${style.iconSpanRight} unl-navigation__icon-span--right`}>
            <img src={icon} alt="" className={`${style.icon} unl-navigation__icon`} />
          </span>
        )}
      </li>
    );
  }
  return null;
};

export default NavLink;
