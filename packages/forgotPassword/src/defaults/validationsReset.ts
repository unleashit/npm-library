import * as yup from 'yup';

interface PasswordReset2Schema {
  newPassword: string;
  newPasswordConfirm: string;
}

const passwordReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const schema: yup.Schema<PasswordReset2Schema> = yup.object().shape({
  newPassword: yup
    .string()
    .min(8, 'Password must have at least 8 characters')
    .max(56, 'Password can\'t contain more than 56 characters')
    .matches(passwordReg, 'Password must have at least 8 characters and contain at least 1 letter and 1 number')
    .required('Password is a required field'),
  newPasswordConfirm: yup
    .string()
    .oneOf([yup.ref('newPassword'), null], 'Passwords must match')
    .required('Password confirm is a required field'),
});

export default schema;
