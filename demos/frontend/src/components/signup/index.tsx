import { Link, useNavigate } from 'react-router-dom';
import Signup, {
  // CustomField,
  FormValues,
  ServerResponse,
} from '@unleashit/signup';
import React from 'react';
import {
  GithubLoginButton,
  TwitterLoginButton,
} from 'react-social-login-buttons';
import css from '@unleashit/signup/dist/signup.module.css';
// import custSchema from './custSchema';

const btnStyle = {
  margin: '10px 0',
  boxShadow: 'none',
};

// const customFields: CustomField[] = [
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
//     type: 'text',
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
//     type: 'text',
//     name: 'comments',
//     label: 'Give us your feedback',
//   },
//   {
//     element: 'input',
//     type: 'checkbox',
//     name: 'newsletterOptIn',
//     label: 'Subscribe to our newsletter?',
//     attrs: {
//       defaultChecked: true,
//     },
//   },
// ];

const SignupDemo = () => {
  const navigate = useNavigate();

  const signupHandler = async (values: FormValues): Promise<ServerResponse> => {
    console.log(values);
    return await fetch(`${process.env.DEMO_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then((resp) => resp.json());
  };

  const onSuccess = (resp: ServerResponse) => {
    console.log(resp);
    navigate('/');
  };

  return (
    <>
      <p style={{ marginBottom: '2.5rem', color: '#aaaaaa' }}>
        Test account (already registered): test@test.com
      </p>
      <Signup
        handler={signupHandler}
        onSuccess={onSuccess}
        linkComponent={Link}
        linkComponentHrefAttr="to"
        cssModule={css}
        // childrenPosition="bottom"
        // customSchema={custSchema}
        // customFields={customFields}
      >
        <TwitterLoginButton
          onClick={() => alert('Hello')}
          style={btnStyle}
          text="Sign up with Twitter"
        />

        <GithubLoginButton
          onClick={() => alert('Hello')}
          style={btnStyle}
          text="Sign up with Github"
        />
      </Signup>
    </>
  );
};

export default SignupDemo;
