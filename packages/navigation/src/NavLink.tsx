import * as React from 'react';
import { getAuthLinkClass, mapArrayToClasses } from './utils/generateClasses';
import { NavigationLink } from './types';
import NavContext from './NavContext';

// generates the attr name and value for the link in case
// the user is using a routing component like React Router
// which uses a `to` attribute instead of the standard `href`
// const getHref = (attrName: string, href: string) => ({ [attrName]: href });

export type NavLinkProps = {
  authLink?: 'login' | 'logout' | 'signup' | null;
} & NavigationLink;

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
}: NavLinkProps): React.ReactElement | null => {
  const {
    linkComponent: LinkComponent,
    linkComponentHrefAttr,
    clsName,
  } = React.useContext(NavContext);

  if (display) {
    return (
      <li
        className={`${clsName('linkItem')} ${mapArrayToClasses<
          NavigationLink['classes']
        >(classes)} ${
          active
            ? // unl-navigation__link-item--active
              clsName('active')
            : ''
        }`}
      >
        <LinkComponent
          {...{ [linkComponentHrefAttr]: href }}
          className={`${clsName('link')}${
            authLink ? getAuthLinkClass(authLink, clsName) : ''
          }`}
          {...attrs}
        >
          {icon && iconPosition === 'left' && (
            <span
              // unl-navigation__icon-span--left
              className={clsName('iconSpanLeft')}
            >
              <img src={icon} alt="" className={clsName('icon')} />
            </span>
          )}
          <span>{title}</span>
          {icon && iconPosition === 'right' && (
            <span
              // unl-navigation__icon-span--right
              className={clsName('iconSpanRight')}
            >
              <img src={icon} alt="" className={clsName('icon')} />
            </span>
          )}
        </LinkComponent>
      </li>
    );
  }
  return null;
};

export default NavLink;
