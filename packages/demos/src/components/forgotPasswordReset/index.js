import React from 'react';
import { ForgotPasswordReset } from '@unleashit/forgot-password';

import '@unleashit/forgot-password/dist/style.css';

class ForgotPasswordResetDemo extends React.Component {
  async forgotPasswordResetHandler(values) {
    const [token, userid] = new URL(window.location.href)
      .pathname
      .split('/')
      .filter(Boolean)
      .reverse();

    return await fetch(`https://forgotpassword.unleashit.now.sh/passwordreset/${userid}/${token}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
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
          User ID = 1, token = 1234567890, taken from url in this example
        </p>
      <ForgotPasswordReset
        forgotPasswordResetHandler={this.forgotPasswordResetHandler}
        onSuccess={this.onSuccess}
        showDefaultConfirmation={true}
      />
      </React.Fragment>
    );
  }
}

export default ForgotPasswordResetDemo;
