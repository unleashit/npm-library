import React, { useMemo } from 'react';
import { ZodTypeAny } from 'zod';
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
} from '@unleashit/common';
import {
  DefaultForgotPasswordResetHeader,
  DefaultForgotPasswordHeaderProps,
  DefaultForgotPasswordResetSuccessMessage,
} from './defaults/components';
import { defaultForgotPasswordResetSchema } from './defaults/schema';
import { defaultForgotPasswordResetFields } from './defaults/fields';
import { FormValuesReset } from './types';

export type ForgotPasswordResetProps = Omit<BaseFormProps, 'header'> & {
  header?: React.FC<DefaultForgotPasswordHeaderProps> | false | null;
  signupUrl?: string;
  childrenPosition?: 'top' | 'bottom';
  cssVars?: CSSVars<typeof varNames>;
  children?: React.ReactNode;
};

const { genClassNames, getDefaultsFromZodObject, clearOnError } = utils;

const varNames = [...varNamesCommonForm] as const;

export const ForgotPasswordReset = ({
  handler,
  onSuccess,
  title = 'Reset Password',
  header: Header = DefaultForgotPasswordResetHeader,
  loader: Loader = DefaultLoader,
  childrenPosition = 'bottom',
  customFields = defaultForgotPasswordResetFields,
  customSchema: schema = defaultForgotPasswordResetSchema,
  toast,
  failMsg,
  successMessage = DefaultForgotPasswordResetSuccessMessage,
  darkMode = false,
  cssVars,
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
                  componentName={ForgotPasswordReset.displayName}
                  fields={customFields}
                  register={register}
                  errors={errors}
                  clsName={clsName}
                />

                <button type="submit" className={clsName('button')}>
                  Next
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
                  Next
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
