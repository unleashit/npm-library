import { CustomFieldHF } from '@unleashit/common';

export const defaultContactFields: CustomFieldHF[] = [
  {
    element: 'input',
    type: 'text',
    name: 'name',
    label: 'Name',
    focus: true,
  },
  {
    element: 'input',
    type: 'email',
    name: 'email',
    label: 'Email',
  },
  {
    element: 'textarea',
    type: 'text',
    name: 'message',
    label: 'Message',
  },
];

export const defaultContactFieldsWithPhone: CustomFieldHF[] = [
  ...defaultContactFields.slice(0, 2),
  {
    element: 'input',
    type: 'text',
    name: 'phone',
    label: 'Phone',
  },
  ...defaultContactFields.slice(2),
];
