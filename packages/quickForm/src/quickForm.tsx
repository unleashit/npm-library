import React, { useMemo, ComponentType, ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ZodTypeAny } from 'zod';
import {
  CustomFields,
  DefaultLoader,
  useShowSuccessTimer,
  DefaultHeader,
  ShowSuccess,
  formHandler,
  type FormValues,
  type BaseFormProps,
  utils,
  useSetFocus,
  CSSVars,
  mapCSSVarsToStyles,
  varNamesCommonForm,
  constants,
} from '@unleashit/common';
import {
  defaultContactSchema,
  defaultContactSchemaWithPhone,
} from './defaults/schema';
import {
  defaultContactFields,
  defaultContactFieldsWithPhone,
} from './defaults/defaultFields';

// mdx_quickForm_props_start
export type QuickFormProps = BaseFormProps & {
  /** show phone field (ignored when using custom fields) */
  showPhone?: boolean;
  /** Custom footer component */
  footer?: ComponentType | ReactNode;
  /**
   * Show success message for x ms, then toggle back to blank form.
   * Use 0 or false to disable the toggle and keep message
   */
  successMessageTimeout?: number | false | null;
  /** CSS custom property overrides */
  cssVars?: CSSVars<typeof varNames>;
};
// mdx_quickForm_props_end

const {
  genClassNames,
  getDefaultsFromZodObject,
  clearOnError,
  normalizeComponentProp,
} = utils;

const varNames = [...varNamesCommonForm] as const;

function QuickForm({
  handler,
  onSuccess,
  headerText = 'Contact Us',
  header: Header = DefaultHeader,
  footer: Footer,
  loader: Loader = DefaultLoader,
  buttonText = 'Send Message',
  successMessage = 'Thanks for your message!',
  successMessageTimeout = 5000,
  showPhone = false,
  customFields = showPhone
    ? defaultContactFieldsWithPhone
    : defaultContactFields,
  customSchema: schema = showPhone
    ? defaultContactSchemaWithPhone
    : defaultContactSchema,
  toast,
  failMsg = constants.baseFailMsg,
  darkMode = false,
  isFocused = true,
  cssVars,
  cssModule = {},
}: QuickFormProps) {
  // Setup React Hook Form
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

  // Display/hide the success message
  const [showSuccessMsg] = useShowSuccessTimer({
    isSubmitSuccessful,
    successMessage,
    successMessageTimeout,
    reset,
  });

  // Set up and memo the form handler
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
    () => genClassNames(QuickForm.displayName, cssModule),
    [cssModule],
  );

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
            <CustomFields
              componentName={QuickForm.displayName}
              fields={customFields}
              register={register}
              errors={errors}
              clsName={clsName}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className={clsName('button')}
            >
              {buttonText}
            </button>
          </form>
          {!!Footer && normalizeComponentProp(Footer)}
        </>
      )}
    </div>
  );
}

QuickForm.displayName = 'quickForm';
export default QuickForm;
