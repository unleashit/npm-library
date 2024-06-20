import React, { useMemo, ComponentType, ReactNode } from 'react';
import { z, ZodTypeAny } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  BaseFormProps,
  CustomFields,
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
  ClsName,
} from '@unleashit/common';
import {
  DefaultForgotPasswordHeader,
  DefaultForgotPasswordSuccessMessage,
} from './defaults/components';
import { defaultForgotPasswordSchema } from './defaults/schema';
import { defaultForgotPasswordFields } from './defaults/fields';
import { FormValues } from './types';

// mdx_fp_props_start
export type ForgotPasswordProps = BaseFormProps & {
  /**
   * Override the login link inside the default header
   * Note: if you provide a header prop, the login link will not appear
   */
  loginLink?: ComponentType | ReactNode;
  /** CSS custom property overrides */
  cssVars?: CSSVars<typeof varNames>;
  /** Position of children */
  childrenPosition?: 'top' | 'bottom';
  /** Other content to display */
  children?: ReactNode;
};
// mdx_fp_props_end

const {
  genClassNames,
  getDefaultsFromZodObject,
  clearOnError,
  normalizeComponentProp,
} = utils;

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
  loginLink = <a href="/login">Back to login</a>,
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
    resolver: zodResolver<z.infer<typeof schema>>(schema),
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
          {Header
            ? normalizeComponentProp<{
                title: string;
                loginLink: ForgotPasswordProps['loginLink'];
                clsName: ClsName;
              }>(Header, {
                title: headerText,
                loginLink,
                clsName,
              })
            : null}
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
                {loginLink ? (
                  <div className={clsName('forgotPasswordLink')}>
                    {normalizeComponentProp(loginLink)}
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
                {loginLink ? (
                  <div className={clsName('forgotPasswordLink')}>
                    {normalizeComponentProp(loginLink)}
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
