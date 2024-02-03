import React from 'react';
import {
  ForgotPassword,
  FormValues,
  ServerResponse,
} from '@unleashit/forgot-password';
import css from '@unleashit/forgot-password/dist/forgot-password.module.css';
import { Link } from 'react-router-dom';

// const Header = () => (
//   <div className={css.header}>
//     <h2>Forgot Password</h2>
//     <p>
//       Enter the email address for your account. We'll send an email with a link
//       to reset your password.
//     </p>
//     <p>
//       For demo purposes, any email except <strong>non@user.com</strong> will be
//       considered a valid user. If you have access to the email, you should get
//       an email with a reset link.
//     </p>
//     <p>
//       For security reasons, it's generally recommended not to notify the user
//       whether their email is found in the database. That said, the component can
//       display that (or any) error your server returns or call in a toast if
//       configured. For testing purposes, you can use{' '}
//       <strong>non@user.com</strong> to show the case where the backend responds
//       with user not found.
//     </p>
//   </div>
// );

const ForgotPasswordDemo = () => {
  const forgotPasswordHandler = async (
    values: FormValues,
  ): Promise<ServerResponse> =>
    await fetch(`${process.env.DEMO_URL}/forgot-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then((res) => res.json());

  const onSuccess = (res: ServerResponse) => {
    console.log(res);
  };

  return (
    <>
      <div style={{ marginBottom: '2.5rem', color: '#aaaaaa' }}>
        <p>
          For demo purposes, any email except <strong>non@user.com</strong> will
          be considered a valid user. If you have access to the email, you
          should get an email with a reset link.
        </p>
        <p>
          For security reasons, it's generally recommended not to notify the
          user whether their email is found in the database. That said, the
          component can display that (or any) error your server returns or call
          in a toast if configured. For testing purposes, you can use{' '}
          <strong>non@user.com</strong> to show the case where the backend
          responds with user not found.
        </p>
      </div>
      <ForgotPassword
        handler={forgotPasswordHandler}
        onSuccess={onSuccess}
        linkComponent={Link}
        linkComponentHrefAttr="to"
        cssModule={css}
      />
    </>
  );
};

export default ForgotPasswordDemo;
