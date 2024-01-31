## Signup

[![NPM](https://img.shields.io/npm/l/@unleashit/navigation.svg)](https://github.com/unleashit/npm-library/blob/master/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@unleashit/signup.svg)](https://www.npmjs.com/package/@unleashit/signup)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@unleashit/signup.svg)](https://bundlephobia.com/result?p=@unleashit/signup)

Customizable React signup component that validates against a default or custom Zod schema.

![signup component](https://raw.githubusercontent.com/unleashit/npm-library/master/packages/signup/signup.png)

### Features

- Displays and handles client and serverside errors
- Custom fields and schema
- Show a success component and/or provide an onSuccess function to redirect, set state, etc.
- Show social logins either above or below email signup with optional separator
- Custom header/footer
- Loader (default or custom)
- Show a link to login
- Client router support for links
- Toast support

### Install

```
npm install @unleashit/signup
```

**Peer dependencies:** react, react-hook-form and zod.

### Example

```typescript jsx
import Signup, { FormValues, ServerResponse } from '@unleashit/signup';
import { useNavigate } from 'react-router-dom';

function SignupDemo() {
  const navigate = useNavigate();

  const signupHandler = async (values: FormValues): Promise<ServerResponse> => {
    // server should return a ServerResponse
    // success property of true indicates all validations pass
    // errors named after field names will display with fields
    // error with property of "root" will display at the top or sent to toast
    return await fetch('https://api.example.com/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then((resp) => resp.json());
  };

  const onSuccess = (resp: ServerResponse) => {
    // Redirect or set auth state, etc.
    // resp has full server response from signupHandler()
    navigate('/');
  };

  return (
    <Signup handler={signupHandler} onSuccess={onSuccess} />
  );
}
```

### Social Sign up

Adding social sign up buttons is easy. Simply include them as children and they will display (by default) under the main login with a nice separator.

```typescript jsx
import { GithubLoginButton, TwitterLoginButton } from 'react-social-login-buttons';

<Signup handler={/* ... */}>
  <TwitterLoginButton onClick={() => alert('Hello')}>
    Sign up with Twitter
  </TwitterLoginButton>
  <GithubLoginButton onClick={() => alert('Hello')}>
    Sign up with Github
  </GithubLoginButton>
</Signup>
```

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
<Signup
  handler={signupHandler}
  successMessage={() => <div>Welcome! You have successfully registered.</div>}
  customFields={[
    {
      element: 'input',
      type: 'text',
      name: 'email',
      label: 'Email',
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
      attrs: {
        defaultChecked: true,
      },
    },
  ]}
  customSchema={schema}
/>
```

### CSS

Basic namespaced (BEM) css can be imported: `import '@unleashit/login/dist/signup.css'`. Alternatively, if you use CSS Modules you can `import css from '@unleashit/signup/dist/signup.module.css'` and provide to the `cssModule` prop and/or use your own custom module targeting the internal class names. Please see CSS in the main readme of the repo for more info.

### Props

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
  // show a success component or message
  successMessage?: React.FC<any> | string | false | null;
  linkComponent?: React.ComponentType<any>;
  linkComponentHrefAttr?: string;
  darkMode?: boolean;
  cssModule?: Record<string, string>;
};

type SignupProps = Omit<BaseFormProps, 'header'> & {
  header?: React.FC<DefaultSignupHeaderProps> | false | null;
  // link to login page, when using default login header
  loginUrl?: string;
  // show a separator line between email and social logins (children required)
  orLine?: boolean;
  // position of social logins relative to email login
  childrenPosition?: 'top' | 'bottom';
  cssVars?: CSSVars<typeof varNames>;
  children?: React.ReactNode;
};
```

[//]: # '| Name         | Type                                             | Description                                                                                                                | default                        |'
[//]: # '| ------------ | ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |'
[//]: # '| handler      | (values: FormValues) => Promise<ServerResponse> | Called on submission and after validation. Use to register user and validate serverside. Should return the above interface | required                       |'
[//]: # '| onSuccess    | (resp: ServerResponse) => void                   | Called if signupHandler returns success. Provides the server response from serverHandler. Use to set state, redirect, etc. | undefined                      |'
[//]: # '| customSchema | AnyZodObject                                     | Zod schema to override the default                                                                                         | standard validation            |'
[//]: # '| header       | React Component                                  | React component to override default header                                                                                 | basic header                   |'
[//]: # '| loader       | React Component                                  | React component to override default loader                                                                                 | Signing up...                  |'
[//]: # '| loginUrl     | string                                           | Url for login page. Use only if using default header                                                                       | /login                         |'
[//]: # '| customFields | CustomField[]                                    | Array of custom fields. Replaces defaults (including email/password). Custom validation schema will be needed.             | n/a                            |'
[//]: # '| orLine       | boolean                                          | Display a "nice" line rule above social signup buttons                                                                     | true (note: requires children) |'
[//]: # '| cssModule    | { [key: string]: string }                        | CSS Module object that optionally replaces default. Class names need to match expected names.                              | undefined                      |'
[//]: # '| children     | React Children                                   | Use for Social signup buttons or anything else (displays as footer)                                                        | n/a                            |'
