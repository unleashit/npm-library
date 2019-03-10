import React, { Component } from 'react';
import Signup from '@unleashit/signup';
import schema from './validations';

import './signup.scss';
import '@unleashit/signup/dist/style.css';

class SignupDemo extends Component {
  async signupHandler(values) {
    return await fetch(
      'https://wt-b65e9ca991b9178e9657d8a3b97818b1-0.sandbox.auth0-extend.com/signup',
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
          Test account (already registered): test@test.com
        </p>
        <Signup
          signupHandler={this.signupHandler}
          onSuccess={this.onSuccess}
          schema={schema}
          customFields={[
            {
              elementType: 'input',
              type: 'text',
              name: 'email',
              label: 'Email'
            },
            {
              elementType: 'input',
              type: 'password',
              name: 'password',
              label: 'Password',
            },
            {
              elementType: 'input',
              type: 'password',
              name: 'passwordConfirm',
              label: 'Type password again',
            },
            {
              elementType: 'select',
              name: 'color',
              label: 'Choose a color',
              options: [
                ['', '- select -'],
                ['red', 'red'],
                ['green', 'green'],
                ['blue', 'blue'],
                ['yellow', 'yellow'],
              ],
            },
            {
              elementType: 'checkbox',
              name: 'newsletterOptIn',
              label: 'Subscribe to our newsletter?',
              defaultChecked: true,
              defaultValue: true
            }
          ]}
        />
      </div>
    );
  }
}

export default SignupDemo;