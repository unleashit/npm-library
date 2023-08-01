### Quick Form

[![NPM](https://img.shields.io/npm/l/@unleashit/quick-form.svg)](https://github.com/unleashit/npm-library/blob/master/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@unleashit/quick-form.svg)](https://www.npmjs.com/package/@unleashit/quick-form)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@unleashit/quick-form.svg)](https://bundlephobia.com/result?p=@unleashit/quick-form)

Quick Form is a form builder that lets you crank out simple forms fast. It's a wrapper for React Hook Form that handles much of the manual setup while still providing enough customization for typical needs. It produces the form based on a configuration, handles both client and server\* validation and comes with basic styling.

\* When no config or schema are provided, Quick Form defaults as a standard contact form.

### Install

Required peer dependencies: **react**, **react-hook-form** and **zod**.

```
npm install @unleashit/quick-form
```

### Features

- Simple form builder. Contact form by default.
- Custom fields: input, checkbox, textarea and select (more will be added)
- Validation with Zod schemas
- Handles server validation errors (response must be expected type)
- Shows a success component on success and/or fires your onSuccess() function
- Toast support
- Error handling
- Custom header and footer
- Shows a default or custom loader
- Basic CSS provided in both namespaced BEM and CSS module formats
- Unique CSS module support: can provide your own css module styles to internal components without having to write global CSS.
- Typescript

### Basic Example with contact form

```typescript jsx
import QuickForm, {
  type FormValues,
  type ServerResponse,
} from '@unleashit/quick-form';

// Assuming you have a bundler that handles css imports and you want to use the provided CSS
// Alternatively, you can import the CSS Module version (see next example)
import '@unleashit/quick-form/dist/quick-form.css';

function ContactUs() {
  const quickFormHandler = async (
    values: FormValues,
  ): Promise<ServerResponse> => {
    // should return an object with at least a success property of boolean
    return fetch('https://example.com/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then((resp) => resp.json());
  };

  return <QuickForm handler={quickFormHandler} showPhone />;
}
```

By default, the form is a standard contact form with `name`, `email` and `message` fields. Adding a `showPhone` prop will add a phone field.

The only required prop is `handler`, which is a function that is called with the form values when the user submits the form. The handler should at a minimum return a promise with a success property of boolean. If there are serverside validation errors, an `errors` property can be returned as an object with keys as the field names and values as the message to display. `errors.root` is special. When set, it will either display prominently above the form or in a toast if a toast function is provided.

By default, if the form submits and received a successful response from the server, a default success component will display for several seconds before returning to a reset version of the form. There are various ways to customize or override the behavior:

- Providing a custom `successMessage` component overrides the default.
- Setting `successMessageTimeout` to false will prevent the transition back to the empty form.
- By supplying an `onSuccess` function, you can redirect or do anything you like.

### With some features

```typescript jsx
import defaultStyles from '@unleashit/quick-form/dist/quick-form.module.css';

// optional, but with this technique you can selectively override the default
// css module classes with your own without having to resort to global style.
// See main readme of the repo for more detail.
import customStyles from './styles/quick-form-overrides.module.scss';
const combinedStyles = { ...defaultStyles, ...customStyles };

function ContactUs() {
  const Header = () => {
    return <h2>Contact Us</h2>;
  };

  const onSuccess = (resp: ServerResponse) => {
    console.log('Success. Server responded with:', resp);
    window.location.href = '/thank-you';
  };

  // called when a `root` error is returned from the server,
  // or when contactHandler catches, for example a network error
  const toastErrorHandler = (msg: string) => myToast.error(msg);

  return (
    <QuickForm
      handler={contactHandler}
      onSuccess={onSuccess}
      // prevent default transition back to blank form since onSuccess includes a redirect
      successMessageTimeout={false}
      header={header}
      cssModule={combinedStyles}
      toast={toastErrorHandler}
      // optional override to promise rejection message
      failMsg="Something went wrong. Are you online?"
    />
  );
}
```

### Custom Fields

With a custom fields object and a Zod schema you can quickly wire up any type of simple form. Currently available base fields are `input` (includes checkbox), `textarea` and `select`. This will be expanded in the future.

```typescript jsx
// you must provide a custom Zod schema that matches the expected types
import customSchema from './customSchema';

const customFields: CustomField[] = [
  {
    element: 'input', // 'input' | 'textarea' | 'select'
    type: 'text', // type attribute, only valid for input fields
    name: 'first_name', // name attribute
    label: 'First Name', // html label value (optional, but recommended)
    attrs: { maxLength: 25 }, // Optional custom attributes (React.InputHTMLAttributes)
  },
  {
    element: 'input',
    type: 'text',
    name: 'last_name',
    label: 'Last Name',
  },
  {
    element: 'input',
    type: 'email',
    name: 'email',
    label: 'Email',
  },
  {
    element: 'select',
    type: 'text',
    name: 'favorite_color',
    label: 'Favorite color',
    options: [
      ['-- select --', ''],
      ['red', 'red'],
      // React.OptionHTMLAttributes can be provided as a 3rd item in tuple
      ['blue', 'blue', { seleted: true }],
      ['green', 'green'],
      ['yellow', 'yellow'],
      ['orange', 'orange'],
    ],
  },
  {
    element: 'textarea',
    type: 'text',
    name: 'message',
    label: 'Message',
  },
  {
    element: 'input',
    type: 'checkbox',
    name: 'subscribe',
    label: 'Subscribe to the newsletter?',
    attrs: {
      // default values can also be set in the Zod schema
      defaultChecked: true,
    },
  },
];

function SignupAndSubscribe() {
  const quickFormHandler = async (
    // Types can be inferred from custom schema for good autocomplete
    values: FormValues<typeof customContactSchema>,
  ): Promise<ServerResponse<typeof customContactSchema>> => {
    return Promise.resolve({
      success: false,
      errors: {
        root: 'Form could not submit, please try again',
        subscribe:
          'You must subscribe to our newsletter or you will receive an infinite loop!',
      },
    });
  };

  return (
    <QuickForm
      handler={quickFormHandler}
      customFields={customFields}
      schema={customSchema}
    />
  );
}
```

### Props

| Name                  | Type                                                                       | Description                                                                                                          | default                        |
| --------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| handler               | <T extends z.ZodTypeAny>(values: FormValues<T>) => Promise<ServerResponse> | Called on form submission after validation. Use to check auth. Should return ServerResponse                          | required                       |
| onSuccess             | (resp: ServerResponse<any, any>) => void                                   | Called if handler returns success. Provides the server response from handler. Use to redirect, display a toast, etc. | undefined                      |
| title                 | string                                                                     | Override title when using default header component                                                                   | Contact Us                     |
| header                | React Component                                                            | Optional header component (replaces default)                                                                         | basic header                   |
| footer                | React Component                                                            | Optional footer component                                                                                            | undefined                      |
| loader                | React Component                                                            | Loader component to replace default                                                                                  | Default Loader                 |
| showPhone             | boolean                                                                    | Show a phone field (default form only)                                                                               | false                          |
| customFields          | CustomField[]                                                              | Array of custom fields. Schema will be required.                                                                     | undefined                      |
| successMessage        | string                                                                     | Replace default success message                                                                                      | Default success message        |
| successComponent      | React.FC<DefaultSuccessProps> \| false \| null                             | Replace success component                                                                                            | Default success component      |
| successMessageTimeout | number \| false \| null                                                    | Time to show success message in ms, then return to reset form                                                        | 5000                           |
| schema                | zod.AnyZodObject                                                           | Zod schema to replace the default                                                                                    | simple contact form validation |
| failMsg               | string                                                                     | Optional override for promise rejection message                                                                      | System error                   |
| toast                 | (msg: string) => void                                                      | Optionally call toast with root server errors or promise rejection                                                   | undefined                      |
| cssModule             | Record<string, string>                                                     | Provided or custom CSS Module                                                                                        | undefined                      |
