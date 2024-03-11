import { useEffect, useRef, useState, ComponentType } from 'react';
import { BaseSuccessMessageProps } from '../components/defaults/successMessage';

export const useShowSuccessTimer = ({
  isSubmitSuccessful,
  successMessage,
  successMessageTimeout,
  reset,
}: {
  isSubmitSuccessful: boolean;
  successMessage:
    | ComponentType<BaseSuccessMessageProps>
    | string
    | false
    | null;
  successMessageTimeout?: number | false | null;
  reset: () => void;
}) => {
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const messageTimer = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    if (!!successMessage && isSubmitSuccessful) {
      reset();
      setShowSuccessMsg(true);
      if (
        typeof successMessageTimeout === 'number' &&
        successMessageTimeout !== Infinity
      ) {
        messageTimer.current = setTimeout(() => {
          setShowSuccessMsg(false);
        }, successMessageTimeout);
      }
    }
  }, [isSubmitSuccessful, successMessage, successMessageTimeout, reset]);

  useEffect(
    () => () => messageTimer.current && clearTimeout(messageTimer.current),
    [],
  );

  return [showSuccessMsg];
};
