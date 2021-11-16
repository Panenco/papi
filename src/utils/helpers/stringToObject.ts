export const stringToObject = (path: string, value: any, obj: object = {}) => {
  let parts = path.split('.'),
    part: string;
  let last = parts.pop();
  while ((part = parts.shift())) {
    if (typeof obj[part] != 'object') obj[part] = {};
    obj = obj[part]; // update "pointer"
  }
  obj[last] = value;
  return obj;
};
