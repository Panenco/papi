import { createListRepresentation } from 'contracts';
import { HttpCode, OnUndefined, UseInterceptor } from 'routing-controllers';
import { ResponseSchema } from 'routing-controllers-openapi';
import { arrayRepresenter, ClassType, listRepresenter, representer } from 'utils';

/**
 * Decorator to be used on [[routing-controllers]] controller method
 *
 * Apply representation transformation on a controller method output.
 *
 * The result of the transformed return value will be JSON serialized as the response body.
 *
 * Must be applied on a controller method.
 * @param representation class type of the representation to be used by [[class-transformer]]
 * @param statusCode Optional Status code of the success response
 * @param options OpenAPI options for API documentation
 *
 * @category Decorator
 */
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
        : [OnUndefined(statusCode || 204), HttpCode(statusCode || 204)]),
    ].map(f => f(target, key));
  };
};

/**
 * Decorator to be used on [[routing-controllers]] controller method
 *
 * Apply paginated list representation transformation on a controller method output.
 *
 * The result of the transformed return value will be JSON serialized as the response body.
 *
 * Must be applied on a controller method.
 * @param representation class type of the representation to be used by [[class-transformer]]
 * @param statusCode Optional Status code of the success response
 * @param options OpenAPI options for API documentation
 *
 * Structure of the response:
 * {
 *     items: object[],
 *     count: number
 * }
 *
 * @category Decorator
 */
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

/**
 * Decorator to be used on [[routing-controllers]] controller method
 *
 * Apply array representation transformation on a controller method output.
 *
 * The result of the transformed return value will be JSON serialized as the response body.
 *
 * Must be applied on a controller method.
 * @param representation class type of the representation to be used by [[class-transformer]]
 * @param statusCode Optional Status code of the success response
 * @param options OpenAPI options for API documentation
 *
 * Structure of the response: object[]
 *
 * @category Decorator
 */
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
