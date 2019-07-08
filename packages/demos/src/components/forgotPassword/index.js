import React, { Component } from 'react';
import ForgotPassword from '@unleashit/forgot-password';

import '@unleashit/forgot-password/dist/forgot-password.css';

class ForgotPasswordDemo extends Component {
  async forgotPasswordHandler(values) {
    return await fetch('https://forgotpassword.unleashit.now.sh', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then(resp => resp.json());
  }

  onSuccess(serverResponse) {
    console.log(serverResponse);
  }

  render() {
    return (
      <React.Fragment>
        <p style={{ marginBottom: '2.5rem', color: '#aaaaaa' }}>
          Valid user: test@test.com
        </p>
        <ForgotPassword
          forgotPasswordHandler={this.forgotPasswordHandler}
          onSuccess={this.onSuccess}
          showDefaultConfirmation
        />
      </React.Fragment>
    );
  }
}

export default ForgotPasswordDemo;
