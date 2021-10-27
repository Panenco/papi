import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';

export const numeric = () => {
  const isNumber = IsNumber();
  const typeParser = Type(() => Number);

  return (target: any, key: string) => {
    isNumber(target, key);
    typeParser(target, key);
  };
};
