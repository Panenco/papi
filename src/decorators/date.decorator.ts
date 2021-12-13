import { Type } from 'class-transformer';
import { IsDate } from 'class-validator';

const PapiDate = () => {
  const isDate = IsDate();
  const typeParser = Type(() => Date);

  return (target: any, key: string) => {
    isDate(target, key);
    typeParser(target, key);
  };
};

export { PapiDate as Date };
