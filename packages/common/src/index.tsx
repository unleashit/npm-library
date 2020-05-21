import { CustomInput } from './lib/CustomInput';
import { isCSSModule, returnComponentFormat } from './lib/utils';
import { useToggleBodyStyleProp } from "./hooks/useToggleBodyStyleProp";

// Solution for Babel unable to handle multiple ts interface exports
export * from './lib/CustomFields';
export { CustomInput, isCSSModule, returnComponentFormat, useToggleBodyStyleProp };
