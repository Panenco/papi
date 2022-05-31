/**
 * Creates an object from a property path
 * @param path Path to create an object from. Ex. `root.child.subChild`
 * @param value The value to set on the lowest level Ex. `true`
 * @param obj Optional root object
 * @returns The object that has been created from the path. Ex. ```{ root: { child: { subChild: true } } }```
 *
 * @category Helpers
 */
export const stringToObject = (path: string, value: any, obj: object = {}) => {
  const result = obj;
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
