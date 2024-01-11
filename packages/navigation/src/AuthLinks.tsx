import * as React from 'react';
import { ClsName } from '@unleashit/common';
import NavLink from './NavLink';
import { AuthLinkTypes } from './types';

type AuthLinksProps = {
  links: AuthLinkTypes;
  clsName: ClsName;
};

const AuthLinks: React.FC<AuthLinksProps> = ({
  links,
  clsName,
}): React.ReactElement => {
  const { login, logout, signup } = links;

  return (
    <ul className={clsName('authLinks')}>
      {login && login.display && <NavLink {...login} authLink="login" />}
      {logout && logout.display && <NavLink {...logout} authLink="logout" />}
      {signup && signup.display && <NavLink {...signup} authLink="signup" />}
    </ul>
  );
};

export default AuthLinks;
