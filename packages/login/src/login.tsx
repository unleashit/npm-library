import React, { useMemo, ComponentType } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ZodTypeAny } from 'zod';
import {
  DefaultLoader,
  DefaultLinkComponent,
  CustomFields,
  BaseFormProps,
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
import { FormValues } from './types';
import defaultLoginSchema from './defaults/schema';
import defaultLoginFields from './defaults/fields';
import {
  DefaultLoginHeader,
  DefaultLoginHeaderProps,
} from './defaults/components';

// mdx_login_props_start
export type LoginProps = BaseFormProps & {
  /** Custom header component */
  header?: ComponentType<DefaultLoginHeaderProps> | false | null;
  /** Route or URL for link to signup component */
  signupUrl?: string;
  /** Add a seperator between email and social logins */
  orLine?: boolean;
  /** Route or URL for link to forgot password component */
  forgotPasswordUrl?: string | false | null;
  /** Text for forgot password link */
  forgotPasswordUrlText?: string;
  /** CSS custom property overrides */
  cssVars?: CSSVars<typeof varNames>;
  /** Position of children */
  childrenPosition?: 'top' | 'bottom';
  /** Social logins or other content to display */
  children?: React.ReactNode;
};
// mdx_login_props_end

const { genClassNames, getDefaultsFromZodObject, clearOnError } = utils;

const varNames = [
  ...varNamesCommonForm,
  'orlineColor',
  'orlineMargin',
] as const;

export const Login = ({
  handler,
  onSuccess,
  headerText = 'Login',
  signupUrl = '/signup',
  header: Header = DefaultLoginHeader,
  loader: Loader = DefaultLoader,
  buttonText = 'Login',
  forgotPasswordUrl = '/forgot-password',
  forgotPasswordUrlText = 'Forgot your password?',
  orLine = true,
  childrenPosition = 'bottom',
  linkComponent: LinkComponent = DefaultLinkComponent,
  linkComponentHrefAttr = 'href',
  isFocused = true,
  customFields = defaultLoginFields,
  customSchema: schema = defaultLoginSchema,
  toast,
  failMsg = constants.baseFailMsg,
  successMessage = false,
  darkMode = false,
  cssVars,
  cssModule = {},
  children,
}: LoginProps) => {
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
    mode: 'onBlur',
    defaultValues: getDefaultsFromZodObject<typeof schema>(schema),
  });

  // set focus on the first (if any) field with a focus prop
  useSetFocus(customFields, setFocus, isFocused);

  /** Submit handler */
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
    () => genClassNames(Login.displayName, cssModule),
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
          {Header && (
            <Header
              title={headerText}
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
                <CustomFields
                  componentName={Login.displayName}
                  fields={customFields}
                  register={register}
                  errors={errors}
                  clsName={clsName}
                />

                <button type="submit" className={clsName('button')}>
                  {buttonText}
                </button>
                {forgotPasswordUrl ? (
                  <div className={clsName('forgotPasswordLink')}>
                    <LinkComponent
                      {...{ [linkComponentHrefAttr]: forgotPasswordUrl }}
                    >
                      {forgotPasswordUrlText}
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
                <CustomFields
                  componentName={Login.displayName}
                  fields={customFields}
                  register={register}
                  errors={errors}
                  clsName={clsName}
                />

                <button type="submit" className={clsName('button')}>
                  {buttonText}
                </button>
                {forgotPasswordUrl ? (
                  <div className={clsName('forgotPasswordLink')}>
                    <LinkComponent
                      {...{ [linkComponentHrefAttr]: forgotPasswordUrl }}
                    >
                      {forgotPasswordUrlText}
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
