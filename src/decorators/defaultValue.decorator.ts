import { Expose, Transform } from 'class-transformer';

/**
 * Decorator that produces a default value for non-existing or empty properties when transforming with [[class-transformer]]
 * @param value The default value to be set.
 */
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
