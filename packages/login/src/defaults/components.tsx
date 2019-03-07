import * as React from "react";
import * as style from '../scss/login.scss';

export interface LoginHeaderProps {
  signupUrl: string;
}

export const LoginLoader: React.FC<{}> = (): JSX.Element => (
  <div className={style.loginLoader}>
    <div className={style.loginLoaderChild}>Logging in...</div>
  </div>
);

export const LoginHeader: React.FC<LoginHeaderProps> = ({ signupUrl }): JSX.Element => (
  <div className={style.loginHeader}>
    <h2>Login</h2>
    <p>
      Don{"'"}t an account yet? <a href={signupUrl}>Sign up</a>
    </p>
  </div>
);
