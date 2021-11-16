export const stringToObject = (path: string, value: any, obj: object = {}) => {
  const result = {};
  const parts = path.split('.');
  let part: string;
  const last = parts.pop();
  while ((part = parts.shift())) {
    if (typeof obj[part] !== 'object') obj[part] = {};
    obj = obj[part]; // update "pointer"
  }
  obj[last] = value;
  return result;
};
