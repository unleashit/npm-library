import * as React from 'react';
import { z } from 'zod';
import { prefix } from './constants';

export const removeUndefined = (val: unknown[]) =>
  val.filter((v) => v !== undefined);

export const reactComponentCase = (str: string) =>
  str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word) => word.toUpperCase())
    .replace(/\s+/g, '');

export const camelToKebab = (str: string) =>
  str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/\s/, '-')
    .toLowerCase();

export const convertToSentence = (str: string): string =>
  str.charAt(0).toUpperCase() +
  str
    .slice(1)
    .split(/(?=[A-Z])/)
    .join(' ');

export const isCSSModule = (
  themeProp: string | undefined,
  fallback: string,
): string => themeProp || fallback;

export const genClassNames = (
  moduleName: string,
  cssModule?: Record<string, string>,
) => ({
  clsName: (camelCaseClassName: string) => {
    if (!cssModule || !(camelCaseClassName in cssModule)) {
      return `${prefix}-${moduleName}__${camelToKebab(camelCaseClassName)}`;
    }
    return cssModule[camelCaseClassName];
  },
});

export const returnComponentFormat = (
  // eslint-disable-next-line @typescript-eslint/ban-types
  C: React.ReactNode | Function,
  attrs: Record<string, unknown>,
): any => {
  if (React.isValidElement(C)) {
    return C;
  }
  if (typeof C === 'function') {
    return <C {...attrs} />;
  }
  throw new Error(
    'Not a valid component. Please supply a component or valid React element.',
  );
};

// export function getDefaultsFromZodObject<Schema extends AnyZodObject>(
//   schema: Schema,
// ) {
//   return Object.fromEntries(
//     Object.entries(schema.shape).map(([key, value]) => {
//       if (value instanceof z.ZodDefault)
//         return [key, value._def.defaultValue()];
//       return [key, undefined];
//     }),
//   );
// }

export function getDefaultsFromZodObject<T extends z.ZodTypeAny>(
  schema: z.AnyZodObject | z.ZodEffects<any>,
): z.infer<T> {
  // Check if it's a ZodEffect
  if (schema instanceof z.ZodEffects) {
    // Check if it's a recursive ZodEffect
    if (schema.innerType() instanceof z.ZodEffects)
      return getDefaultsFromZodObject(schema.innerType());
    // return schema inner shape as a fresh zodObject
    return getDefaultsFromZodObject(
      z.ZodObject.create(schema.innerType().shape),
    );
  }

  // eslint-disable-next-line no-shadow
  function getDefaultValue(schema: z.ZodTypeAny): unknown {
    if (schema instanceof z.ZodDefault) return schema._def.defaultValue();
    // return an empty array if it is
    if (schema instanceof z.ZodArray) return [];
    // return an empty string if it is
    if (schema instanceof z.ZodString) return '';
    // return an content of object recursivly
    if (schema instanceof z.ZodObject) return getDefaultsFromZodObject(schema);

    if (!('innerType' in schema._def)) return undefined;
    return getDefaultValue(schema._def.innerType);
  }

  return Object.fromEntries(
    Object.entries(schema.shape as z.ZodRawShape).map(([key, value]) => [
      key,
      getDefaultValue(value),
    ]),
  );
}
