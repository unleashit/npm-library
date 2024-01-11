import * as React from 'react';
import { ClsName } from '@unleashit/common';
import { NavigationProps } from './navigation';
import NavLink from './NavLink';

type NavLinksProps = {
  links: Required<NavigationProps['links']>;
  clsName: ClsName;
};

const NavLinks = ({ links, clsName }: NavLinksProps) => (
  <ul className={clsName('navList')}>
    {links.map(
      (link): React.ReactNode => (
        <NavLink {...link} key={link.title} />
      ),
    )}
  </ul>
);

export default NavLinks;
