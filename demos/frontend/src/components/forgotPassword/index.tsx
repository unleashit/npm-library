import React from 'react';
import {
  ForgotPassword,
  FormValues,
  ServerResponse,
} from '@unleashit/forgot-password';
import css from '@unleashit/forgot-password/dist/forgot-password.module.css';
import { Link } from 'react-router-dom';

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
    <ForgotPassword
      handler={forgotPasswordHandler}
      onSuccess={onSuccess}
      linkComponent={Link}
      linkComponentHrefAttr="to"
      cssModule={css}
    />
  );
};

export default ForgotPasswordDemo;
