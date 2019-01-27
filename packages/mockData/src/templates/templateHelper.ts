export type template = (args?: any) => {
  [key: string]: any
}

export type templateArgs = {
  [key: string]: any
} & undefined & null

export const removeHidden = (fields: any, obj: any) => {
  return Object.keys(obj).reduce((a: any, b: string) => {
    if (fields.indexOf(b) > -1) return a;
    a[b] = obj[b];
    return a;
  }, {});
};


