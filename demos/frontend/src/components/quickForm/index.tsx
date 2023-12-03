import React from 'react';
import QuickForm, {
  type ServerResponse,
  type FormValues,
  // type CustomFieldHF,
} from '@unleashit/quick-form';
import css from '@unleashit/quick-form/dist/quick-form.module.css';
// import contactSchema from './custSchema';

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

// type ContactFormValues = FormValues<typeof contactSchema>;

function ContactDemo() {
  const contactHandler = async (values: FormValues): Promise<ServerResponse> =>
    await fetch(`${process.env.DEMO_URL}/quickform`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then((resp) => resp.json());

  const onSuccess = (resp: ServerResponse) => {
    console.log('Success. Server responded with:', resp);
  };

  return (
    <QuickForm
      onSuccess={onSuccess}
      handler={contactHandler}
      showPhone
      // customFields={customFields}
      // customSchema={contactSchema}
      cssModule={css}
    />
  );
}

export default ContactDemo;
