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
  },
  {
    element: 'input',
    name: 'passwordConfirm',
    type: 'password',
    label: 'Password confirm',
  },
];

export default defaultLoginFields;
