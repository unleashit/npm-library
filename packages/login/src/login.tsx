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
  useSetFocus,
} from '@unleashit/common';
import { FormValues } from './types';
import defaultLoginSchema from './defaults/schema';
import defaultLoginFields from './defaults/fields';
import {
  DefaultLoginHeader,
  DefaultLoginHeaderProps,
} from './defaults/components';

export type LoginProps = Omit<BaseFormProps, 'header'> & {
  header?: React.FC<DefaultLoginHeaderProps> | false | null;
  signupUrl?: string;
  orLine?: boolean;
  childrenPosition?: 'top' | 'bottom';
  forgotPasswordLink?: string | false | null;
  forgotPasswordLinkText?: string;
  children?: React.ReactNode;
};

export const Login = ({
  handler,
  onSuccess,
  title = 'Login',
  signupUrl = '/signup',
  header: Header = DefaultLoginHeader,
  loader: Loader = DefaultLoader,
  forgotPasswordLink = '/forgot-password',
  forgotPasswordLinkText = 'Forgot your password?',
  orLine = true,
  childrenPosition = 'bottom',
  linkComponent: LinkComponent = DefaultLinkComponent,
  linkComponentHrefAttr = 'href',
  customFields = defaultLoginFields,
  customSchema: schema = defaultLoginSchema,
  toast,
  failMsg,
  successMessage = false,
  cssModule = {},
  children,
}: LoginProps) => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    setFocus,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues<ZodTypeAny>>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
    defaultValues: getDefaultsFromZodObject<typeof schema>(schema),
  });

  // set focus on the first (if any) field with a focus prop
  useSetFocus(customFields, setFocus);

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
    return <ShowSuccess successMessage={successMessage} clsName={clsName} />;
  }

  return (
    <div className={clsName('container')}>
      {isSubmitting ? (
        <Loader clsName={clsName} />
      ) : (
        <>
          {Header && (
            <Header
              title={title}
              signupUrl={signupUrl}
              linkComponent={LinkComponent}
              linkComponentHrefAttr={linkComponentHrefAttr}
              clsName={clsName}
            />
          )}
          {errors.root && !toast && (
            <div className={clsName('serverAuthError')}>
              {errors.root.message}
            </div>
          )}
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{
              display: isSubmitting ? 'none' : 'block',
            }}
            className={clsName('form')}
          >
            {childrenPosition === 'bottom' && (
              <>
                <CustomFieldsHF
                  componentName={Login.displayName}
                  fields={customFields}
                  register={register}
                  errors={errors}
                  clsName={clsName}
                />

                <button type="submit" className={clsName('button')}>
                  Login
                </button>
                {forgotPasswordLink ? (
                  <div className={clsName('forgotPasswordLink')}>
                    <LinkComponent
                      {...{ [linkComponentHrefAttr]: forgotPasswordLink }}
                    >
                      {forgotPasswordLinkText}
                    </LinkComponent>
                  </div>
                ) : null}
              </>
            )}

            {children && (
              <div className={clsName('socialButtons')}>
                {orLine && childrenPosition === 'bottom' && (
                  <div className={clsName('orLine')}>
                    <span>or</span>
                  </div>
                )}
                {children}
                {orLine && childrenPosition === 'top' && (
                  <div className={clsName('orLine')}>
                    <span>or</span>
                  </div>
                )}
              </div>
            )}
            {childrenPosition === 'top' && (
              <>
                <CustomFieldsHF
                  componentName={Login.displayName}
                  fields={customFields}
                  register={register}
                  errors={errors}
                  clsName={clsName}
                />

                <button type="submit" className={clsName('button')}>
                  Login
                </button>
                {forgotPasswordLink ? (
                  <div className={clsName('forgotPasswordLink')}>
                    <LinkComponent
                      {...{ [linkComponentHrefAttr]: forgotPasswordLink }}
                    >
                      {forgotPasswordLinkText}
                    </LinkComponent>
                  </div>
                ) : null}
              </>
            )}
          </form>
        </>
      )}
    </div>
  );
};

Login.displayName = 'login';
export default Login;
