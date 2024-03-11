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
  constants,
} from '@unleashit/common';
import {
  DefaultForgotPasswordHeader,
  DefaultForgotPasswordHeaderProps,
  DefaultForgotPasswordSuccessMessage,
} from './defaults/components';
import { defaultForgotPasswordSchema } from './defaults/schema';
import { defaultForgotPasswordFields } from './defaults/fields';
import { FormValues } from './types';

// mdx_fp_props_start
export type ForgotPasswordProps = BaseFormProps & {
  header?: React.ComponentType<DefaultForgotPasswordHeaderProps> | false | null;
  childrenPosition?: 'top' | 'bottom';
  loginUrl?: string | false | null;
  loginUrlText?: string;
  cssVars?: CSSVars<typeof varNames>;
  children?: React.ReactNode;
};
// mdx_fp_props_end

const { genClassNames, getDefaultsFromZodObject, clearOnError } = utils;

const varNames = [...varNamesCommonForm] as const;

export const ForgotPassword = ({
  handler,
  onSuccess,
  headerText = 'Forgot Password',
  header: Header = DefaultForgotPasswordHeader,
  loader: Loader = DefaultLoader,
  buttonText = 'Next',
  childrenPosition = 'bottom',
  customFields = defaultForgotPasswordFields,
  customSchema: schema = defaultForgotPasswordSchema,
  toast,
  failMsg = constants.baseFailMsg,
  successMessage = DefaultForgotPasswordSuccessMessage,
  loginUrl = '/login',
  loginUrlText = 'Login instead',
  linkComponent: LinkComponent = DefaultLinkComponent,
  linkComponentHrefAttr = 'href',
  isFocused = true,
  darkMode = false,
  cssVars,
  cssModule = {},
  children,
}: ForgotPasswordProps) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    setError,
    setFocus,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues<ZodTypeAny>>({
    resolver: zodResolver(schema),
    defaultValues: getDefaultsFromZodObject<typeof schema>(schema),
  });

  // set focus on the first (if any) field with a focus prop
  useSetFocus(customFields, setFocus, isFocused);

  // Submit handler
  const onSubmit = useMemo(
    () =>
      formHandler({
        schema,
        handler,
        onSuccess,
        toast,
        failMsg,
        setValue,
        setError,
        reset,
        clearOnError: clearOnError(customFields),
      }),
    [
      schema,
      handler,
      onSuccess,
      toast,
      failMsg,
      setValue,
      setError,
      reset,
      customFields,
    ],
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
          {Header && <Header title={headerText} clsName={clsName} />}
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
                  {buttonText}
                </button>
                {loginUrl ? (
                  <div className={clsName('forgotPasswordLink')}>
                    <LinkComponent {...{ [linkComponentHrefAttr]: loginUrl }}>
                      {loginUrlText}
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
                  {buttonText}
                </button>
                {loginUrl ? (
                  <div className={clsName('forgotPasswordLink')}>
                    <LinkComponent {...{ [linkComponentHrefAttr]: loginUrl }}>
                      {loginUrlText}
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
