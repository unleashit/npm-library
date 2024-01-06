import { utils } from '@unleashit/common';

import { NavigationProps } from '../navigation';
import { NavLinkExtraProps } from '../NavLink';

type Direction = NavigationProps['direction'];
type Template = NavigationProps['template'];
type Style = Required<NavigationProps>['cssModule'];
type AuthLink = NavLinkExtraProps['authLink'];

const { isCSSModule } = utils;

const isVertical = (dir: Direction, style: Style): string =>
  dir === 'vert' || dir === 'vertical'
    ? ` ${isCSSModule(style.vertical, 'unl-navigation__container--vertical')}`
    : '';

const isTemplate = (template: Template, style: Style): string => {
  let classes = '';
  switch (template) {
    case 'clean':
      classes = ` ${isCSSModule(
        style.clean,
        'unl-navigation__container--clean',
      )}`;
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
      // Either default or 'none' template
      classes = '';
  }
  return classes;
};

export const addTemplateClasses = (
  template: Template,
  direction: Direction,
  theme: Style,
): string => `${isTemplate(template, theme)}${isVertical(direction, theme)}`;

export const getAuthLinkClass = (authLink: AuthLink, theme: Style): string => {
  if (authLink && ['login', 'logout', 'signup'].includes(authLink)) {
    return ` ${isCSSModule(
      theme[`${authLink}Link`],
      `unl-navigation__${authLink}-link`,
    )}`;
  }

  return '';
};

export const mapArrayToClasses = <T extends string[] | undefined>(
  classes: T,
): string => (classes && classes.length ? ` ${classes.join(' ')}` : '');
