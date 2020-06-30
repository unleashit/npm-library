const getChild = (tag: string): string => {
  if (tag === 'ul' || tag === 'ol') return 'li';
  return 'div';
};

const isObjectNotArray = (elem: Record<string, unknown> | any[]): boolean =>
  typeof elem === 'object' && !Array.isArray(elem);

// const isObjectNotNull = (elem: any): boolean =>
//   !!elem && typeof elem === 'object' && !Array.isArray(elem);

const isDate = (elem: Record<string, unknown> | any[]): boolean =>
  Object.prototype.toString.call(elem) === '[object Date]';

const isObjectNotDate = (elem: Record<string, unknown> | any[]): boolean =>
  typeof elem === 'object' && !isDate(elem);

export type DateFormat = (val: Date) => string | number;

const handleDate = (elem: Date, cb: DateFormat): string | number => cb(elem);

export { getChild, isObjectNotArray, isDate, isObjectNotDate, handleDate };
