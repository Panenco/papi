import 'reflect-metadata';

import { Type } from 'class-transformer';
import { IsArray, IsObject, ValidateIf, ValidateNested } from 'class-validator';
import { ClassType } from 'utils/types/classType';

export const Nested = <T>(type: ClassType<T>, isArray = false, childType: ClassType<any> = undefined) => {
  const nestedValidation = ValidateNested({
    each: isArray,
    context: childType || type,
  });
  const typeParser = Type(() => type);
  const validateIf = ValidateIf((object, value) => value !== null);
  const validateAsObjectOrArray = isArray ? IsArray() : IsObject();

  return (object: any, propertyName: string) => {
    validateIf(object, propertyName);
    nestedValidation(object, propertyName);
    validateAsObjectOrArray(object, propertyName);
    typeParser(object, propertyName);
  };
};
