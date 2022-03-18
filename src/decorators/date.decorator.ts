import { Type } from 'class-transformer';
import { IsDate } from 'class-validator';

/**
 * Extended version of [[class-validator]][[IsDate]] decorator
 *
 * Checks if a value is a date.
 *
 * Transforms string dates into JS Dates.
 */
const PapiDate = () => {
  const isDate = IsDate();
  const typeParser = Type(() => Date);

  return (target: any, key: string) => {
    isDate(target, key);
    typeParser(target, key);
  };
};

export { PapiDate as Date };
