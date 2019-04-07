import * as React from 'react';
// import { AuthLinkTypes, Style } from "./index";
import NavLink from './NavLink';

interface Style {
  [key: string]: any;
}
interface Link {
  url: string;
  text: string;
  classes?: string[];
  style?: React.CSSProperties;
  icon?: string;
  iconPosition?: 'left' | 'right';
  display?: boolean;
  attrs?: React.HTMLAttributes<any>;
}
interface AuthLinkTypes {
  login?: Link;
  logout?: Link;
  signup?: Link;
}
interface AuthLinksProps {
  links: AuthLinkTypes;
  cssModuleStyle: Style;
}

const AuthLinks: React.FC<AuthLinksProps> = ({
  links,
  cssModuleStyle: style,
}): React.ReactElement => {
  const { login, logout, signup } = links;

  return (
    <ul className={`${style.authLinks} unl-navigation__auth-links`}>
      {login && login.display && (
        <NavLink {...login} authLink="login" cssModuleStyle={style} />
      )}
      {logout && logout.display && (
        <NavLink {...logout} authLink="logout" cssModuleStyle={style} />
      )}
      {signup && signup.display && (
        <NavLink {...signup} authLink="signup" cssModuleStyle={style} />
      )}
    </ul>
  );
};

export default AuthLinks;
