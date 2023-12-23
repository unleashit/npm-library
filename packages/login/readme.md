## Login

[![NPM](https://img.shields.io/npm/l/@unleashit/navigation.svg)](https://github.com/unleashit/npm-library/blob/master/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@unleashit/login.svg)](https://www.npmjs.com/package/@unleashit/login)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@unleashit/login.svg)](https://bundlephobia.com/result?p=@unleashit/login)

Customizable React login component that validates with a built-in or custom Zod schema. It accepts custom fields, header/footer, social login buttons and forgot password link.

![login component](https://raw.githubusercontent.com/unleashit/npm-library/master/packages/login/login.png)

### Install

```
npm install @unleashit/login
```

Required peer dependencies: react, react-hook-form and zod.

### Example

```typescript jsx
const LoginDemo = () => {
  const loginHandler = async (values: FormValues): Promise<ServerResponse> => {
    // server should return a ServerResponse
    // success property of true indicates all validations pass
    // errors named after field names will display with fields
    // error with property of "root" will display at the top or sent to toast
    return await fetch('https://api.example.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then((resp) => resp.json());
  };

  const onSuccess = (resp: ServerResponse) => {
    // Redirect or set auth state, etc.
    // resp has full server response from loginHandler().
    console.log(resp);
    navigate('/');
  };

  return <Login handler={loginHandler} onSuccess={onSuccess} />;
};

export default LoginDemo;
```

### Social Logins

Adding social logins is easy. Simply include them as children and they will display under the main login with a nice separator. You must supply the buttons themselves, but for something fast and nice I recommend `react-social-login-buttons`.

```typescript jsx
import {
  GithubLoginButton,
  TwitterLoginButton,
} from 'react-social-login-buttons';

return (
  <Login loginHandler={/* ... */}>
    <TwitterLoginButton onClick={() => alert('Hello')} style={btnStyle} />
    <GithubLoginButton onClick={() => alert('Hello')} style={btnStyle} />
  </Login>
);
```

### Custom Fields

It's possible to replace the default fields with custom fields and attributes by adding a `customFields` prop. The loginHandler will be called with their values after passing validation.

This array of fields will replace the defaults, so don't forget to add email/username and password if you need them. If you create a Yup schema with matching name attributes, it will properly validate.

Currently input, select, checkbox and textarea fields are supported.

```javascript
<Login
  loginHandler={this.handler}
  onSuccess={this.onSuccess}
  forgotPasswordLink={'/auth/password-reset'}
  schema={schema}
  customFields={[
    {
      element: 'input',
      type: 'text',
      name: 'username',
      label: 'Username',
      focus: true, // sets the form focus
    },
    {
      element: 'input',
      type: 'password',
      name: 'password',
      label: 'Password',
    },
    {
      element: 'input',
      type: 'checkbox',
      name: 'persistLogin',
      label: 'Remember me?',
    },
  ]}
/>;

// yup schema
const schema = z.object({
  username: z.string().nonempty().email(),
  password: z.string().nonempty(),
  persistLogin: z.boolean().default(true),
});
```

### CSS

Basic namespaced (BEM) css can be imported: `import '@unleashit/login/dist/login.css'`. CSS Module support is baked in. If you use CSS Modules you can `import '@unleashit/login/dist/login.module.css'` or import your own custom module targeting the internal classes and pass to the `cssModule` prop. Please see CSS in the main readme of the repo for more info.

```

### Props

| Name               | Type                                            | Description                                                                                                                     | default                        |
| ------------------ | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| handler       | (values: any) => Promise\<ServerResponse> | Called on submission and after validation. Use to check auth. Should return the above interface                                 | required                       |
| onSuccess          | (resp: LoginHandlerResponse) => any             | Called if loginHandler returns success. Provides the server response from loginHandler. Use to redirect, store auth state, etc. | required                       |
| schema             | yup.Schema\<LoginSchema>                        | Yup schema to override the default                                                                                              | standard validation            |
| header             | React Component                                 | React component to override default header                                                                                      | basic header                   |
| loader             | React Component                                 | React component to override default loader                                                                                      | Logging in...                  |
| signupUrl          | string                                          | Url for signup page. Use only if using default header                                                                           | /signup                        |
| customFields       | CustomField[]                                   | Array of custom fields. Replaces defaults (including email/password). Custom validation schema will be needed.                  | n/a                            |
| forgotPassword     | boolean                                         | Include the default forgot password link                                                                                        | true                           |
| forgotPasswordLink | string                                          | Url to forgot password                                                                                                          | /forgot-password               |
| forgotPasswordText | string                                          | Forgot password link text                                                                                                       | Forgot password?               |
| orLine             | boolean                                         | Display a "nice" line rule above social login buttons                                                                           | true (note: requires children) |
| cssModule          | { [key: string]: string }                       | CSS Module object that optionally replaces default. Class names need to match expected names.                                   | undefined                      |
| children           | React Children                                  | Use for Social login buttons or anything else (displays as footer)                                                              | n/a                            |
```
