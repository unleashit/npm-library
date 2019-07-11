import React, { Component } from 'react';
import Signup, { FormValues, ServerResponse } from '@unleashit/signup';
import { TwitterLoginButton, GithubLoginButton } from 'react-social-login-buttons';
// import schema from './validations';

import '@unleashit/signup/dist/signup.css';

const btnStyle = {
  margin: '10px 0',
  boxShadow: 'none',
};

class SignupDemo extends Component {
  async signupHandler(values: FormValues) {
    return await fetch('https://unleashit-signup.now.sh', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then(res => res.json());
  }

  onSuccess(res: ServerResponse) {
    console.log(res);
    window.location.href = '/';
  }

  render() {
    return (
      <React.Fragment>
        <p style={{ marginBottom: '2.5rem', color: '#aaaaaa' }}>
          Test account (already registered): test@test.com
        </p>
        <Signup
          signupHandler={this.signupHandler}
          onSuccess={this.onSuccess}
          // schema={schema}
          // customFields={[
          //   {
          //     element: 'input',
          //     type: 'text',
          //     name: 'email',
          //     label: 'Email',
          //   },
          //   {
          //     element: 'input',
          //     type: 'password',
          //     name: 'password',
          //     label: 'Password',
          //   },
          //   {
          //     element: 'input',
          //     type: 'password',
          //     name: 'passwordConfirm',
          //     label: 'Type password again',
          //   },
          //   {
          //     element: 'select',
          //     name: 'color',
          //     label: 'Choose a color',
          //     options: [
          //       ['', '- select -'],
          //       ['red', 'red'],
          //       ['green', 'green'],
          //       ['blue', 'blue'],
          //       ['yellow', 'yellow'],
          //     ],
          //   },
          //   {
          //     element: 'textarea',
          //     name: 'comments',
          //     label: 'Give us your feedback',
          //   },
          //   {
          //     element: 'input',
          //     type: 'checkbox',
          //     name: 'newsletterOptIn',
          //     label: 'Subscribe to our newsletter?',
          //     value: 'yes',
          //     defaultValue: true
          //   },
          // ]}
        >
          <TwitterLoginButton onClick={() => alert('Hello')} style={btnStyle}>
            Sign up with Twitter
          </TwitterLoginButton>
          <GithubLoginButton onClick={() => alert('Hello')} style={btnStyle}>
            Sign up with Github
          </GithubLoginButton>
        </Signup>
      </React.Fragment>
    );
  }
}

export default SignupDemo;
