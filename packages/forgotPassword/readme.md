## Forgot Password

[![NPM](https://img.shields.io/npm/l/@unleashit/navigation.svg)](https://github.com/unleashit/npm-library/blob/master/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@unleashit/forgot-password.svg)](https://www.npmjs.com/package/@unleashit/forgot-password)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@unleashit/forgot-password.svg)](https://bundlephobia.com/result?p=@unleashit/forgot-password)

Customizable set of React forgot password components in Typescript that validate with a built-in or custom Yup schema. It accepts custom fields, custom header/footer and includes both reset request and actual reset views. Assumes Peer depenencies of React, Formik and Yup.

![forgot password component](https://raw.githubusercontent.com/unleashit/npm-library/master/packages/forgotPassword/forgotPassword.png)

### Install

```
npm install @unleashit/forgot-password
```

**Required peer dependencies:** react, formik and yup.

There are two components, one for the initial view to request a reset and another for the actual reset.

### Password Reset "Request" Example

```javascript
import ForgotPassword from '@unleashit/forgot-password';

class ForgotPasswordDemo extends React.Component {
  async forgotPasswordHandler(values) {
    // should return a Promise in the shape of LoginHandlerResponse below
    return await fetch('https://api.example.com/auth/reset-request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then(resp => resp.json());
  }

  onSuccess(serverResponse) {
    // serverResponse has server's full response from forgotPasswordHandler().
    console.log(serverResponse);
  }

  render() {
    return (
      <ForgotPassword
        forgotPasswordHandler={this.forgotPasswordHandler}
        onSuccess={this.onSuccess}
        showDefaultConfirmation={true}
      />
    );
  }
}

export default ForgotPasswordDemo;
```

Notes: a `showDefaultConfirmation` prop set to true will show a default confirmation message that instructs the user to check their email for a link. For customized behavior, omit this prop and handle it with `onSuccess`. `onSuccess` is optional and can take either a normal function or a React component instance. If you pass in a function, it will be called with the server's reponse. If you instead pass a component, it will render it.

### Password Reset Example

```javascript
import { ForgotPasswordReset } from '@unleashit/forgot-password';

class ForgotPasswordResetDemo extends React.Component {
  async forgotPasswordResetHandler(values) {
    const [token, userid] = new URL(window.location.href).pathname
      .split('/')
      .filter(Boolean)
      .reverse();

    return await fetch(`https://api.example.com/auth/reset/${userid}/${token}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then(resp => resp.json());
  }

  onSuccess(serverResponse) {
    console.log(serverResponse);
  }

  render() {
    return (
      <React.Fragment>
        <p style={{ marginBottom: '2.5rem', color: '#aaaaaa' }}>
          User ID = 1, token = 1234567890, extracted from url
        </p>
        <ForgotPasswordReset
          forgotPasswordResetHandler={this.forgotPasswordResetHandler}
          onSuccess={this.onSuccess}
          showDefaultConfirmation={true}
        />
      </React.Fragment>
    );
  }
}

export default ForgotPasswordResetDemo;
```

For this example, the userId and authorization token are taken from the url under the assumption the user arrived from a link via email or SMS. For brevity, the form itself is not protected from public display. But you could easily add an initial request to the server in the parent component to achieve that if you wanted.

### Custom Fields

It's possible to replace the default field(s) of the password request (not yet the reset) with custom field(s) and attributes by adding a `customFields` prop. The forgotPasswordHandler will be called with their values after passing validation.

This array of fields will replace the defaults, so don't forget to add anything you need. If you create and pass in a Yup schema with matching name attributes, it will properly validate.

Currently input, select, checkbox and textarea fields are supported.

```javascript
<ForgotPassword
  forgotPasswordHandler={this.forgotPasswordHandler}
  onSuccess={<MyCustomConfimationComponent />}
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
      type: 'text',
      name: 'secretQuestion1',
      label: "What is your mother's maiden name?",
    },
    {
      element: 'input',
      type: 'text',
      name: 'secretQuestion2',
      label: 'What was the name of your first pet?',
    },
  ]}
