import { useEffect, useRef, useState } from 'react';
import { BaseSuccessMessageProps } from '../components/defaults/successMessage';

export const useShowSuccessTimer = ({
  isSubmitSuccessful,
  successMessage,
  successMessageTimeout,
  reset,
}: {
  isSubmitSuccessful: boolean;
  successMessage: React.FC<BaseSuccessMessageProps> | string | false | null;
  successMessageTimeout?: number | false | null;
  reset: () => void;
}) => {
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const messageTimer = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    if (!!successMessage && isSubmitSuccessful) {
      reset();
      setShowSuccessMsg(true);
      if (typeof successMessageTimeout === 'number') {
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
