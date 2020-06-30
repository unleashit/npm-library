const isEmpty = (data: any): boolean => {
  if (Array.isArray(data)) {
    return !data.length;
  }
  if (typeof data === 'object') {
    return !Object.keys(data).length;
  }
  return !data;
};

export { isEmpty };
