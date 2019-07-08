import { CustomInput } from './lib/CustomInput';
import { isCSSModule } from './lib/utils';

// Solution for Babel unable to handle multiple ts interface exports
export * from './lib/CustomFields';
export { CustomInput, isCSSModule };
