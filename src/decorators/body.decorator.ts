import { ValidatorOptions } from 'class-validator';
import { Body as BodyRoutingControllers, BodyOptions, UseBefore } from 'routing-controllers';
import { Newable, validationMiddleware } from 'utils';

/**
 *
 * Allows to inject and validate a request body value to the controller action parameter.
 *
 * Must be applied on a controller action parameter.
 * @param type The expected type of the body. Should be a [[class-validator]] class
 * @param bodyOptions [[routing-controllers]] body options for binding the request body
 * @param validatorOptions [[class-validator]] validation options for the validation to be performed.
 */
export const Body = (type: Newable, bodyOptions?: BodyOptions, validatorOptions?: ValidatorOptions) => {
  return (target: Object, propertyKey: string, parameterIndex: number) => {
    UseBefore(validationMiddleware(type, 'body', validatorOptions))(target, propertyKey);
    BodyRoutingControllers({ type, validate: false, ...bodyOptions })(target, propertyKey, parameterIndex);
  };
};
