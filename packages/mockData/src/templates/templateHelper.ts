export type template = (args?: any) => {
  [key: string]: any;
};

// export type templateArgs = {
//   [key: string]: any;
// } & undefined &
//   null;

export const removeHidden = (
  fields: string[],
  obj: any,
): Record<string, unknown> =>
  Object.keys(obj).reduce(
    (a: any, key: string): Record<string, unknown> =>
      fields.indexOf(key) > -1 ? a : { ...a, [key]: obj[key] },
    {},
  );
