import { BadRequest } from './badRequest.error';

export class ValidationError<T> extends BadRequest {
  public errors: { [K in keyof T]?: string | string[] | object };
  constructor(errors: { [K in keyof T]?: string | string[] | object }) {
    super('ValidationError', 'Error while validating body', { errors });
  }
}
