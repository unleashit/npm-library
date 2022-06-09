## Signup

[![NPM](https://img.shields.io/npm/l/@unleashit/navigation.svg)](https://github.com/unleashit/npm-library/blob/master/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@unleashit/signup.svg)](https://www.npmjs.com/package/@unleashit/signup)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@unleashit/signup.svg)](https://bundlephobia.com/result?p=@unleashit/signup)

Customizable React signup component in Typescript that validates with a built-in or custom Yup schema. It accepts custom fields, header/footer and social sign up buttons.

![signup component](https://raw.githubusercontent.com/unleashit/npm-library/master/packages/signup/signup.png)

### Install

```
npm install @unleashit/signup
```

Required peer dependencies: react, formik and yup.

### Example

```javascript
class SignupDemo extends React.Component {
  async signupHandler(values) {
    // should return a Promise in the shape of SignupHandlerResponse below
    return await fetch('https://api.example.com/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then((resp) => resp.json());
  }

  onSuccess(resp) {
    // set auth state, redirect, etc. resp has full server response from signupHandler().
    window.location.href = '/signed-in';
  }

  render() {
    return <Signup signupHandler={this.signupHandler} onSuccess={this.onSuccess} />;
  }
}

export default SignupDemo;
```

### Social Sign up

Adding social sign up buttons is easy. Simply include them as children and they will display under the main login with a nice separator. You must supply the buttons themselves, but for something fast and nice I recommend `react-social-login-buttons`.

```javascript
import { GithubLoginButton, TwitterLoginButton } from 'react-social-login-buttons';

const btnStyle = {
  margin: '10px 0',
  boxShadow: 'none',
};

render() {
  return (
    <Signup
      signupHandler={() => Promise.resolve({ success: true })}
      onSuccess={(resp) => alert(JSON.stringify(resp, null, 2))}
    >
      <TwitterLoginButton onClick={() => alert('Hello')} style={btnStyle}>
        Sign up with Twitter
      </TwitterLoginButton>
      <GithubLoginButton onClick={() => alert('Hello')} style={btnStyle}>
        Sign up with Github
      </GithubLoginButton>
    </Signup>
  );
}
```

### Custom Fields

It's possible to replace the default fields with custom fields and attributes by adding a `customFields` prop. The signupHandler will be called with their values after passing validation.

This array of fields will replace the defaults, so don't forget to add email/username, password and password confirmation if you need them. If you create a Yup schema with matching name attributes, it will properly validate.

Currently input, select, checkbox and textarea fields are supported.

```javascript
<Signup
  signupHandler={this.signupHandler}
  onSuccess={this.onSuccess}
  schema={schema}
  customFields={[
    {
      element: 'input',
      type: 'text',
      name: 'email',
      label: 'Email',
    },
    {
      element: 'input',
      type: 'password',
      name: 'password',
      label: 'Password',
    },
    {
      element: 'input',
      type: 'password',
      name: 'passwordConfirm',
      label: 'Type password again',
    },
    {
      element: 'select',
      name: 'color',
      label: 'Choose a color',
      options: [
        ['', '- select -'],
        ['red', 'red'],
        ['green', 'green'],
        ['blue', 'blue'],
        ['yellow', 'yellow'],
      ],
    },
    {
      element: 'input',
      type: 'checkbox',
      name: 'newsletterOptIn',
      label: 'Subscribe to our newsletter?',
      value: 'yes',
      defaultValue: true,
    },
  ]}
/>;

// yup schema
const schema = yup.object().shape({
  email: yup.string().email().max(56).required(),
  password: yup.string().min(8).max(512).required(),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), ''], 'Passwords must match')
    .required(),
  color: yup.string().oneOf(['red', 'green', 'blue', 'yellow']).required(),
});
```

### CSS

Basic namespaced (BEM) css can be imported: `import '@unleashit/signup/dist/signup.css'`. CSS Module support is baked in. If you use CSS Modules you can `import styles from '@unleashit/signup/dist/signup.module.css'` or import your own custom module targeting the internal classes and pass to the `cssModule` prop. Please see CSS in the main readme of the repo for more info.

### API

```typescript
// signupHandler() should return this shape:
interface SignupHandlerResponse {
  success: boolean;
  errors?: {
    // error msg to print in browser when signup fails
    // (typically because the user/email was already registered)
    serverAuth: string;
    // optionally validate anything else on server
    // key is the field's name attr, value is error msg to display
    [key: string]: string;
  };
}

// customFields prop should be an array of objects in this shape:
interface CustomField {
  element: 'input' | 'select' | 'textarea';
  type: string;
  name: string;
  label: string;
  options?: string[][]; // for select element
  defaultChecked?: boolean; // for checkbox
  custAttrs?: { [key: string]: string };
}
```

### Props

| Name          | Type                                             | Description                                                                                                                       | default                        |
| ------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| signupHandler | (values: any) => Promise\<SignupHandlerResponse> | Called on submission and after validation. Use to register user and validate serverside. Should return the above interface        | required                       |
| onSuccess     | (resp: SignupHandlerResponse) => any             | Called if signupHandler returns success. Provides the server response from serverHandler. Use to store auth state, redirect, etc. | required                       |
| schema        | yup.Schema\<SignupSchema>                        | Yup schema to override the default                                                                                                | standard validation            |
| header        | React Component                                  | React component to override default header                                                                                        | basic header                   |
| loader        | React Component                                  | React component to override default loader                                                                                        | Signing up...                  |
| loginUrl      | string                                           | Url for login page. Use only if using default header                                                                              | /login                         |
| customFields  | CustomField[]                                    | Array of custom fields. Replaces defaults (including email/password). Custom validation schema will be needed.                    | n/a                            |
| orLine        | boolean                                          | Display a "nice" line rule above social signup buttons                                                                            | true (note: requires children) |
| cssModule     | { [key: string]: string }                        | CSS Module object that optionally replaces default. Class names need to match expected names.                                     | undefined                      |
| children      | React Children                                   | Use for Social signup buttons or anything else (displays as footer)                                                               | n/a                            |
