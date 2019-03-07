import * as yup from 'yup';

interface LoginSchema {
  email: string;
  password: string;
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
});

export default schema;
