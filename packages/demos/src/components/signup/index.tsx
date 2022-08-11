// import schema from './validations';
import '@unleashit/signup/dist/signup.css';

import Signup, { FormValues, ServerResponse } from '@unleashit/signup';
import React from 'react';
import { GithubLoginButton, TwitterLoginButton } from 'react-social-login-buttons';
import { Link, useNavigate } from 'react-router-dom';

const btnStyle = {
  margin: '10px 0',
  boxShadow: 'none',
};

const SignupDemo = () => {
  const navigate = useNavigate();

  const signupHandler = async (values: FormValues) =>
    await fetch('https://unleashit-signup.now.sh', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then((res) => res.json());

  const onSuccess = (res: ServerResponse) => {
    console.log(res);
    navigate('/');
  };

  return (
    <>
      <p style={{ marginBottom: '2.5rem', color: '#aaaaaa' }}>
        Test account (already registered): test@test.com
      </p>
      <Signup
        signupHandler={signupHandler}
        onSuccess={onSuccess}
        linkComponent={Link}
        linkComponentHrefAttr="to"
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
    </>
  );
};

export default SignupDemo;
