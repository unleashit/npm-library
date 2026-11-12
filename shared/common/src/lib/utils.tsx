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

/*
 * The peer range allows zod 3 or 4, and the two majors differ in how wrappers,
 * effects and defaults are represented. Everything below is written against the
 * parts both share so a consumer on either major gets the same defaults.
 */

type AnySchema = any;

/** `instanceof` against a class that may not exist on the installed zod major. */
const isInstanceOf = (schema: AnySchema, Ctor: unknown): boolean =>
  typeof Ctor === 'function' && schema instanceof (Ctor as any);

/** zod 3 stores the default as a thunk on `_def.defaultValue`; zod 4 stores the value. */
const readDefaultValue = (schema: AnySchema): unknown => {
  const stored = schema?._def?.defaultValue;
  return typeof stored === 'function' ? stored() : stored;
};

/** Inner schema of a wrapper: optional, nullable, default, catch, effects, pipe, preprocess. */
const innerSchema = (schema: AnySchema): AnySchema | undefined => {
  if (!schema || typeof schema !== 'object') return undefined;
  try {
    // zod 4 wrappers (ZodOptional, ZodNullable, ZodDefault, ZodCatch, ZodPrefault ...)
    if (typeof schema.unwrap === 'function') return schema.unwrap();
    // zod 3 wrappers and ZodEffects
    if (typeof schema.innerType === 'function') return schema.innerType();
  } catch {
    /* unwrappable — fall through to the _def lookups */
  }
  // zod 4 ZodPipe / ZodPreprocess keep the wrapped schema on `_def.out`
  return schema._def?.innerType ?? schema._def?.out ?? schema._def?.schema;
};

/**
 * Peel off refinements, transforms, preprocessors and optionality until an object
 * schema is reached. zod 4's `.refine()` returns the object itself, so refinements
 * need no special handling there.
 */
const toObjectSchema = (schema: AnySchema): AnySchema | undefined => {
  let current = schema;
  const seen = new Set<AnySchema>();
  while (current && !isInstanceOf(current, z.ZodObject) && !seen.has(current)) {
    seen.add(current);
    current = innerSchema(current);
  }
  return current;
};

export function getDefaultsFromZodObject<T extends z.ZodTypeAny>(
  schema: unknown,
): z.infer<T> {
  const objectSchema = toObjectSchema(schema);
  if (!(objectSchema instanceof z.ZodObject)) return {} as z.infer<T>;

  // eslint-disable-next-line no-shadow
  function getDefaultValue(schema: AnySchema): unknown {
    if (
      schema instanceof z.ZodDefault ||
      isInstanceOf(schema, (z as AnySchema).ZodPrefault)
    ) {
      return readDefaultValue(schema);
    }
    // return an empty array if it is
    if (schema instanceof z.ZodArray) return [];
    // return an empty string if it is
    if (schema instanceof z.ZodString) return '';
    // return an content of object recursivly
    if (schema instanceof z.ZodObject) return getDefaultsFromZodObject(schema);

    const nested = innerSchema(schema);
    return nested === undefined ? undefined : getDefaultValue(nested);
  }

  return Object.fromEntries(
    Object.entries(objectSchema.shape as Record<string, AnySchema>).map(
      ([key, value]) => [key, getDefaultValue(value)],
    ),
  ) as z.infer<T>;
}

export function clearOnError(fields: CustomField[]) {
  return fields
    .filter((field) => field.clearOnServerError)
    .map((field) => field.name);
}
