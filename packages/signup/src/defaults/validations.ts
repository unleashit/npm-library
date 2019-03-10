import * as yup from 'yup';

interface LoginSchema {
  email: string;
  password: string;
  passwordConfirm: string;
}

const schema: yup.Schema<LoginSchema> = yup.object().shape({
  email: yup
    .string()
    .email()
    .max(56)
    .required(),
  password: yup
    .string()
    .min(8)
    .max(56)
    .required(),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required(),
});

export default schema;
