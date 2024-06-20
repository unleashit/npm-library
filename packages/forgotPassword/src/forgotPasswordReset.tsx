import React, { useMemo } from 'react';
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
  DefaultForgotPasswordResetHeader,
  DefaultForgotPasswordResetSuccessMessage,
} from './defaults/components';
import { defaultForgotPasswordResetSchema } from './defaults/schema';
import { defaultForgotPasswordResetFields } from './defaults/fields';
import { FormValuesReset } from './types';

// mdx_fpreset_props_start
export type ForgotPasswordResetProps = BaseFormProps & {
  /** CSS custom property overrides */
  cssVars?: CSSVars<typeof varNames>;
  /** Position of children */
  childrenPosition?: 'top' | 'bottom';
  /** Other content to display */
  children?: React.ReactNode;
};
// mdx_fpreset_props_end

const {
  genClassNames,
  getDefaultsFromZodObject,
  clearOnError,
  normalizeComponentProp,
} = utils;

const varNames = [...varNamesCommonForm] as const;

export const ForgotPasswordReset = ({
  handler,
  onSuccess,
  headerText = 'Reset Password',
  header: Header = DefaultForgotPasswordResetHeader,
  loader: Loader = DefaultLoader,
  buttonText = 'Update Password',
  childrenPosition = 'bottom',
  customFields = defaultForgotPasswordResetFields,
  customSchema: schema = defaultForgotPasswordResetSchema,
  toast,
  failMsg = constants.baseFailMsg,
  successMessage = DefaultForgotPasswordResetSuccessMessage,
  darkMode = false,
  cssVars,
  isFocused = true,
  cssModule = {},
  children,
}: ForgotPasswordResetProps) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    setError,
    setFocus,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValuesReset<ZodTypeAny>>({
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
    () => genClassNames(ForgotPasswordReset.displayName, cssModule),
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
                clsName: ClsName;
              }>(Header, {
                title: headerText,
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
                  componentName={ForgotPasswordReset.displayName}
                  fields={customFields}
                  register={register}
                  errors={errors}
                  clsName={clsName}
                />

                <button type="submit" className={clsName('button')}>
                  {buttonText}
                </button>
              </>
            )}

            {children && children}

            {childrenPosition === 'top' && (
              <>
                <CustomFields
                  componentName={ForgotPasswordReset.displayName}
                  fields={customFields}
                  register={register}
                  errors={errors}
                  clsName={clsName}
                />

                <button type="submit" className={clsName('button')}>
                  {buttonText}
                </button>
              </>
            )}
          </form>
        </>
      )}
    </div>
  );
};

ForgotPasswordReset.displayName = 'forgotPassword';
