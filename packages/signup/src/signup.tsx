import React, { useMemo, ComponentType, ReactNode } from 'react';
import {
  CustomFields,
  BaseFormProps,
  DefaultLoader,
  formHandler,
  useShowSuccessTimer,
  ShowSuccess,
  useSetFocus,
  utils,
  CSSVars,
  mapCSSVarsToStyles,
  varNamesCommonForm,
  constants,
} from '@unleashit/common';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { DefaultSignupHeader } from './defaults/components';
import { FormValues } from './types';
import defaultSignupSchema from './defaults/schema';
import defaultSignupFields from './defaults/fields';

// mdx_signup_props_start
export type SignupProps = BaseFormProps & {
  /**
   * Override the login link inside the default header
   * Note: if you provide a header prop, the login link will not appear
   */
  loginLink?: ComponentType | ReactNode;
  /**
   * Add a separator between email and
   * social logins  (children required)
   */
  orLine?: boolean;
  /** CSS custom property overrides */
  cssVars?: CSSVars<typeof varNames>;
  /** Position of children */
  children?: ReactNode;
  /** Social logins or other content to display */
  childrenPosition?: 'top' | 'bottom';
};
// mdx_signup_props_end

const {
  genClassNames,
  getDefaultsFromZodObject,
  clearOnError,
  normalizeComponentProp,
} = utils;

const varNames = [
  ...varNamesCommonForm,
  'orlineColor',
  'orlineMargin',
] as const;

export const Signup = ({
  handler,
  onSuccess,
  headerText = 'Signup',
  header: Header = DefaultSignupHeader,
  loader: Loader = DefaultLoader,
  buttonText = 'Signup',
  orLine = true,
  childrenPosition = 'bottom',
  loginLink = <a href="/login">Login</a>,
  customFields = defaultSignupFields,
  customSchema: schema = defaultSignupSchema,
  toast,
  failMsg = constants.baseFailMsg,
  successMessage = false,
  darkMode = false,
  cssVars,
  isFocused = true,
  cssModule = {},
  children,
}: SignupProps) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    setError,
    setFocus,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues<typeof schema>>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
    defaultValues: getDefaultsFromZodObject<typeof schema>(schema),
  });

  // set focus on the first field with a focus prop, if any
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
            ? normalizeComponentProp(Header, {
                headerText,
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
                  componentName={Signup.displayName}
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
                <CustomFields
                  componentName={Signup.displayName}
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

Signup.displayName = 'signup';
export default Signup;
