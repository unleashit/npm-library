import { CustomField } from '@unleashit/common';

const defaultLoginFields: CustomField[] = [
  {
    element: 'input',
    name: 'email',
    type: 'text',
    label: 'Email',
    focus: true,
  },
  {
    element: 'input',
    name: 'password',
    type: 'password',
    label: 'Password',
    clearOnServerError: true,
  },
  {
    element: 'input',
    name: 'passwordConfirm',
    type: 'password',
    label: 'Password confirm',
    clearOnServerError: true,
  },
];

export default defaultLoginFields;
