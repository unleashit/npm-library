import { useCallback, useEffect, useState, ComponentType } from 'react';
import { BaseSuccessMessageProps } from '../components/defaults/successMessage';
import { BaseServerResponse } from '../types';

type SuccessMessage =
  ComponentType<BaseSuccessMessageProps> | string | false | null;

export type UseShowSuccessTimerArgs = {
  /** react-hook-form submit state. Kept for custom submit handlers */
  isSubmitSuccessful: boolean;
  /** Message/component to display after a successful submit */
  successMessage: SuccessMessage;
  /** Milliseconds to show the message. Omit, `false` or `Infinity` to keep it */
  successMessageTimeout?: number | false | null;
  /** react-hook-form reset, called by the built-in success message flow */
  reset?: () => void;
  /** Consumer callback to run after the success message is triggered */
  onSuccess?: (resp: BaseServerResponse<any, any>) => void;
};

/**
 * Returns `[showSuccessMsg, onSuccess]`.
 *
 * The second value must be handed to `formHandler` as its `onSuccess`:
 * react-hook-form applies `reset()` on a later tick than the submit lifecycle,
 * so a submit handler that resets the form (as `formHandler` does) ends up with
 * `isSubmitSuccessful === false`. The built-in components therefore trigger the
 * message from the confirmed server response and keep `isSubmitSuccessful` only
 * as a fallback for custom submit handlers that never call `onSuccess`.
 */
export const useShowSuccessTimer = ({
  isSubmitSuccessful,
  successMessage,
  successMessageTimeout,
  reset,
  onSuccess,
}: UseShowSuccessTimerArgs) => {
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  const handleSuccess = useCallback(
    (resp?: BaseServerResponse<any, any>) => {
      setShowSuccessMsg(true);
      onSuccess?.(resp as BaseServerResponse<any, any>);
    },
    [onSuccess],
  );

  useEffect(() => {
    if (!!successMessage && isSubmitSuccessful) {
      reset?.();
      setShowSuccessMsg(true);
    }
  }, [isSubmitSuccessful, reset, successMessage]);

  useEffect(() => {
    if (
      !showSuccessMsg ||
      typeof successMessageTimeout !== 'number' ||
      successMessageTimeout === Infinity
    ) {
      return undefined;
    }
    const timer = setTimeout(() => {
      setShowSuccessMsg(false);
    }, successMessageTimeout);
    return () => clearTimeout(timer);
  }, [showSuccessMsg, successMessageTimeout]);

  return [showSuccessMsg, handleSuccess] as const;
};
