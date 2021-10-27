import { Body as BodyRoutingControllers, BodyOptions, UseBefore } from 'routing-controllers';
import { validationMiddleware } from 'utils/middleware/validation.middleware';
import { Newable } from 'utils/types/newable';

export const Body = (type: Newable, bodyOptions?: BodyOptions) => {
  return (target: Object, propertyKey: string | symbol, parameterIndex: number) => {
    [(UseBefore(validationMiddleware(type, 'body')), BodyRoutingControllers(bodyOptions))].map(f =>
      f(target, propertyKey, parameterIndex),
    );
  };
};
