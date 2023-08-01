import React, { useEffect, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z, AnyZodObject, ZodTypeAny } from 'zod';
import {
  DefaultLoader,
  genClassNames,
  Input,
  Textarea,
  type DefaultLoaderProps,
  type CustomFieldHF,
  CustomFieldsHF,
  getDefaultsFromZodSchema,
} from '@unleashit/common';
import {
  DefaultHeader,
  DefaultSuccess,
  type DefaultHeaderProps,
  type DefaultSuccessProps,
} from './defaults/components';

import { FormValues, ServerResponse } from './types';
import {
  defaultContactSchema,
  defaultContactSchemaWithPhone,
} from './defaults/schema';

export interface QuickFormProps {
  // async function that to submit form
  // should return a boolean success prop
  // and any serverside validation errors
  handler: <T extends z.ZodTypeAny>(
    values: FormValues<T>,
  ) => Promise<ServerResponse>;
  onSuccess?: (resp: ServerResponse<any, any>) => void;
  title?: string;
  header?: React.FC<DefaultHeaderProps>;
  footer?: React.FC<any>;
  loader?: React.FC<DefaultLoaderProps>;
  // show phone field (ignored when using custom fields)
  showPhone?: boolean;
  customFields?: CustomFieldHF[];
  successMessage?: string; // replace default success message
  // Replace or remove (as when using an onSuccess function) the default success component
  successComponent?: React.FC<DefaultSuccessProps> | false | null;
  // show success msg for ms, then remove (0 or false to not remove)
  successMessageTimeout?: number | false | null;
  schema?: AnyZodObject;
  // fallback failure msg
  failMsg?: string;
  // optionally send root server error and/or
  // contactHandler error messages to toast
  toast?: (msg: string) => void;
  cssModule?: Record<string, string>;
}

function QuickForm({
  handler,
  onSuccess,
  title,
  header: Header = DefaultHeader,
  footer: Footer,
  loader: Loader = DefaultLoader,
  successMessage,
  successComponent: SuccessComponent = DefaultSuccess,
  successMessageTimeout = 5000,
  showPhone = false,
  customFields,
  schema: userSchema,
  toast,
  failMsg = 'Failed to Fetch. Are you online?',
  cssModule = {},
}: QuickFormProps) {
  const schema =
    userSchema ??
    (showPhone ? defaultContactSchemaWithPhone : defaultContactSchema);
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues<ZodTypeAny>>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
    defaultValues: getDefaultsFromZodSchema(schema),
  });
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const [fetchError, setFetchError] = useState<null | Error>(null);
  const messageTimer = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    if (isSubmitSuccessful && !!SuccessComponent) {
      reset();
      setShowSuccessMsg(true);
      if (typeof successMessageTimeout === 'number') {
        messageTimer.current = setTimeout(() => {
          setShowSuccessMsg(false);
        }, successMessageTimeout);
      }
    }
  }, [isSubmitSuccessful, SuccessComponent, successMessageTimeout, reset]);

  useEffect(
    () => () => messageTimer.current && clearTimeout(messageTimer.current),
    [],
  );

  const { clsName } = genClassNames('quickForm', cssModule);

  const onSubmit: SubmitHandler<FormValues<typeof schema>> = async (values) => {
    try {
      const resp = await handler<typeof schema>(values);
      if (resp.success && onSuccess) {
        return onSuccess(resp);
      }
      if (resp.errors) {
        Object.entries(resp.errors).forEach(([key, val]) => {
          // handle case where server returns array of errors
          const message = Array.isArray(val) ? val[0] : val;
          // call toast fn if user provides one
          if (key === 'root' && !!toast) {
            toast(message);
            // Even though toast is handling root error, RHF requires
            // at least one error to maintain invalid state
            setError('root', {
              type: 'server',
              message,
            });
          } else {
            setError(key, {
              type: 'server',
              message,
            });
          }
        });
      }
    } catch (err: unknown) {
      console.error(err);
      const errorToDisplay =
        typeof (err as any).message === 'string'
          ? (err as any).message
          : failMsg;
      setFetchError(new Error(errorToDisplay));
      if (toast) {
        toast(errorToDisplay);
      }
      // Even though toast is handling root error, RHF requires
      // at least one error to maintain invalid state
      setError('root', {
        type: 'server',
        message: errorToDisplay,
      });
    }
  };

  if (fetchError) {
    return (
      <div className={clsName('container')}>
        <h2>Error: Unable to send message</h2>
        <pre className={clsName('fetchErrorDisplay')}>{fetchError.message}</pre>
        <button
          type="button"
          className={clsName('button')}
          onClick={() => {
            reset();
            setFetchError(null);
          }}
        >
          Try again
        </button>
      </div>
    );
  }

  if (showSuccessMsg && !!SuccessComponent) {
    return (
      <SuccessComponent
        cssModule={cssModule}
        {...(successMessage && { message: successMessage })}
      />
    );
  }

  return (
    <div className={clsName('container')}>
      {isSubmitting && (
        <Loader componentName="quickForm" cssModule={cssModule} />
      )}
      {!isSubmitting && <Header title={title} cssModule={cssModule} />}
      {errors.root && !toast && (
        <div className={clsName('serverAuthError')}>{errors.root.message}</div>
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: isSubmitting ? 'none' : 'block',
        }}
        className={clsName('form')}
      >
        {customFields ? (
          <CustomFieldsHF
            componentName="quickForm"
            fields={customFields}
            register={register}
            errors={errors}
            cssModule={cssModule}
          />
        ) : (
          <>
            <Input
              componentName={QuickForm.displayName}
              label="Name"
              type="text"
              register={register('name')}
              error={errors.name}
              cssModule={cssModule}
            />
            <Input
              componentName={QuickForm.displayName}
              label="Email"
              type="email"
              register={register('email')}
              error={errors.email}
              cssModule={cssModule}
            />
            {showPhone && (
              <Input
                componentName={QuickForm.displayName}
                label="Phone"
                type="text"
                register={register('phone')}
                error={errors.phone}
                cssModule={cssModule}
              />
            )}
            <Textarea
              componentName={QuickForm.displayName}
              label="Message"
              register={register('message')}
              error={errors.message}
              cssModule={cssModule}
            />
          </>
        )}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={clsName('button')}
          >
            Send
          </button>
        </div>
      </form>
      {!isSubmitting && Footer && <Footer />}
    </div>
  );
}

QuickForm.displayName = 'quickForm';
export default QuickForm;
