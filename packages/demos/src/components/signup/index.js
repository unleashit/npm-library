import React, { Component } from 'react';
import Signup from '@unleashit/signup';
import schema from './validations';

// import '@unleashit/signup/dist/style.css';

class SignupDemo extends Component {
  async signupHandler(values) {
    return await fetch(
      'https://unleashit-signup.now.sh',
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
              element: 'input',
              type: 'text',
              name: 'email',
              label: 'Email'
            },
            {
              element: 'input',
              type: 'password',
              name: 'password',
              label: 'Password',
            },
            {
              element: 'input',
              type: 'password',
              name: 'passwordConfirm',
              label: 'Type password again',
            },
            {
              element: 'select',
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
              element: 'textarea',
              name: 'comments',
              label: 'Give us your feedback'
            },
            {
              element: 'input',
              type: 'checkbox',
              name: 'newsletterOptIn',
              label: 'Subscribe to our newsletter?',
              defaultChecked: true,
              defaultValue: true
            },
          ]}
        />
      </div>
    );
  }
}

export default SignupDemo;
