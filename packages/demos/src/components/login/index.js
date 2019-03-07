import React, { Component } from 'react';
import Login from '@unleashit/login';

import './login.scss';
import '@unleashit/pagination/dist/style.css';

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
    window.location.reload();
  }

  render() {
    return <Login loginHandler={this.loginHandler} onSuccess={this.onSuccess} />;
  }
}

export default LoginDemo;
