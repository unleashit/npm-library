import { utils } from '@unleashit/common';
import * as React from 'react';

import { NavigationProps } from './index';
import NavLink from './NavLink';

type NavLinksProps = Required<Pick<NavigationProps, 'links' | 'cssModule'>>;

const { isCSSModule } = utils;

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
