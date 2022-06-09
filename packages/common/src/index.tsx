import { useHandleEscapeKey } from './hooks/useHandleEscapeKey';
import { useHighestZindex } from './hooks/useHighestZindex';
import { useToggleBodyStyleProp } from './hooks/useToggleBodyStyleProp';
import { CustomInput } from './lib/CustomInput';
// import { isCSSModule, returnComponentFormat } from './lib/utils';
import { DefaultLinkComponent } from './lib/DefaultLink';

export * from './lib/utils';
// Solution for Babel unable to handle multiple ts interface exports
export * from './lib/CustomFields';
export {
  CustomInput,
  useToggleBodyStyleProp,
  useHighestZindex,
  useHandleEscapeKey,
  DefaultLinkComponent,
};
