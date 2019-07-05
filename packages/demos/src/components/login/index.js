import React, { Component } from 'react';
import Login from '@unleashit/login';
import { GithubLoginButton, TwitterLoginButton } from 'react-social-login-buttons';

import style from '@unleashit/login/dist/login.module.css';

const btnStyle = {
  margin: '10px 0',
  boxShadow: 'none',
};

class LoginDemo extends Component {
  async loginHandler(values) {
    return await fetch('https://unleashit-login.now.sh', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then(resp => resp.json());
  }

  onSuccess(resp) {
    console.log(resp);
    window.location.href = '/';
  }

  render() {
    return (
      <React.Fragment>
        <p style={{ marginBottom: '2.5rem', color: '#aaaaaa' }}>
          Valid test login: test@test.com/12345678
        </p>
        <Login
          loginHandler={this.loginHandler}
          onSuccess={this.onSuccess}
          cssModuleStyles={style}
        >
          <TwitterLoginButton onClick={() => alert('Hello')} style={btnStyle} />
          <GithubLoginButton onClick={() => alert('Hello')} style={btnStyle} />
        </Login>
      </React.Fragment>
    );
  }
}

export default LoginDemo;
