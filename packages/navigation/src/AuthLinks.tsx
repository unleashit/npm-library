import { isCSSModule } from '@unleashit/common';
import * as React from 'react';

import { AuthLinkTypes, Style } from './index';
import NavLink from './NavLink';

interface AuthLinksProps {
  links: AuthLinkTypes;
  cssModule: Style;
}

const AuthLinks: React.FC<AuthLinksProps> = ({
  links,
  cssModule,
}): React.ReactElement => {
  const { login, logout, signup } = links;

  return (
    <ul className={isCSSModule(cssModule.authLinks, `unl-navigation__auth-links`)}>
      {login && login.display && <NavLink {...login} authLink="login" />}
      {logout && logout.display && <NavLink {...logout} authLink="logout" />}
      {signup && signup.display && <NavLink {...signup} authLink="signup" />}
    </ul>
  );
};

export default AuthLinks;
