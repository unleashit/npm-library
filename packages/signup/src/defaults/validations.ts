import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email().max(56).required(),
  password: yup.string().min(8).max(56).required(),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), ''], 'Passwords must match')
    .required(),
});

export default schema;
