import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ZodTypeAny } from 'zod';
import {
  CustomFieldsHF,
  DefaultLoader,
  genClassNames,
  useShowSuccessTimer,
  DefaultHeader,
  ShowSuccess,
  formHandler,
  type FormValues,
  type BaseFormProps,
  getDefaultsFromZodObject,
  useSetFocus,
} from '@unleashit/common';
import {
  defaultContactSchema,
  defaultContactSchemaWithPhone,
} from './defaults/schema';
import {
  defaultContactFields,
  defaultContactFieldsWithPhone,
} from './defaults/defaultFields';

export type QuickFormProps = Omit<
  BaseFormProps,
  'linkComponent' | 'linkComponentHrefAttr'
> & {
  // show phone field (ignored when using custom fields)
  showPhone?: boolean;
  // show success msg for x ms, then toggle back to blank form
  // 0 or false to disable toggle and leave message
  successMessageTimeout?: number | false | null;
};

function QuickForm({
  handler,
  onSuccess,
  title = 'Contact Us',
  header: Header = DefaultHeader,
  footer: Footer,
  loader: Loader = DefaultLoader,
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
  failMsg,
  cssModule = {},
}: QuickFormProps) {
  // Setup React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    setError,
    setFocus,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues<ZodTypeAny>>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
    defaultValues: getDefaultsFromZodObject<typeof schema>(schema),
  });

  // set focus on the first (if any) field with a focus prop
  useSetFocus(customFields, setFocus);

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
        setError,
        reset,
      }),
    [schema, handler, onSuccess, toast, failMsg, setError, reset],
  );

  const { clsName } = React.useMemo(
    () => genClassNames(QuickForm.displayName, cssModule),
    [cssModule],
  );

  if (!!successMessage && showSuccessMsg) {
    return <ShowSuccess successMessage={successMessage} clsName={clsName} />;
  }

  return (
    <div className={clsName('container')}>
      {isSubmitting ? (
        <Loader clsName={clsName} />
      ) : (
        <>
          {!!Header && <Header title={title} clsName={clsName} />}
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
            <CustomFieldsHF
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
              Send
            </button>
          </form>
          {!!Footer && <Footer />}
        </>
      )}
    </div>
  );
}

QuickForm.displayName = 'quickForm';
export default QuickForm;
