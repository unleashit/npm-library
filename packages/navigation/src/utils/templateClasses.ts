import { Props, Style } from '../index';
import { NavLinkExtraProps } from '../NavLink';

const isVertical = (dir: Props['direction'], style: Style): string => {
  return dir === 'vert' || dir === 'vertical'
    ? ` ${style.vertical} unl-navigation__container--vertical`
    : '';
};

const isTemplate = (template: Props['template'], style: Style): string => {
  let classes = '';
  switch (template) {
    case 'plain':
      classes = ` ${style.plain} unl-navigation__container--plain`;
      break;
    case 'clean':
      classes = ` ${style.clean} unl-navigation__container--clean`;
      break;
    case 'dark-buttons':
      classes = ` ${style.darkButtons} unl-navigation__container--dark-btns`;
      break;
    case 'light-buttons':
      classes = ` ${style.lightButtons} unl-navigation__container--light-btns`;
      break;
    default:
      classes = '';
  }
  return classes;
};

export const addTemplateClasses = (
  template: Props['template'],
  direction: Props['direction'],
  style: Style,
): string => {
  return `${isTemplate(template, style)}${isVertical(direction, style)}`;
};

export const getAuthClasses = (
  authLink: NavLinkExtraProps['authLink'],
  style: Style,
): string => {
  if (authLink === 'login') {
    return ` ${style.loginLink} unl-navigation__loginLink`;
  }
  if (authLink === 'logout') {
    return ` ${style.logoutLink} unl-navigation__logoutLink`;
  }
  if (authLink === 'signup') {
    return ` ${style.signupLink} unl-navigation__sigupLink`;
  }
  return '';
};
