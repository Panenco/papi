import { createListRepresentation } from 'contracts';
import { HttpCode, OnUndefined, UseInterceptor } from 'routing-controllers';
import { ResponseSchema } from 'routing-controllers-openapi';
import { arrayRepresenter, ClassType, listRepresenter, representer } from 'utils';

export const Representer = (
  representation: ClassType<any>,
  statusCode?: number,
  options: {
    contentType?: string;
    description?: string;
  } = {},
) => {
  return (target: any, key: string) => {
    [
      ResponseSchema(representation, options),
      ...(representation
        ? [UseInterceptor(representer(representation)), HttpCode(statusCode || 200)]
        : [OnUndefined(statusCode || 204)]),
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
      ResponseSchema(createListRepresentation(representation), options),
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
