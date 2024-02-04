import {
  SubmitHandler,
  UseFormSetError,
  UseFormReset,
  UseFormSetValue,
} from 'react-hook-form';
import { z, ZodTypeAny, AnyZodObject, ZodEffects } from 'zod';
import { BaseFormProps, FormValues } from '../types';
import * as constants from './constants';

export type OnSubmitArgs = Pick<
  BaseFormProps,
  'handler' | 'onSuccess' | 'toast' | 'failMsg'
> & {
  schema: NonNullable<BaseFormProps['customSchema']>;
  setValue: UseFormSetValue<
    FormValues<AnyZodObject | ZodEffects<any, any, any>, any>
  >;
  setError: UseFormSetError<FormValues<z.ZodTypeAny, any>>;
  reset: UseFormReset<FormValues<ZodTypeAny, any>>;
  clearOnError?: string[];
};

export function formHandler({
  schema,
  handler,
  onSuccess,
  toast,
  failMsg = constants.baseFailMsg,
  setValue,
  setError,
  reset,
  clearOnError,
}: OnSubmitArgs) {
  const onSubmit: SubmitHandler<FormValues<typeof schema>> = async (values) => {
    try {
      const resp = await handler<typeof schema>(values);
      if (resp.success) {
        reset();
        onSuccess && onSuccess(resp);
        return;
      }
      if (resp.errors && Object.keys(resp.errors).length > 0) {
        Object.entries(resp.errors).forEach(([key, val]) => {
          // handle case where server returns multiple errors for same field
          // here we are just taking the first
          const message: string = Array.isArray(val) ? val[0] : val;
          if (key === 'root') {
            // call toast fn if user provides one
            toast && toast(message);
            // must be set even when user supplies toast
            // to force invalid RHF state
            setError('root', {
              type: 'server',
              message,
            });
          } else {
            // set field validation errors from server
            setError(key, {
              type: 'server',
              message,
            });
          }
        });

        try {
          clearOnError &&
            clearOnError.length > 0 &&
            clearOnError.forEach((field) => {
              setValue(field, '');
            });
        } catch (e) {
          console.error(e);
        }
      }
      // success false but with no errors = dev error. So set generic root error
      // Otherwise, RHF will set successful form state and potentially trigger success actions
      if (!resp.errors || Object.keys(resp.errors).length === 0) {
        toast && toast(failMsg);
        setError('root', {
          type: 'server',
          message: failMsg,
        });
      }
    } catch (err: unknown) {
      console.error(err);
      // TODO: should actual error ever be displayed to user?
      const errorToDisplay: string =
        typeof (err as any).message === 'string'
          ? (err as any).message
          : failMsg;
      toast && toast(errorToDisplay);
      // must be set even when user supplies toast
      // to force invalid RHF state
      setError('root', {
        type: 'catch',
        message: errorToDisplay,
      });
    }
  };

  return onSubmit;
}
