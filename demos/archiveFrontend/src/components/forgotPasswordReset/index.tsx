import React from 'react';
import {
  ForgotPasswordReset,
  FormValuesReset,
  ServerResponseReset,
} from '@unleashit/forgot-password';
import css from '@unleashit/forgot-password/dist/forgot-password.module.css';

// const Header = () => (
//   <div className={css.header}>
//     <h2>Reset Password</h2>
//     <p>Please enter a new password and confirm.</p>
//     <p style={{ marginBottom: '2.5rem', color: '#aaaaaa' }}>
//       In this example, in the handler prop, the user Id and token are taken from
//       url and posted to the server for verification. If the either the id or
//       token don't match or the user input is wrong, it will fail.
//     </p>
//   </div>
// );

function ForgotPasswordResetDemo() {
  const forgotPasswordResetHandler = async (
    values: FormValuesReset,
  ): Promise<any> => {
    const [token, userid] = new URL(window.location.href).pathname
      .split('/')
      .filter(Boolean)
      .reverse();

    return await fetch(
      `${process.env.DEMO_URL}/forgot-password/${userid}/${token}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      },
    ).then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
      throw new Error('Problem connecting to the server');
    });
  };

  const onSuccess = (res: ServerResponseReset) => {
    console.log(res);
  };

  return (
    <>
      <div>
        <p style={{ marginBottom: '2.5rem', color: '#aaaaaa' }}>
          In this example, in the handler function, the user Id and token are
          taken from url and posted to the server for verification. If the
          either the id or token don't match, or the user input is wrong it will
          fail.
        </p>
      </div>
      <ForgotPasswordReset
        handler={forgotPasswordResetHandler}
        onSuccess={onSuccess}
        cssModule={css}
      />
    </>
  );
}

export default ForgotPasswordResetDemo;
