import { ValidatorOptions } from 'class-validator';
import { QueryParams, UseBefore } from 'routing-controllers';
import { InputOptions, Newable, validationMiddleware } from 'utils';

/**
 *
 * Allows to inject and validate a request query params to the controller action parameter.
 *
 * Must be applied on a controller action parameter.
 * @param type Override inferred type, set the expected type of the query
 * @param options [[routing-controllers]] param options for binding the request query
 * @param validatorOptions [[class-validator]] validation options for the validation to be performed.
 *
 * @category Decorator
 */
export const Query = (options: InputOptions = {}, validatorOptions?: ValidatorOptions, type?: Newable) => {
  return (target: Object, propertyKey: string | symbol, parameterIndex: number) => {
    const mdType = type ?? Reflect.getMetadata('design:paramtypes', target, propertyKey)?.[parameterIndex];
    UseBefore(validationMiddleware(mdType, 'query', validatorOptions))(target, propertyKey);
    QueryParams({ validate: false, ...options })(target, propertyKey, parameterIndex);
  };
};
