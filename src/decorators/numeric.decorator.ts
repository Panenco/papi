import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';

export const Numeric = () => {
  const isNumber = IsNumber();
  const typeParser = Type(() => Number);

  return (target: any, key: string) => {
    isNumber(target, key);
    typeParser(target, key);
  };
};
