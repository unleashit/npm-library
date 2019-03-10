## Login

React login component in Typescript, Formik and Yup for validation. It accepts props including handlers, custom fields (coming soon), custom Yup schema, custom header and more. Basic CSS is available.

### Install
```
npm install @unleashit/signup
```

### Example

```javascript
class LoginDemo extends React.Component {
  async loginHandler(values) {
    // should return a Promise in the shape of LoginHandlerResponse below
    return await fetch(
      'https://api.example.com/auth',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      },
    ).then(resp => resp.json());
  }

  onSuccess(resp) {
    // set auth state, etc. resp has full server response from loginHandler().
    window.location.href = '/signed-in';
  }

  render() {
    return <Login loginHandler={this.loginHandler} onSuccess={this.onSuccess} />;
  }
}

export default LoginDemo;

```

```typescript
// loginHandler() should return this shape:

interface LoginHandlerResponse {
  success: boolean;
  errors?: {
    serverAuth: string; // error msg to print in browser when auth fails
    [key: string]: string; // optionally validate anything else on server
  };
}

```
### CSS
Basic css can be imported if desired: `import '@unleashit/login/dist/style.css';` . Class names use a CSS modules hash to avoid name collisions.

### Props

| Name      | Type |  Description | default |
| ----------- | ----------- | ---------| ------- |
| loginHandler      | (values: {}) => Promise\<LoginHandlerResponse>       | Called on submission and after validation. Use to check auth. Should return the above interface | required |
| onSuccess      | (resp: LoginHandlerResponse) => any       | Called if loginHandler returns success. Provides the server response from loginHandler. Use to redirect, store auth state, etc. | required |
| schema      | yup.Schema\<LoginSchema>     | Yup schema to override the default | standard validation |
| header      | React.FC     | React component to override default header | basic header |
| loader      | React.FC     | React component to override default loader | Logging in... |
| signupUrl      | string     | Url for signup page. Use only if using default header | /signup |

