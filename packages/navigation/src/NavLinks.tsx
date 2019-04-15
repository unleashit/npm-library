import * as React from 'react';
import { Link, Style } from './index';
import NavLink from './NavLink';

interface NavLinksProps {
  links: Link[];
  cssModuleStyle: Style;
}

const NavLinks: React.FC<NavLinksProps> = ({
  links,
  cssModuleStyle: style,
}): React.ReactElement => (
  <ul className={`${style.navList} unl-navigation__nav-list`}>
    {links.map(
      (link): React.ReactNode => (
        <NavLink cssModuleStyle={style} {...link} key={link.text} />
      ),
    )}
  </ul>
);

export default NavLinks;
