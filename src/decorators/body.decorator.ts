/**
 * @module decorators
 * @group decorators
 */
import { ValidatorOptions } from 'class-validator';
import { Body as BodyRoutingControllers, BodyOptions, UseBefore } from 'routing-controllers';
import { Newable, validationMiddleware } from 'utils';

/**
 *
 * Allows to inject and validate a request body value to the controller action parameter.
 *
 * Must be applied on a controller action parameter.
 * @param type Override inferred type, set the expected type of the body
 * @param bodyOptions [[routing-controllers]] body options for binding the request body
 * @param validatorOptions [[class-validator]] validation options for the validation to be performed.
 *
 * @category Decorator
 */
export const Body = (bodyOptions?: BodyOptions, validatorOptions?: ValidatorOptions, type?: Newable) => {
  return (target: Object, propertyKey: string, parameterIndex: number) => {
    const mdType = type ?? Reflect.getMetadata('design:paramtypes', target, propertyKey)?.[parameterIndex];
    UseBefore(validationMiddleware(mdType, 'body', validatorOptions))(target, propertyKey);
    BodyRoutingControllers({ type: mdType, validate: false, ...bodyOptions })(target, propertyKey, parameterIndex);
  };
};
