## Login

React login component in Typescript, Formik and Yup for validation. It accepts props including handlers, custom fields, custom Yup schema, custom header and more.

![login component](https://raw.githubusercontent.com/unleashit/npm-library/master/packages/login/login.png)

### Install
```
npm install @unleashit/login
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
### Custom Fields

It's possible to replace the default fields with custom fields and attributes by adding a `customFields` prop. The loginHandler will be called with their values after passing validation.

This array of fields will replace the defaults, so don't forget to add email/username and password if you need them. If you create a Yup schema with matching name attributes, it will properly validate.

Currently input, select, checkbox and textarea fields are supported.

```javascript
<Login
  loginHandler={this.loginHandler}
  onSuccess={this.onSuccess}
  schema={schema}
  customFields={[
    {
      element: 'input',
      type: 'text',
      name: 'username',
      label: 'Username'
    },
    {
      element: 'input',
      type: 'password',
      name: 'password',
      label: 'Password'
    },
    {
      element: 'text',
      type: 'checkbox',
      name: 'persistLogin',
      label: 'Remember me?',
      defaultChecked: true,
      defaultValue: true
    },
  ]}
/>

// yup schema
const schema = yup.object().shape({
  username: yup
    .string()
    .matches(/^[a-zA-Z0-9\._-]+$/, 'Enter a valid username')
    .max(56)
    .required(),
  password: yup
    .string()
    .min(8)
    .max(512)
    .required()
});
```

```typescript
// loginHandler() should return this shape:

interface LoginHandlerResponse {
  success: boolean;
  errors?: {
    // error msg to print in browser when auth fails
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
### CSS

Basic css can be imported: `import '@unleashit/login/dist/style.css';`, or you can pass in a custom CSS module. Please see CSS in the main readme of the repo for more info.

### Props

| Name      | Type |  Description | default |
| ----------- | ----------- | ---------| ------- |
| loginHandler      | (values: any) => Promise\<LoginHandlerResponse>       | Called on submission and after validation. Use to check auth. Should return the above interface | required |
| onSuccess      | (resp: LoginHandlerResponse) => any       | Called if loginHandler returns success. Provides the server response from loginHandler. Use to redirect, store auth state, etc. | required |
| schema      | yup.Schema\<LoginSchema>     | Yup schema to override the default | standard validation |
| header      | React.FC     | React component to override default header | basic header |
| loader      | React.FC     | React component to override default loader | Logging in... |
| signupUrl      | string     | Url for signup page. Use only if using default header | /signup |
| customFields  | CustomField[]  | Array of custom fields. Replaces defaults (including email/password). Custom validation schema will be needed.  | n/a   |
| cssModuleStyles  | { [key: string]: string }  | CSS Module object that optionally replaces default. Class names need to match default names. | default CSS |
