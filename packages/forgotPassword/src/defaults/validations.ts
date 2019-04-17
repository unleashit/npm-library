import * as yup from 'yup';

interface PasswordResetSchema {
  email: string;
}

const schema: yup.Schema<PasswordResetSchema> = yup.object().shape({
  email: yup
    .string()
    .email()
    .max(56)
    .required(),
});

export default schema;
