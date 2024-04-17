import * as React from 'react';
import { z } from 'zod';
import { prefix } from './constants';
import { CustomField } from '../components/forms/CustomFields';

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

export const stringToKebab = (str: string) => {
  const matches = str.match(
    /[0-9]{1,}(?=\b)|[A-Z]{2,}(?=[A-Z][a-z]+|[0-9]|\b|_)|[A-Z]?[a-z]+|[A-Z]|[0-9]+/g,
  );
  if (!matches || matches.length === 0) return str;

  return matches.map((x) => x.toLowerCase()).join('-');
};

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

export const normalizeComponentProp = <T extends Record<string, unknown>>(
  C: React.ReactNode | React.ComponentType,
  props?: T,
) => {
  if (React.isValidElement(C)) {
    if (props && Object.keys(props).length) {
      return React.cloneElement(C, props);
    }
    return C;
  }
  if (typeof C === 'function') {
    return <C {...props} />;
  }
  throw new TypeError(
    'Prop received that is not a valid React component type or node',
  );
};

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

export function clearOnError(fields: CustomField[]) {
  return fields
    .filter((field) => field.clearOnServerError)
    .map((field) => field.name);
}
