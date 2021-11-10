import { Body as BodyRoutingControllers, BodyOptions, UseBefore } from 'routing-controllers';
import { Newable, validationMiddleware } from 'utils';

export const Body = (type: Newable, bodyOptions?: BodyOptions) => {
  return (target: Object, propertyKey: string, parameterIndex: number) => {
    UseBefore(validationMiddleware(type, 'body'))(target, propertyKey);
    BodyRoutingControllers(bodyOptions)(target, propertyKey, parameterIndex);
  };
};
