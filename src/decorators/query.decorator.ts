import { ValidatorOptions } from 'class-validator';
import { ParamOptions, QueryParams, UseBefore } from 'routing-controllers';
import { Newable, validationMiddleware } from 'utils';

export const Query = (type: Newable, options?: ParamOptions, validatorOptions?: ValidatorOptions) => {
  return (target: Object, propertyKey: string | symbol, parameterIndex: number) => {
    [(UseBefore(validationMiddleware(type, 'query', validatorOptions)), QueryParams(options))].map(f =>
      f(target, propertyKey, parameterIndex),
    );
  };
};
