import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ZodTypeAny } from 'zod';
import {
  DefaultLoader,
  DefaultLinkComponent,
  genClassNames,
  CustomFieldsHF,
  getDefaultsFromZodObject,
  BaseFormProps,
  formHandler,
  useShowSuccessTimer,
  ShowSuccess,
} from '@unleashit/common';
import { FormValues } from './types';
import defaultLoginSchema from './defaults/schema';
import defaultLoginFields from './defaults/fields';
import {
  DefaultLoginHeader,
  DefaultLoginHeaderProps,
} from './defaults/components';

// export interface FormValues {
//   email: string;
//   password: string;
//   serverAuth: string;
// }
// export interface ServerResponse {
//   success: boolean;
//   errors?: {
//     serverAuth: string; // error msg to print in browser when auth fails
//   } & { [key: string]: string }; // optionally validate anything else on server with key=name of field, val=error to print;
// }
// export interface LoginProps {
//   handler: <T extends z.ZodTypeAny>(
//     values: FormValues<T>,
//   ) => Promise<ServerResponse>;
//   onSuccess: (resp: ServerResponse<any, any>) => void;
//   title?: string;
//   header?: React.FC<LoginHeaderProps>;
//   footer?: React.FC<any>;
//   signupUrl?: string;
//   loader?: React.FC<LoginLoaderProps>;
//   schema?: AnyZodObject;
//   customFields?: CustomFieldHF[];
//   forgotPassword?: boolean;
//   forgotPasswordLink?: string;
//   forgotPasswordText?: string;
//   orLine?: boolean;
//   linkComponent?: React.ComponentType<any>;
//   linkComponentHrefAttr?: string;
//   failMsg?: string; // loginHandler failure msg
//   toast?: (msg: string) => void; // optionally will call toast function with server or fail msgs
//   cssModule?: Record<string, string>;
//   children?: React.ReactNode;
// }

export type LoginProps = Omit<BaseFormProps, 'header'> & {
  header?: React.FC<DefaultLoginHeaderProps> | false | null;
  signupUrl?: string;
  forgotPassword?: boolean;
  forgotPasswordLink?: string;
  forgotPasswordText?: string;
  orLine?: boolean;
  linkComponent?: React.ComponentType<any>;
  linkComponentHrefAttr?: string;
  children?: React.ReactNode;
};

export const Login = ({
  handler,
  onSuccess,
  title = 'Login',
  signupUrl = '/signup',
  header: Header = DefaultLoginHeader,
  loader: Loader = DefaultLoader,
  forgotPassword = true,
  forgotPasswordLink = '/forgot-password',
  forgotPasswordText = 'Forgot your password?',
  orLine = true,
  linkComponent: LinkComponent = DefaultLinkComponent,
  linkComponentHrefAttr = 'href',
  customFields = defaultLoginFields,
  customSchema: schema = defaultLoginSchema,
  toast,
  failMsg,
  successMessage = 'You are now logged in.',
  cssModule = {},
  children,
}: LoginProps) => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues<ZodTypeAny>>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
    defaultValues: getDefaultsFromZodObject<typeof schema>(schema),
  });

  // Submit handler
  const onSubmit = useMemo(
    () =>
      formHandler({
        schema,
        handler,
        onSuccess,
        toast,
        failMsg,
        setError,
        reset,
      }),
    [schema, handler, onSuccess, toast, failMsg, setError, reset],
  );

  const { clsName } = React.useMemo(
    () => genClassNames(Login.displayName, cssModule),
    [cssModule],
  );

  // Set up success message if configured
  const [showSuccessMsg] = useShowSuccessTimer({
    isSubmitSuccessful,
    successMessage,
    reset,
  });

  if (!!successMessage && showSuccessMsg) {
    return (
      <ShowSuccess
        // componentName={Login.displayName}
        successMessage={successMessage}
        clsName={clsName}
      />
    );
  }

  return (
    <div className={clsName('container')}>
      {Header && !isSubmitting && (
        <Header
          title={title}
          signupUrl={signupUrl}
          linkComponent={LinkComponent}
          linkComponentHrefAttr={linkComponentHrefAttr}
          clsName={clsName}
        />
      )}
      {errors.root && !toast && (
        <div className={clsName('serverAuthError')}>{errors.root.message}</div>
      )}
      {isSubmitting ? (
        <Loader componentName="login" cssModule={cssModule} />
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: isSubmitting ? 'none' : 'block',
          }}
          className={clsName('form')}
        >
          <CustomFieldsHF
            componentName={Login.displayName}
            fields={customFields}
            register={register}
            errors={errors}
            cssModule={cssModule}
          />

          <button type="submit" className={clsName('button')}>
            Login
          </button>
          {children && (
            <div className={clsName('socialLogins')}>
              {orLine && (
                <div className={clsName('orLine')}>
                  <span>or</span>
                </div>
              )}
              {children}
            </div>
          )}
          {forgotPassword ? (
            <div className={clsName('forgotPasswordLink')}>
              <LinkComponent
                {...{ [linkComponentHrefAttr]: forgotPasswordLink }}
              >
                {forgotPasswordText}
              </LinkComponent>
            </div>
          ) : null}
        </form>
      )}
    </div>
  );
};

Login.displayName = 'login';
export default Login;
