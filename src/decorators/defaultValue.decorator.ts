import { Expose, Transform } from 'class-transformer';

export const DefaultValue = (value: any) => {
  const expose = Expose();

  const transform = Transform((target: any) =>
    target?.value == undefined ? (typeof value === 'function' ? value() : value) : target?.value,
  );

  return (target: any, key: string) => {
    expose(target, key);
    transform(target, key);
  };
};
