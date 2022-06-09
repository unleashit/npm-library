import * as yup from 'yup';

const passwordReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const schema = yup.object().shape({
  newPassword: yup
    .string()
    .max(56, "Password can't contain more than 56 characters")
    .matches(
      passwordReg,
      'Password must have at least 8 characters and contain at least 1 letter and 1 number',
    )
    .required('Password is a required field'),
  newPasswordConfirm: yup
    .string()
    .oneOf([yup.ref('newPassword'), ''], 'Passwords must match')
    .required('Password confirm is a required field'),
});

export default schema;
