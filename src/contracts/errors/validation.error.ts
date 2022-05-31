import { BadRequest } from './badRequest.error';

/**
 * Http error with status code 400
 *
 * Returns a JSON error map of input validation errors
 *
 * @category Error
 */
export class ValidationError<T> extends BadRequest {
  public errors: { [K in keyof T]?: string | string[] | object };
  constructor(errors: { [K in keyof T]?: string | string[] | object }) {
    super('ValidationError', 'Error while validating body', { errors });
  }
}
