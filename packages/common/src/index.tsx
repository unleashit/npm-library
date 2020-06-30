import { CustomInput } from './lib/CustomInput';
import { isCSSModule, returnComponentFormat } from './lib/utils';
import { useToggleBodyStyleProp } from './hooks/useToggleBodyStyleProp';
import { useHighestZindex } from './hooks/useHighestZindex';
import { useHandleEscapeKey } from './hooks/useHandleEscapeKey';

// Solution for Babel unable to handle multiple ts interface exports
export * from './lib/CustomFields';
export {
  CustomInput,
  isCSSModule,
  returnComponentFormat,
  useToggleBodyStyleProp,
  useHighestZindex,
  useHandleEscapeKey,
};
