import { Link, useNavigate } from 'react-router-dom';
import Login, { ServerResponse, FormValues } from '@unleashit/login';
import React from 'react';
import {
  GithubLoginButton,
  TwitterLoginButton,
} from 'react-social-login-buttons';
import css from '@unleashit/login/dist/login.module.css';

const btnStyle = {
  margin: '10px 0',
  boxShadow: 'none',
};

// const customFields: CustomField[] = [
//   {
//     element: 'input',
//     type: 'text',
//     name: 'first_name',
//     label: 'First Name',
//     attrs: {},
//   },
//   {
//     element: 'input',
//     type: 'text',
//     name: 'last_name',
//     label: 'Last Name',
//   },
//   {
//     element: 'input',
//     type: 'email',
//     name: 'email',
//     label: 'Email',
//   },
//   {
//     element: 'select',
//     type: 'text',
//     name: 'favorite_color',
//     label: 'Favorite color',
//     options: [
//       ['-- select --', ''],
//       ['red', 'red'],
//       ['blue', 'blue'],
//       ['green', 'green'],
//       ['yellow', 'yellow'],
//       ['orange', 'orange'],
//     ],
//   },
//   {
//     element: 'textarea',
//     type: 'text',
//     name: 'message',
//     label: 'Message',
//   },
//   {
//     element: 'input',
//     type: 'checkbox',
//     name: 'subscribe',
//     label: 'Subscribe to the newsletter?',
//   },
// ];

const LoginDemo = () => {
  const navigate = useNavigate();

  const loginHandler = async (values: FormValues): Promise<ServerResponse> => {
    console.log(values);
    return await fetch(`${process.env.DEMO_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then((resp) => resp.json());
  };

  const onSuccess = (resp: any) => {
    console.log(resp);
    navigate('/');
  };

  return (
    <>
      <p style={{ marginBottom: '2.5rem', color: '#aaaaaa' }}>
        Valid test login: test@test.com/12345678
      </p>
      <Login
        handler={loginHandler}
        onSuccess={onSuccess}
        signupLink={<Link to="/signup">Sign up</Link>}
        // customFields={customFields}
        cssModule={css}
      >
        <TwitterLoginButton onClick={() => alert('Hello')} style={btnStyle} />
        <GithubLoginButton onClick={() => alert('Hello')} style={btnStyle} />
      </Login>
    </>
  );
};

export default LoginDemo;
