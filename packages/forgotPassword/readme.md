## Fogot Password

React forgot password component in Typescript, Formik and Yup for validation. It accepts props including handlers, custom fields, custom Yup schema, custom header and more.

![login component](forgotPassword.png)

### Install
```
npm install @unleashit/forgot-password
```

### Example

```javascript
class ForgotPasswordDemo extends React.Component {
  async forgotPasswordHandler(values) {
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
    // set auth state, etc. resp has full server response from forgotPasswordHandler().
    window.location.href = '/';
  }

  render() {
    return <ForgotPassword
      forgotPasswordHandler={this.forgotPasswordHandler}
      onSuccess={this.onSuccess}
    />;
  }
}

export default ForgotPasswordDemo;

```
### Custom Fields

It's possible to replace the default fields with custom fields and attributes by adding a `customFields` prop. The forgotPasswordHandler will be called with their values after passing validation.

This array of fields will replace the defaults, so don't forget to add email/username and password if you need them. If you create a Yup schema with matching name attributes, it will properly validate.

Currently input, select, checkbox and textarea fields are supported.

```javascript
<ForgotPassword
  forgotPasswordHandler={this.forgotPasswordHandler}
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
      type: 'text',
      name: 'secretQuestion',
      label: 'What is your mother\'s maiden name?'
    }
  ]}
/>

// yup schema
const schema = yup.object().shape({
  email: yup
    .string()
    .email()
    .max(56)
    .required(),
  secretQuestion: yup
    .string()
    .min(8)
    .max(512)
    .required()
});
```

```typescript
// forgotPasswordHandler() should return this shape:

interface ForgotPasswordHandlerResponse {
  success: boolean;
  errors?: {
    // error msg to print in browser when auth fails
    serverMessage: string;
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

Basic css can be imported: `import '@unleashit/forgotPassword/dist/style.css';`, or you can pass in a custom CSS module. Please see CSS in the main readme of the repo for more info.

### Props

| Name      | Type |  Description | default |
| ----------- | ----------- | ---------| ------- |
| forgotPasswordHandler      | (values: any) => Promise\<ForgotPasswordHandlerResponse>       | Called on submission and after validation. Use to check auth. Should return the above interface | required |
| onSuccess      | (resp: LoginHandlerResponse) => any       | Called if forgotPasswordHandler returns success. Provides the server response from forgotPasswordHandler. Use to redirect, store auth state, etc. | required |
| schema      | yup.Schema\<ForgotPasswordSchema>     | Yup schema to override the default | standard validation |
| header      | React.FC     | React component to override default header | basic header |
| loader      | React.FC     | React component to override default loader | Loading... |
| loginUrl      | string     | Url for login page. Use only if using default header | /login |
| customFields  | CustomField[]  | Array of custom fields. Replaces defaults (including email/password). Custom validation schema will be needed.  | n/a   |
| cssModuleStyles  | { [key: string]: string }  | CSS Module object that optionally replaces default. Class names need to match default names. | default CSS |
