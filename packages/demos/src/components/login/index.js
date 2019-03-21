import React, { Component } from 'react';
import Login from '@unleashit/login';

import '@unleashit/login/dist/style.css';
import Signup from '../signup';

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
