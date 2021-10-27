import 'reflect-metadata';

export const Description = (text: string) => {
  return (target: any, key: string) => {
    if (target[key]) {
      return Reflect.defineMetadata('Panenco', text, target[key], key);
    }
    return Reflect.defineMetadata('Panenco', text, target, key);
  };
};
