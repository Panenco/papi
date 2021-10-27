import { ParamOptions, QueryParams, UseBefore } from 'routing-controllers';
import { Newable, validationMiddleware } from 'utils';

export const Query = (type: Newable, options?: ParamOptions) => {
  return (target: Object, propertyKey: string | symbol, parameterIndex: number) => {
    [(UseBefore(validationMiddleware(type, 'query')), QueryParams(options))].map(f =>
      f(target, propertyKey, parameterIndex),
    );
  };
};
