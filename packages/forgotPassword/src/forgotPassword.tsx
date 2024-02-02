import React, { useMemo } from 'react';
import { ZodTypeAny } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  BaseFormProps,
  CustomFields,
  DefaultLinkComponent,
  DefaultLoader,
  formHandler,
  ShowSuccess,
  useShowSuccessTimer,
  useSetFocus,
  utils,
  varNamesCommonForm,
  CSSVars,
  mapCSSVarsToStyles,
} from '@unleashit/common';
import {
  DefaultForgotPasswordHeader,
  DefaultForgotPasswordHeaderProps,
  DefaultForgotPasswordSuccessMessage,
} from './defaults/components';
import { defaultForgotPasswordSchema } from './defaults/schema';
import { defaultForgotPasswordFields } from './defaults/fields';
import { FormValues } from './types';

export type ForgotPasswordProps = Omit<BaseFormProps, 'header'> & {
  header?: React.FC<DefaultForgotPasswordHeaderProps> | false | null;
  signupUrl?: string;
  childrenPosition?: 'top' | 'bottom';
  loginLink?: string | false | null;
  loginLinkText?: string;
  cssVars?: CSSVars<typeof varNames>;
  children?: React.ReactNode;
};

const { genClassNames, getDefaultsFromZodObject } = utils;

const varNames = [...varNamesCommonForm] as const;

export const ForgotPassword = ({
  handler,
  onSuccess,
  title = 'Forgot Password',
  header: Header = DefaultForgotPasswordHeader,
  loader: Loader = DefaultLoader,
  childrenPosition = 'bottom',
  customFields = defaultForgotPasswordFields,
  customSchema: schema = defaultForgotPasswordSchema,
  toast,
  failMsg,
  successMessage = DefaultForgotPasswordSuccessMessage,
  loginLink = '/login',
  loginLinkText = 'Back to Login',
  linkComponent: LinkComponent = DefaultLinkComponent,
  linkComponentHrefAttr = 'href',
  darkMode = false,
  cssVars,
  cssModule = {},
  children,
}: ForgotPasswordProps) => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    setFocus,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues<ZodTypeAny>>({
    resolver: zodResolver(schema),
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
    () => genClassNames(ForgotPassword.displayName, cssModule),
    [cssModule],
  );

  // Set up success message if configured
  const [showSuccessMsg] = useShowSuccessTimer({
    isSubmitSuccessful,
    successMessage,
    reset,
  });

  if (isSubmitting) {
    return <Loader clsName={clsName} />;
  }

  return (
    <div
      className={clsName('container')}
      data-theme={darkMode ? 'dark' : 'light'}
      style={mapCSSVarsToStyles<typeof varNames>({
        cssVars,
        varNames,
      })}
    >
      {!!successMessage && showSuccessMsg ? (
        <ShowSuccess successMessage={successMessage} clsName={clsName} />
      ) : (
        <>
          {Header && <Header title={title} clsName={clsName} />}
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
                <CustomFields
                  componentName={ForgotPassword.displayName}
                  fields={customFields}
                  register={register}
                  errors={errors}
                  clsName={clsName}
                />

                <button type="submit" className={clsName('button')}>
                  Next
                </button>
                {loginLink ? (
                  <div className={clsName('forgotPasswordLink')}>
                    <LinkComponent {...{ [linkComponentHrefAttr]: loginLink }}>
                      {loginLinkText}
                    </LinkComponent>
                  </div>
                ) : null}
              </>
            )}

            {children && children}

            {childrenPosition === 'top' && (
              <>
                <CustomFields
                  componentName={ForgotPassword.displayName}
                  fields={customFields}
                  register={register}
                  errors={errors}
                  clsName={clsName}
                />

                <button type="submit" className={clsName('button')}>
                  Next
                </button>
                {loginLink ? (
                  <div className={clsName('forgotPasswordLink')}>
                    <LinkComponent {...{ [linkComponentHrefAttr]: loginLink }}>
                      {loginLinkText}
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

ForgotPassword.displayName = 'forgotPassword';
export default ForgotPassword;
