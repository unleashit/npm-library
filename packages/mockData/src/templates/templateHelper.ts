export type template = (
  args?: any,
) => {
  [key: string]: any;
};

export type templateArgs = {
  [key: string]: any;
} & undefined &
  null;

export const removeHidden = (fields: string[], obj: any): {} => {
  return Object.keys(obj).reduce((a: any, key: string) => {
    return fields.indexOf(key) > -1
      ? a
      : { ...a, [key]: obj[key] }
  }, {});
};
