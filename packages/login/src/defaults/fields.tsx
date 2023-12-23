import { CustomFieldHF } from '@unleashit/common';

const defaultLoginFields: CustomFieldHF[] = [
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
