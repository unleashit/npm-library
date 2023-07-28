import ForgotPassword, {
  FormValues,
  ServerResponse,
} from '@unleashit/forgot-password';
import React from 'react';
import '@unleashit/forgot-password/dist/forgot-password.css';

const ForgotPasswordDemo = () => {
  const forgotPasswordHandler = async (values: FormValues) =>
    await fetch('https://unleashit-forgot-password.vercel.app', {
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
      <p style={{ marginBottom: '2.5rem', color: '#aaaaaa' }}>
        Valid user: test@test.com
      </p>
      <ForgotPassword
        forgotPasswordHandler={forgotPasswordHandler}
        onSuccess={onSuccess}
        showDefaultConfirmation
      />
    </>
  );
};

export default ForgotPasswordDemo;
