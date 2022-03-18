import { ValidatorOptions } from 'class-validator';
import { ParamOptions, QueryParams, UseBefore } from 'routing-controllers';
import { Newable, validationMiddleware } from 'utils';

/**
 *
 * Allows to inject and validate a request query params to the controller action parameter.
 *
 * Must be applied on a controller action parameter.
 * @param type The expected type of the query params. Should be a [[class-validator]] class
 * @param options [[routing-controllers]] param options for binding the request body
 * @param validatorOptions [[class-validator]] validation options for the validation to be performed.
 */
export const Query = (type: Newable, options?: ParamOptions, validatorOptions?: ValidatorOptions) => {
  return (target: Object, propertyKey: string | symbol, parameterIndex: number) => {
    [(UseBefore(validationMiddleware(type, 'query', validatorOptions)), QueryParams(options))].map(f =>
      f(target, propertyKey, parameterIndex),
    );
  };
};