/>;

// yup schema
const schema = yup.object().shape({
  email: yup
    .string()
    .email()
    .max(56)
    .required(),
  secretQuestion1: yup
    .string()
    .max(512)
    .required(),
  secretQuestion2: yup
    .string()
    .max(512)
    .required(),
});
```

### CSS

Basic namespaced (BEM) css can be imported: `import '@unleashit/forgot-password/dist/forgot-password.css'`. CSS Module support is baked in. If you use CSS Modules you can `import '@unleashit/forgot-password/dist/forgot-password.module.css'` or import your own custom module targeting the internal classes and pass to the `cssModuleStyles` prop. Please see CSS in the main readme of the repo for more info.

### API and Props

```typescript
// both forgotPasswordHandler() and forgotPasswordResetHandler()
// should return this shape:
interface ForgotPasswordHandlerResponse {
  success: boolean;
  errors?: {
    // error msg to print at top of form in browser when req fails
    serverMessage: string;
    // optionally validate anything else on server
    // key is the field's name attr, value is error msg to display
    // displays with fields, matches client validations
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

**ForgotPassword**

| Name                    | Type                                                     | Description                                                                                                                                                                                                 | default             |
| ----------------------- | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| forgotPasswordHandler   | (values: any) => Promise\<ForgotPasswordHandlerResponse> | Called on submission and after validation. Use to check auth. Should return the above interface                                                                                                             | required            |
| onSuccess               | (resp: LoginHandlerResponse) => any &#124; React.Element | Called if forgotPasswordHandler returns success. Provides the server response from forgotPasswordHandler() if a function is passed. If a component instance is passed instead of a function, it will render | n/a                 |
| showDefaultConfirmation | boolean                                                  | If set to true, show a default confirmation message (check email to continue)                                                                                                                               | false               |
| schema                  | yup.Schema\<ForgotPasswordSchema>                        | Yup schema to override the default                                                                                                                                                                          | standard validation |
| header                  | React.FC                                                 | React component to override default pw request header                                                                                                                                                       | basic header        |
| loader                  | React.FC                                                 | React component to override default loader                                                                                                                                                                  | Sending...          |
| customFields            | CustomField[]                                            | Array of custom fields. Replaces defaults (including email). Custom validation schema will be needed.                                                                                                       | n/a                 |
| cssModuleStyles         | { [key: string]: string }                                | CSS Module object that optionally replaces default. Class names need to match default names.                                                                                                                | default CSS         |
| children                | React Children                                           | Optional footer                                                                                                                                                                                             | n/a                 |

**ForgotPasswordReset**

| Name                       | Type                                                     | Description                                                                                                                                                                                                           | default             |
| -------------------------- | -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| forgotPasswordResetHandler | (values: any) => Promise\<ForgotPasswordHandlerResponse> | Called on submission and after validation. Use to check auth. Should return the above interface                                                                                                                       | required            |
| onSuccess                  | (resp: LoginHandlerResponse) => any &#124; React.Element | Called if forgotPasswordResetHandler returns success. Provides the server response from forgotPasswordResetHandler() if a function is passed. If a component instance is passed instead of a function, it will render | n/a                 |
| showDefaultConfirmation    | boolean                                                  | If set to true, show a default reset success message                                                                                                                                                                  | false               |
| schema                     | yup.Schema\<ForgotPasswordSchema>                        | Yup schema to override the default                                                                                                                                                                                    | standard validation |
| header                     | React.FC                                                 | React component to override default pw reset header                                                                                                                                                                   | basic header        |
| loader                     | React.FC                                                 | React component to override default loader                                                                                                                                                                            | Sending...          |
| cssModuleStyles            | { [key: string]: string }                                | CSS Module object that optionally replaces default. Class names need to match default names.                                                                                                                          | default CSS         |
| children                   | React Children                                           | Optional footer                                                                                                                                                                                                       | n/a                 |
