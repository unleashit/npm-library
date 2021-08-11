import { isCSSModule } from '@unleashit/common';

import { Props, Style } from '../index';
import { NavLinkExtraProps } from '../NavLink';

const isVertical = (dir: Props['direction'], style: Style): string => {
  return dir === 'vert' || dir === 'vertical'
    ? ` ${isCSSModule(style.vertical, 'unl-navigation__container--vertical')}`
    : '';
};

const isTemplate = (template: Props['template'], style: Style): string => {
  let classes = '';
  switch (template) {
    case 'plain':
      classes = ` ${isCSSModule(style.plain, 'unl-navigation__container--plain')}`;
      break;
    case 'clean':
      classes = ` ${isCSSModule(style.clean, 'unl-navigation__container--clean')}`;
      break;
    case 'dark-buttons':
      classes = ` ${isCSSModule(
        style.darkButtons,
        'unl-navigation__container--dark-btns',
      )}`;
      break;
    case 'light-buttons':
      classes = ` ${isCSSModule(
        style.lightButtons,
        'unl-navigation__container--light-btns',
      )}`;
      break;
    default:
      classes = '';
  }
  return classes;
};

export const addTemplateClasses = (
  template: Props['template'],
  direction: Props['direction'],
  theme: Style,
): string => {
  return `${isTemplate(template, theme)}${isVertical(direction, theme)}`;
};

export const getAuthClasses = (
  authLink: NavLinkExtraProps['authLink'],
  theme: Style,
): string => {
  if (authLink === 'login') {
    return ` ${isCSSModule(theme.loginLink, 'unl-navigation__login-link')}`;
  }
  if (authLink === 'logout') {
    return ` ${isCSSModule(theme.logoutLink, 'unl-navigation__logout-link')}`;
  }
  if (authLink === 'signup') {
    return ` ${isCSSModule(theme.signupLink, 'unl-navigation__signup-link')}`;
  }
  return '';
};
