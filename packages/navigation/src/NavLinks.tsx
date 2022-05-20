import { isCSSModule } from '@unleashit/common';
import * as React from 'react';

import { NavigationLink, Style } from './index';
import NavLink from './NavLink';

interface NavLinksProps {
  links: NavigationLink[];
  cssModule: Style;
}

const NavLinks = ({ links, cssModule }: NavLinksProps) => (
  <ul className={isCSSModule(cssModule.navList, `unl-navigation__nav-list`)}>
    {links.map(
      (link): React.ReactNode => (
        <NavLink {...link} key={link.title} />
      ),
    )}
  </ul>
);

export default NavLinks;
