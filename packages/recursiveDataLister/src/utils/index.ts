const getChild = (tag: string): string => {
  if (tag === 'ul' || tag === 'ol') return 'li';
  return 'div';
};

const isObject = (elem: object | any[]): boolean => elem.toString() === '[object Object]';

export {
  getChild,
  isObject
}
