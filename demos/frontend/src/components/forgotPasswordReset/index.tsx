// import '@unleashit/forgot-password/dist/forgot-password.css';
//
// import {
//   ForgotPasswordReset,
//   FormValuesReset,
//   ServerResponse,
// } from '@unleashit/forgot-password';
// import React from 'react';
//
// class ForgotPasswordResetDemo extends React.Component {
//   async forgotPasswordResetHandler(values: FormValuesReset) {
//     const [token, userid] = new URL(window.location.href).pathname
//       .split('/')
//       .filter(Boolean)
//       .reverse();
//
//     return await fetch(
//       `https://unleashit-forgot-password.vercel.app/passwordreset/${userid}/${token}`,
//       {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(values),
//       },
//     ).then((resp) => {
//       if (resp.ok) {
//         return resp.json();
//       }
//       throw new Error('Problem connecting to the server');
//     });
//   }
//
//   onSuccess(res: ServerResponse) {
//     console.log(res);
//   }
//
//   render() {
//     return (
//       <>
//         <p style={{ marginBottom: '2.5rem', color: '#aaaaaa' }}>
//           User ID = 1, token = 1234567890, taken from url in this example
//         </p>
//         <ForgotPasswordReset
//           forgotPasswordResetHandler={this.forgotPasswordResetHandler}
//           onSuccess={this.onSuccess}
//           showDefaultConfirmation
//         />
//       </>
//     );
//   }
// }
//
// export default ForgotPasswordResetDemo;

export default null;
