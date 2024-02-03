import React, { useMemo } from 'react';
import {
  CustomFields,
  DefaultLinkComponent,
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
  // link to login page, when using default login header
  loginUrl?: string;
  // show a separator line between email and social logins (children required)
  orLine?: boolean;
  // position of social logins relative to email login
  childrenPosition?: 'top' | 'bottom';
  cssVars?: CSSVars<typeof varNames>;
  children?: React.ReactNode;
};

const { genClassNames, getDefaultsFromZodObject, clearOnError } = utils;

const varNames = [
  ...varNamesCommonForm,
  'orlineColor',
  'orlineMargin',
] as const;

export const Signup = ({
  handler,
  onSuccess,
  title = 'Signup',
  header: Header = DefaultSignupHeader,
  loader: Loader = DefaultLoader,
  orLine = true,
  childrenPosition = 'bottom',
  loginUrl = '/login',
  linkComponent: LinkComponent = DefaultLinkComponent,
  linkComponentHrefAttr = 'href',
  customFields = defaultSignupFields,
  customSchema: schema = defaultSignupSchema,
  toast,
  failMsg,
  successMessage = false,
  darkMode = false,
  cssVars,
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
          {Header && (
            <Header
              title={title}
              loginUrl={loginUrl}
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
                <CustomFields
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
        </>
      )}
    </div>
  );
};

Signup.displayName = 'signup';
export default Signup;
