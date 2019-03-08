import React, { Component } from 'react';
import Login from '@unleashit/login';

import './login.scss';
import '@unleashit/login/dist/style.css';

class LoginDemo extends Component {
  async loginHandler(values) {
    return await fetch(
      'https://wt-b65e9ca991b9178e9657d8a3b97818b1-0.sandbox.auth0-extend.com/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      },
    ).then(resp => resp.json());
  }

  onSuccess() {
    window.location.href = '/';
  }

  render() {
    return (
      <div style={{ width: '100%' }}>
        <p style={{ marginBottom: '2.5rem', color: '#aaaaaa' }}>
          Valid test login: test@test.com/12345678
        </p>
        <Login loginHandler={this.loginHandler} onSuccess={this.onSuccess} />
      </div>
    );
  }
}

export default LoginDemo;
