import { CustomField } from '@unleashit/common';

const defaultLoginFields: CustomField[] = [
  {
    element: 'input',
    type: 'text',
    name: 'email',
    label: 'Email',
    focus: true,
  },
  {
    element: 'input',
    type: 'password',
    name: 'password',
    label: 'Password',
  },
];

export default defaultLoginFields;
