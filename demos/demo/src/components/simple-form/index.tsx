import React from 'react';
import SimpleForm, {
  type ServerResponse,
  type FormValues,
} from '@unleashit/simple-form';
import css from '@unleashit/simple-form/dist/simple-form.module.css';
// import { CustomFieldHF } from '@unleashit/common';
import contactSchema from './custSchema';

// const customFields: CustomFieldHF[] = [
//   {
//     element: 'input',
//     type: 'text',
//     name: 'first_name',
//     label: 'First Name',
//     attrs: {},
//   },
//   {
//     element: 'input',
//     type: 'text',
//     name: 'last_name',
//     label: 'Last Name',
//   },
//   {
//     element: 'input',
//     type: 'email',
//     name: 'email',
//     label: 'Email',
//   },
//   {
//     element: 'select',
//     type: 'text',
//     name: 'favorite_color',
//     label: 'Favorite color',
//     options: [
//       ['-- select --', ''],
//       ['red', 'red'],
//       ['blue', 'blue'],
//       ['green', 'green'],
//       ['yellow', 'yellow'],
//       ['orange', 'orange'],
//     ],
//   },
//   {
//     element: 'textarea',
//     type: 'text',
//     name: 'message',
//     label: 'Message',
//   },
//   {
//     element: 'input',
//     type: 'checkbox',
//     name: 'subscribe',
//     label: 'Subscribe to the newsletter?',
//   },
// ];

function ContactDemo() {
  const contactHandler = async (
    values: FormValues<typeof contactSchema>,
  ): Promise<ServerResponse<typeof contactSchema>> => {
    console.log(values);
    return Promise.resolve({
      success: true,
    });
  };

  const onSuccess = (resp: ServerResponse<typeof contactSchema>) => {
    console.log('Success. Server responded with:', resp);
  };

  return (
    <SimpleForm
      onSuccess={onSuccess}
      handler={contactHandler}
      // customFields={customFields}
      // schema={contactSchema}
      cssModule={css}
    />
  );
}

export default ContactDemo;
