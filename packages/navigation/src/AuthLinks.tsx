import * as React from 'react';
import { isCSSModule } from '@unleashit/common';
import { AuthLinkTypes, Style } from './index';
import NavLink from './NavLink';

interface AuthLinksProps {
  links: AuthLinkTypes;
  theme: Style;
}

const AuthLinks: React.FC<AuthLinksProps> = ({ links, theme }): React.ReactElement => {
  const { login, logout, signup } = links;

  return (
    <ul className={isCSSModule(theme.authLinks, `unl-navigation__auth-links`)}>
      {login && login.display && <NavLink {...login} authLink="login" theme={theme} />}
      {logout && logout.display && (
        <NavLink {...logout} authLink="logout" theme={theme} />
      )}
      {signup && signup.display && (
        <NavLink {...signup} authLink="signup" theme={theme} />
      )}
    </ul>
  );
};

export default AuthLinks;
