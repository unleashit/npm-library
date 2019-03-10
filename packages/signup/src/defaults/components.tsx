import * as React from "react";
import * as style from '../scss/signup.scss';

export interface SignupHeaderProps {
  loginUrl: string;
}

export const SignupLoader: React.FC<{}> = (): JSX.Element => (
  <div className={style.signupLoader}>
    <div className={style.signupLoaderChild}>Signing up...</div>
  </div>
);

export const SignupHeader: React.FC<SignupHeaderProps> = ({ loginUrl }): JSX.Element => (
  <div className={style.signupHeader}>
    <h2>Signup</h2>
    <p>
     Already have an account? <a href={loginUrl}>Login</a>
    </p>
  </div>
);
