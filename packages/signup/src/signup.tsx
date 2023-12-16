import React, { useMemo } from 'react';
import {
  CustomFieldsHF,
  DefaultLinkComponent,
  BaseFormProps,
  DefaultLoader,
  formHandler,
  genClassNames,
  useShowSuccessTimer,
  ShowSuccess,
  getDefaultsFromZodObject,
} from '@unleashit/common';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  DefaultSignupHeaderProps,
  DefaultSignupHeader,
} from './defaults/components';
import { FormValues } from './types';
import defaultSignupSchema from './defaults/schema';
import defaultSignupFields from './defaults/fields';

export type SignupProps = Omit<BaseFormProps, 'header'> & {
  header?: React.FC<DefaultSignupHeaderProps> | false | null;
  loginUrl?: string;
  orLine?: boolean;
  childrenPosition?: 'top' | 'bottom';
  linkComponent?: React.ComponentType<any>;
  linkComponentHrefAttr?: string;
  children?: React.ReactNode;
};

export const Signup = ({
  handler,
  onSuccess,
  title = 'Signup',
  loginUrl = '/login',
  header: Header = DefaultSignupHeader,
  loader: Loader = DefaultLoader,
  orLine = true,
  childrenPosition = 'bottom',
  linkComponent: LinkComponent = DefaultLinkComponent,
  linkComponentHrefAttr = 'href',
  customFields = defaultSignupFields,
  customSchema: schema = defaultSignupSchema,
  toast,
  failMsg,
  successMessage = 'Signup was successful. Welcome!',
  cssModule = {},
  children,
}: SignupProps) => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues<typeof schema>>({
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
    () => genClassNames(Signup.displayName, cssModule),
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
      {Header && !isSubmitting && (
        <Header
          title={title}
          loginUrl={loginUrl}
          linkComponent={LinkComponent}
          linkComponentHrefAttr={linkComponentHrefAttr}
          clsName={clsName}
        />
      )}
      {errors.root && !toast && (
        <div className={clsName('serverAuthError')}>{errors.root.message}</div>
      )}
      {isSubmitting ? (
        <Loader clsName={clsName} />
      ) : (
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
                componentName={Signup.displayName}
                fields={customFields}
                register={register}
                errors={errors}
                clsName={clsName}
              />

              <button type="submit" className={clsName('button')}>
                Signup
              </button>
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
                componentName={Signup.displayName}
                fields={customFields}
                register={register}
                errors={errors}
                clsName={clsName}
              />

              <button type="submit" className={clsName('button')}>
                Signup
              </button>
            </>
          )}
        </form>
      )}
    </div>
  );
};

Signup.displayName = 'signup';
export default Signup;
