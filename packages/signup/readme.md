## Signup

React signup component in Typescript, Formik and Yup for validation. It accepts props including handlers, custom fields, custom Yup schema, custom header and more.

![signup component](signup.png)

### Install

```
npm install @unleashit/signup
```

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
    }).then(resp => resp.json());
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
      elementType: 'input',
      type: 'text',
      name: 'email',
      label: 'Email'
    },
    {
      elementType: 'input',
      type: 'password',
      name: 'password',
      label: 'Password'
    },
    {
      elementType: 'input',
      type: 'password',
      name: 'passwordConfirm',
      label: 'Type password again'
    },
    {
      elementType: 'select',
      name: 'color',
      label: 'Choose a color',
      options: [
        ['', '- select -'],
        ['red', 'red'],
        ['green', 'green'],
        ['blue', 'blue'],
        ['yellow', 'yellow']
      ],
    },
    {
      elementType: 'checkbox',
      name: 'newsletterOptIn',
      label: 'Subscribe to our newsletter?',
      defaultChecked: true,
      defaultValue: true
    },
  ]}
/>

// yup schema
const schema = yup.object().shape({
  email: yup
    .string()
    .email()
    .max(56)
    .required(),
  password: yup
    .string()
    .min(8)
    .max(512)
    .required(),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required(),
  color: yup
    .string()
    .oneOf(['red', 'green', 'blue', 'yellow'])
    .required(),
});
```

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
Note: currently tested custom fields are input, select, textarea and checkbox. Support for radio and others will be added.

### CSS

Basic css can be imported: `import '@unleashit/signup/dist/style.css';`, or you can pass in a custom CSS module. Please see CSS in the main readme of the repo for more info.

### Props

| Name          | Type                                            | Description                                                                                                                       | default             |
| ------------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| signupHandler | (values: any) => Promise\<SignupHandlerResponse> | Called on submission and after validation. Use to register user and validate serverside. Should return the above interface        | required            |
| onSuccess     | (resp: SignupHandlerResponse) => any            | Called if signupHandler returns success. Provides the server response from serverHandler. Use to store auth state, redirect, etc. | required            |
| schema        | yup.Schema\<SignupSchema>                       | Yup schema to override the default                                                                                                | standard validation |
| header        | React.FC                                        | React component to override default header                                                                                        | basic header        |
| loader        | React.FC                                        | React component to override default loader                                                                                        | Signing up...       |
| loginUrl      | string                                          | Url for login page. Use only if using default header                                                                              | /login              |
| customFields  | CustomField[]                                   | Array of custom fields. Replaces defaults (including email/password). Custom validation schema will be needed.                    | n/a                 |
| cssModuleStyles  | { [key: string]: string }                    | CSS Module object that optionally replaces default. Class names need to match default names.                                      | default CSS                 |
