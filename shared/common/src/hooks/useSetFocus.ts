import React from 'react';
import { UseFormSetFocus } from 'react-hook-form';
import { ZodTypeAny } from 'zod';
import { CustomField, FormValues } from '@unleashit/common';

// set focus on the first (if any) field with a focus prop
export function useSetFocus(
  customFields: CustomField[],
  setFocus: UseFormSetFocus<FormValues<ZodTypeAny, any>>,
) {
  React.useEffect(() => {
    const focus = customFields.find((f) => f.focus);
    if (focus) {
      setFocus(focus.name);
    }
  }, [customFields, setFocus]);
}
