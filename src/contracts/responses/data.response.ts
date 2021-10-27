import { ErrorBase } from 'contracts/errors';

import { StatusCode } from './statusCode';
import { SuccessResponse } from './success.response';

export class DataResponse extends SuccessResponse {
  public static ok(payload?: object): DataResponse {
    return DataResponse.create(StatusCode.ok, payload);
  }

  public static created(payload?: object): DataResponse {
    return DataResponse.create(StatusCode.created, payload);
  }

  public static error(payload?: ErrorBase): DataResponse {
    return DataResponse.create(payload.code, payload);
  }

  public static create(status: StatusCode, payload?: object): DataResponse {
    return new DataResponse(status, payload);
  }
}
