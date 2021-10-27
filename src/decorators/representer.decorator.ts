import { HttpCode, UseInterceptor } from 'routing-controllers';
import { ResponseSchema } from 'routing-controllers-openapi';
import { arrayRepresenter, listRepresenter, representer } from 'utils/representers';
import { ClassType } from 'utils/types/classType';

export const Representer = (
  representation: ClassType<any>,
  statusCode = 200,
  options: {
    contentType?: string;
    description?: string;
  } = {},
) => {
  return (target: any, key: string) => {
    [
      ResponseSchema(representation, options),
      UseInterceptor(representer(representation)),
      HttpCode(statusCode),
    ].map(f => f(target, key));
  };
};

export const ListRepresenter = (
  representation: ClassType<any>,
  statusCode = 200,
  options: {
    contentType?: string;
    description?: string;
  } = {},
) => {
  return (target: any, key: string) => {
    [
      ResponseSchema(representation, options),
      UseInterceptor(listRepresenter(representation)),
      HttpCode(statusCode),
    ].map(f => f(target, key));
  };
};

export const ArrayRepresenter = (
  representation: ClassType<any>,
  statusCode = 200,
  options: {
    contentType?: string;
    description?: string;
  } = {},
) => {
  return (target: any, key: string) => {
    [
      ResponseSchema(representation, { ...options, isArray: true }),
      UseInterceptor(arrayRepresenter(representation)),
      HttpCode(statusCode),
    ].map(f => f(target, key));
  };
};
