import { NavigationProps } from '../navigation';
import { NavLinkProps } from '../NavLink';

type Direction = NavigationProps['direction'];
type Template = NavigationProps['template'];
type AuthLink = NavLinkProps['authLink'];
type ClsName = (title: string) => string;

// container--vertical
const isVertical = (dir: Direction, clsName: ClsName): string =>
  dir === 'vert' || dir === 'vertical' ? ` ${clsName('vertical')}` : '';

const isTemplate = (template: Template, clsName: ClsName): string => {
  let classes = '';
  switch (template) {
    case 'clean':
      classes = ` ${clsName('clean')}`;
      break;
    case 'dark-buttons':
      classes = ` ${clsName('darkButtons')}`;
      break;
    case 'light-buttons':
      classes = ` ${clsName('lightButtons')}`;
      break;
    case 'none':
      classes = ` ${clsName('none')}`;
      break;
    default:
      classes = '';
  }
  return classes;
};

export const addTemplateClasses = (
  template: Template,
  direction: Direction,
  clsName: ClsName,
): string =>
  `${isTemplate(template, clsName)}${isVertical(direction, clsName)}`;

export const getAuthLinkClass = (
  authLink: AuthLink,
  clsName: ClsName,
): string => {
  if (authLink && ['login', 'logout', 'signup'].includes(authLink)) {
    return ` ${clsName(`${authLink}Link`)}`;
  }

  return '';
};

export const mapArrayToClasses = <T extends string[] | undefined>(
  classes: T,
): string => (classes && classes.length ? ` ${classes.join(' ')}` : '');
