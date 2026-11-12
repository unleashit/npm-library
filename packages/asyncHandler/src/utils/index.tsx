const isEmpty = (data: any): boolean => {
  if (Array.isArray(data)) {
    return !data.length;
  }
  // typeof null === 'object' and Object.keys(null) throws, so guard first
  if (data === null || data === undefined) {
    return true;
  }
  if (typeof data === 'object') {
    return !Object.keys(data).length;
  }
  return !data;
};

export { isEmpty };
