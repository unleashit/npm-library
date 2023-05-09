import '@unleashit/login/dist/login.css';

import Login, { FormValues, ServerResponse } from '@unleashit/login';
import React from 'react';
import { GithubLoginButton, TwitterLoginButton } from 'react-social-login-buttons';
import { Link, useNavigate } from 'react-router-dom';

const btnStyle = {
  margin: '10px 0',
  boxShadow: 'none',
};

const LoginDemo = () => {
  const navigate = useNavigate();

  const loginHandler = async (values: FormValues) =>
    await fetch('https://unleashit-login.now.sh', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then((resp) => resp.json());

  const onSuccess = (resp: ServerResponse) => {
    console.log(resp);
    navigate('/');
  };

  return (
    <>
      <p style={{ marginBottom: '2.5rem', color: '#aaaaaa' }}>
        Valid test login: test@test.com/12345678
      </p>
      <Login
        loginHandler={loginHandler}
        onSuccess={onSuccess}
        linkComponent={Link}
        linkComponentHrefAttr="to"
      >
        <TwitterLoginButton onClick={() => alert('Hello')} style={btnStyle} />
        <GithubLoginButton onClick={() => alert('Hello')} style={btnStyle} />
      </Login>
    </>
  );
};

export default LoginDemo;
