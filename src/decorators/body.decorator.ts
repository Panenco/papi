import { ValidatorOptions } from 'class-validator';
import { Body as BodyRoutingControllers, BodyOptions, UseBefore } from 'routing-controllers';
import { Newable, validationMiddleware } from 'utils';

export const Body = (type: Newable, bodyOptions?: BodyOptions, validatorOptions?: ValidatorOptions) => {
  return (target: Object, propertyKey: string, parameterIndex: number) => {
    UseBefore(validationMiddleware(type, 'body', validatorOptions))(target, propertyKey);
    BodyRoutingControllers(bodyOptions)(target, propertyKey, parameterIndex);
  };
};
