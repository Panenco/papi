import 'reflect-metadata';

export const description = (text: string) => {
  return (target: any, key: string) => {
    if (target[key]) {
      return Reflect.defineMetadata("Panenco", text, target[key], key);
    }
    return Reflect.defineMetadata("Panenco", text, target, key);
  };
};
