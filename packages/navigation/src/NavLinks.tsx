import * as React from 'react';
import { isCSSModule } from '@unleashit/common';
import { Link, Style } from './index';
import NavLink from './NavLink';

interface NavLinksProps {
  links: Link[];
  theme: Style;
}

const NavLinks: React.FC<NavLinksProps> = ({ links, theme }): React.ReactElement => (
  <ul className={isCSSModule(theme.navList, `unl-navigation__nav-list`)}>
    {links.map(
      (link): React.ReactNode => (
        <NavLink theme={theme} {...link} key={link.text} />
      ),
    )}
  </ul>
);

export default NavLinks;
