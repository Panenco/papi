import { ParamOptions, QueryParams, UseBefore } from 'routing-controllers';
import { validationMiddleware } from 'utils/middleware/validation.middleware';
import { Newable } from 'utils/types/newable';

export const Query = (type: Newable, options?: ParamOptions) => {
  return (target: Object, propertyKey: string | symbol, parameterIndex: number) => {
    [(UseBefore(validationMiddleware(type, 'query')), QueryParams(options))].map(f =>
      f(target, propertyKey, parameterIndex),
    );
  };
};
