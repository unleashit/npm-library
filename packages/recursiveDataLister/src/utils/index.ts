export const getChildTag = (tag: string): keyof JSX.IntrinsicElements => {
  if (tag === 'ul' || tag === 'ol') return 'li';
  return 'div';
};

export const isObjectNotArray = (
  elem: Record<string, unknown> | any[],
): boolean => typeof elem === 'object' && !Array.isArray(elem);

// const isObjectNotNull = (elem: any): boolean =>
//   !!elem && typeof elem === 'object' && !Array.isArray(elem);

export const isDate = (elem: unknown): boolean =>
  Object.prototype.toString.call(elem) === '[object Date]' ||
  // eslint-disable-next-line no-restricted-globals
  (typeof elem === 'string' && !isNaN(new Date(elem) as any));

// const isStringDate = (elem: unknown): boolean =>
//   // eslint-disable-next-line no-restricted-globals
//   typeof elem === 'string' && !isNaN(new Date(elem) as any);
export const isObjectNotDate = (
  elem: Record<string, unknown> | any[],
): boolean => typeof elem === 'object' && !isDate(elem);

export type DateFormat = (val: Date) => string | number;

export const handleDate = (elem: Date, cb: DateFormat): string | number =>
  cb(elem);

export const isPrimitive = (elem: unknown): boolean =>
  typeof elem === 'string' ||
  typeof elem === 'number' ||
  typeof elem === 'boolean';
