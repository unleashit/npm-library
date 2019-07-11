import React, { Component } from 'react';
import Login, { FormValues, ServerResponse } from '@unleashit/login';
import { GithubLoginButton, TwitterLoginButton } from 'react-social-login-buttons';

import '@unleashit/login/dist/login.css';

const btnStyle = {
  margin: '10px 0',
  boxShadow: 'none',
};

class LoginDemo extends Component {
  async loginHandler(values: FormValues) {
    return await fetch('https://unleashit-login.now.sh', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then(resp => resp.json());
  }

  onSuccess(resp: ServerResponse) {
    console.log(resp);
    window.location.href = '/';
  }

  render() {
    return (
      <React.Fragment>
        <p style={{ marginBottom: '2.5rem', color: '#aaaaaa' }}>
          Valid test login: test@test.com/12345678
        </p>
        <Login loginHandler={this.loginHandler} onSuccess={this.onSuccess}>
          <TwitterLoginButton onClick={() => alert('Hello')} style={btnStyle} />
          <GithubLoginButton onClick={() => alert('Hello')} style={btnStyle} />
        </Login>
      </React.Fragment>
    );
  }
}

export default LoginDemo;
