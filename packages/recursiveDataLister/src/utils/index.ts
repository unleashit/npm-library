import { parseISO } from 'date-fns/parseISO';

export const getChildTag = (tag: string): keyof JSX.IntrinsicElements => {
  if (tag === 'ul' || tag === 'ol') return 'li';
  return 'div';
};

export const isPrimitive = (elem: unknown): boolean =>
  typeof elem === 'string' ||
  typeof elem === 'number' ||
  typeof elem === 'bigint' ||
  typeof elem === 'boolean';

export const isObjectNotArray = (
  elem: Record<string, unknown> | any[],
): boolean => typeof elem === 'object' && !Array.isArray(elem);

export const isDate = (elem: unknown): elem is Date =>
  Object.prototype.toString.call(elem) === '[object Date]' &&
  !Number.isNaN(elem);

export const isObjectNotDate = (
  elem: Record<string, unknown> | any[],
): boolean => typeof elem === 'object' && !isDate(elem);

// mdx_recursive_dl_date_start
export type DateFormat = (val: Date) => string | number;
// mdx_recursive_dl_date_end

const ISODateFormat =
  /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d*)?(?:[-+]\d{2}:?\d{2}|Z)?$/;

export const isIsoDateString = (value: unknown): value is string =>
  typeof value === 'string' && ISODateFormat.test(value);

export const handleDateOrPrimitive = (
  elem: string | number | boolean | Date | null | undefined,
  cb: DateFormat,
  handleISOStringDates: boolean,
) => {
  if (isDate(elem)) return cb(elem);
  if (handleISOStringDates && isIsoDateString(elem)) {
    return cb(parseISO(elem));
  }
  return elem;
};
