import React from 'react';
import { UseFormSetFocus } from 'react-hook-form';
import { ZodTypeAny } from 'zod';
import { CustomFieldHF, FormValues } from '@unleashit/common';

// set focus on the first (if any) field with a focus prop
export function useSetFocus(
  customFields: CustomFieldHF[],
  setFocus: UseFormSetFocus<FormValues<ZodTypeAny, any>>,
) {
  React.useEffect(() => {
    const focus = customFields.find((f) => f.focus);
    if (focus) {
      setFocus(focus.name);
    }
  }, [customFields, setFocus]);
}
