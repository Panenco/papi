import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';

/**
 * Checks if a value is a number.
 *
 * Transforms strings and other matching types to numbers
 *
 * @category Decorator
 */
export const Numeric = () => {
  const isNumber = IsNumber();
  const typeParser = Type(() => Number);

  return (target: any, key: string) => {
    isNumber(target, key);
    typeParser(target, key);
  };
};
