const getChild = (tag: string): string => {
  if (tag === 'ul' || tag === 'ol') return 'li';
  return 'div';
};

const isObject = (elem: object | any[]): boolean =>
  typeof elem === 'object' && !Array.isArray(elem);

export { getChild, isObject };
