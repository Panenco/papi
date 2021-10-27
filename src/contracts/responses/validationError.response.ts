import { ValidationError } from 'contracts';

import { DataResponse } from './data.response';
import { StatusCode } from './statusCode';

export class ValidationErrorResponse extends DataResponse {
  public static badRequest(payload: ValidationError<any>): ValidationErrorResponse {
    return ValidationErrorResponse.create(StatusCode.badRequest, payload);
  }
}
