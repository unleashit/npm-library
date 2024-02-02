## Forgot Password

[![NPM](https://img.shields.io/npm/l/@unleashit/navigation.svg)](https://github.com/unleashit/npm-library/blob/master/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@unleashit/forgot-password.svg)](https://www.npmjs.com/package/@unleashit/forgot-password)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@unleashit/forgot-password.svg)](https://bundlephobia.com/result?p=@unleashit/forgot-password)

Customizable set of React forgot password components that validate against a default or custom Zod schema. Accepts custom fields and includes reset request, token submission and confirmation views as needed.

![forgot password component](https://raw.githubusercontent.com/unleashit/npm-library/master/packages/forgotPassword/forgotPassword.png)

### Features

- Displays and handles client and serverside errors
- Custom fields and schema
- Show success components and/or provide onSuccess functions to redirect, set state, etc.
- Custom header/footer
- Loader (default or custom)
- Show a link to login instead
- Client router support for links
- Toast support

### Install

```
npm install @unleashit/forgot-password
```

**Required peer dependencies:** react, react-hook-form and zod.

### Password Reset Request Example

```typescript jsx
import ForgotPassword, {
  FormValues,
  ServerResponse,
} from '@unleashit/forgot-password';

function ForgotPasswordDemo() {
  const forgotPasswordHandler = async (
    values: FormValues,
  ): Promise<ServerResponse> => {
    // server should return a ServerResponse
    // success property of true indicates all validations pass
    // errors named after field names will display with fields
    // error with property of "root" will display at the top or sent to toast
    return await fetch('https://api.example.com/forgot-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then((resp) => resp.json());
  };

  const onSuccess = (resp: ServerResponse) => {
    // Redirect or set state, etc.
    // resp has full server response from forgotPasswordHandler()
    console.log(resp);
  };

  return (
    <ForgotPassword handler={forgotPasswordHandler} onSuccess={onSuccess} />
  );
}
```

Note that `onSuccess` is optional. By default, the user will be shown a generic success message as long as the server returns a `success` boolean. If you provide an `successMessage` prop, you can override it or set `false` to turn off.

### Password Reset Example

```typescript jsx
import ForgotPasswordReset, {
  FormValuesReset,
  ServerResponseReset,
} from '@unleashit/forgot-password';

function ForgotPasswordResetDemo() {
  const forgotPasswordResetHandler = async (
    values: FormValuesReset,
  ): Promise<ServerResponseReset> => {
    // userID and token are extracted from url
    const [token, userid] = new URL(window.location.href).pathname
      .split('/')
      .filter(Boolean)
      .reverse();

    return await fetch(
      `https://api.example.com/forgot-password/${userid}/${token}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      },
    ).then((resp) => resp.json());
  };

  const onSuccess = (resp: ServerResponseReset) => {
    console.log(resp);
  };

  return (
    <ForgotPasswordReset
      handler={forgotPasswordResetHandler}
      onSuccess={onSuccess}
    />
  );
}
```

In this example, the userId and authorization token are taken from the url under the assumption the user arrived from a link sent via email or SMS. By default (can be customized or turned off with a `successMessage` prop), a success message will be shown to the user if the server returns a positive response with no errors.

### Custom Fields

It's possible to replace the default fields with custom fields by adding `customFields` and `customSchema` props. On submission and after passing validation, the handler will be called with the field values.

`customFields` is an array of field objects where `element` is the type of field. Currently input, select, checkbox and textarea fields are supported.

```typescript jsx
interface CustomField {
  element: 'input' | 'select' | 'textarea';
  type: string; // html `type` attribute
  name: string; // html `name` attribute
  label?: string; // label to display in an html <label>
  focus?: boolean; // sets the focus to this element (only the first is used)
  options?: Array<[string, string, OptionHTMLAttributes<any>?]>; // select options: [title, value, {attribute: value}]
  attrs?: InputHTMLAttributes<any> & SelectHTMLAttributes<any>;
}
```

Note that supplying a `customFields` object completely replaces the defaults, so don't forget to add all needed fields. `customSchema` should be a Zod schema with matching name attributes.

```typescript jsx
<ForgotPassword
  handler={forgotPasswordHandler}
  successMessage={CustomSuccessMessage}
  customFields={[
    {
      element: 'input',
      type: 'text',
      name: 'email',
      label: 'Email',
      focus: true,
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
  customSchema={customSchema} // zod schema to match
/>
```

### CSS

Basic namespaced (BEM) css can be imported: `import '@unleashit/forgot-password/dist/forgot-password.css'`. Alternatively, if you use CSS Modules you can `import css from '@unleashit/forgot-password/dist/forgot-password.module.css'` and provide to the `cssModule` prop and/or use your own custom module targeting the internal class names. Please see CSS in the main readme of the repo for more info.

### Props

**ForgotPassword**

```typescript
type BaseFormProps = {
  handler: <T extends ZodTypeAny>(
    values: FormValues<T>,
  ) => Promise<ServerResponse<FormValues<T>>>;
  onSuccess?: <T extends ZodTypeAny, Meta extends Record<string, any>>(
    resp: ServerResponse<FormValues<T>, Meta>,
  ) => void;
  title?: string;
  header?: React.FC<DefaultHeaderProps> | false | null;
  footer?: React.FC<any>;
  loader?: React.FC<DefaultLoaderProps>;
  customFields?: CustomField[];
  customSchema?: z.AnyZodObject | z.ZodEffects<any>;
  // optionally send root server error message and/or
  // handler exceptions to toast
  toast?: (msg: string) => void;
  // override default failure message to show user
  failMsg?: string;
  // Show a success component or message
  successMessage?: React.FC<any> | string | false | null;
  linkComponent?: React.ComponentType<any>;
  linkComponentHrefAttr?: string;
  darkMode?: boolean;
  cssModule?: Record<string, string>;
};

type ForgotPasswordProps = Omit<BaseFormProps, 'header'> & {
  header?: React.FC<DefaultForgotPasswordHeaderProps> | false | null;
  signupUrl?: string;
  childrenPosition?: 'top' | 'bottom';
  loginLink?: string | false | null;
  loginLinkText?: string;
  cssVars?: CSSVars<typeof varNames>;
  children?: React.ReactNode;
};
```

[//]: # '| Name           | Type                                      | Description                                                                                                                                                                     | default                                        |'
[//]: # '| -------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |'
[//]: # '| handler        | (values: any) => Promise<ServerResponse> | Called on submission and after validation. Use to check auth. Should return the above interface                                                                                 | required                                       |'
[//]: # '| onSuccess      | (resp: ServerResponse) => void            | Called if handler returns success. Provides the server response from handler() if a function is passed. If a component instance is passed instead of a function, it will render | n/a                                            |'
[//]: # '| successMessage | React.FC, string, false                   | Show a component or string on success                                                                                                                                           | default confirmation (check email to continue) |'
[//]: # '| schema         | zod schema                                | Zod schema to override default                                                                                                                                                  | default validation                             |'
[//]: # '| header         | React.FC                                  | React component to override default pw request header                                                                                                                           | basic header                                   |'
[//]: # '| loader         | React.FC                                  | React component to override default loader                                                                                                                                      | Sending...                                     |'
[//]: # '| customFields   | CustomField[]                             | Array of custom fields. Replaces defaults (including email). Custom validation schema will be needed.                                                                           | n/a                                            |'
[//]: # '| cssModule      | Record<string, string>                    | CSS Module object that optionally replaces default. Class names need to match expected names.                                                                                   | undefined                                      |'
[//]: # '| children       | React Children                            | Optional footer                                                                                                                                                                 | n/a                                            |'

**ForgotPasswordReset**

ForgetPasswordReset is being refactored and has been temporarily unpublished.

[//]: # '| Name           | Type                                             | Description                                                                                                                                                                     | default            |'
[//]: # '| -------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |'
[//]: # '| handler        | (values: FromValues) => Promise<ServerResponse> | Called on submission and after validation. Use to check auth. Should return the above interface                                                                                 | required           |'
[//]: # '| onSuccess      | (resp: ServerResponse) => void                   | Called if handler returns success. Provides the server response from handler() if a function is passed. If a component instance is passed instead of a function, it will render | n/a                |'
[//]: # '| successMessage | React.FC, string, false                          | Show a component or string on success                                                                                                                                           | false              |'
[//]: # '| schema         | Zod schema                                       | Zod schema to override the default                                                                                                                                              | default validation |'
[//]: # '| header         | React.FC                                         | React component to override default pw reset header                                                                                                                             | basic header       |'
[//]: # '| loader         | React.FC                                         | React component to override default loader                                                                                                                                      | Sending...         |'
[//]: # '| cssModule      | Record<string, string>                           | CSS Module object that optionally replaces default. Class names need to match expected names.                                                                                   | undefined          |'
[//]: # '| children       | React Children                                   | Optional footer                                                                                                                                                                 | n/a                |'
