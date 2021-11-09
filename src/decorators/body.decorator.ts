import { Body as BodyRoutingControllers, BodyOptions, getMetadataArgsStorage } from 'routing-controllers';
import { Newable, validationMiddleware } from 'utils';

export const Body = (type: Newable, bodyOptions?: BodyOptions) => {
  return (target: Object, propertyKey: string, parameterIndex: number) => {
    getMetadataArgsStorage().uses.push({
      target: target.constructor,
      method: propertyKey,
      middleware: validationMiddleware(type, 'body'),
      afterAction: false,
    });
    [BodyRoutingControllers(bodyOptions)].map(f => f(target, propertyKey, parameterIndex));
  };
};
